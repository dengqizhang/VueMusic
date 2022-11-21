<template>
    <div id="swiperTop">
        <el-carousel indicator-position="outside" >
            <el-carousel-item v-for="image in state.images" :key="image">
                <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
                <img :src="image.imageUrl"/>

            </el-carousel-item>
            
        </el-carousel>
    </div>
    <div>我是搜索歌曲要展示的部分</div>
</template>

<style>
#swiperTop{
    width: 75%;
    padding: 0px 0px 0px 13%;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
import axios from 'axios'
//生命周期钩子
import { reactive, onMounted } from 'vue';
import { getSearchMusic } from '../../request/api/denglu.js';

export default {
    setup() {
        //把获取的网络图片赋值给一个对象，设为变量
        const state = reactive({
            images: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-1.jpg",
            ]
        });
        onMounted(() => {
            axios.get('http://localhost:3000/banner?type=0').then((res) => {
                console.log(res);
                state.images = res.data.banners
                console.log(state.images);
            })
        })
        return { state }
    },
    methods:{
        enterKey:async function(){
            let res = await getSearchMusic()
        }
    }
};
</script>
