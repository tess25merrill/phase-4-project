from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__= 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    password = db.Column(db.String, nullable=False)

    userlegos = db.relationship('Userlego', cascade='all, delete', backref='user')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'password': self.name
        }

    validation_errors = []

    @classmethod
    def clear_validation_errors(cls):
        cls.validation_errors = []

    @validates('name')
    def validate_name(self, key, name):
        if type(name) is str and len(name) < 21:
            return name
        else:
            self.validation_errors.append('name must be a string 20 character or less.')

    @validates('password')
    def validate_password(self, key, password):
        if len(password) > 7:
            return password
        else:
            self.validation_errors.append('Password must be at least 8 characters.')

class Lego (db.Model, SerializerMixin): 
    __tablename__ = 'legos'

    id = db.Column(db.Integer, primary_key = True)
    piece_num = db.Column(db.Integer, nullable=False)
    count = db.Column(db.Integer, nullable = False)

#relationships

    userlegos = db.relationship('Userlego', cascade='all, delete', backref='legos')

#serialization
    def to_dict(self):
        return {
            'id': self.id,
            'piece_num': self.piece_num,
            'count': self.count
        }

#Validations
    validation_errors = []

    @classmethod
    def clear_validation_errors(cls):
        cls.validation_errors = []

    @validates('piece_num')
    def validate_user_name(self, key, piece_num):
        if type(piece_num) is int:
            return piece_num
        else:
            self.validation_errors.append('Piece Number must be an integer.')

class Userlego (db.Model, SerializerMixin):
    __tablename__ = 'userlegos'
    
    id = db.Column(db.Integer, primary_key = True)
    count = db.Column(db.Integer, nullable=False)

#relationships
    lego_id = db.Column(db.Integer, db.ForeignKey('legos.id'), nullable=False) 
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

#serialization
    def to_dict(self):
        return{
            'id': self.id,
            'count': self.count,
            'lego_id': self.lego_id,
            'user_id': self.user_id
        }

#Validations
    validation_errors = []

    @classmethod
    def clear_validation_errors(cls):
        cls.validation_errors = []

    @validates('count')
    def validate_user_name(self, key, count):
        if type(count) is int:
            return count
        else:
            self.validation_errors.append('Count must be an integer.')
            
            
            
            
            
