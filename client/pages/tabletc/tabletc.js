//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');
var config = require('../../config');


Page({
  data: {
    //selected字段，保存输入的学生学号
    selected: {},
    name: {},
    sex: {},

    stuid: {},
    position: {},
    time: '',
    notion: '',
    status: 0,
    classid: '',
    objectArray: []
  },
  selectstu: function (e) {
    this.setData({
      selected: e.detail.value
    })
    wx.setStorage({
      key: 'selectted',
      data: e.detail.value,
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
        classid: that.data.classid,
        selected: that.data.selected,
        name: that.data.name,
        sex: that.data.sex

      },
      success: function (res) {
        console.log(res)

        that.setData({
          objectArray: res.data.data
        })

      }
    })

  },
})