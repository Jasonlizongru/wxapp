//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');
var config = require('../../config');


Page({


  data: {
    array: ['计算机网络', '编译原理', '离散数学', '线性代数'],
    
    stuid: {},
    position: {},
    time: '',
    notion: '',
    status: 0,
    classid: '',
    objectArray:[]
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  showit:function(e){
    //console.log(e)
    var that = this
    var time = util.formatTime(new Date());
    wx.request({
      url: config.service.showlistUrl,
      data: {
        stuid: that.data.stuid.phone,
        latitude: that.data.position.latitude,
        longitude: that.data.position.longitude,
        time: that.data.time,
        notion: that.data.notion,
        status: that.data.status,
        classid: that.data.classid
      },
      success:function(res){
        console.log(res)

        that.setData({
          objectArray:res.data.data
        })

      }
    }) 

  },





//   data: {
//     checkboxItems: [
//       { name: 'USA', value: stuid, checked: 'true' },
//       { name: 'CHN', value: '張四 ： 3.435m', checked: 'true' },
//       { name: 'BRA', value: '張五 ： 5.983m', checked: 'true'},
//       { name: 'JPN', value: '張六 ： 107.432m   病假',  },
//       { name: 'ENG', value: '張七 ： 4.521m', checked: 'true' },
//       { name: 'TUR', value: '張八 ： 3.634m', checked: 'true'},
//       { name: 'US', value: '張九 ： 3.199m', checked: 'true' },
//       { name: 'CH', value: '張十 ： 5.350m', checked: 'true' },
//       { name: 'BR', value: '張十一 ： 8.902m', checked: 'true' },
//       { name: 'JP', value: '張十二 ： 300.400m    病假', },
//       { name: 'EN', value: '張十三 ： 8.364m', checked: 'true' },
//       { name: 'TU', value: '張十四 ： 9.112m', checked: 'true' }
      
//     ],
//     hidden: false
//   },
  checkboxChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  radioChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  }
})