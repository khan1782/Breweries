class EventsController < ApplicationController
	layout false
	def show
		brewery = Brewery.find_by_id(params[:id])
		@events = brewery.events.to_json
	end
end
