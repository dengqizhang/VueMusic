<template>

    <div id="swiperTop">
        <!-- 轮播图 -->
        <div class="slideshowbox">
            <van-swipe class="slideshow" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="image in state.img" :key="image">
                    <img class="slideshowImg" :src="image.imageUrl" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 轮播图 -->
        <!-- 歌手列表 -->
        <div class="singerImgbox">
            <p class="hottopic">歌手列表</p>
            <div class="singerImg">
                <div v-for="(item, index) in state.singerImg" :key="index">
                    <!-- <div>{{item.img1v1Url}}</div> -->
                    <el-image class="img" :src="item.img1v1Url" alt="" srcset=""/>
                    <!-- 播放按钮 -->
                    <div class="Playbutton">
                        <RouterLink to="/singerList"><img class="Playbuttonimg" src="../img/播放.png" alt="" srcset="" />
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <!-- 歌手列表 -->
        <div>

        </div>

    </div>
</template>


<script>
// if (window.screen.width >= 1200) {
//     document.write('<link rel="stylesheet" href="src\css\pc.css"')
// }
import { recommendsinger } from "../request/api";
import { getmusicimg } from "../request/api";
import { reactive, onMounted } from "vue"
export default {
    setup() {
        const state = reactive({
            //轮播图
            img: [],
            //歌手图片
            singerImg: [],
        })
        //获取歌手接口
        onMounted(async () => {
            // debugger
            const res = await getmusicimg()
            console.log(res);
            state.img = res.data.banners
            console.log(state.img);

            const res1 = await recommendsinger()
            state.singerImg = res1.data.artists
            console.log(state.singerImg);

        })

        return {
            state,
            // error,
        }
    }
}
</script>
<style>
    .slideshowImg {
        width: 100%;
        /* height: 15rem; */
    }

    .slideshowbox {
        width: 100%;
    }

    /* .slideshow{
        width: 100%;
    } */
    .hottopic {
        font-size: 1.3rem;
    }

    .singerImg:hover img {
        transform: scale(1.5);
    }

    .singerImg img {

        transition: 0.5s all ease-in-out;

    }

    .singerImg {
        position: relative;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
        max-width: 100%;
        /* max-height: 25em; */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .Playbuttonimg {
        padding: 6.25rem 3.125rem 3.125rem 3.125rem;
        width: 1.875rem;

    }

    .img {
        width: 6.875rem;
        /* width: 20%; */
        padding: .625rem;
    }






.Playbutton {
    position: absolute;
    margin-top: -200px;
}



#swiperTop {
    width: 75%;
    padding: 0px 0px 0px 13%;
    /* height: 500px; */
}

.el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>