require! {
    './bogus'
    './logger'
    './models/cause'
    './models/transaction'
    './models/user'
}

controller =
    get-cause: (req, res) ->
        id = req.params.causeId
        logger.info "#{req.hostname} -> GET /api/cause/#id"
        res.status 200
            .send cause.find-one {_id: id}

    post-cause: (req, res) ->
        logger.info "#{req.hostname} -> POST /api/cause"

    get-transaction: (req, res) ->
        id = req.params.transactionId
        logger.info "#{req.hostname} -> GET /api/transaction/#id"
        res.status 200
            .send transaction.find-one {_id: id}

    post-transaction: (req, res) ->
        logger.info "#{req.hostname} -> POST /api/transaction"

    get-user: (req, res) ->
        id = req.params.userId
        logger.info "#{req.hostname} -> GET /api/user/#id"
        res.status 200
            .send user.find-one {_id: id}

    get-user-transactions: (req, res) ->
        id = req.params.userId
        logger.info "#{req.hostname} -> GET /api/user/#id/transactions"
        res.status 200
          .send transaction.find {user: id}

    post-user: (req, res) ->
        logger.info "#{req.hostname} -> POST /api/user"


module.exports = controller
