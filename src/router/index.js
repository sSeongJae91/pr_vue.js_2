import Vue from 'vue'
import Router from 'vue-router'
import PostListPage from '@/pages/PostListPage'
import PostViewPage from '@/pages/PostViewPage'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import AppHeader from '@/components/AppHeader'
import PostCreatePage from '@/pages/PostCreatePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostListPage',
      component: PostListPage
    },
    {
      path: '/post/create',
      name: 'PostCreatePage',
      components: {
        header: AppHeader,
        default: PostCreatePage
      }
    },
    {
      path: '/post/:postId',
      name: 'PostViewPage',
      components: {
        header: AppHeader,
        default: PostViewPage
      },
      props: {
        default: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      components: {
        header: AppHeader,
        default: Signup
      }
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
