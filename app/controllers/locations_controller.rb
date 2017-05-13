class LocationsController < ApplicationController
	layout false
	
	def show
		brewery = Brewery.find_by_id(params[:id])
		@locations = brewery.locations.to_json
	end

end