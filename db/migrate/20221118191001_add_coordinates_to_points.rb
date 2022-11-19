class AddCoordinatesToPoints < ActiveRecord::Migration[7.0]
  def change
    add_column :points, :coordinates, :string
  end
end
