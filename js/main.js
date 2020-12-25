(function () {
  'use strict';
  let wx=window.wx;
  
  wx.loadSubpackage({
  name:'sub1',
  success:function(res){
  console.log("加载分包1成功！");

  },
  fail:function(res){
  console.log("加载分包1失败！")
  }
  })

  

  }());