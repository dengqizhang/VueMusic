import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    
    {path: '/',component: () => import('../components/home.vue')},

    {path: '/PlayMusic', name:'PlayMusic',component: () => import('../components/PlayMusic.vue')},

    {path: '/Searchformusic',name:'Searchformusic',component: () => import('../components/Searchformusic.vue')},

    {path: '/Recommendedmusic',name:'Recommendedmusic',component: () => import('../components/Recommendedmusic.vue')},

    {path: '/login', name:'login',component: () => import('../components/login.vue')},

    {path: '/musicList', name:'musicList',component: () => import('../components/musicList.vue')},

    {path: '/singerList', name:'singerList',component: () => import('../components/singerList.vue')},


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router