require! express
app = express!
app.get '/' (req, res) -> res.send 'Hello World!'

server = app.listen 3000 ->
  host = \localhost
  port = 3000
  console.log "Example app listening at http://#host:#port"