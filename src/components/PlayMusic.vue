<template>
  <img :src="state.img" alt="" style="width: 100px;height: 100px;">
  <div style="width: 100px;">{{ state.musciname }}</div>
  <div>{{state.lyr}}</div>
</template>


<script>
import { SongDetails, getlyric } from '../request/api.js'
import { ref, onMounted, reactive } from "vue"
import { useRoute } from "vue-router";
// import { ref } from 'vue';
import { useStore } from '../store/index.js'
export default {
  setup() {
    //定义响应式数据
    const state = reactive({
      //实例化pinia
      store: useStore(),
      img: "",//图片
      musciname: "",//歌名
      lyr: [],//歌词
    })
    //接受路由传参
    const route = useRoute();
    console.log(route.query.id);

    onMounted(async () => {

      // 歌词和歌曲详情的接口
      const res = await SongDetails(route.query.id)
      const ren = await getlyric(route.query.id)
      console.log(res);
      console.log(ren);
      //歌曲图片，歌词，歌名
      state.img = res.data.songs[0].al.picUrl
      state.musciname = res.data.songs[0].al.name
      state.lyr = ren.data.lrc.lyric
      console.log(state.img);
      console.log(state.lyr);

    })


    return {
      state,
    };
  },
};
</script>
<style>

</style>