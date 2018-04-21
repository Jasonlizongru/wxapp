//查找
const { mysql } = require('../qcloud')

var that = this
console.log(ctx.query)

module.exports = async ctx => {


  var res = await mysql("Book").where({ id }).first()


  ctx.state.data = "OK"
}