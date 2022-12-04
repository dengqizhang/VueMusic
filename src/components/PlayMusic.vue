<template>
  <!-- 歌曲名称 -->
  <div class="playname">{{ state.musciname }}</div>
  <div class="imgandlist">
    <!-- 唱片 -->
    <img :src="state.img" alt="" class="playimg">
    <!-- 歌词 -->
    <el-scrollbar class="lyrList" >
      <p v-for="(item, index) in state.lyr" :key="index">{{ item }}</p>
    </el-scrollbar>
  </div>
<!-- 进度条 -->
  <input class="playline" @change="timeChange" type="range" min="0" :max="state.store.duration"
    v-model="state.store.currentTime">{{
      state.store.currentTime
    }}
  <div class="footer"></div>
</template>


<script>
import { SongDetails, getlyric } from '../request/api.js'
import { ref, onMounted, reactive, getCurrentInstance } from "vue"
import { useLink, useRoute } from "vue-router";
import { useStore } from '../store/index.js'
export default {
  setup() {
    //定义响应式数据
    const state = reactive({
      store: useStore(),//实例化pinia
      img: "",//图片
      musciname: "",//歌名
      lyr: [],//歌词
      value: "",//进度条
    })


    //歌曲进度条拖动事件
    const timeChange = function () {
      // console.log(state.store.audio);
      //将进度条的播放时间赋给在pinia中audio的播放时间，达到改变其他页面值的效果
      state.store.audio.currentTime = state.store.currentTime
    }


    onMounted(async () => {

      // 歌词和歌曲详情的接口
      const res = await SongDetails(state.store.musicurl)
      const ren = await getlyric(state.store.musicurl)
      // console.log(res);
      // console.log(ren);
      //歌曲图片，歌词，歌名
      state.img = res.data.songs[0].al.picUrl
      state.musciname = res.data.songs[0].al.name
      state.lyr = ren.data.lrc.lyric
      // console.log(state.img);
      // console.log(state.lyr);
      //歌词部分的处理
      let lyricArr = state.lyr.split('[').slice(1);
      let lrcobj = {};
      // console.log(lyricArr);
      lyricArr.forEach(itme => {
        let arr = itme.split(']');//分割右括号
        //时间换算成秒
        let m = parseInt(arr[0].split(':')[0])
        let s = parseInt(arr[0].split(':')[1])
        arr[0] = m * 60 + s;
        if (arr[1] != '\n') {
          lrcobj[arr[0]] = arr[1]
        }
      });
      state.lyr = lrcobj;
      // console.log(state.lyr);


      //监听歌词，实现歌词滚动效果

    })

    return {
      timeChange,
      state,
    };
  },
};
</script>
<style>
/* 电脑端css */
@media screen and (min-width: 1200px) {
  .playname {
    font-size: 30px;
    padding: 0px 0px 50px 230px;
  }

  .playimg {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-left: 10%;
    animation: rotate 6s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
      /*从0度开始*/
    }

    100% {
      transform: rotateZ(360deg);
      /*360度结束*/
    }
  }

  .imgandlist {
    display: flex;
  }

  .lyrList {
    text-align: center;
    max-width: 600px;
    margin-left: 20%;
    height: 400px;
    border-top: solid 2px rgb(124, 124, 124);
  }

  .footer {
    height: 100px;
  }

  .playline {
    width: 100%;
  }

  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
}

/* 手机端css */
@media only screen and (max-width: 798px) {

  .playimg {
    width: 100%;
    z-index: 1;
    opacity: 0.2;
  }

  .lyrList {
    z-index: 2;
    margin-top: -300px;
    text-align: center;
    height: 300px;
    border-top: solid 2px rgb(124, 124, 124);
  }

  .footer {
    height: 200px;
  }

  .playline {
    width: 100%;
  }

  .playname {
    text-align: center;
    font-size: 30px;

  }
}
</style>