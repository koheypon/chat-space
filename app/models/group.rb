class Group < ApplicationRecord

  has_many :group_user
  has_many :user, through: :group_user
  validates :name, presence: true, uniqueness: true
end
