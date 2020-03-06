# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Workspace < ApplicationRecord
  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: 'User'

    has_many :workspace_users
    has_many :channels

    has_many :users,
      through: :workspace_users,
      source: :user

end
