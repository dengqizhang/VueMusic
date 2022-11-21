import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/SearchMusic',
        name: 'SearchMusic',
        component: () => import('../views/item/SearchMusic.vue')
    },
    {
        path: '/ItemMusicTableVue',
        name: 'ItemMusicTableVue',
        component: () => import('../views/item/ItemMusicTable.vue')
    },
    {
        path: '/ItemMusic2',
        name: 'ItemMusic2',
        component: () => import('../views/item/ItemMusic2.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/Home.vue')
    },
    {
        path: '/NowPlaying',
        name: 'NowPlaying',
        component: () => import('../views/home/NowPlaying.vue')
    },
    {
        path: '/RmdMusic',
        name: 'RmdMusic',
        component: () => import('../views/home/RmdMusic.vue')
    },
    {
        path: '/',
        name: 'main',
        component: () => import('../views/home/home_main.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router