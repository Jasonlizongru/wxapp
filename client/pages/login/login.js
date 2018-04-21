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
      (this.data.phone == '1' &&
      this.data.password == '1')) {
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

    else if (
      (this.data.phone == '2' &&
        this.data.password == '2')) {
      // 这里修改成跳转的页面 
      phonesubmit: {
        var that = this
        wx.setStorage({
          key: 'teaid',
          data: this.data,
        }),
          wx.getStorage({

            key: 'teaid',
            success: function (res) {
              console.log(res.data.phone)
            },
          })

      }

      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000
      }),
        wx.reLaunch({
          url: '../teachersign/teachersign',
        })

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