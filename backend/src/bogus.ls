bogus-user =
  id: 1
  display-name: 'Geoff Long'
  email: 'glong@carbonblack.com'
  causes:
    owned: [1]
    subscribed: [2]
  transactions: [1 2]

bogus-transaction =
  id: 1
  amount: 5
  user-id: 1
  cause: 1

bogus-cause =
  id: 1
  displayName: "My Charity Goal"
  photos:
    displayPhoto: 'url'
    photos: ['url']
  goal:
    amount: 99.99
    pledged: 50.00
    deadline: 123456789
    item: "https://amazon.link/gift"
    deliveryInfo:
      address: "1100 Winter St, Waltham MA"
  transactions: [1, 2]
  owner: 1
  description: "A description of my awesome project!"
  feed:
    * createTime: 23857
      content: "This is an update!"
    ...

module.exports =
  cause: bogus-cause
  transaction: bogus-transaction
  user: bogus-user