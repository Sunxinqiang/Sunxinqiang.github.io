<template>
  <div>
    <div class="head-main">
      <div class="head-pic">
        <img :src="user.mb_img?user.mb_img:imgDefault">
        <div>{{user.mb_name}}</div>
      </div>
      <div class="head-bottom" v-if="false">
        <div class="head-bottom-bg"></div>
        <div class="head-bottom-content">
          <div>红包：0.00</div>
          <div class="head-line"></div>
          <div>积分：0.00</div>
          <div class="head-line"></div>
          <div>可提：0.00</div>
        </div>
      </div>
    </div>
    <div class="list">
      <a class="item" @click="goPrize">
        <i class="fa fa-trophy" style="color: #FFCC00;"></i>
        <span>我的奖品</span>
        <i class="fa fa-angle-right color-gray"></i>
      </a>
      <a class="item">
        <i class="fa fa-cog" style="color: #FFCC00;"></i>
        <span>个人资料</span>
        <i class="fa fa-angle-right color-gray"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personCenter',
  data() {
    var that = this;
    that.$axios.post('/weixin/web/weixinIndexController/getSession.action', that.$route.query)
      .then(function(response) {
        that.user = response.data;
        // console.table(that.user)
      })
      .catch(function(error) {
        console.error(error);
      })
    return {
      user: {
        desc: '',
        mb_name: ''
      },
      imgDefault: require('../../assets/img/personCenter/head.jpg')
    }
  },
  methods: {
    goPrize: function() {
      this.$router.push('prizeList');
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../util/com-css.scss";
.color-gray {
  color: #ddd;
}

.head-main {
  position: relative;
  width: 100%;
  height: 15rem;
  background: url(../../assets/img/personCenter/bg2.jpg) no-repeat;
  background-size: 100% 100%;
  .head-pic {
    img {
      float: left;
      width: 7rem;
      border-radius: 3.5rem;
      margin: 2rem;
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
    div {
      float: left;
      height: 10rem;
      line-height: 10rem;
      color: #fff;
      &:first-of-type {
        font-size: 150%;
      }
      &:last-of-type {
        float: right;
        margin-right: 2rem;
        font-size: 120%;
      }
    }
  }
  .head-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    .head-bottom-bg {
      width: 100%;
      height: 4rem;
      background: #000;
      opacity: 0.3;
    }
    .head-bottom-content {
      position: absolute;
      display: flex;
      left: 0;
      bottom: 0;
      width: 100%;
      box-shadow: 0 0 0 1px rgba(255, 254, 254, 0.2);
      >div {
        flex: 1;
        height: 3rem;
        line-height: 3rem;
        margin: 0.5rem 0;
        text-align: center;
      }
      .head-line {
        flex: none;
        box-shadow: 0 0 0 0.2px rgba(255, 254, 254, 0.5);
      }
    }
  }
}

.list {
  position: relative;
  .item {
    border-color: #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;
    padding: 1rem 4rem;
    border-width: 1px;
    border-style: solid;
    span {
      @include font-dpr(16px);
    }
    i {
      @include font-dpr(32px);
    }
    i:first-of-type {
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      margin-bottom: -4px;
    }
    i:last-of-type {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      margin-bottom: -4px;
    }
  }
}

</style>
