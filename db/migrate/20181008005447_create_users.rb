class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.username, :text, null: false
      t.display_name, :text
      t.email, :text,  null: false
      t.bio, :text
      t.session_token, :text, null: false
      t.password_digest, :text, null: false
      
      t.timestamps
    end
  end
end
