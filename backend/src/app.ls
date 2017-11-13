require! {
    'body-parser'
    express 
    mongoose
    './logger'
    './router': api-router
    './seed': seeder
}

host = process.env.HOSTNAME || \localhost
port = parse-int process.env.PORT || 3001

mongoose.create-connection 'mongodb://localhost/valjean', (error) -> if error then logger.error error else logger.info 'Successfully connected to db!'

if (process.env.SEED)
    seeder.clear()
    seeder.seed()

app = express!
    ..get '/api-doc' (req, res) -> res.send-file "api-doc.html" root: "#{__dirname}/res/"
    ..use body-parser.json!
    ..use (req, res, next) ->
        res.set-header 'Content-Type' 'application/json'
        next()
    ..use '/api' api-router
    ..get '*' (req, res) ->
        logger.error "#{req.hostname} -> #{req.originalUrl}: 404 Not found"
        res.set-header 'Content-Type', 'application/json'
        res.send error: 'Not found'
    ..listen 3001 ->
        console.log "Backend listening at http://#host:#port"
