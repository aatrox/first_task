FirstTask::Application.routes.draw do
 root to: "urls#shorten"
 resources :urls
end
