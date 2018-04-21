const { mysql } = require('../qcloud')

module.exports = async ctx => {
  console.log(ctx.query)
  const {
    stuid,
    latitude,
    longitude,
    time,
    notion,
    status } = ctx.query

  var stuinfo = {
    stuid: stuid,
    latitude: latitude,
    longitude: longitude,
    time: time,
    notion: notion,
    status: status
  }
  await mysql("stuinfo").insert(stuinfo)
  ctx.state.data = "OK"
}