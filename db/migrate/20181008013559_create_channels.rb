class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name
      t.integer :creator_id, null: false
      t.boolean :is_dm, null: false, default: false
      t.boolean :is_private, null: false, default: false
      t.text :description

      t.timestamps
    end
  end
end
