class Addworkspaceidtochannel < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :workspace_id, :integer
  end
end
