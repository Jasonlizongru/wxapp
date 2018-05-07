//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');
var config = require('../../config');

Page({

  data: {
    //默认未获取地址
    hasLocation: true,
    setTimeout: true,
    hasTime: true,
    hasName: true,
    hasNotion: true,
    stuid: {},
    position: {},
    time: '',
    notion: '',
    status: 0,
    classid: ''
  },

  //--------------------------------------------------------//--------------------------------------------------------


  // notion: function(e){
  //   wx.reLaunch({
  //     url: '../note/note',
  //   })

  // },

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

    that.setData({
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
        that.setData({
          position: res
        })
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
    wx.getStorage({
      key: 'stuid',
      success: function (res) {
        // console.log(res)
        that.setData({
          stuid: res.data
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

  //------------------------------------------------

  noteInput: function (e) {
    console.log(e)
    this.setData({
      notion: e.detail.value
    })

  }, noteSubmit: function (e) {
    var that = this
    wx.setStorage({
      key: 'not',
      data: that.data.notion,
      success: function (res) {
        console.log(that.data.notion)
      },
    })
  },
  //----------------------------------------------
  classidInput: function (e) {
    //console.log(e)
    this.setData({
      classid: e.detail.value
    })
}, 
    classidSubmit: function (e) {
    var that = this
    wx.setStorage({
      key: 'classid',
      data: that.data.classid,
      success: function (res) {
        console.log(that.data.classid)
      },
    })
  },

  //--------------------------------------------

  submit_sign: function () {
    var that = this
    wx.request({
      url: config.service.teachersignUrl,
      data: {
        stuid: that.data.stuid.phone,
        latitude: that.data.position.latitude,
        longitude: that.data.position.longitude,
        time: that.data.time,
        notion: that.data.notion,
        //status: that.data.status,
        classid: that.data.classid
      }
    })
    wx.navigateTo({
      url: '../tablet/tablet',
    })
  }
})