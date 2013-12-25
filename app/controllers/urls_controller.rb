class UrlsController <ApplicationController
	#require 'open-uri'

	def shorten
		@url = Url.new
	end

	def create
		@url = Url.new(url_params)
		@url.generate_short_url
    @url.save
		render 'result'
	end

	def turn
		url = Url.find_by(shorten_url: params[:shorten_url])
		if url.original_url.include? "http"
		  redirect_to url.original_url
	  else
	    redirect_to "http://" + url.original_url
	  end
	end

private
  def url_params
    params.require(:url).permit(:original_url, :shorten_url)
	end
end
