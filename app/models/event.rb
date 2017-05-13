class Event < ApplicationRecord
	belongs_to :location, foreign_key: "location_uuid", primary_key: "uuid"
end
