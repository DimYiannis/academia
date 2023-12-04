import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import login from '../pages/login.vue'
import register from '../pages/register.vue'
import dashboard from '../pages/dashboard.vue'
import post from '../pages/post.vue'
import profile from '../pages/profile.vue'
//import article from '../pages/article.vue'



const routes = [ 
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    children: [
      //nested routes for the dashboard
      {
        path: '/dashboard/profile',
        name: 'profile',
        component: profile,
      },
      {
        path: '/dashboard',
        name: 'post',
        component: post,
      },
      // {
      //   path: '/dashboard/articles/:id',
      //   name: 'article',
      //   component: article,
      // },
    ],
  },
  
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })


  export default router