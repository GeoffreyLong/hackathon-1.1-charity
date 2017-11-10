require! {
    express 
    mongodb: mongo
    './router': api-router
} 

host = process.env.HOSTNAME || \localhost
port = parse-int process.env.PORT || 3000
backend-ui = '<html><head><title>Valjean Backend</title></head>
              <body>
              <h1>Valjean Backend</h1>
              <p>Welcome! This is some random placeholder!</p>
              <p><a href="/api/endpoint">/api/endpoint</a></p>
              </body>
              </html>'

db = new mongo.Db \valjean, new mongo.Server 'localhost', 27017

app = express!
    ..get '/' (req, res) -> res.send backend-ui
    ..use '/api' api-router
    ..get '*' (req, res) ->
        console.error "#{req.hostname} -> #{req.originalUrl}: 404 Not found"
        res.set-header 'Content-Type' 'application/json' 
        res.send error: 'Not found'
    ..listen 3000 ->
        console.log "Example app listening at http://#host:#port"

