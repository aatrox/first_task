FirstTask::Application.routes.draw do
 root to: "urls#shorten"
 resources :urls
 match '/:shorten_url', to: 'urls#turn', via: 'get'
end
