<template>
  <div class="egg-welcome">
    <div class="top titleDown"></div>
    <div class="rule-btn" @click="showRule"></div>
    <div class="bottom">
      <div class="join">
        <span>已有</span>
        <span class="red">10787</span>
        <span>人参加游戏</span>
      </div>
      <div class="egg-btn startTada" @click="goEgg"></div>
    </div>
    <rule-pop ref="rulePop" @tabTwoClick="updatePrize"></rule-pop>  
  </div>
</template>

<script>
var ruleObj = [
      {
        "title" : "活动名称",
        "content" : ["演示活动"]
      },
      {
        "title" : "活动奖品",
        "content" : ['Iphone','50元优惠券']
      },
      {
        "title" : "活动时间",
        "content" : ['2018-09-08']
      },
      {
        "title" : "活动规则",
        "content" : ['1.每人只有一次中奖机会','2.请及时兑奖','3.截止日期2018-12-12']
      } ];

var prizeObj = [
    {
      level: '一等奖',
      content: 'iPhoneX',
      time: '2018-09-09',
      status: '未领取'
    },
    {
      level: '二等奖',
      content: 'iPhoneX',
      time: '2018-09-09',
      status: '未领取'
    }]
export default {
  name: 'eggWelcome',
  data () {
    return {
      isRulePop: false
    }
  },
  methods: {
    showRule: function(){
      this.$refs.rulePop.show(ruleObj,prizeObj);
    },
    updatePrize: function(){
      this.$refs.rulePop.updatePrize(prizeObj);
    },
    goEgg: function() {
      this.$router.push('goldenEgg');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$imgPath: "../../assets/img/goldenEgg";
@mixin imgBounds($rate,$width,$img) {
  width: $width;
  height: $width/$rate;
  background: url(#{$imgPath}/#{$img}) no-repeat;
  background-size: 100% 100%;
}
.egg-welcome {
  width: 100%;
  height: 100vh;
  background: url(#{$imgPath}/welcome_bg.jpg) no-repeat;
  background-size: 100% 100%;
  position: relative;
  .rule-btn {
    @include imgBounds(196/122,10rem,"btn_rule.png");
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .top {
    $width: 22rem;
    @include imgBounds(579/362,$width,"title.png");
    position: absolute;
    top: 4rem;
    left: 50%;
    margin-left: -$width/2;
  }
  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    .join {
        display: inline-block;
        padding: 0.5rem;
        background: rgba(255,255,255,0.5);
        color: #169d24;
        border-radius: 0.5rem;
    }
    .egg-btn {
        @include imgBounds(452/188,21rem,"btn_start.png");
        display: inline-block;
    }
  }
  .red {
    color: red;
  }
  @keyframes bounceInDown {
    0% {
        opacity: 0;
        transform: translateY(-2000px)
    }

    60% {
        opacity: 1;
        transform: translateY(30px)
    }

    80% {
        transform: translateY(-10px)
    }

    100% {
        transform: translateY(0)
    }
  }
  .titleDown {
    animation: bounceInDown 1s ease 1;
  }
  @keyframes tada {
    0% {
        transform: scale3d(1,1,1)
    }

    10%,20% {
        transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)
    }

    30%,50%,70%,90% {
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)
    }

    40%,60%,80% {
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)
    }

    100% {
        transform: scale3d(1,1,1)
    }
  }
  .startTada {
    animation: tada .6s ease 1s 1 forwards;
  }
}
</style>
