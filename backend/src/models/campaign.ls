require! mongoose

Campaign = mongoose.model 'Campaign' {
    displayName: String
    description: String
    cause: {
        type: mongoose.Schema.Types.ObjectId
        ref: 'Cause'
    }
    photos: {
        displayPhoto: String
        photos: [String]
    }
    goal: {
        amount: Number
        pledged: Number
        deadline: Date
        item: String
        deliveryInfo: {
            address: String
        }
    }
    transactions: [{
        type: mongoose.Schema.Types.ObjectId
        ref: 'Transaction'
    }]
}

module.exports = Campaign
