import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import xiqu from '@/views/modules/xiqu/list'
    import xiquCollection from '@/views/modules/xiquCollection/list'
    import xiquLiuyan from '@/views/modules/xiquLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zixunxinxi from '@/views/modules/zixunxinxi/list'
    import config from '@/views/modules/config/list'
    import dictionaryForum from '@/views/modules/dictionaryForum/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryStatus from '@/views/modules/dictionaryStatus/list'
    import dictionaryXiqu from '@/views/modules/dictionaryXiqu/list'
    import dictionaryXiquCollection from '@/views/modules/dictionaryXiquCollection/list'
    import dictionaryZixunxinxi from '@/views/modules/dictionaryZixunxinxi/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryStatus',
        name: '方式',
        component: dictionaryStatus
    }
    ,{
        path: '/dictionaryXiqu',
        name: '戏曲类型',
        component: dictionaryXiqu
    }
    ,{
        path: '/dictionaryXiquCollection',
        name: '收藏表类型',
        component: dictionaryXiquCollection
    }
    ,{
        path: '/dictionaryZixunxinxi',
        name: '资讯类型',
        component: dictionaryZixunxinxi
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/xiqu',
        name: '戏曲信息',
        component: xiqu
      }
    ,{
        path: '/xiquCollection',
        name: '戏曲收藏',
        component: xiquCollection
      }
    ,{
        path: '/xiquLiuyan',
        name: '戏曲留言',
        component: xiquLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zixunxinxi',
        name: '相关资讯',
        component: zixunxinxi
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
