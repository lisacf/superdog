class Contact < ActiveRecord::Base
	validates :name, length: {minimum: 2}
	validates :comment, length: {minimum: 5}
	validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
end
