<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" @top-status-change="handleTopChange" @translate-change="translateChange">
    <slot></slot>
    <div slot="top" class="mint-loadmore-top">
      <svg width="50" height="50" viewbox="0 0 50 50" v-show="topStatus!=='loading'">
        <!-- <circle cx="25" cy="25" r="10" stroke-width="2" stroke="#D1D3D7" fill="none"></circle> -->
        <circle cx="25" cy="25" r="10" stroke-width="2" stroke="#666" fill="none" transform="matrix(0,-1,1,0,0,50)" :stroke-dasharray="fontSize"></circle>
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
    </div>
  </mt-loadmore>
</template>
<script>
export default {
  name: 'comload',
  data() {
    return {
      allLoaded: false,
      listData: 15,
      topStatus: '',
      fontSize: 0
    }
  },
  props: ['topLoad','bottomLoad','isAllLoaded'],
  methods: {
    loadTop: function() {
      var that = this;
      if(that.topLoad){
        that.topLoad(function(){
          that.$refs.loadmore.onTopLoaded();
        });
      }
    },
    loadBottom: function() {
      var that = this;
      if(that.isAllLoaded){
        that.allLoaded = true;
        that.$refs.loadmore.onBottomLoaded();
        return
      }
      that.allLoaded = that.isAllLoaded;
      if(that.bottomLoad){
        that.bottomLoad(function(){
          that.$refs.loadmore.onBottomLoaded();
        })
      }
    },
    handleTopChange: function(status) {
      this.topStatus = status;
    },
    translateChange: function(translate) {
      if (this.topStatus === 'drop' || this.topStatus === 'loading') {
        this.fontSize = '100 100';
      } else {
        this.fontSize = translate + ' 100';
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

</style>
