require! {
  express
  './logger'
}

bogus-user =
  id: 1
  display-name: 'Geoff Long'
  email: 'glong@carbonblack.com'
  causes:
    owned: [1]
    subscribed: [2]
  transactions: [1 2]

bogus-transaction =
  id: 1
  amount: 5
  user-id: 1
  cause: 1

bogus-cause =
  id: 1
  displayName: "My Charity Goal"
  photos:
    displayPhoto: 'url'
    photos: ['url']
  goal:
    amount: 99.99
    pledged: 50.00
    deadline: 123456789
    item: "https://amazon.link/gift"
    deliveryInfo:
      address: "1100 Winter St, Waltham MA"
  transactions: [1, 2]
  owner: 1
  description: "A description of my awesome project!"
  feed:
    * createTime: 23857
      content: "This is an update!"
    ...

api-router = express.Router!
  ..post '/user' (req, res, next) ->
    logger.info "#{req.hostname} -> POST /api/user"
  ..get '/user/:userId' (req, res, next) ->
    id = req.params.userId
    logger.info "#{req.hostname} -> GET /api/user/#id"
    res.status 200
      .send bogus-user
  ..get '/user/:userId/transactions' (req, res, next) ->
    id = req.params.userId
    logger.info "#{req.hostname} -> GET /api/user/#id/transactions"
    res.status 200
      .send [bogus-transaction]
  ..post '/transaction' (req, res, next) ->
    logger.info "#{req.hostname} -> POST /api/transaction"
  ..get '/transaction/:transactionId' (req, res, next) ->
    id = req.params.transactionId
    logger.info "#{req.hostname} -> GET /api/transaction/#id"
    res.status 200
      .send bogus-transaction
  ..post '/cause' (req, res, next) ->
    logger.info "#{req.hostname} -> POST /api/cause"
  ..get '/cause/:causeId' (req, res, next) ->
    id = req.params.causeId
    logger.info "#{req.hostname} -> GET /api/cause/#id"
    res.status 200
      .send bogus-cause
  

module.exports = api-router


