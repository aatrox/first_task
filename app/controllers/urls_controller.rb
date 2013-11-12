class UrlsController <ApplicationController
	def shorten
		@url=Url.new
		# @url.generate_short_url
	end

	def create
		@url = Url.new(url_params)
		@url.generate_short_url

		render 'result'
	end

private
    def url_params
    	params.require(:url).permit(:original_url)
	end
end
