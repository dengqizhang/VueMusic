<template>
    <itemMusicTop :playlist="state.playlist"/>
    <ItemMusicTableVue :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>
<script>
import {useRoute} from 'vue-router'
import { onMounted,reactive } from 'vue';
import{getMusicItemList,getItemList} from '../../request/api/item.js'
import itemMusicTop from './itemMusicTop.vue'
import ItemMusicTableVue from './ItemMusicTable.vue';
import FooterMusic from './FooterMusic.vue'
export default {
    setup(){
        const state = reactive({
            playlist:{},//歌单详情页的数据
            itemList:[],//歌单的歌曲
        })
        onMounted(async ()=>{
            let id = useRoute().query.id
            console.log(id);
            // 获取歌单详情
            let res = await getMusicItemList(id);
            console.log(res);
            state.playlist = res.data.playlist
            // 获取歌单歌曲
            let result = await getItemList(id);
            console.log(result);
            state.itemList = result.data.songs
        });
        return {state}
    },
    components:{
        itemMusicTop,
        ItemMusicTableVue,
        FooterMusic,

    }
}
</script>