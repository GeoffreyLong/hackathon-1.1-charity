require! express

api-router = express.Router!
    ..get '/endpoint', (req, res, next) ->
        console.log "#{req.hostname} -> /api/endpoint"
        res.set-header 'Content-Type' 'application/json'
        res.send message: 'Hello there, I am the endpoint!', 200

module.exports = api-router
