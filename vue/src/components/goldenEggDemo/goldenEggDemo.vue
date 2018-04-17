<template>
  <div class="golden-egg" 
       :class="{fail:showScene=='fail',win:showScene=='win'}">
    <div class="rule-pop" @click="showRule"></div>
    <div v-if="showScene=='stage'">
      <div class="left-light">
        <img src="../../assets/img/goldenEgg/light_left.png">
      </div>
      <div class="right-light">
        <img src="../../assets/img/goldenEgg/light_right.png">
      </div>
      <div class="title">砸到TA就可以获得奖品</div>
      <div class="hammer" 
           ref="hammer" 
           @transitionend="hammerShake=true"
           :class="{'hammer-shake':hammerShake}"
           @animationend="shakeEnd"></div>
      <div class="hammer-tip" 
           v-show="rollEnd">
           来呀，<br>砸我呀！
      </div>
      <div class="stage">
        <ul class="container">
          <li v-for="(x,index) in eggData" 
              :class="{liRun:liRun}"
              @click="moveHammer(index)" 
              @animationend="rollEnd=true">
            <div class="crack" 
                 :class="{'crack-height':x.isCrackHeight}" 
                 @animationend.stop="crackHeightEnd(index)"></div>    
            <img src="../../assets/img/goldenEgg/egg.png">    
          </li>
        </ul>
      </div>
      <div class="bottom-tip" v-show="showScene=='stage'">
        <div>今日有{{timeLeft}}次砸蛋蛋机会哦</div>
      </div> 
    </div> 
    <div v-show="showScene=='fail'">
      <div class="fail-text">
        <div>没中奖</div>
        <div>sorry，不在那颗蛋蛋中哦！分享给多1个好友能多1次砸的机会哦！</div>
      </div>
      <div class="fail-tip">
        <div>看歪了！</div>
        <div>没中奖！</div>
      </div>
      <div class="again">
        <div class="again-btn" @click="playAgain"></div>
      </div>
      <div class="bottom-tip">
        <div>邀请好友，赢更多砸蛋机会</div>
      </div> 
    </div>
    <div v-show="showScene=='win'">
      <div class="win-text">
        <div>中奖啦</div>
        <div>快邀请好友助力，
          <span>0</span>
          位助力成功后即可领奖，否则
          <span>法国双人游</span>
          将在
          <span>10</span>
          分钟后撤回哦！
        </div>
      </div>
      <div class="win-tip">
        <div>眼力很好嘛！</div>
        <div>居然砸中了！</div>
      </div>
      <div class="invite">
        <div class="invite-btn" @click="playAgain"></div>
      </div>
      <div class="bottom-tip">
        <div>人品爆发，快去领取奖品吧！</div>
      </div>
    </div>
    <!-- 图片预加载 不要删！！！ -->
    <div style="display:none;">
      <img src="../../assets/img/goldenEgg/bg_win.jpg">
      <img src="../../assets/img/goldenEgg/bg_lose.jpg">
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
  name: 'goldenEggDemo',
  data () {
    var eggData = [];
    for(var i=0;i<5;i++){
      eggData.push({
        'isCrackHeight': false
      })
    }
    return {
      eggData: eggData,//五个蛋
      liRun: true,//蛋转动
      rollEnd: false,//蛋转完了
      hammerShake: false,//true:锤子砸动画
      eggIdx: -1,//砸中的蛋
      showScene:'stage',//stage: 抽奖界面，fail: 未中奖，win:中奖
      timeLeft: 100//剩余抽奖次数
    }
  },
  methods: {
    /**
     * 移动锤子
     * @DateTime 2018-01-11
     * @return   {[type]}
     */
    moveHammer: function(idx){
      if(!this.rollEnd){
        return
      }
      this.eggIdx = idx
      this.hammerShake = false;
      var hammer = this.$refs.hammer;
      var width = hammer.offsetWidth;
      // var height = hammer.offsetHeight;
      var x = event.clientX - width;
      // var y = event.clientY - height;
      hammer.style.left = x + 'px';
      // hammer.style.top = y + 'px';
      hammer.style.top = '44vh';
    },
    /**
     * 锤子砸动画执行结束
     * @DateTime 2018-01-11
     * @return   {[type]}
     */
    shakeEnd: function(){
      this.eggData[this.eggIdx].isCrackHeight = true;
    },
    /**
     * 裂缝动画执行结束
     * @DateTime 2018-01-11
     * @return   {[type]}
     */
    crackHeightEnd: function(){
      this.eggData[this.eggIdx].isCrackHeight = false;
      this.showScene = 'win';
    },
    /**
     * 再玩一次
     * @DateTime 2018-01-11
     * @return   {[type]}
     */
    playAgain: function(){
      this.liRun = true;
      this.rollEnd = false;
      this.hammerShake = false;
      this.showScene = 'stage';
    },
    /**
     * 显示规则弹窗
     * @DateTime 2018-01-11
     * @return   {[type]}
     */
    showRule: function(){
      this.$refs.rulePop.show(ruleObj,prizeObj);
    },
    /**
     * 更新奖品数据
     * @DateTime 2018-01-11
     * @return   {[type]}
     */
    updatePrize: function(){
      this.$refs.rulePop.updatePrize(prizeObj);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$imgPath: "../../assets/img/goldenEgg";
// 各个组件位置高度 都由此计算
$height: 100vh;
@mixin imgBounds($rate,$width,$img) {
  width: $width;
  height: $width/$rate;
  background: url(#{$imgPath}/#{$img}) no-repeat;
  background-size: 100% 100%;
}
.golden-egg {
  position: relative;
  width: 100%;
  height: $height;
  background: url(#{$imgPath}/bg.jpg) no-repeat;
  background-size: 100% 100%;
  &.fail {
    background-image: url(#{$imgPath}/bg_lose.jpg);
    .fail-text {
      position: absolute;
      left:0;
      top: $height/6;
      width: 100%;
      text-align: center;
      color: #e30b0a;
      div {
        &:nth-of-type(1){
          font-size: 1.2rem;
        }
        &:nth-of-type(2){
          margin-top: 0.5rem;
          display: inline-block;
          width: 60%;
          font-size: 1rem;
        }
      }
    }
    .fail-tip {
      position: absolute;
      left:65%;
      top: $height/3;
      font-size: 0.8rem;
      color: #701317;
    }
    .again {
      position: absolute;
      left:0;
      bottom: 5rem;
      width: 100%;
      text-align: center;
      .again-btn {
         @include imgBounds(264/91,10rem,"btn_again.png");
         display: inline-block;
      }
    }
  }
  &.win {
    background-image: url(#{$imgPath}/bg_win.jpg);
    .win-text {
      position: absolute;
      left:0;
      top: $height/6;
      width: 100%;
      text-align: center;
      color: #e30b0a;
      div {
        &:nth-of-type(1){
          font-size: 1.2rem;
        }
        &:nth-of-type(2){
          margin-top: 0.5rem;
          display: inline-block;
          width: 60%;
          font-size: 1rem;
          span {
            font-weight: bold;
          }
        }
      }
    }
    .win-tip {
      position: absolute;
      left:62%;
      top: $height/3;
      font-size: 0.8rem;
      color: #701317;
    }
    .invite {
      position: absolute;
      left:0;
      bottom: 5rem;
      width: 100%;
      text-align: center;
      .invite-btn {
         @include imgBounds(264/91,10rem,"btn_yq.png");
         display: inline-block;
      }
    }
  }
  .left-light {
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    img {
      height: 20rem;
    }
  }
  .right-light {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    img {
      height: 20rem;
    }
  }
  .title {
    position: absolute;
    top: $height/6;
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
  }
  .rule-pop {
    @include imgBounds(196/122,9rem,"btn_rule.png");
    position: absolute;
    top: 0;
    right: 1rem;
    z-index: 1;
  }
  .hammer {
    @include imgBounds(93/93,4.5rem,"hammer.png");
    position: absolute;
    top: $height/3.2;
    left: 4rem;
    z-index: 1;
    transition: top 0.5s,left 0.5s;
  }
  .hammer-tip {
    @include imgBounds(199/87,8rem,"text-pop.png");
    position: absolute;
    top: $height/3.2;
    left: 9rem;
    text-align: center;
    line-height: 1.7rem;
    color: #701317;
  }
  .stage {
    position: relative;
    left: 0;
    top: $height/1.95;
    perspective: 26rem;
    perspective-origin-y: -1rem;
    .container {
        position: absolute;
        width: 100%;
        top: 0;
        left: -0.6rem;
        transform-style: preserve-3d;
        li {
          width: 3.8rem;
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -1.25rem;
          transform-style: preserve-3d;
          .crack{
            position:absolute;
            left: 8rem;
            width: 3rem;
            height: 0;
            // height: 6rem;
            background: url(#{$imgPath}/crack.png) no-repeat;
            background-size: 100%;
          }
          img {
              width: 100%;
              margin-left: 7.5rem;
          }
      }
    }

    .container li:nth-child(1) {
        transform: rotateY(-90deg);
    }

    .container li:nth-child(2) {
        transform: rotateY(-18deg);
    }

    .container li:nth-child(3) {
        transform: rotateY(54deg);
    }

    .container li:nth-child(4) {
        transform: rotateY(126deg);
    }

    .container li:nth-child(5) {
        transform: rotateY(198deg);
    }

    .container li:nth-child(1) img {
        transform: rotateY(90deg);
    }

    .container li:nth-child(2) img {
        transform: rotateY(18deg);
    }

    .container li:nth-child(3) img {
        transform: rotateY(-54deg);
    }

    .container li:nth-child(4) img {
        transform: rotateY(-126deg);
    }

    .container li:nth-child(5) img {
        transform: rotateY(-198deg);
    }

    .container li:nth-child(1) .crack {
        transform: rotateY(90deg);
    }

    .container li:nth-child(2) .crack {
        transform: rotateY(18deg);
    }

    .container li:nth-child(3) .crack {
        transform: rotateY(86deg);
    }

    .container li:nth-child(4) .crack {
        transform: rotateY(267deg);
    }

    .container li:nth-child(5) .crack {
        transform: rotateY(-198deg);
    }

    .container li.liRun:nth-child(1) {
        animation: animation1_1 1s 0s 5 linear both !important
    }

    .container li.liRun:nth-child(2) {
        animation: animation1_2 1s 0s 5 linear both !important
    }

    .container li.liRun:nth-child(3) {
        animation: animation1_3 1s 0s 5 linear both !important
    }

    .container li.liRun:nth-child(4) {
        animation: animation1_4 1s 0s 5 linear both !important
    }

    .container li.liRun:nth-child(5) {
        animation: animation1_5 1s 0s 5 linear both !important
    }

    .container li.liRun:nth-child(1) img {
        animation: animation2_1 1s 0s 5 linear both
    }

    .container li.liRun:nth-child(2) img {
        animation: animation2_2 1s 0s 5 linear both
    }

    .container li.liRun:nth-child(3) img {
        animation: animation2_3 1s 0s 5 linear both
    }

    .container li.liRun:nth-child(4) img {
        animation: animation2_4 1s 0s 5 linear both
    }

    .container li.liRun:nth-child(5) img {
        animation: animation2_5 1s 0s 5 linear both
    }

    @keyframes animation1_1 {
        0% {
            transform: rotateY(-90deg)
        }

        100% {
            transform: rotateY(270deg)
        }
    }

    @keyframes animation1_2 {
        0% {
            transform: rotateY(-18deg)
        }

        100% {
            transform: rotateY(342deg)
        }
    }

    @keyframes animation1_3 {
        0% {
            transform: rotateY(54deg)
        }

        100% {
            transform: rotateY(414deg)
        }
    }

    @keyframes animation1_4 {
        0% {
            transform: rotateY(126deg)
        }

        100% {
            transform: rotateY(486deg)
        }
    }

    @keyframes animation1_5 {
        0% {
            transform: rotateY(198deg)
        }

        100% {
            transform: rotateY(558deg)
        }
    }

    @keyframes animation2_1 {
        0% {
            transform: rotateY(90deg)
        }

        100% {
            transform: rotateY(-270deg)
        }
    }

    @keyframes animation2_2 {
        0% {
            transform: rotateY(18deg)
        }

        100% {
            transform: rotateY(-342deg)
        }
    }

    @keyframes animation2_3 {
        0% {
            transform: rotateY(-54deg)
        }

        100% {
            transform: rotateY(-414deg)
        }
    }

    @keyframes animation2_4 {
        0% {
            transform: rotateY(-126deg)
        }

        100% {
            transform: rotateY(-486deg)
        }
    }

    .container li.liRun img.pause {
        animation-play-state: paused !important;
    }

    .container li.liRun.pause {
        animation-play-state: paused !important;
    }
  }
  @keyframes hammer_1 {
      0% {
          transform: rotateZ(0)
      }

      30%,90% {
          transform: rotateZ(-10deg)
      }

      60% {
          transform: rotateZ(10deg)
      }

      100% {
          transform: rotateZ(30deg)
      }
  }
  .hammer-shake {
      animation: hammer_1 .5s 0s ease-in both;
  }
  @keyframes crack {
      0% {
          height: 0;
      }

      100% {
          height: 6rem;
      }
  }

  .crack-height {
      animation: 1s ease forwards;
      animation-name: crack;
  }
  .bottom-tip {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    text-align: center;
    div {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: #e84444;
      border-radius: 4rem;
      color: #fff;
    }
  }
}
</style>
