<template>

    <div class="musicList">
        <h1 style="font-size: 35px; padding: 0px 0px 50px 0px;">发现好歌单</h1>
        <div class="musicTop">
            <!-- 循环渲染歌单 -->
            <div class="gedanbox" v-for="item in musicList" :key="item" :style="avtivecolor">
                <!-- 控制鼠标悬停事件 -->
                <div class="grid-content ep-bg-purple" @mouseover="Mouseover()" @mouseleave="categoryMouseleave()">
                    <div class="musicimg">
                        <div class="musicimglogo">
                            <!-- 点击播放歌单要跳转的地址 -->
                            <router-link :to="{path:'/ItemMusic2',query:{id:item.id}}" id="routerlk"><img src="../../img/播放.png" alt="" srcset=""></router-link>
                        </div>
                        <!-- 获取图片 -->
                        <img :src="item.picUrl" alt="" style="width: 300px;">
                    </div>
                    <!-- 渲染歌词和播放量 -->
                    <div class="musicPlayCount">{{ changeCount(item.playCount) }}</div>
                    <div class="musicName">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getMusicList } from "../../request/api/denglu.js"
export default {
    data() {
        return {
            musicList: [],
            avtivecolor: "color:#b88b8b8"
        };
    },
    methods: {
        // 歌单接口
        async getGnedan() {
            let res = await getMusicList();
            console.log(res);
            this.musicList = res.data.result
        },
        // 播放量计数单位处理函数
        changeCount: function (num) {
            if (num >= 100000000) {
                return (num / 100000000).toFixed(1) + "亿"
            } else if (num >= 10000) {
                return (num / 10000).toFixed(1) + "万"
            }
        },
        Mouseover() {
            // console.log("进入，悬停区域");
            this.avtivecolor = "color:#fede0e";
        },
        categoryMouseleave(index) {
            // console.log("离开，悬停区域");
            this.avtivecolor = "color:#b88b8b8";
        }
    },
    mounted() {
        this.getGnedan();
    }
}
</script>

<style>
.musicTop {
    display: flex;
    flex-wrap: wrap;
}

.musicimg {
    width: 300px;
    height: 300px;
    overflow: hidden;
    margin: 0 auto;

}

.musicimg img {
    z-index: 1;
    position: relative;
    width: 100%;
    transition: 0.5s all ease-in-out;
}

.musicimg:hover img {

    transform: scale(1.5);
}

.musicimglogo {
    margin-left: 7%;
    margin-top: 7%;
    z-index: 2;
    width: 60px;
    position: absolute;
}
</style>