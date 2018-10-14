# == Schema Information
#
# Table name: channels
#
#  id          :bigint(8)        not null, primary key
#  name        :string
#  creator_id  :integer          not null
#  is_dm       :boolean          default(FALSE), not null
#  is_private  :boolean          default(FALSE), not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  belongs_to: creator,
    class_name: 'User'

  has_many :channel_users

end
