# Valjean Backend
Welcome! This is some doc!
---
## Endpoints
- GET [/api/user/:id](/api/user/1)
- POST /api/user
- GET [/api/cause/:id](/api/cause/1)
- POST /api/cause
- GET [/api/campaigns/:id](/api/campaigns/1)
- POST /api/campaigns
- GET [/api/transaction/:id](/api/transaction/1)
- GET [/api/user/:id/transactions](/api/user/1/transactions)
- GET [/api/user/:id/campaigns](/api/user/1/campaigns)
---
### Models
#### Users
```
user = {
  id = 1,
  displayName: "Geoff Long",
  email: "glong@carbonblack.com",
  causes: {
    owned: [1],
    subscribed: [2]
  },
  transactions: [1, 2] #transactions-id
}
```
#### Causes
```
cause = {
  id: 1,
  displayName: "My Charity Goal",
  description: "A description of my awesome project!",
  owner: 1,  #user-id,
  photos: {
    displayPhoto: 'url',
    photos: ['url']
  },
  goal: {
    amount: 99.99,
    pledged: 50.00,
    deadline: 123456789,
    item: "https://amazon.link/gift",
    deliveryInfo: {
      address: "1100 Winter St, Waltham MA"
    }
  },
  transactions: [1, 2],
  feed: [{
    createTime: 23857,
    content: "This is an update!"
  }]
}
```
#### Transactions
```
transaction = {
  id: 1,
  amount: 10.00,
  user: 1,  #user-id
  cause: 1,  #cause-id
  paymentInformation: {
    info: TBD
  }
  # TODO creation time?
}
```

