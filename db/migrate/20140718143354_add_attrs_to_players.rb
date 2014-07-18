class AddAttrsToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :grepo_id, :integer
    add_index :players, :grepo_id
    add_column :players, :alliance_id, :integer
    add_index :players, :alliance_id
    add_column :players, :points, :integer
    add_index :players, :points
    add_column :players, :rank, :integer
    add_index :players, :rank
    add_column :players, :town_count, :integer
    add_index :players, :town_count
  end
end
