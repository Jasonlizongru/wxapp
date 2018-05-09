const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var rerr = {}

  var that = this
  //console.log(ctx.query)
  const {
    selected } = ctx.query


  rerr = await mysql("stuinfo").where({ classid: selected }).select()


  ctx.state.data = rerr
}