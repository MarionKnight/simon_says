get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  if request.xhr?
    cell= rand(0..8)
    color= "#" + "%06x" % (rand * 0xffffff)
    cell_info = {cell: cell, color: color}
    content_type :JSON
    cell_info.to_json
  else
    redirect '/'
  end

end