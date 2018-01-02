import Vue from 'vue'
import Router from 'vue-router'
import aboutme from 'components/aboutme/aboutme'
import life from 'components/life/life'
import talk from 'components/talk/talk'
import web from 'components/web/web'
import article from 'components/article/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'web'
    },
    {
      path: '/web',
      component: web,
      children:[{
        path:':id',
        component:article
      }]
    },
    {
      path: '/aboutme',
      component: aboutme
    },
    {
      path: '/life',
      component: life
    },
    {
      path: '/talk',
      component: talk
    }
  ]
})
