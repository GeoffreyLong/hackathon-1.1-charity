require! mongoose

Cause = mongoose.model 'Cause' {
    displayName: String
    description: String
    owner: {
        type: mongoose.Schema.Types.ObjectId
        ref: 'User'
    }
    photos: {
        displayPhoto: String
        photos: [String]
    }
    campaigns: [{
       type: mongoose.Schema.Types.ObjectId
       ref: 'Campaign'
    }]
    feed: [{
        createTime: Date,
        content: String
    }]
}

module.exports = Cause
