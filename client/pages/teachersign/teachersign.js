//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');
Page({

  data: {
    //默认未获取地址
    hasLocation: true,
    setTimeout: true,
    hasTime: true,
    hasName:true,
    hasNotion:true,
  },
  

notion: function(e){
  wx.reLaunch({
    url: '../tablet/tablet',
  })

},
// getName:function(e){
//   console.log(e)
//   var that = this
//   wx.getUserInfo({
//     success:function(res){
//       console.log(res)
//       wx.setStorage({
//         key: 'stuId',
//         data: res,
//       })
//       wx.getStorage({
//         key: 'stuId',
//         success: function(res) {
//           console.log(res)
//           console.log(res.unionid)
//         },
//       })
//     }
//   })
// },
  


  //获取经纬度
  getLocation: function (e) {
    console.log(e)
    var that = this

    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time
    });
    wx.setStorage({
      key: 'time',
      data: time,
    })

    // wx.getUserInfo({
    //   success:function(res){
    //     wx.setStorage({
    //       key:'position',
    //       data:res,
    //     })
    //     wx.getStorage({
    //       key: 'position',
    //       success: function(res) {
    //         console.log(res.data.rawData)
    //       },
          
    //     })
    //     that.setData({
    //       hasName: true,
    //       hasTime: false,
    //       Name: {
    //         student:res.data,
    //       }
    //     })
    //   }
    // })

    wx.getLocation({
      success: function (res) {
        wx.setStorage({
          key: 'position',
          data: res,
        })
        wx.getStorage({
          key: 'position',
          success: function (res) {
            console.log(res.data.longitude)
            console.log(res.data.latitude)
           
          }
        })
        wx.getStorage({
          key: 'time',
          success: function (res) {
            console.log(res.data)

          }
        })
        that.setData({
          hasLocation: true,
          hasTime: false,
          location: {
            longitude: res.longitude,
            latitude: res.latitude,

          }
        })
      }
    })
    
  },
  //根据经纬度在地图上显示
  openLocation: function (e) {
    var value = e.detail.value
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)

    })
  },
  // getInfo:function(){
  // wx.getUserInfo({
  //   withCredentials: true,
  //   lang: '',
  //   success: function(res) {
  //     var userInfo = res.userInfo
  //     var nickName = userInfo.nickName
  //     var avatarUrl = userInfo.avatarUrl
  //   },
  // })
  // wx.setStorage({
  //   key: 'stucode',
  //   data: res,
  // })
  // wx.getStorage({
  //   key: 'stucode',
  //   success: function(res) {
  //     console.log(stucode.userInfo)
  //   },
  // })

  // }

})