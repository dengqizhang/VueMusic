import { defineStore } from 'pinia'
import { login } from '../request/api'
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useStore = defineStore('main', {
  // 其他配置...
  state:()=>({
    //歌曲id
    musicurl: "34144434",
    //用户信息
    user:'',
    //歌曲详情信息
    musicinfo:{
      musicinfo_img: "http://p4.music.126.net/knXuA0rAKFg9eViip-NaGQ==/7783442814172824.jpg",
      musicinfo_name: "Where Is The Love? (Soule Rework)",
    },
    duration:0,
    currentTime:0,//进度条播放时间
    audio:{},//audio标签
  }),
  getters:{

  },
  actions:{
    //播放条的音乐id，图片，歌名
    getmusicurl(url,name,img){
        this.musicurl = url
        this.musicinfo.musicinfo_name = name
        this.musicinfo.musicinfo_img = img
    },
    //用户登陆账号密码
    modificationLogin: async function(useremail,password){
      let res = await login(useremail,password)
      console.log(res);
    },
    //进度条时间
    canplay(event){
      this.duration = event.target.duration
    },
    timeupdate(event){
      this.currentTime = event.target.currentTime
    },
    //获取audio元素
    setauido(value){
      this.audio = value
    }
  }
})