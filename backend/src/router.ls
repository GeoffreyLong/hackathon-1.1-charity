require! express

api-router = express.Router!
    ..get '/endpoint', (req, res, next) ->
        console.log "#{req.hostname} -> /api/endpoint"
        res.set-header 'Content-Type' 'application/json'
        res.status 200
            .send message: 'Hello there, I am the endpoint!'

module.exports = api-router
