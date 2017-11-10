require! {
    mongoose
}

Transaction = mongoose.model 'Transaction' {
    amount: Number
    user: {
        type: mongoose.Schema.Types.ObjectId
        ref: 'User'
    }
    cause: {
        type: mongoose.Schema.Types.ObjectId
        ref: 'Cause'
    }
    paymentInfo: {
        tbd: String
    }
}

modules.export = Transaction
