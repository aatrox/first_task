class Url < ActiveRecord::Base
validates :original_url, presence: true

 def Url.new_url_token
    SecureRandom.urlsafe_base64
 end

 def generate_short_url
 	self.original_url = Url.new_url_token
 end

end
