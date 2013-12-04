class Contact < ActiveRecord::Base
	validates :name, length: {minimum: 2}
	validates :comment, length: {minimum: 5}
	validates :email, length: {minimum: 3}
	validates_format_of :email, :with => /[@]/, :on => :create
end