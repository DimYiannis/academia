import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import login from '../pages/login.vue'
import register from '../pages/register.vue'
import dashboard from '../pages/dashboard.vue'
import post from '../pages/post.vue'
import profile from '../pages/profile.vue'
import article from '../pages/article.vue'
import messages from '../pages/messages.vue'
import bookmarks from '../pages/bookmarks.vue'
import sharedposts from '../pages/sharedposts.vue'
import users from '../pages/users.vue'


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
        path: '/profile',
        name: 'profile',
        component: profile,
      },
      {
        path: '/https://academia-frontend.onrender.com/posts',
        name: 'post',
        component: post,
      },
      {
        path: '/article/:doi',
        name: 'article',
        component: article,
      },
      {
        path: '/messages',
        name: 'messages',
        component: messages,
      },
      {
        path: '/bookmarks',
        name: 'bookmarks',
        component: bookmarks,
      },
      {
        path: '/sharedposts',
        name: 'sharedposts',
        component: sharedposts,
      },
      {
        path: '/profile/:_id',
        name: 'users',
        component: users,
      },
    ],
  },
  
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })


  export default router