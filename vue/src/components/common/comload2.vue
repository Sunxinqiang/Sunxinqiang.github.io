<template>
  <div @touchstart="moveStart" @touchmove="move" @touchend="end" ref="scrollMain" :style="{'padding-top':topPadding}">
    <div ref="svgContent" class="textcenter">
      <svg width="50" height="50" viewbox="0 0 50 50" v-show="topStatus!=='loading'">
        <!-- <circle cx="25" cy="25" r="10" stroke-width="2" stroke="#D1D3D7" fill="none"></circle> -->
        <circle cx="25" cy="25" r="10" stroke-width="2" stroke="#666" fill="none" transform="matrix(0,-1,1,0,0,50)" :stroke-dasharray="transition"></circle>
        <text class="svg-text" x="19.5" y="28.5" fill="#666">↓</text>
      </svg>
      <svg class="lds-spinner" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;" v-show="topStatus==='loading'">
        <g transform="rotate(0 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(30 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(60 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(150 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(210 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(300 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(330 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#666">
            <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g>
      </svg>
      <span class="load-text">{{loadText}}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
const dashLen = 2*Math.PI*10;//loading圆圆周长
export default {
  name: 'comload2',
  data() {
    return {
      topStatus: '',
      starty: 0 ,
      movey: 0,
      transition: 0
    }
  },
  props: ['topLoad','bottomLoad','isAllLoaded','topPadding'],
  methods: {
    moveStart: function(event){
      this.starty = event.touches[0].screenY;
    },
    move: function(event){
      var scrollTop = this.$slots.default[0].elm.scrollTop;
      if(scrollTop==0){
        this.movey = event.touches[0].screenY - this.starty;
        if(this.movey/2<=dashLen&&this.movey>=0){
          this.topStatus = 'moving';
          this.transition = this.movey/2;
          this.$refs.scrollMain.style.transform = 'translateY('+this.transition+'px)';
        }
        if(this.movey/2>dashLen){
          this.$refs.scrollMain.style.transform = 'translateY('+(dashLen+(this.movey/2-dashLen)/2)+'px)';
          this.topStatus = 'drop';
        }

      }
    },
    end: function(){
      if(this.topStatus == 'moving'){
        this.starty = 0;
        this.$refs.scrollMain.style.transform = 'translateY(0px)';
      }
      if(this.topStatus == 'drop'){
        this.$refs.scrollMain.style.transform = 'translateY('+(dashLen)+'px)';
        this.topStatus = 'loading';
        this.topLoad()
      }
    },
    onTopLoaded: function(){
      this.$refs.scrollMain.style.transform = 'translateY(0px)';
      setTimeout(()=>{
        this.topStatus = 'moving';
        this.starty = 0;
      },500)
    }
  },
  mounted() {
    this.$refs.scrollMain.style.transition = 'all 0.5s';
    this.$refs.scrollMain.style['transition-timing-function'] = 'cubic-bezier(0,1.04,.7,1.02)';
    var svgHeight = this.$refs.svgContent.clientHeight;
    this.$refs.scrollMain.style.marginTop = '-' + svgHeight +'px';
  },
  computed: {
    loadText: function () {
      if(this.topStatus=='moving'){
        return '下拉即可刷新'
      }
      if(this.topStatus=='drop'){
        return '释放即可刷新'
      }
      if(this.topStatus=='loading'){
        return '正在刷新...'
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.svg-text {
  font-size: .8rem;
  font-weight: bold;
}
.textcenter {
  text-align: center;
}
.load-text {
  display: inline-block;
  line-height: 50px;
  vertical-align: top;
}
</style>
