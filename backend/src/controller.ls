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
    response: {}
    status: 0
    if err
        status = 500
        response =
            error: err
        logger.error err
    else if Obj.empty value
        status = 404
        response =
            message: 'not found'
    else
        status = def-val
        response = value
    {status: status, response: response}

controller =
    get-campaign: (req, res) ->
        id = mongoose.Types.ObjectId req.params.campaignId
        logger.info "#{req.hostname} -> GET /api/campaign/#id"
        campaign.find-one _id: id
            .exec (err, c) ->
                {status, value} = prepare-response err, c
                res.status status
                    .send value
    
    post-campaign: (req, res) ->
        logger.info "#{req.hostname} -> POST /api/campaign"
        new-campaign = req.params{display-name, description, cause, photo, goals}
        campaign.create new-campaign, (err, c) ->
            {status, value} = prepare-response err, c, 201
            res.status status
                .send value
    
    get-cause: (req, res) ->
        id = mongoose.Types.ObjectId req.params.causeId
        logger.info "#{req.hostname} -> GET /api/cause/#id"
        cause.find-one _id: id
            .exec (err, c) ->
                {status, value} = prepare-response err, c
                res.status status
                    .send value

    post-cause: (req, res) ->
        logger.info "#{req.hostname} -> POST /api/cause"
        new-cause = req.params{display-name, description, owner, photos, campaigns}
        cause.create new-cause, (err, c) ->
            {status, value} = prepare-response err, c, 201
            res.status status
                .send value
            

    get-transaction: (req, res) ->
        id = mongoose.Types.ObjectId req.params.transactionId
        logger.info "#{req.hostname} -> GET /api/transaction/#id"
        transaction.find-one _id: id
            .exec (err, t) ->
                {status, value} = prepare-response err, t
                res.status status
                    .send value

    post-transaction: (req, res) ->
        logger.info "#{req.hostname} -> POST /api/transaction"
        new-transaction = req.params{amount, user, cause, payment-info}
        transaction.create new-transaction, (err, t) ->
            {status, value} = prepare-response err, t, 201
            res.status status
                .send value

    get-user: (req, res) ->
        id = mongoose.Types.ObjectId req.params.userId
        logger.info "#{req.hostname} -> GET /api/user/#id"
        user.find-one _id: id
            .exec (err, u) ->
                {status, value} = prepare-response err, u
                res.status status
                    .send value

    get-user-causes: (req, res) ->
        id = mongoose.Types.ObjectId req.params.userId
        logger.info "#{req.hostname} -> GET /api/user/#id/causes"
        user.find user: id
            .exec (err, c) ->
                {status, value} = prepare-response err, c
                res.status status
                    .send value
         
    get-user-transactions: (req, res) ->
        id = mongoose.Types.ObjectId req.params.userId
        logger.info "#{req.hostname} -> GET /api/user/#id/transactions"
        transaction.find user: id
            .exec (err, t) -> 
                {status, value} = prepare-response err, t
                res.status status
                    .send value

    post-user: (req, res) ->
        logger.info "#{req.hostname} -> POST /api/user"
        new-user = req.params{display-name, email, causes, transactions}
        user.create new-user, (err, u) ->
            {status, value} = prepare-response err, u, 201
            res.status status
                .send value

module.exports = controller
