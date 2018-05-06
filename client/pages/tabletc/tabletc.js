//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');
var config = require('../../config');


Page({
  data: {
    stuid: {},
    position: {},
    time: '',
    notion: '',
    status: 0,
    classid: '',
    objectArray: []
  },
  toa: function () {
    wx.reLaunch({
      url: '../tableta/tableta',
    })
  },
  tob: function () {
    wx.reLaunch({
      url: '../tabletb/tabletb',
    })
  },
  toc: function () {
    wx.reLaunch({
      url: '../tabletc/tabletc',
    })
  },
  tod: function () {
    wx.reLaunch({
      url: '../tabletd/tabletd',
    })
  },
  showit: function (e) {
    //console.log(e)
    var that = this
    var time = util.formatTime(new Date());
    wx.request({
      url: config.service.showcUrl,
      data: {
        stuid: that.data.stuid.phone,
        latitude: that.data.position.latitude,
        longitude: that.data.position.longitude,
        time: that.data.time,
        notion: that.data.notion,
        status: that.data.status,
        classid: that.data.classid
      },
      success: function (res) {
        //console.log(res)

        that.setData({
          objectArray: res.data.data
        })

      }
    })

  },
})