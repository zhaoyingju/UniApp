!function(){var t=function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var o=i(16),n=i(17),r=i(18);$app_define$("@app-component/index",[],function(t,e,i){r(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=n}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},16:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["item-title"],children:[{type:"text",attr:{value:"image"}}]},{type:"div",attr:{},classList:["item-content"],children:[{type:"div",attr:{},classList:["item-image-group"],children:[{type:"text",attr:{value:"本地图片"}},{type:"image",attr:{src:"Common/img/mi_logo.png"}}]},{type:"div",attr:{},classList:["item-image-group"],children:[{type:"text",attr:{value:"网络图片"}},{type:"image",attr:{src:"//img-cdn-qiniu.dcloud.net.cn/icon3.png"},style:{width:"150px"}}]},{type:"div",attr:{},classList:["item-image-group"],children:[{type:"text",attr:{value:"resize-mode:cover"}},{type:"image",attr:{src:"Common/img/mi_logo.png"},classList:["item-content-image"],style:{resizeMode:"cover"}}]},{type:"div",attr:{},classList:["item-image-group"],children:[{type:"text",attr:{value:"resize-mode:contain "}},{type:"image",attr:{src:"Common/img/mi_logo.png"},classList:["item-content-image"],style:{resizeMode:"contain"}}]},{type:"div",attr:{},classList:["item-image-group"],children:[{type:"text",attr:{value:"resize-mode:stretch"}},{type:"image",attr:{src:"Common/img/mi_logo.png"},classList:["item-content-image"],style:{resizeMode:"stretch"}}]},{type:"div",attr:{},classList:["item-image-group"],children:[{type:"text",attr:{value:"resize-mode:center"}},{type:"image",attr:{src:"Common/img/mi_logo.png"},classList:["item-content-image"],style:{resizeMode:"center"}}]},{type:"div",attr:{},classList:["item-image-group"],children:[{type:"text",attr:{value:"圆形图"}},{type:"image",attr:{src:"Common/img/mi_logo.png"},classList:["item-content-image-circle"]}]}]}]}},17:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column"},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"},".item-image-group":{flexDirection:"column",marginTop:"30px",marginRight:"30px",marginBottom:"30px",marginLeft:"30px",alignItems:"center"},".item-image-group text":{paddingBottom:"10px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-image-group"},{t:"d"},{t:"t",n:"text"}]}},".item-content-image":{width:"200px",height:"140px"},".item-content-image-circle":{width:"200px",borderRadius:"100px"}}},18:function(t,e){t.exports=function(t,e,i){"use strict";t.exports={onInit:function(t){this.$page.setTitleBar({text:"Image"})}}}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();