<template>
  <div class="profit-main">
    <div class="top">
      <div class="title">春节推广</div>
      <div class="time">01月15日-01月18日</div>
    </div>
    <div class="center">
      <div class="continar">
        <div class="c-title">
          <div class="text-left">活动时间</div>
          <div class="text-right">红包奖励</div>
        </div>
        <div class="c-list">
          <div class="c-item" v-for="(x,index) in [1,2,3,4]">
            <div class="item-left">星期一 01.15</div>
            <div class="item-right">
              <div class="gain" v-show="index<=1">+3.00元</div>
              <div class="no-join" v-show="index>1">未参与</div>
            </div>
          </div>
          <div class="after"><div></div></div>
        </div>
        <div class="c-bottom">
          <div class="head">
             <img src="../../assets/img/poster/headimg.png">
             <span>王小明</span>
           </div>
          <div class="total">
            <div class="t-top">4.00</div>
            <div class="t-bottom">累计提现0.00元</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="p-btn">提现</div>
      <div class="help">？提现失败（未收到红包）>></div>
      <div class="b-btns">
        <div class="btn-white">活动规则</div>
        <div class="line">&ensp;</div>
        <div class="btn-white" 
             @click="showDetail=!showDetail">我的奖励明细</div>
        <div class="line">&ensp;</div>
        <div class="btn-white">客服投诉</div>
      </div>
    </div>
    <div class="detail" v-show="showDetail">
      <div class="continar">
        <div class="c-list">
          <div class="c-item" v-for="(x,index) in [1,2,3,4]">
            <div class="item-left">01-16 13:34</div>
            <div class="item-center">
              <img src="../../assets/img/poster/headimg.png">
              <span>王小明</span>
            </div>
            <div class="item-right">
              <div class="gain">+1元</div>
            </div>
          </div>
        </div>
        <div class="bottom-tip">没有更多记录了</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profit',
  data () {
    return {
      showDetail: false
    }
  },
  methods: {
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
.profit-main {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(#{$imgPath}/profit-bg.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: auto;
  .top {
    margin: 1.5rem 0;
    text-align: center;
    color: #fff;
    .title {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
    }
  }
  .center {
    padding: 0 0.5rem;
    .continar {
      width: 100%;
      background: #fff;
      padding: 0.5rem;
      color: $color;
      border-radius: 0.5rem;
      .c-title {
        display: flex;
        padding: 1rem;
        border-bottom: 1px solid #ccc;
        .text-left{
          flex: 2;
        }
        .text-right{
          flex: 1;
        }
      }
      .c-list {
        position: relative;
        border-bottom: 1px solid #ccc;
        .after {
          position: absolute;
          top: 0;
          left: 8px;
          padding: 1.5rem 0;
          width: 2px;
          height: 100%;
          div {
            width: 100%;
            height: 100%;
            background: $color2;
          }
        }
        .c-item {
          position: relative;
          display: flex;
          padding: 1rem 0;
          &:before {
            content: "";
            position: absolute;
            top: 1.5rem;
            left: 5px;
            width: 8px;
            height: 8px;
            border-radius: 8px;
            background: $color2;
          }
          &:nth-last-of-type(2):before {
            box-shadow: 0 0 0 2px #80ec80;
          }
          &:after {
            content: "";
            position: absolute;
            left: 5%;
            bottom: 0;
            width: 90%;
            border-bottom: 1px solid #ccc;

          }
          &:nth-last-of-type(2):after{
            display: none;
            border-bottom: none;
          }
          .item-left {
            position: relative;
            left: 1.5rem;
            flex: 2;
          }
          .item-right {
            flex: 1;
            .gain {
              color: red;
            }
          }
        }
      }
      .c-bottom {
        display: flex;
        padding: 1rem;
        .head {
          flex: 2;
          height: 3.5rem;
          line-height: 3.5rem;
          img {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 3.5rem;
          }
          span {
            vertical-align: top;
          }
        }
        .total {
          flex: 1;
          .t-top {
            color: red;
            font-weight: bold;
            margin-bottom: 0.3rem;
          }
        }
      }
    }
  }
  .bottom {
    margin-top: 1rem;
    padding: 0 0.5rem;
    .p-btn {
        line-height: 3.5rem;
        text-align: center;
        background: $color2;
        border-radius: 0.5rem;
        color: #fff;
        font-size: 1.2rem;
        letter-spacing: 2px;
    }
    .help {
      text-align: center;
      color: #f9cc45;
      margin: 1rem 0;
    }
    .b-btns {
      width: 100%;
      height: 1.5rem;
      text-align: center;
      div {
        line-height: 1.5rem;
        display: inline-block;
        color: #fff;
      }
      .line {
        width: 1px;
        background: #fff;
        margin: 0 0.5rem;
      }
      .btn-white {
        padding: 0.5rem 0;
      }
    }
  }
  .detail {
    padding: 1rem 0.5rem 2rem;
    .continar {
      width: 100%;
      background: #fff;
      padding: 0.5rem;
      color: $color;
      border-radius: 0.5rem;
      .c-list {
        position: relative;
        .c-item {
          position: relative;
          display: flex;
          padding: 1rem 0;
          &:after {
            content: "";
            position: absolute;
            left: 5%;
            bottom: 0;
            width: 90%;
            border-bottom: 1px solid #ccc;
          }
          &:nth-last-of-type(1):after{
            display: none;
            border-bottom: none;
          }
          .item-left {
            position: relative;
            height: 2em;
            line-height: 2em;
            left: 1.5rem;
            flex: 1;
          }
          .item-center {
            flex: 1;
            height: 2em;
            line-height: 2em;
            text-align: center;
            img {
              width: 2em;
              height: 2em;
              border-radius: 2em;
            }
            span {
              vertical-align: top;
            }
          }
          .item-right {
            position: relative;
            flex: 1;
            height: 2em;
            line-height: 2em;
            text-align: right;
            right: 2rem;
            .gain {
              color: red;
            }
          }
        }
      }
      .c-bottom {
        display: flex;
        padding: 1rem;
        .head {
          flex: 2;
          height: 3.5rem;
          line-height: 3.5rem;
          img {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 3.5rem;
          }
          span {
            vertical-align: top;
          }
        }
        .total {
          flex: 1;
          .t-top {
            color: red;
            font-weight: bold;
            margin-bottom: 0.3rem;
          }
        }
      }
      .bottom-tip {
        text-align: center;
        margin: 1rem 0;
      }
    }
  }
}
</style>
