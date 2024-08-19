import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/views/login.vue'
import logout from '@/views/logout.vue'

import AtricleCategory from '@/views/article/AtricleCategory.vue'
import ArticleManage from '@/views/article/ArticleManage.vue'
import UserInfo from '@/views/user/UserInfo.vue'
import UserResetPassword from '@/views/user/UserResetPassword.vue'
import UserAvatar from '@/views/user/UserAvatar.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'logout',
    component: logout,
    redirect: '/article/manage',
    children: [
      { path: '/article/category',
        component: AtricleCategory
      },
      { path: '/article/manage',
        component: ArticleManage
      },
      { path: '/user/info',
        component: UserInfo
      },
      { path: '/user/avatar',
        component: UserAvatar
      },
      {path:'/user/resetpassword',
        component: UserResetPassword
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router