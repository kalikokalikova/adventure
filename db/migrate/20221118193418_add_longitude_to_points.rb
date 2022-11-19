class AddLongitudeToPoints < ActiveRecord::Migration[7.0]
  def change
    add_column :points, :longitude, :string
  end
end
