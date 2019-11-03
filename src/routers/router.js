import vue from 'vue';
import Router from 'vue-router';

vue.use(Router);

const routerMap = [{
    path:'/',
    name:"home",
    component:()=> import('@/pages/index.vue') 
},{
    path:'/jokes',
    name:"jokes",
    component:()=> import('@/pages/jokes.vue') 
},{
    path:'/weather',
    name:"weather",
    component:()=> import('@/pages/weather.vue') 
},]

export default new Router({
    routes:routerMap,
    mode:"hash"
})