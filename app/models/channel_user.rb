# == Schema Information
#
# Table name: channel_users
#
#  id         :bigint(8)        not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelUser < ApplicationRecord
  belongs_to :user
  belongs_to :channel



end
