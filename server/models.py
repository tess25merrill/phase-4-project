from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db


from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates import association_proxy
from sqlalchemy_serializer import SerializerMix
from sqlalchemy.ext.associationproxin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__= 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String)
    password = db.Column(db.String)

#Relationship

    userlegopieces = db.relationship('UserLegoPieces', cascade='all, delete', backref='user')

#Validation
    validation_errors = []

    @classmethod
    def clear_validation_errors(cls):
        cls.validation_errors = []

    @validates('user_name')
    def validate_user_name(self, key, user_name):
        if type(user_name) is str and len(user_name) < 21:
            return user_name
        else:
            self.validation_errors.append('Username must be a string 20 character or less.')

    @validates('password')
    def validate_password(self, key, password):
        if len(password) > 7:
            return password
        else:
            self.validation_errors.append('Password must be at least 8 characters.')

class LegoPieces(db.Model, SerializerMixin): 
    __tablename__ = 'lego_pieces'

    id = db.Column(db.Integer, primary_key = True)
    piece_num = db.Column(db.Integer)

#relationships

    userlegopieces = db.relationship('UserLegoPieces', cascade='all, delete', backref='legopieces')

#serialization
    serialize_rules = ("-userlegopieces.lego_pieces")

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

class UserLegoPieces(db.Model, SerializerMixin):
    __tablename__ = 'user_lego_pieces'
    
    id = db.Column(db.Integer, primary_key = True)
    count = db.Column(db.Integer, nullable=False)

#relationships
    lego_piece_id = db.Column(db.Integer, db.ForeignKey('legopieces.id'), nullable=False) 
    user_id = db.Column(db.Integer, db.ForeginKey('users.id'), nullable=False)

#serialization
    serialize_rules = ("-legopieces.userlegopieces", "-user.userlegopieces")
 
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
            
            
            
            
            
