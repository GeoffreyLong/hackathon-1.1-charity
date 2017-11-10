debug = process.env.DEBUG

module.exports =
  info: (s) -> console.log s unless not debug
  error: (s) -> console.error s unless not debug