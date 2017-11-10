require! {
    express 
    mongodb: mongo
} 

host = process.env.HOSTNAME || \localhost
port = parseInt process.env.PORT || 3000
backend-ui = '<html><head><title>Valjean Backend</title></head>
              <body>
              <h1>Valjean Backend</h1>
              <p>Welcome! This is some random placeholder!</p>
              <p><a href="/api/endpoint">/api/endpoint</a></p>
              </body>
              </html>'

db = new mongo.Db \valjean, new mongo.Server 'localhost', 27017

api-router = express.Router!
api-router.get '/endpoint', (req, res, next) ->
    console.log "#{req.hostname} -> /api/endpoint"
    res.send message: 'Hello there, I am the endpoint!'


app = express!
    ..get '/' (req, res) -> res.send backend-ui
    ..use '/api' api-router
    ..listen 3000 ->
        console.log "Example app listening at http://#host:#port"

