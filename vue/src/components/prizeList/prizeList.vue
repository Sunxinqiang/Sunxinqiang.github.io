<template>
  <div class="prize-main">
    <div class="head-bar" ref="head-bar">
      <div class="scompop-tab-4 clearfix" :class="'c-tab-checked-'+checkIdx">
        <div class="c-tab-content">
          <div @click="checkIdx=1">全部</div>
          <div @click="checkIdx=2">已兑奖</div>
          <div @click="checkIdx=3">未兑奖</div>
          <div @click="checkIdx=4">已过期</div>
        </div>
        <div class="c-tab-line"></div>
      </div>
    </div>
    <div>
      <comload2 ref="topRefresh" :top-load="topLoad" :isAllLoaded="disableBottomLoad" :topPadding="topPadding">
        <div class="list" ref="list">
          <ul class="ulContent">
            <li v-for="item in listData">
              <a class="item item-thumbnail-left">
                <img class="">
                <h2 ng-bind="x.mw_productname"></h2>
                <p>活动名称：</p>
                <p>状态：</p>
                <p>中奖时间：</p>
                <p ng-show="x.mw_state == 2">兑奖时间：</p>
                <div class="box-center">
                    <!-- <div ng-if="x.mw_state==1" class="button button-small button-balanced btn-right" ng-click="goCheck(x)">
                        立即领奖
                    </div> -->
                    <div class="item-state-img" v-if="true"><img src="../../assets/img/prizeList/outdate.png" alt=""></div>
                    <div class="item-state-img" v-if="false"><img src="../../assets/img/prizeList/exchanged.png" alt=""></div>
                    <div class="item-state-btn">
                        <i class="fa fa-angle-right color-gray"></i>
                    </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </comload2>
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
      checkIdx: 1,
      imgDefault: require('../../assets/img/personCenter/head.jpg'),
      disableBottomLoad: true,
      listData: 15,
      topStatus: '',
      fontSize: 0,
      topPadding:0
    }
  },
  methods: {
    goPrize: function() {
      this.$router.push();
    },
    topLoad: function(){
      var that = this;
      setTimeout(function(){
        that.listData = 15;
        that.$refs.topRefresh.onTopLoaded();
      },2000);
    }
  },
  mounted() {
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.topPadding = this.$refs['head-bar'].clientHeight + 'px';
    this.$refs.list.style.height = (h - this.$refs['head-bar'].clientHeight) + 'px';
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../util/com-css.scss";
.prize-main {
  .box-center {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 5%;
    height: 100%;
    width: 27%;
  }
  .ulContent {
    // height: 100vh;overflow-y: auto;
  }
  .head-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .list {
    overflow-y: scroll;
    height: 80vh;
    .item.activated {
      background-color: #fff;
    }
    .item-state-img {
      flex: 1;
      img {
        width: 5rem;
      }
    }
    .item-state-btn {
      flex: 1;
      text-align: right;
      i {
        font-size: 2rem;
        color: #ddd;
      }
    }
  }
  .rotate {
    color: red;
    display: inline-block;
    transform: rotate(180deg);
  }
}

</style>
