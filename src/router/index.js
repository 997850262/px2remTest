import store from '../store'
const Router = require('vue-router')

const router = new Router({
  // mode: 'hash',
  mode: 'history',
  base: '/',
  // base: '/history',
  routes: [
    {
      path: '/',
      name: 'App',
    },
  ]
})

// 可以用来路由参数验证
router.beforeEach((to, from, next) => {
  // console.log(to,from)
  // console.log(to.params['language'])
  // console.log(to.params['coin'])
  if(to.params['language']==undefined){
    to.params['language']='cn'
  }
  if(to.params['coin']==undefined){
    to.params['coin']='btc'
  }
  if(to.matched.length==0){
    next({
      name:'data',params:{language:to.params['language'],coin:to.params['coin']}
    })
  }
  // if(to.meta.title){

  // }
  // document.title = metrics.coin[store.state.coin].shortname + '(' + store.state.coin.toUpperCase() + ')' + ' 指标，价格，估值信息'
  next()
})

export default router
