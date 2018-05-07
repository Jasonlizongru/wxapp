const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var rerr = {}


  rerr = await mysql("stuinfo").where({  }).select()
  ctx.state.data = rerr
}