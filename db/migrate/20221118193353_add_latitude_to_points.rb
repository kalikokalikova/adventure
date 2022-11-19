class AddLatitudeToPoints < ActiveRecord::Migration[7.0]
  def change
    add_column :points, :latitude, :string
  end
end
