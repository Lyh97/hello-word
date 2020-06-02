import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index'

import HelloWorld from '@/components/HelloWorld';
import Homepage from '@/components/comment/HomePage';
import Login from '@/components/comment/Login';
import SlotTest from '@/components/SlotTest';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path:'/',
            name: 'Homepage',
            component: Homepage,
            children: [
                {
                    path:'/HelloWord',
                    name: 'HelloWord',
                    component: HelloWorld
                },
                {
                    path:'/SlotTest',
                    name: 'SlotTest',
                    component: SlotTest
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(store.getters.userName != ""){ //如果有就直接到首页咯
        next();
    } else {
        if(to.path=='/login'){ //如果是登录页面路径，就直接next()
            window.console.log(from.path);
            next();
        } else { //不然就跳转到登录；
            window.console.log(from.path);
            next('/login');
        }
    }
})
export default router