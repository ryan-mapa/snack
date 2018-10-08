class CreateChannelUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_users do |t|
      t.integer :channel_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
