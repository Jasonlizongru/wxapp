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
    hasName:true,
    hasNotion:true,
    hasClassid: true,
    stuid:{},
    position:{},
    time:'',
    notion:'',
    status:0,
    classid:''
  },

  //--------------------------------------------------------//--------------------------------------------------------
  chooseclass:function(){
    var that = this
    wx.request({
      url: config.service.dosignUrl,
      data: {
        stuid: that.data.stuid.phone,
        latitude: that.data.position.latitude,
        longitude: that.data.position.longitude,
        time: that.data.time,
        notion: that.data.notion,
        status: that.data.status,
        classid: that.data.classid
      }
    }) 
    wx.navigateTo({
      url: '../tableta/tableta',
    }) 

  } ,
  quickcheck: function() {
    var that = this
    wx.request({
      url: config.service.dosignUrl,
      data: {
        stuid: that.data.stuid.phone,
        latitude: that.data.position.latitude,
        longitude: that.data.position.longitude,
        time: that.data.time,
        notion: that.data.notion,
        status: that.data.status,
        classid: that.data.classid
      }
    })
    wx.navigateTo({
      url: '../absent/absent',
    })

  },
  newsign:function(){
    wx.navigateTo({
      url: '../teachersign/teachersign',
    })

  },



  tocounter: function () {
    var that = this
    wx.request({
      url: config.service.dosignUrl,
      data: {
        stuid: that.data.stuid.phone,
        latitude: that.data.position.latitude,
        longitude: that.data.position.longitude,
        time: that.data.time,
        notion: that.data.notion,
        status: that.data.status,
        classid: that.data.classid
      }
    })
    wx.navigateTo({
      url: '../counter/counter',
    })

  },


  //--------------------------------------------

  submit_sign:function(){
    var that = this 
    wx.request({
      url: config.service.dosignUrl,
      data:{
        stuid:that.data.stuid.phone,
        latitude: that.data.position.latitude,
        longitude:that.data.position.longitude,
        time:that.data.time,
        notion:that.data.notion,
        status:that.data.status,
        classid:that.data.classid
      }
    }) 
    wx.navigateTo({
      url: '../end/end',
    })  
  }
})