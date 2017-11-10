quiet = process.env.QUIET

module.exports =
  info: (s) -> console.log s unless quiet
  error: (s) -> console.error s
