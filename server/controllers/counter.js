const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var rerr = {}
 
  var that = this
  console.log(ctx.query)
  const {
    selected} = ctx.query


  rerr = await mysql("stuinfo").where({ stuid: selected}).select()

  
  // rerr = await mysql.table('stuinfo').innerJoin('nameinfo', 'stuinfo.stuid', '=', 'nameinfo.stuid').select()
//连接操作，连接nameinfo和stuinfo

  ctx.state.data = rerr
}