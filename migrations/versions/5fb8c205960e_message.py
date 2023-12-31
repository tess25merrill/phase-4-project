"""message

Revision ID: 5fb8c205960e
Revises: 
Create Date: 2023-09-29 03:13:44.662808

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5fb8c205960e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('legos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('piece_num', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('userlegos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('count', sa.Integer(), nullable=False),
    sa.Column('lego_piece_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['lego_piece_id'], ['legos.id'], name=op.f('fk_userlegos_lego_piece_id_legos')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_userlegos_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('userlegos')
    op.drop_table('users')
    op.drop_table('legos')
    # ### end Alembic commands ###
