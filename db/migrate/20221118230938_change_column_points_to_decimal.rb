class ChangeColumnPointsToDecimal < ActiveRecord::Migration[7.0]
  def change
    change_column :points, :latitude, :decimal
    change_column :points, :longitude, :decimal
  end
end
