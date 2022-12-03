<template>
  <div class="box">
    <div class="common-layout" style="display: flex;">
      <el-container>
        <el-aside style="width: 100px;"><img src="../src/img/logo.png" alt="" srcset="" id="logoImg"
            style="width: 100px;">
        </el-aside>
        <el-main id="">
          <div id="SiteName" style="font-size: 30px;">乌鱼音乐网</div>
        </el-main>
      </el-container>
    </div>


    <div class="common-layout">
      <el-container>
        <el-header>
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
            <el-menu-item index="1">
              <RouterLink to="/">首页</RouterLink>
            </el-menu-item>
            <el-menu-item index="2">
              <RouterLink to="/PlayMusic">正在播放</RouterLink>
            </el-menu-item>
            <el-menu-item index="3">
              <RouterLink to="/Searchformusic">搜索歌曲</RouterLink>
            </el-menu-item>

            <el-menu-item index="5">
              <RouterLink to="/Recommendedmusic">推荐歌单</RouterLink>
            </el-menu-item>

            <!-- 登陆功能 -->
            <el-menu-item index="6">
              <RouterLink to="/login">登陆</RouterLink>

              <!-- 弹窗模块 -->
            </el-menu-item>
            <!-- 登陆功能 -->
          </el-menu>
        </el-header>
        <el-main>

          <router-view />
        </el-main>
        <el-footer class="footermusic">

          <audio class="audiocss"
            :src="`https://music.163.com/song/media/outer/url?id=` + state.store.musicurl + `.mp3`" @error="error"
            autoplay id="myaudio"></audio>
            <RouterLink :to="{path:'/PlayMusic',query:{id:state.store.musicurl}}"><img id="musicimg" :src="state.store.musicinfo.musicinfo_img" alt="" srcset=""/></RouterLink>

          <div>{{ state.store.musicinfo.musicinfo_name }}</div>
          <!-- 播放按钮 -->
          <img id="play" src="./img/播放.png" alt="" srcset="" @click="play">
          <img id="STOP" src="./img/STOP.png" alt="" srcset="" @click="pause">
        </el-footer>
      </el-container>
    </div>
  </div>
</template>
<style>
/* 电脑端css */
@media screen and (min-width: 1200px) {
  #play {

    width: 70px;
  }

  #musicimg {
    width: 60px;
  }

  #SiteName {
    margin-left: 40%;
  }

  .footermusic {
    display: flex;
    width: 100%;
    background-color: red;
    z-index: 2;
    position: fixed;
    bottom: 0;
  }
}

/* 手机端css */
@media only screen and (max-width: 798px) {
  #musicimg {
    width: 60px;
  }

  .audiocss {
    background-color: red;
  }

  .footermusic {
    display: flex;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.7);
    position: fixed;
    bottom: 0;
  }
}

.singerImg {
  width: 800px;
  display: flex;

}

.audiocss {
  /* margin-left: 20%;
  /* width: 800px; */
}

.box {
  z-index: 1;
  position: relative;
  margin: 0%;
  /* height: 1000px; */
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url("https://tse4-mm.cn.bing.net/th/id/OIP-C.7KykDVp__p0fD6hvpHMLvQHaDd?w=302&h=163&c=7&r=0&o=5&dpr=1.3&pid=1.7");
}
</style>
<script>
import { reactive, onMounted } from "vue"
import { useStore } from "./store";
export default {
  setup() {
    const state = reactive({
      store: useStore(),
    })
    const play = (status) => {
      var audio = document.getElementById('myaudio');
      audio = audio.play();
      // alert("播放")
    }
    const pause = (status) => {
      var audio = document.getElementById('myaudio');
      audio = audio.pause();
      // alert("暂停")
    }
    // const changeimg=(status)=>{
    //   x= document.getElementById('play')
    //   if(status == )
    // }

    const error = () => {
      alert("此歌曲为会员歌曲暂无版权!  sorry ~~~~")
    }
    return {
      pause,
      play,
      error,
      state,
    }
  }
}

</script>