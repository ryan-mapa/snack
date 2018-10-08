class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :display_name
      t.string :email,  null: false
      t.text :bio
      t.string :session_token, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
