const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var id = 11
  // 增
  var book = {
    id: id,
    name: "nimabi",
    price: 0101
  }
  await mysql("Book").insert(book)

  ctx.state.data = "OK"
}