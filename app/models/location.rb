class Location < ApplicationRecord
	belongs_to :brewery
	has_many :events, foreign_key: "location_uuid", primary_key: "uuid"
end
