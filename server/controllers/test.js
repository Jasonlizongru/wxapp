const { mysql } = require('../qcloud')

module.exports = async ctx => {

  // 增
  var stuinfo = {
    stuid: 100,
    latitude: 100,
    longitude: 100,
    time: "2000/01/10 10:00:00",
    notion:"测试",
    status: 5
  }
  await mysql("stuinfo").insert(stuinfo)
  // await mysql("stuinfo").update({ locone: 66}).where({ stuid=20140005 })

  //var res = await mysql("stuinfo").where({stuid=20140003}).first()
  
  //console.log(res)

   //await mysql("stuinfo").where({stuid : 20140005}).update({locone:'66'})

 


  ctx.state.data = "OK"
}