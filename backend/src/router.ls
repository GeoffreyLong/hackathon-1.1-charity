require! {
    './controller'
    express
}

api-router = express.Router!
    ..post '/user' controller.post-user
    ..get '/user/:userId' controller.get-user
    ..get '/user/:userId/causes' controller.get-user-causes
    ..get '/user/:userId/transactions' controller.get-user-transactions
    ..post '/transaction' controller.post-transaction
    ..get '/transaction/:transactionId' controller.get-transaction
    ..post '/campaign' controller.post-campaign
    ..get '/campaign/:campaignId' controller.get-campaign
    ..post '/cause' controller.post-cause
    ..get '/cause/:causeId' controller.get-cause
  

module.exports = api-router

