require! \assert
require! \mocha

require! '../controller'
require! '../models/user'
require! '../bogus'

global.It = it
global.Spec = describe

Spec \controller ->
    Spec \user ->
        It 'should be able to create a user' ->
            status-code = 0
            test-user = {}
            controller.post-user {hostname: \mocha, params: bogus.user} do
                status: -> 
                    status-code := it
                    send: -> test-user := it
            assert.equal status-code, 201
            assert.deep-equal test-user{display-name, email, causes, transactions}, bogus.user{display-name, email, causes, transactions}
