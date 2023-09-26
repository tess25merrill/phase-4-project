from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db


from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validatesy import association_proxy
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



class LegoPieces(db.Model, SerializerMixin): 
    __tablename__ = 'lego_pieces'

    id = db.Column(db.Integer, primary_key = True)
    xxxxx = db.Column(db.Integer)
    xxxxx = db.Column(db.Integer)
    

#relationships

userlegopieces = db.relationship('UserLegoPieces', cascade='all, delete', backref='legopieces')

#serialization
serialize_rules = ("-userlegopieces.lego_pieces")


class UserLegoPieces(db.Model, SerializerMixin):
    __tablename__ = 'user_lego_pieces'
    
    id = db.Column(db.Integer, primary_key = True)
    count = db.Column(db.Integer, nullable=False)

#relationships
    lego_piece_id = db.Column('LegoPieces', backref = 'userlegopieces')
    user_id = db.Column()

#serialization
    serialize_rules = ("-lego_pieces.userlegopieces", "-user.userlegopieces")
 


