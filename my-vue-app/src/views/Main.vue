<template>
  <!-- <div class="dlbox">
    <div class="dlbox_dl">
      <h1>欢迎登陆</h1>
      <input type="text" placeholder="请输入手机号"><br>
      <input type="password" placeholder="请输入密码">
      <el-button type="primary">确认</el-button>
    </div>
  </div> -->
  <div class="box">
    <!-- logo和网页昵称的部分 -->
    <div class="common-layout">
      <el-container>
        <el-aside width="200px"><img src="../img/logo.png" alt="" srcset="" id="logoImg"></el-aside>
        <el-main id="">
          <div id="SiteName">乌鱼音乐网</div>
        </el-main>
      </el-container>
    </div>
    <!-- logo和网页昵称的部分 -->
    <!-- 菜单栏的部分 -->
    <div class="common-layout">
      <el-container>
        <el-header class="headerbox">
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
            <el-menu-item index="1">
              <router-link to="/" id="routerlk">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/home" id="routerlk">正在播放</router-link>
            </el-menu-item>
            <!-- <el-menu-item index="3">
              <router-link to="/NowPlaying" id="routerlk">本地导入音乐</router-link>
            </el-menu-item> -->
            <el-menu-item index="4">
              <router-link to="/SearchMusic" id="routerlk">搜索歌曲</router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link to="/RmdMusic" id="routerlk">推荐歌单</router-link>
            </el-menu-item>

            <!-- 登陆功能 -->
            <el-menu-item index="6">
              登陆

              <!-- 弹窗模块 -->
            </el-menu-item>
            <!-- 登陆功能 -->
          </el-menu>
        </el-header>
        <!-- 菜单栏的部分 -->
        <!-- main的部分 -->
        <el-main>
          <div class="mainbox">
            <router-view />
          </div>
        </el-main>
        <!-- main的部分 -->
        <!-- footer的部分 -->
        <el-footer>
          <FooterMusic />
          <!-- <div class="footerMusic">
            <audio src="" controls style="width: 600px;"></audio>
            <bf @func="getMsgFormSon"></bf>
        </div>  -->
        
        </el-footer>
        <!-- footer的部分 -->
      </el-container>
    </div>
  </div>
</template>


<script>
import FooterMusic from '../views/item/FooterMusic.vue'
// import bf from '../views/item/ItemMusicTable.vue'
import { ref, computed, reactive } from 'vue';
export default {

  data() {
    return {
      // props: ['itemList'],
      // msgFormSon: "this is msg"
    };
  },
  components:{
    FooterMusic,
  },
  // methods: {
  //   getMsgFormSon(data){
  //     this.msgFormSon = data
  //     console.log(this.msgFormSon);
  //   }
  // },
  
}


</script>
<style>

* {
  margin: 0;
  padding: 0;
}
.footerMusic{
  z-index: 4;
  position: fixed;
        bottom: 0;
        width: 100%;
        background-color: aquamarine;
}
#SiteName {
  font-size: 40px;
  text-align: center;
  /* line-height: 1; */
  padding: 0px 100px 0px 0px;
}

#logoImg {
  padding: 0px 0px 0px 100px;
  width: 100px;
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

.demo-input-size {
  width: 40%;
  padding: 5px 0px 0px 0px;
}

.el-menu-demo {
  justify-content: space-around;
}

#routerlk {
  text-decoration: none;
}
</style>