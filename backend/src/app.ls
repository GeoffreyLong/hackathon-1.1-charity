require! \express


app = express!

app.get '/api/endpoint' (req, res) ->
    res.send(message: 'Hey you hit an endpoint!' |> JSON.stringify)
    console.log "/api/endpoint hit from #{req.hostname}"

server = app.listen 3000 ->
  host = \localhost
  port = 3000
  console.log "Example app listening at http://#host:#port"