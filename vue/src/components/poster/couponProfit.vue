<template>
  <div class="main">
    <div class="ad">
      <img src="../../assets/img/poster/ad.jpg">
    </div>
    <div class="card">
      <div class="panel">
        <div class="item coupon">
          <div class="public-title">
            <img src="../../assets/img/poster/logo.jpg" alt="">
            <span>聚品国际</span>
          </div>
          <div class="card-title">聚品国际折扣券</div>
          <div class="card-content">
            <div class="two-line">
              <div class="l-left">使用条件：</div>
              <div class="l-right">
                <div>1. 适用于所有商品</div>
                <div>2. 仅限本人微信号使用，逾期不可使用</div>
              </div>
            </div>
          </div>
          <div class="card-content">
            <div class="two-line">
              <div class="l-left">可用时间：</div>
              <div class="l-right">
                <div>周一到周日全天 2018年7月~2020年10月</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btns">
      <div class="red-btn">立即使用</div>
    </div>
    <div class="list">
       <div class="panel">
        <div class="item-title">看看大家手气</div>
        <div class="three-line" v-for="x in 4">
          <div class="l-left">
            <img src="../../assets/img/poster/headimg.png">
          </div>
          <div class="l-center">
            <div>王小明</div>
            <div class="time">2018-01-01 13:24:22</div>
          </div>
          <div class="l-right">五折券</div>
        </div>
      </div>
    </div>
    <div class="rule">
      <div class="panel">
        <div class="item-title">活动规则</div>
        <div class="rule-item" v-for="x in 5">{{x}}.红包新老用户同享红包新老用户同享红包新老用户同享红包新老用户同享</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'couponProfit',
  data () {
    return {
    }
  },
  methods: {
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
.main {
  background: #ffebd0;
  height: 100vh;
  overflow-y: auto;
  .ad {
    position: relative;
    img {
      width: 100%;
    }
    &:after {
      content: "广告";
      display: block;
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      padding: 0.2rem 0.5rem;
      color: #fff;
      background: rgba(0,0,0,0.35);
      border-radius: 2px;
      font-size: 0.8rem;
    }
  }
  .card {
    padding-bottom: 1rem;
    .public-title {
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      padding: 0.3rem 0;
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #ddd;
        vertical-align: middle;
      }
      span {
        color: #999;
      }
    }
    .card-title {
      padding-bottom: 1rem;
      margin: 0 1rem;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 2px;
      border-bottom: 1px dashed #ddd;
    }
    .card-bottom {
      padding: 0.5rem 1rem;
      color: #999;
      font-size: 0.8rem;
    }
    .card-content {
      padding: 0.5rem 1rem;
      .two-line {
        display: flex;
        .l-left {
          flex: none;
          margin-right: 1rem;
        }
        .l-right {
          flex: 2;
          color: #999;
        } 
      }
    }
  }
  .btns {
    padding: 0 1.5rem 1rem;
    .red-btn {
      padding: 1rem 0;
      background: #ff3f26;
      color: #fff;
      text-align: center;
      border-radius: 0.5rem;
      font-size: 1.2rem;
    }
  }
  .panel {
    $panelColor: #fff7ec;
    box-sizing: border-box;
    background: $panelColor;
    margin: 0 0.5rem;
    padding: 1rem;
    border-radius: 0.4rem;
    .item {
      position: relative;
      background: #fff;
      border-radius: 0.3rem;
      &.coupon:before {
        content: "";
        position: absolute;
        top: 4rem;
        left: -0.8rem;
        margin-top: -1rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: $panelColor;
      }
      &.coupon:after {
        content: "";
        position: absolute;
        top: 4rem;
        right: -0.8rem;
        margin-top: -1rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: $panelColor;
      }
    }
  }
  .item-title {
    position: relative;
    text-align: center;
    font-size: 1.2rem;
    height: 2rem;
    line-height: 2rem;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 30%;
      height: 1px;
      background: #ddd;
    }
    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      width: 30%;
      height: 1px;
      background: #ddd;
    }
  }
  .list{
    margin-bottom: 1rem;
    .three-line {
      display: flex;
      padding: 0.5rem 0;
      border-bottom: 1px solid #ddd;
      .l-left {
        flex: none;
        margin-right: 1rem;
        img {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
      }
      .l-center {
        flex: 1;
        .time {
          font-size: 0.8rem;
          color: #999;
        }
      }
      .l-right {
        flex: 1;
        text-align: right;
      }
    }
  }
  .rule {
    margin-bottom: 2rem;
     .rule-item {
      padding: 0.5rem;
      color: #444;
     }
  }
}
</style>
