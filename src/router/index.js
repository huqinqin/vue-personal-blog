import Vue from 'vue'
import Router from 'vue-router'
import aboutme from 'components/aboutme/aboutme'
import life from 'components/life/life'
import talk from 'components/talk/talk'
import web from 'components/web/web'
import article from 'components/article/article'
import js from 'components/js/js'
import project from 'components/project/project'
import vue from 'components/vue/vue'
import angular from 'components/angular/angular'
import webPro from 'components/webPro/webPro'
import mind from 'components/mind/mind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'web',
      meta: { keepAlive: true }
    },
    {
      path: '/web',
      component: web,
      meta: { keepAlive: true },
      children:[{
        path:':id',
        component:article,
        meta: { keepAlive: true },
      }]
    },
    {
      path: '/aboutme',
      component: aboutme,
      meta: { keepAlive: true }
    },
    {
      path: '/life',
      component: life,
      meta: { keepAlive: true }
    },
    {
      path: '/talk',
      component: talk,
      meta: { keepAlive: true }
    },
    {
      path: '/js',
      component: js,
      meta: { keepAlive: true },
      children:[{
        path:':id',
        component:article,
        meta: { keepAlive: true },
      }]
    },
    {
      path: '/project',
      component: project,
      meta: { keepAlive: true },
      children:[{
        path:':id',
        component:article,
        meta: { keepAlive: true },
      }]
    },
    {
      path: '/vue',
      component: vue,
      meta: { keepAlive: true },
      children:[{
        path:':id',
        component:article,
        meta: { keepAlive: true },
      }]
    },
    {
      path: '/angular',
      component: angular,
      meta: { keepAlive: true },
      children:[{
        path:':id',
        component:article,
        meta: { keepAlive: true },
      }]
    },
    {
      path: '/webPro',
      component: webPro,
      meta: { keepAlive: true },
      children:[{
        path:':id',
        component:article,
        meta: { keepAlive: true },
      }]
    },
    {
      path: '/mind',
      component: mind,
      meta: { keepAlive: true },
      children:[{
        path:':id',
        component:article,
        meta: { keepAlive: true },
      }]
    }
  ]
})
