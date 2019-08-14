<template>
  <!-- <container /> -->
  <div id="app">
    <header>
    </header>
    <router-view>
    </router-view>
    <div class="all">
      <div class="title">标题</div>
      <div class="content">这是一个测试项目</div>
      <div>test</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      },
      fetchData() {
        var cur_path = this.$route.path;
        var routers = this.$router.options.routes;
      }
    },
    watch: {

    },
    components: {}
  }
</script>

<style lang="scss">
  /* @font-face {
    font-weight: normal;
    font-style: normal;
  } */
#app {
  font-family: "Microsoft yaheilight", 微软雅黑 ! important;
  font-size: 24px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 auto;
}
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}
.all{
  width: 375px;
  height: 375px;
  background: gray;
  color: white;
  margin: auto;
  .title{
    font-size: 48px;
    text-align: center;
  }
  .content{
    font-size: 32px;
  }
}

</style>
