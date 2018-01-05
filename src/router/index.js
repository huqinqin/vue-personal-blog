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
  mode:"history",
  base:"/dist/",
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
    },
    {
      path: '/js',
      component: js,
      children:[{
        path:':id',
        component:article
      }]
    },
    {
      path: '/project',
      component: project,
      children:[{
        path:':id',
        component:article
      }]
    },
    {
      path: '/vue',
      component: vue,
      children:[{
        path:':id',
        component:article
      }]
    },
    {
      path: '/angular',
      component: angular,
      children:[{
        path:':id',
        component:article
      }]
    },
    {
      path: '/webPro',
      component: webPro,
      children:[{
        path:':id',
        component:article
      }]
    },
    {
      path: '/mind',
      component: mind,
      children:[{
        path:':id',
        component:article
      }]
    }
  ]
})
