const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var rerr = {
    stuid: 100,
    latitude: 100,
    longitude: 100,
    time: "2000/01/10 10:00:00",
    notion: "测试",
    status: 5
  }
  rerr = await mysql("stuinfo").select()
  console.log(rerr)
  //var res = await mysql("classinformation").where({ stuid=2 })
  //console.log(res)
  // ctx.state.data = "OK"
  ctx.state.data =rerr
}