from utils.db import db
from models.band_members import Band_Members
from models.musician import Musician


class Band(db.Model):
    __tablename__ = "bands"
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(255))
    members = db.relationship("Musician", backref="bands", lazy=True, secondary="band_members")
    gigs = db.relationship("Gig", backref="bands", lazy=True, secondary="band_gigs")
    technicians = db.relationship("Technician", backref="bands", lazy=True, secondary="band_technicians")
    riders = db.relationship("Rider", backref="bands", lazy=True, secondary="band_riders")
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "members": [member.serialize() for member in self.members],
            "gigs": [gig.serialize() for gig in self.gigs],
            "technicians": [technician.serialize() for technician in self.technicians],
            "riders": [rider.serialize() for rider in self.riders]
        }