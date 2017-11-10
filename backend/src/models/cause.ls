require! {
    mongoose
}

Cause = mongoose.model 'Cause' {
    displayName: String
    description: String
    owner: {
        type: mongoose.Schema.Types.ObjectId
        ref: 'Transaction'
    }
    photos: {
        displayPhoto: String
        photos: [String]
    }
    goal: {
        amount: Number
        pledged: Number
        deadline: Number
        item: String
        deliveryInfo: {
            address: String
        }
    }
    transactions: [{
        type: mongoose.Schema.Types.ObjectId
        ref: 'Transaction'
    }]
    feed: [{
        createTime: Number,
        content: String
    }]
}

modules.exports = Cause
