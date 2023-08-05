from utils.db import db

# from models.venue import Venue


class Address(db.Model):
    __tablename__ = "address"
    id = db.Column(db.Integer, primary_key=True, unique=True)
    venue_id = db.Column(db.Integer, db.ForeignKey("venue.id"), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    street = db.Column(db.String(255), nullable=False)
    number = db.Column(db.Integer, nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    country = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(255), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "venue_id": self.venue_id,
            "city": self.city,
            "street": self.street,
            "number": self.number,
            "zip_code": self.zip_code,
            "country": self.country,
            "type": self.type,
        }
