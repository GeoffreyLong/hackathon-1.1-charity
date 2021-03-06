require! \assert
require! \mocha

require! '../controller'
require! '../seed'
require! './sample'

global.It = it
global.Spec = describe

user-id = 0
status-code = 0
test-user = {}
res-callbacks = 
    status: -> 
        status-code := it
        send: -> test-user := it
    send: -> test-user := it
next= ->

Spec \controller ->
    before: -> 
        mongoose.create-connection 'mongodb://localhost/valjean', (error) -> if error then logger.error error else logger.info 'Successfully connected to db!'
        seed.clear!
    before-each: ->
        test-user := {}
        status-code := 0
    Spec \user ->
        It 'should be able to create a user' ->
            controller.post-user {hostname: \mocha, params: sample.user}, res-callbacks, next
            user-id := test-user.id
            assert.equal status-code, 201
            assert.deep-equal test-user{display-name, email, sponsor}, sample.user{display-name, email, sponsor}

        It 'should be able to get it back' ->
            controller.get-user {hostname: \mocha, params: {id: user-id}} res-callbacks, next
            assert.equal status-code, 200
            assert.deep-equal test-user{display-name, email, sponsor}, sample.user{display-name, email, sponsor}
