require! {
    './logger'
    './models/cause': Cause
    './models/transaction': Transaction
    './models/user': User
    './models/campaign': Campaign
}

seeder =
    clear: ->
        logger.info 'Clearing DBs'
        Cause.remove {} (err) -> err && logger.error err
        User.remove {} (err) -> err && logger.error err
        Transaction.remove {} (err) -> err && logger.error err

        return null
    seed: ->
        User.create {
            displayName: 'Geoffrey Long'
            email: 'glong14@gmail.com',
            sponsor: true,
            causes: {
                owned: []
                subscribed: []
            }
            transactions: []
        }

        Cause.create {
            displayName: 'Noah Radding'
            description: 'Noah Radding loves leather and turtles'
            photos: {
                displayPhoto: 'http://www.maniacworld.com/i-like-turtles.jpg'
            }
            goal: {
                amount: 100.00
                pledged: 0
                deadline: 1510876800000
                item: 'https://www.amazon.com/Wyland-Original-Painting-Turtle-WO070509A/dp/B01LY9IOAC/ref=sr_1_1?ie=UTF8&qid=1510504565&sr=8-1&keywords=turtle'
                deliveryInfo: {
                    address: "Noah's House"
                }
            }
        }

        Campaign.create {
            displayName: 'Noah Radding likes turtles'
            description: 'Noah Radding needs help buying a pet turtle'
            photos: {
                displayPhoto: 'http://www.maniacworld.com/i-like-turtles.jpg'
            }
            goal: {
                amount: 100.00
                pledged: 0
                deadline: 1510876800000
                item: 'https://www.amazon.com/Wyland-Original-Painting-Turtle-WO070509A/dp/B01LY9IOAC/ref=sr_1_1?ie=UTF8&qid=1510504565&sr=8-1&keywords=turtle'
                deliveryInfo: {
                    address: "Noah's House"
                }
            }
        }

        return null


module.exports = seeder
