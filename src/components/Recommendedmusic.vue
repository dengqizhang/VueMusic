<template>
    <div>
        <p class="RecommendingMusicText">推荐音乐</p>
    </div>

    <div class="gedanbox">
        <div v-for="item in state.playlist" :key="item" >
            <!-- 控制鼠标悬停事件 -->
            <div class="grid-contentep-bg-purple">
                <div class="musicimg">
                    <div class="musicimglogo">
                        <!-- 点击播放歌单要跳转的地址 -->
                        <router-link :to="{ path: '/musicList', query: { id: item.id } }" id="routerlk"><img
                                src="../img/播放.png" alt="" srcset="" class="playimg1"></router-link>
                    </div>
                    <!-- 获取图片 -->
                    <div class="musicimgbox">
                        <img class="musicimg" :src="item.picUrl" alt="">
                    </div>

                    <!-- 渲染歌词和播放量 -->
                <!-- <div class="musicPlayCount">{{ changeCount(item.playCount) }}</div> -->
                <div class="musicName">{{ item.name }}</div>
                <div class="musicName">播放量：{{ changeCount(item.playCount) }}</div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>
<script>
import { reactive } from 'vue';
import { onBeforeMount, onMounted } from 'vue';
import { getplaylist } from '../request/api.js'
export default {
    setup() {
        //响应式数据state
        const state = reactive({
            playlist: [],
        })
        //定义函数计算播放量转义文字
        const changeCount = (num) => {
            if (num >= 100000000) {
                return (num / 100000000).toFixed(1) + "亿"
            } else if (num >= 10000) {
                return (num / 10000).toFixed(1) + "万"
            }
        }
        onMounted(async () => {
            const res = await getplaylist()
            // console.log(res);
            state.playlist = res.data.result
            // console.log(state);
        })
        return {

            changeCount,
            state,
        }
    },

}




</script>
<style>
/* 视口宽度小于等于768px， 网页背景色是粉色 */
@media screen and (max-width: 48rem) {
    .RecommendingMusicText {
        font-size: 1.70rem;
        padding-left: 1.25rem;
    }
    .playimg1 {
        position: absolute;
        width: 5.125rem;
        padding: 5.625rem;
    }
    .songList{
        padding: .625rem 0px .625rem 0px;
        width: 17.25rem;
    }
    .musicimg{
        width: 16.25rem;
    }
}

/* 视口宽度大于等于1200px， 网页背景色是skyblue */
@media screen and (min-width: 1200px) {
    .RecommendingMusicText {
        padding-left: 90px;
        
    }
    .grid-contentep-bg-purple{
        display: flex;
        flex-direction: row;
    }
    .gedanbox{
        display: flex;
        flex-wrap: wrap;
        width: 1000px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0px 0px 0px 300px;
    }
    .playimg1{
        padding: 80px;
    }
    .RecommendingMusicText{
        font-size: 35px;
    }
    .songList {
        width: 10px;
    }
    .musicimg {
        position: relative;
        display: flex;
        width: 250px;
        flex-wrap: wrap;
        padding: 10px;
    }
    .musicimg:hover img{
        transform: scale(1.2);
    }
    .musicimg img {
        z-index: 1;
        position: relative;
        width: 100%;
        transition: 0.5s all ease-in-out;
        max-width: 900px;
        max-height: 900px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .singerImg {
        position: relative;
        display: flex;
        width: 900px;
        flex-wrap: wrap;
        flex-direction: row;
        
        white-space: nowrap;
    }
    .musicimglogo {
        margin-left: 7%;
        margin-top: 7%;
        z-index: 2;
        width: 60px;
        position: absolute;
    }
}
</style>