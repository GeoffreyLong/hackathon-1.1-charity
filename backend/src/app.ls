require! {
    express 
    mongoose
    './logger'
    './router': api-router
}

host = process.env.HOSTNAME || \localhost
port = parse-int process.env.PORT || 3000

mongoose.connect 'mongodb://localhost/valjean' (error) -> if error then logger.error error else logger.info 'Successfully connected to db!'

app = express!
    ..get '/' (req, res) -> res.send-file "api-doc.html" root: "#{__dirname}/res/"
    ..use (req, res, next) ->
        res.set-header 'Content-Type' 'application/json'
        next()
    ..use '/api' api-router
    ..get '*' (req, res) ->
        logger.error "#{req.hostname} -> #{req.originalUrl}: 404 Not found"
        res.set-header 'Content-Type' 'application/json'
        res.send error: 'Not found'
    ..listen 3000 ->
        logger.info "Backend listening at http://#host:#port"
