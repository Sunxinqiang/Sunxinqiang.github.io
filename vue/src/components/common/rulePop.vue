<template>
  <div v-if="isShow">
    <div class="pop-tab-main" id="scorllContentMain">
      <div class="pop-tab-note" 
          :class="{'pop-tab-active':tabIdx==1}" 
          @click="tabIdx=1"></div>
      <div class="pop-tab-reward" 
          :class="{'pop-tab-active':tabIdx==2}" 
          @click="tab2Click"></div>
      <div class="pop-tab-close" @click="isShow=false;"></div>
      <div class="pop-tab-content-note border-box canscroll" v-show="tabIdx==1">
        <div v-for="x in rules">
          <div class="note-title">{{x.title}}</div>
          <div class="note-content">
            <div v-for="y in x.content">{{y}}</div>
          </div>
        </div>
      </div>
      <div class="pop-tab-content border-box canscroll" v-show="tabIdx==2" >
        <div v-for="x in prize">
          <div>{{x.level}}:{{x.content}}</div>
          <div>{{x.time}}<div class="button button-energized button-small tabpop-btn" ng-click="tabPop3.prizeCallback(x)">去领取</div></div>
          <div>{{x.status}}</div>
        </div>
      </div>
    </div>
    <div class="compop-background" @click="isShow=false;"></div>
  </div>
</template>
<script>
export default {
  name: 'rulePop',
  data() {
    return {
      isShow: false,
      tabIdx: 1,
      rules: [],
      prize: []
    }
  },
  methods: {
    show: function(rules,prize,tabIdx){
      this.rules = rules || this.rules;
      this.prize = prize || this.prize;
      this.tabIdx = tabIdx || 1;
      this.isShow = true;
    },
    hide: function(){
      this.isShow = false;
    },
    tab2Click: function(){
      this.tabIdx = 2;
      this.$emit('tabTwoClick');
    },
    updatePrize: function(prize){
      this.prize = prize;
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$imgPath: "../../assets/img/rulePop";
*{
  box-sizing: border-box;
}
.pop-tab-main {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;

    width: 90%;
    height: 35rem;
    margin-left: -45%;
    margin-top: -16rem;

    background: url(#{$imgPath}/board.png) no-repeat;
    background-size: 100%;
}

.pop-tab-note {
    position: absolute;
    top: 0.1rem;
    left: 10%;

    width: 8rem;
    height: 2.3rem;

    background: url(#{$imgPath}/btm-shm.png) no-repeat;
    background-size: 100%;
}

.pop-tab-reward {
    position: absolute;
    top: 0rem;
    left: 55%;

    width: 8rem;
    height: 2.3rem;

    background: url(#{$imgPath}/btm-jp.png) no-repeat;
    background-size: 100%;
}

.pop-tab-active {
    top: -0.5rem;
}

.pop-tab-close {
    position: absolute;
    top: -0.3rem;
    right: -0.5rem;

    width: 2rem;
    height: 2.2rem;

    background: url(#{$imgPath}/btm-close.png) no-repeat;
    background-size: 100%;
}

.pop-tab-content {
    position: absolute;
    top: 5rem;
    left: 50%;

    width: 80%;
    height: 26rem;
    margin-left: -40%;
    padding: 1rem;
    overflow: auto;

    background: #fddf9f;
    border-radius: 0.6rem;
    color: #9b2c17;
    >div {
        margin: 0.5rem;
        padding: 0.5rem;
        border-radius: 4px;
        background: #f6ecd5;
        .tabpop-btn {
            float: right;
            margin-top: -6px;
        }
    }
}

.pop-tab-content-note {
    position: absolute;
    top: 4rem;
    left: 50%;

    width: 80%;
    height: 26rem;
    overflow-y: auto;
    margin-left: -40%;
    padding: 1rem;

    border-radius: 0.6rem;
    color: #9b2c17;
}

.pop-tab-content-note .note-title {
    display: inline-block;
    padding: .5rem 1rem;


    text-align: center;
    background-color: #eab22c;
    color: #000;
    font-weight: bold;
    border-radius: .5rem;
}

.pop-tab-content-note .note-content {
    margin: 1rem 0;
}

.compop-background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    width: 100%;
    height: 100%;

    background: #000;

    opacity: 0.5;
}
</style>
