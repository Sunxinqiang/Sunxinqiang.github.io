<template>
  <div class="poster-main">
    <img src="../../assets/img/poster/headimg.png" 
         :style="templateData.headerImg.style"
         v-show="templateData.headerImg.showState==1"/>
    <img src="../../assets/img/poster/qrcode.png" 
         :style="templateData.codeImg.style"/>
    <div v-for="x in templateData.posterText"
         :style="x.style">{{x.content}}</div>
    <div :style="templateData.representText.style"
         v-show="templateData.representText.showState==1">{{templateData.representText.content}}</div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
function setCss(elm,css){
  for(var attr in css){
    elm.style[attr] = css[attr];
  }
}
var templateData = {"headerImg":{"style":{"left":"38.4375%","top":"77.57936507936508%","width":"12.5%","height":"7.936507936507936%"},"path":"img/96.jpg","showState":"1"},"codeImg":{"style":{"left":"2.8125%","top":"77.38095238095238%","width":"31.25%","height":"19.841269841269842%"},"path":"img/qrcode_zhoubao.png"},"bgImg":{"style":{"left":"0%","top":"0%","width":"100%","height":"100%"},"path":"img/bg.jpg","showState":"1"},"bannerImg":{"style":{"left":"0%","top":"0%","width":"100%","height":"3.7698412698412698%"},"path":"img/laba.png","showState":"1"},"posterText":[{"style":{"left":"30.9375%","top":"7.341269841269842%","fontSize":24,"color":"#a87b51","minWidth":"31.25%"},"content":"分享有礼"},{"style":{"left":"38.125%","top":"92.46031746031747%","fontSize":16,"color":"#9F23A8","minWidth":"31.25%"},"content":"我在XXXX参加活动"}],"representText":{"style":{"left":"54.49718750000001%","top":"77.18253968253968%","fontSize":16,"color":"#000000","minWidth":"31.25%"},"content":"[nickname]","showState":"1"}};
export default {
  name: 'poster',
  data () {
    return {
      isRulePop: false,
      templateData: templateData
    }
  },
  methods: {
  },
  mounted: function(){
    html2canvas(document.body).then(function(canvas) {
      var imgData = canvas.toDataURL('image/png');
      var img = new Image();
      img.src = imgData;
      setCss(img,{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      })
      document.body.appendChild(img);
  });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$imgPath: "../../assets/img/poster";
@mixin imgBounds($rate,$width,$img) {
  width: $width;
  height: $width/$rate;
  background: url(#{$imgPath}/#{$img}) no-repeat;
  background-size: 100% 100%;
}
.poster-main {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(#{$imgPath}/poster-bg-1.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  div,img {
    position: absolute;
  }
}
</style>
