// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// fonts
import 'font-awesome/css/font-awesome.css'

//flexible
// import 'lib-flexible/flexible.js'

import App from './App'
import router from './router'
// ajax
import axios from 'axios'
import qs from 'qs'

import { Loadmore } from 'mint-ui';

import comload from '@/components/common/comload'
import comload2 from '@/components/common/comload2'
import rulePop from '@/components/common/rulePop'

Vue.component(Loadmore.name, Loadmore);
Vue.component('comload', comload);
Vue.component('comload2', comload2);
Vue.component('rulePop', rulePop);


/**
 * 手机端rem对应像素自适应
 * @type {[type]}
 */
var widthPercent = (window.screen.width/440)*100;
var heightPercent = (window.screen.availHeight/713)*100;
document.getElementsByTagName('html')[0].style = "font-size:"+Math.min(widthPercent,heightPercent)+"%";

Vue.config.productionTip = false


let axiosIns = axios.create({});

axiosIns.defaults.transformRequest = [function (data) {
	    //数据序列化
	    return qs.stringify(data);
	}
];

// 请求时的拦截
axios.interceptors.request.use(function (config) {
    // 发送请求之前做一些处理
    alert(1)
    return config;
  }, function (error) {
    // 当请求异常时做一些处理
    return Promise.reject(error);
  });

// 响应时拦截
axios.interceptors.response.use(function (response) {
    // 返回响应时做一些处理
    if (status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
  }, function (error) {
    // 当响应异常时做一些处理
    return Promise.reject(error);
 });

let ajaxMethod = ['get', 'post'];
let api = {};
ajaxMethod.forEach((method)=> {
    //数组取值的两种方式
    api[method] = function (uri, data, config) {
        return new Promise(function (resolve, reject) {
            axiosIns[method](uri, data, config).then((response)=> {
                /*根据后台数据进行处理
                 *1 code===200   正常数据+错误数据     code!==200   网络异常等
                 *2 code===200   正常数据     code!==200   错误数据+网络异常等
                 * 这里使用的是第一种方式
                 * ......
                 */
                
                resolve(response);

            }).catch((response)=> {
                //reject response
                //alert('xiuxiu，限你10分钟到我面前来,不然...');
            })
        })
    }
});

Vue.prototype.$axios = api;



/* 1 根据process.env.NODE_ENV 获取对应的apiDomain
 * 2 处理ajax库axios，为了以后不重复引用，挂在原型对象上
 * 3 axios是封装在main.js里面的，是为了获取vue实例操作store、router
 * 4 组件里面使用this.$axios.get or  this.$axios.post 调用  使用debugger，查看接口返回数据的走向
 */


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})