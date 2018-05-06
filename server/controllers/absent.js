const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var rerr = {}


  rerr = await mysql("stuinfo").where({ status: 1 }).select()
  ctx.state.data = rerr
}