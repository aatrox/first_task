class Url < ActiveRecord::Base
validates :original_url, presence: true
validates :shorten_url, presence: true

 def Url.new_url_token
    SecureRandom.urlsafe_base64(n=5)
 end

 def generate_short_url
 	self.shorten_url = Url.new_url_token
 end



end
