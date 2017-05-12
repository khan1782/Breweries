class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
    	t.string :name
      t.string :uuid
      t.string :street
      t.string :city
      t.string :state
      t.integer :brewery_id

      t.timestamps
    end
  end
end
