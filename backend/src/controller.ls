require! './bogus'
require! './logger'

controller =
  get-cause: (req, res) ->
    id = req.params.causeId
    logger.info "#{req.hostname} -> GET /api/cause/#id"
    res.status 200
      .send bogus.cause

  post-cause: (req, res) ->
    logger.info "#{req.hostname} -> POST /api/cause"

  get-transaction: (req, res) ->
    id = req.params.transactionId
    logger.info "#{req.hostname} -> GET /api/transaction/#id"
    res.status 200
      .send bogus.transaction

  post-transaction: (req, res) ->
    logger.info "#{req.hostname} -> POST /api/transaction"

  get-user: (req, res) ->
    id = req.params.userId
    logger.info "#{req.hostname} -> GET /api/user/#id"
    res.status 200
      .send bogus.user

  get-user-transactions: (req, res) ->
    id = req.params.userId
    logger.info "#{req.hostname} -> GET /api/user/#id/transactions"
    res.status 200
      .send [bogus.transaction]

  post-user: (req, res) ->
    logger.info "#{req.hostname} -> POST /api/user"



module.exports = controller