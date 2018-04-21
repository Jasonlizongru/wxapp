// pages/note/note.js
var app = getApp()
var util = require('../../utils/util.js');


Page({

  "pages": [
    "pages/end/end"

  ],
  data: {
    notes:''
  },
  noteInput: function (e) {
    console.log(e)
    this.setData({
      notes: e.detail.value
    })

  },
  noteSubmit:function(e){
    var that = this
    wx.setStorage({
      key: 'not',
      data: that.data.notes,
      success: function (res) {
        console.log(that.data.notes)
      },
    })
  },
  noteSubmitted:function(e){
    wx.reLaunch({
      url: '../end/end',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})