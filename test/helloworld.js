const HelloWorld = artifacts.require('./HelloWorld.sol')
contract('HelloWorld', function () {
  let helloworld

  beforeEach('setup contract for each test', async function () {
      helloworld = await HelloWorld.new()
  })

  it('can say hello world', async function () {
      assert.equal(await helloworld.sayHello.call(), 'Hello World!')
  })
})
