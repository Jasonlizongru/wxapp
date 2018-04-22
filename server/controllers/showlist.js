const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var that = this
  console.log(ctx.query)
  const {
    stuid,
    latitude,
    longitude,
    time,
    notion,
    status,
    classid } = ctx.query

  const stuinfo = {
    stuid: stuid,
    latitude: latitude,
    longitude: longitude,
    time: time,
    notion: notion,
    status: status,
    classid: classid
  }
  // await mysql("stuinfo").insert(stuinfo)

  mysql('stuinfo').count('stuid as hasUser').where({ stuid })
    .then((res) => {
      // 如果存在用户则更新
      if (res[0].hasUser) {
        console.log("update")
        return mysql('stuinfo').update(stuinfo).where({ stuid })
      } else {
        console.log("insert")
        return mysql('stuinfo').insert(stuinfo)
      }
    })
    .catch(e => { })


  ctx.state.data = "OK"
}