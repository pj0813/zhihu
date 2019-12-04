import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../components/index'
import find from '../components/find'
import answer from '../components/answer'
import follow from '../components/index/follow'
import hot from '../components/index/hot'
import introduce from '../components/index/introduce'

Vue.use(VueRouter)//全局使用路由
const routes=[//配置路由，这里只能是routes,其他路由就没作用
    {
        path:'/',
        component:index,
		children:[
			{	
				path:'/',
				component:introduce
			},
			{	
				path:'/follow',
				component:follow
			},
			{	
				path:'/hot',
				component:hot
			}
		]
    },
    {
        path:'/find',
        component:find
    },
    {
        path:'/answer',
        component:answer
    }
]
const router=new VueRouter({
    mode:'history',//去掉地址栏内的#
    routes,
	linkExactActiveClass: 'is_active',
    linkActiveClass: 'active' //view-link中选中的添加class类名
})
export default router
