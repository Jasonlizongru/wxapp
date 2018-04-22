

























Page({
  data: {
    checkboxItems: [
      { name: 'USA', value: '張三 ： 3.127m', checked: 'true' },
      { name: 'CHN', value: '張四 ： 3.435m', checked: 'true' },
      { name: 'BRA', value: '張五 ： 5.983m', checked: 'true'},
      { name: 'JPN', value: '張六 ： 107.432m   病假',  },
      { name: 'ENG', value: '張七 ： 4.521m', checked: 'true' },
      { name: 'TUR', value: '張八 ： 3.634m', checked: 'true'},
      { name: 'US', value: '張九 ： 3.199m', checked: 'true' },
      { name: 'CH', value: '張十 ： 5.350m', checked: 'true' },
      { name: 'BR', value: '張十一 ： 8.902m', checked: 'true' },
      { name: 'JP', value: '張十二 ： 300.400m    病假', },
      { name: 'EN', value: '張十三 ： 8.364m', checked: 'true' },
      { name: 'TU', value: '張十四 ： 9.112m', checked: 'true' }
      
    ],
    hidden: false
  },
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