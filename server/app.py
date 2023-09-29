from flask import Flask, request, make_response, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Session
from models import db, User, Lego, Userlego 
import os
from flask_cors import cross_origin

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False


migrate = Migrate(app, db)
api = Api(app)
db.init_app(app)

@app.route('/')
def home():
    return 'Welcome to LegoInventory Server!'

@app.route('/login', methods=['POST'])
def login():
    """
    Sign in a user.
    """
    data = request.get_json()

    try:
        user = User.query.filter_by(name=data['name']).first()
        if user and user.check_password(data['password']):
    
            session['user_id'] = user.id

            response = {
                'id': user.id,  
                'username': user.name,
            }
            return make_response(response, 200)
    except KeyError:
        response = {'error': 'Invalid email or password.'}
        return make_response(response, 401)

    
class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)
    
    def post(self):
        new_user = User()
        data = request.get_json()
    
        try:
            for key in data:
                setattr(new_user, key, data[key])
            db.session.add(new_user)
            db.session.commit()
            return make_response(new_user.to_dict(rules=('-legos', '-userlegos',)), 201) 
        
        except ValueError as error:
            new_error = {"validation errors": str(error)}
            return make_response(new_error, 400)

    
class UserById(Resource):
    def get(self, id):
        user = UserById.query.filter(Users.id ==id).first()
        
        if not user:
            
            return make_response({"error": "User not found"}, 404)
        
        return make_response(user.to_dict(), 200)


class Legos(Resource):
    def get(self):
        legos = [lego.to_dict() for lego in Lego.query.all()]
        return make_response(legos, 200)
    

class LegoById(Resource):
    def get(self, id):
        lego = LegoById.query.filter(Lego.id ==id).first()
        
        if not lego:
            
            return make_response({"error": "Lego not found"}, 404)
        
        return make_response(lego.to_dict(), 200)

class Userlegos(Resource):
    def get(self):
        userlegos = Userlego.query.all()
        userlego_list = [userlego.to_dict() for userlego in userlegos]
        return make_response(userlego_list, 200)

class UserlegoById(Resource):
    def get(self, id):
        userlego = UserlegoById.query.filter(Legos.id == id).first()
        if not userlego:
            return make_response({"error": "Lego  not found"}, 404)
        return make_response(userlego.to_dict(), 200)
    
    def post(self):
        new_lego = Lego
        data = request.get_json()

        try:
            for key in data:
                setattr(new_lego, key, data[key])
            db.session.add(new_lego)
            db.session.commit()
            return make_response(new_lego.to_dict(), 201) 
        
        except ValueError as error:
            new_error = {"validation errors": str(error)}
            return make_response(new_error, 400)



api.add_resource(Users, '/users',)
api.add_resource(UserById, '/users/<int:id>',)
api.add_resource(Legos, '/legos',)
api.add_resource(LegoById, '/legos/<int:id>',)
api.add_resource(Userlegos, '/userlegos',)
api.add_resource(UserlegoById, '/userlegos/<int:id>',)

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

