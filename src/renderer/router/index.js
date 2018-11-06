import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      redirect: '/landing'
    },
    {
      path: '/test',
      name: 'test',
      component: require('@/components/Test').default
    },
    {
      path: '/screen',
      name: 'screen',
      component: require('@/components/ScreenPage').default
    },
    {
      path: '/translation',
      name: 'translation',
      component: require('@/components/TranslationPage').default
    },
    {
      path: '/message',
      name: 'message',
      component: require('@/components/MessagePage').default
    }
  ]
})
