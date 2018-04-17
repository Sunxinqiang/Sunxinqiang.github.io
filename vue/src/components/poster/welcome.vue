<template>
  <div class="welcome-main">
    <div class="bottom">
      <div class="btn">店铺首页</div>
      <div class="btn" @click="goProfit">我的收益</div>
      <div class="btn" @click="recommend">推荐有奖</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      showDetail: false
    }
  },
  methods: {
    goProfit: function(){
      this.$router.push('profit');
    },
    recommend: function(){
      this.$router.push('poster');
    }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$imgPath: "../../assets/img/poster";
$color: #999;
$color2: #4fb216;
@mixin imgBounds($rate,$width,$img) {
  width: $width;
  height: $width/$rate;
  background: url(#{$imgPath}/#{$img}) no-repeat;
  background-size: 100% 100%;
}
* {
  box-sizing: border-box;
}
.welcome-main {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(#{$imgPath}/welcome-bg.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: auto;
  .bottom {
    position: absolute;
    height: 3rem;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    .btn {
      display: inline-block;
      background: $color2;
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
