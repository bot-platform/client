import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Tournaments.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/Team.vue'),
    },
    {
      path: '/bots',
      name: "bots",
      component: () => import('@/views/Bots.vue'),
    },
    {
      path: '/bots/:id/test',
      name: "bot_test",
      component: () => import('@/views/BotTest.vue'),
    },
  ],
})
