require! express

api-router = express.Router!
    ..get '/endpoint', (req, res, next) ->
        console.log "#{req.hostname} -> /api/endpoint"
        res.send message: 'Hello there, I am the endpoint!'

module.exports = api-router
