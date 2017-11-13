require! mongoose
{Obj} = require 'prelude-ls'
require! {
    './logger'
    './models/campaign'
    './models/cause'
    './models/transaction'
    './models/user'
}

prepare-response = (err, value, def-val = 200) ->
    response = {}
    status = 0
    logger.error "Wonders! Error -> #err, Value -> #{JSON.stringify(value)}, def-val -> #def-val"
    if err
        status := 500
        response := error: err
        logger.error err
    else if Obj.empty value
        status := 404
        response := message: 'not found'
    else
        status := def-val
        response := value
    {status, response}

controller =
    get-campaign: (req, res, next) !->
        id = mongoose.Types.ObjectId req.params.campaignId
        logger.info "#{req.hostname} -> GET /api/campaign/#id"
        campaign.find-one _id: id
            .exec (err, c) ->
                {status, value} = prepare-response err, c
                res.status status
                    .send value
        next!
    
    post-campaign: (req, res, next) !->
        logger.info "#{req.hostname} -> POST /api/campaign"
        new-campaign = req.body{display-name, description, cause, photo, goals}
        campaign.create new-campaign, (err, c) ->
            {status, value} = prepare-response err, c, 201
            res.status status
                .send value
        next!
    
    get-cause: (req, res, next) !->
        id = mongoose.Types.ObjectId req.params.causeId
        logger.info "#{req.hostname} -> GET /api/cause/#id"
        cause.find-one _id: id
            .exec (err, c) ->
                {status, value} = prepare-response err, c
                res.status status
                    .send value
        next!

    post-cause: (req, res, next) !->
        logger.info "#{req.hostname} -> POST /api/cause"
        new-cause = req.body{display-name, description, owner, photos, campaigns}
        cause.create new-cause, (err, c) ->
            {status, value} = prepare-response err, c, 201
            res.status status
                .send value
        next!

    get-transaction: (req, res, next) !->
        id = mongoose.Types.ObjectId req.params.transactionId
        logger.info "#{req.hostname} -> GET /api/transaction/#id"
        transaction.find-one _id: id
            .exec (err, t) ->
                {status, value} = prepare-response err, t
                res.status status
                    .send value
        next!

    post-transaction: (req, res, next) !->
        logger.info "#{req.hostname} -> POST /api/transaction"
        new-transaction = req.body{amount, user, cause, payment-info}
        transaction.create new-transaction, (err, t) ->
            {status, value} = prepare-response err, t, 201
            res.status status
                .send value
        next!

    get-user: (req, res, next) !->
        id = mongoose.Types.ObjectId req.params.userId
        logger.info "#{req.hostname} -> GET /api/user/#id"
        user.find-one _id: id
            .then -> res.send it
            .catch -> res.status(400).send it
        next!

    get-user-causes: (req, res, next) !->
        id = mongoose.Types.ObjectId req.params.userId
        logger.info "#{req.hostname} -> GET /api/user/#id/causes"
        user.find user: id
            .exec (err, c) ->
                {status, value} = prepare-response err, c
                res.status status
                    .send value
        next!
         
    get-user-transactions: (req, res, next) !->
        id = mongoose.Types.ObjectId req.params.userId
        logger.info "#{req.hostname} -> GET /api/user/#id/transactions"
        transaction.find user: id
            .exec (err, t) -> 
                {status, value} = prepare-response err, t
                res.status status
                    .send value
        next!

    post-user: (req, res, next) !->
        logger.info "#{req.hostname} -> POST /api/user"        
        new-user = req.body{display-name, email}
        new-user.sponsor = false
        user.create new-user, (err, u) ->
            {status, value} = prepare-response err, u, 201
            res.status status
                .send value
        new-user |> JSON.stringify |> logger.info 
        next!

module.exports = controller
