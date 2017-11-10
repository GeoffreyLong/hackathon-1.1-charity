require! {
    mongoose
}

User = mongoose.model 'User' {
    displayName: String
    email: String
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

modules.export = User
