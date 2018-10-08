class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.string :author_id, null: false
      t.string :channel_id, null: false

      t.timestamps
    end
  end
end
