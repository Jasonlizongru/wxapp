const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var rerr = {}


  rerr = await mysql("stuinfo").where({ classid: '编译原理' }).select()
  console.log(rerr)
  //var res = await mysql("classinformation").where({ stuid=2 })
  //console.log(res)

  // ctx.state.data = "OK"
  ctx.state.data = rerr
}