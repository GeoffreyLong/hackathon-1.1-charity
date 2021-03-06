require! mongoose

User = mongoose.model 'User' {
    displayName: String
    email: String
    sponsor: Boolean
    causes: {
        owned: [{
            type: mongoose.Schema.Types.ObjectId
            ref: 'Cause'
        }]
        subscribed: [{
            type: mongoose.Schema.Types.ObjectId
            ref: 'Cause'
        }]
    }
    transactions: [{
        type: mongoose.Schema.Types.ObjectId
        ref: 'Transaction'
    }]
}

module.exports = User
