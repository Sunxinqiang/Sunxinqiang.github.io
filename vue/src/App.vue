<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  font-style: normal;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-overflow-scrolling: touch;
}

html,
body {
  background: #f9f9f9;
  width: 100%;
  height: 100%;
  /*禁用长按呼出功能菜单*/
  -webkit-touch-callout: none;
  /*禁用用户元素选择*/
  -webkit-user-select: none;
  -moz-user-select: none;
  font-family: -apple-system, "Helvetica Neue", Roboto, "Segoe UI", sans-serif;
  font-weight: 400;
  font-style: normal;
  overflow: hidden;
}

input {
  outline: none;
  border-radius: none;
  font-family: "Microsoft YaHei", arial, sans-serif;
  border-radius: 0;
}

input[type=button],
input[type=search],
input[type=number] {
  -webkit-appearance: none;
  outline: none;
  /* 隐藏取消按钮 */
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  /* 隐藏放大镜 */
  &::-webkit-search-results-button {
    -webkit-appearance: none;
  }
}

</style>
