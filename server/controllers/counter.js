const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var rerr = {}
 
  var that = this
  console.log(ctx.query)
  const {
    selected} = ctx.query


  rerr = await mysql("stuinfo").where({ stuid: selected}).select()

  // rerr = await mysql('stuinfo').innerJoin('nameinfo', 'stuinfo.stuid', 'nameinfo.stuid').where({ stuid: selected }).select()

  // rerr = mysql.select('*').from('stuinfo').rightJoin('nameinfo', 'stuinfo.stuid', 'nameinfo.stuid').where({ stuid: selected })


  ctx.state.data = rerr
}