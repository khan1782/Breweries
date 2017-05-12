class CreateBreweries < ActiveRecord::Migration[5.0]
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :twitter
      t.string :instagram
      t.string :website
      t.string :facebook
      t.string :photo
      t.string :uuid
      t.string :description

      t.timestamps
    end
  end
end