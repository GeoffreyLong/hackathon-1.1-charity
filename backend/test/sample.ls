sample-user =
  display-name: 'Geoff Long'
  email: 'glong@carbonblack.com'
  sponsor: false
  causes:
    owned: []
    subscribed: []
  transactions: []

sample-transaction =
  amount: 5
  user: 1
  cause: 1
  payment-info: {}

sample-cause =
  display-name: "My Charity Goal"
  description: "A description of my awesome project!"
  owner: 1
  photos:
    display-photo: 'url'
    photos: ['url']
  campaigns: []
  feed:
    * create-time: 23857
      content: "This is an update!"
    ...

sample-campaign =
    display-name: 'My Campaign'
    description: 'The description to my campaign'
    cause: {}
    photos:
        display-photo: 'url'
        photos: ['url']
    goal:
        amount: 15
        pledged: 10
        deadline: 12313
        item: 'some cool toy'
        delivery-info:
            address: '1100 Winter Street'
    transactions: []
    
    
    
module.exports =
    campaign: sample-campaign
    cause: sample-cause
    transaction: sample-transaction
    user: sample-user