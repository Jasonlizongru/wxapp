//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  "pages": [
    "pages/sign/sign"

  ],
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })


  },



  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '学号密码不能空',
        icon: 'loading',
        duration: 2000
      })
    } else if (
      (this.data.phone == '20140001' &&
      this.data.password == '20140001')||
      (this.data.phone == '20140002' &&
        this.data.password == '20140002') ||
      (this.data.phone == '20140003' &&
        this.data.password == '20140003') ||
      (this.data.phone == '20140004' &&
        this.data.password == '20140004') ||
      (this.data.phone == '20140005' &&
        this.data.password == '20140005') ||
      (this.data.phone == '20140006' &&
        this.data.password == '20140006') ||
      (this.data.phone == '20140007' &&
        this.data.password == '20140007') || 
        (this.data.phone == '20140008' &&
          this.data.password == '20140008') ||
      (this.data.phone == '20140009' &&
        this.data.password == '20140009') ||
      (this.data.phone == '20140010' &&
        this.data.password == '20140010') ||
      (this.data.phone == '20140011' &&
        this.data.password == '20140011') ||
      (this.data.phone == '20140012' &&
        this.data.password == '20140012') ||
      (this.data.phone == '20140013' &&
        this.data.password == '20140013') ||
      (this.data.phone == '20140014' &&
        this.data.password == '20140014')||
      (this.data.phone == '20140015' &&
        this.data.password == '20140015') ||
      (this.data.phone == '20140016' &&
        this.data.password == '20140016') ||
      (this.data.phone == '20140017' &&
        this.data.password == '20140017') ||
      (this.data.phone == '20140018' &&
        this.data.password == '20140018') ||
      (this.data.phone == '20140019' &&
        this.data.password == '20140019') ||
      (this.data.phone == '20140020' &&
        this.data.password == '20140020') ||
      (this.data.phone == '20140021' &&
        this.data.password == '20140021')||
      (this.data.phone == '20140022' &&
        this.data.password == '20140022') ||
      (this.data.phone == '20140023' &&
        this.data.password == '20140023') ||
      (this.data.phone == '20140024' &&
        this.data.password == '20140024') ||
      (this.data.phone == '20140025' &&
        this.data.password == '20140025') ||
      (this.data.phone == '20140026' &&
        this.data.password == '20140026') ||
      (this.data.phone == '20140027' &&
        this.data.password == '20140027') ||
      (this.data.phone == '20140028' &&
        this.data.password == '20140028')||
      (this.data.phone == '20140020' &&
        this.data.password == '20140029') ||
      (this.data.phone == '20140030' &&
        this.data.password == '20140030') ||
      (this.data.phone == '20140031' &&
        this.data.password == '20140031') ||
      (this.data.phone == '20140032' &&
        this.data.password == '20140032') ||
      (this.data.phone == '20140033' &&
        this.data.password == '20140033') ||
      (this.data.phone == '20140034' &&
        this.data.password == '20140034') ||
      (this.data.phone == '20140035' &&
        this.data.password == '20140035')   

      ) {
      // 这里修改成跳转的页面 
      phonesubmit: {
        var that = this
        wx.setStorage({
          key: 'stuid',
          data: this.data,
        }),
          wx.getStorage({

            key: 'stuid',
            success: function (res) {
              console.log(res.data.phone)
            },
          })
          // wx.request({
          //   url: '',
          //   data:{
          //     stuid:stuid.data.phone
          //   }
          // })

      }

      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000
      }),
        wx.reLaunch({
          url: '../sign/sign',
        })


        //------------------------------------------------------------------
        // wx.request({
        //   url: config.service.updatelistUrl,
        // })
        //------------------------------------------------------------------

    }
    else {
      wx.showToast({
        title: '登录失败',
        icon: 'loading',
        duration: 1000
      })
    }
  }
})