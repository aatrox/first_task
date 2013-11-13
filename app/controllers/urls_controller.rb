class UrlsController <ApplicationController
	def shorten
		@url=Url.new
	end

	def create
		@url = Url.new(url_params)
		@url.generate_short_url
        @url.save
		render 'result'
	end

	def turn
		Url.find(param[:shorten_url])
		redirect_to original_url
	end

private
    def url_params
    	params.require(:url).permit(:original_url, :shorten_url)
	end
end
