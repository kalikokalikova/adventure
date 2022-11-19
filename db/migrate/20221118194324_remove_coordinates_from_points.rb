class RemoveCoordinatesFromPoints < ActiveRecord::Migration[7.0]
  def change
    remove_column :points, :coordinates, :string
  end
end
