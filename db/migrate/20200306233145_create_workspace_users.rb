class CreateWorkspaceUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :workspace_users do |t|
      t.integer :workspace_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
