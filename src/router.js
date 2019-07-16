import Vue from 'vue'
import Router from 'vue-router'
import Cart from './views/Cart.vue'
import Message from './views/Message.vue'
import User from './views/User.vue'
import Index from './views/Index.vue'
import Item from './views/Item.vue'

import Recommend from './views/Index/Recommend.vue'
import Furniture from './views/Index/Furniture.vue'
import HomeFurniture from './views/Index/homeFurniture.vue'
import Activity from './views/Index/Activity.vue'
import Category from './views/Category.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

import Mima from './views/Login/Mima.vue'
import Duanxin from './views/Login/Duanxin.vue'
import ProductGroup from '@/views/ProductGroup.vue'
import Welcome2 from '@/views/Welcome2.vue'

import Tuihuan from '@/views/Tuihuan.vue'
import Baojia from '@/views/Baojia.vue'

Vue.use(Router)
const auth = {
  isLogin(){
    return false
  }
}

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'furniture',
          component: Furniture
        },
        {
          path: 'homefurniture',
          component: HomeFurniture
        },
        {
          path: 'activity',
          component: Activity
        }
      ]
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/item/:id',
      name: "detail",
      component: Item
    },
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: 'mima',
          component: Mima
        },
        {
          path: 'duanxin',
          component: Duanxin
        }
      ]
    },
    {
      path: '/productGroup/:id',
      component: ProductGroup
    },
    {
      path: '/welcome2',
      component: Welcome2
    },
    
    {
      path: '/register',
      component: Register
    },
    {
      path: '/tuihuan',
      component: Tuihuan
    },
    {
      path: '/baojia',
      component: Baojia
    },


    {
      path: '*',
      redirect: '/index'
    }
  ]
  
})
router.beforeEach((to, from, next) => {
  if(to.path==='/user'){
    console.log('cha');
    if(auth.isLogin()){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})
router.beforeEach((to, from, next) => {
if(to.path==='/cart'){
  console.log('cha2');
  if(auth.isLogin()){
    next()
  }else{
    next("/login")
  }
}else{
  next()
}
})
router.beforeEach((to, from, next) => {
if(to.path==='/message'){
console.log('cha');
if(auth.isLogin()){
  next()
}else{
  next("/login")
}
}else{
next()
}
})


export default router
