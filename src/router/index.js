import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/starships/',
    name: 'Starships',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "starships" */ '../views/Starships.vue'),
  },
  {
      path: '/starships/:name',
      name: 'StarshipsItem',
      component: () => import(/* webpackChunkName: "name" */ '../views/StarshipsItem.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/user:name',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: { requiresAuth: true }
  }
  

  
]

const router = new VueRouter({
  mode: "history",
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requiresAuth)){
    if (!store.state.autentificacion){
      next({
        name:'Signup'
      });
    } else{
      next();
    }
  }else {
    next();
  }
})

export default router
