const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var that = this
  console.log(ctx.query)
  const {
    stuid,
    latitude,
    longitude,
    time,
    //notion,
    //status,
    classid } = ctx.query

  const classinformation = {
    stuid: stuid,
    latitude: latitude,
    longitude: longitude,
    time: time,
    //notion: notion,
    //status: status,
    classid: classid
  }
  // await mysql("classinformation").insert(classinformation)

  mysql('classinformation').count('stuid as hasUser').where({ stuid })
    .then((res) => {
      // 如果存在用户则更新
      if (res[0].hasUser) {
        console.log("update")
        return mysql('classinformation').update(classinformation).where({ stuid })
      } else {
        console.log("insert")
        return mysql('classinformation').insert(classinformation)
      }
    })
    .catch(e => { })


  ctx.state.data = "OK"
}