
// // import { Vue } from 'vue-demi'
// import { createStore } from 'vuex'
// // import { getMusicLyric} from "../request/api/item.js"
// // import {getPhoneLogin} from "../request/api/denglu.js"
// export default createStore({
//     //数据，相当于data
//     state: {
//         itemList: [{
//             //播放列表添加默认值
//             al: {
//                 id: 154419005,
//                 name: "漫长",
//                 pic: 109951168031396050,
//                 picUrl: "https://p1.music.126.net/jhpLqyuuLTwGb1jOxsBGLQ==/109951168031396055.jpg",
//                 pic_str: "109951168031396055"
//             },
//             id: 1995608288,
//             // name: "雨爱（抖音版）",
//             // al: [{ name: "灏灏灏仔" }]
//         }],
        // itemListIndex: 0,//歌曲列表的默认下标为0
        // isbtnShow: true,//暂停按钮的显示
        // lyricList: {},//歌词
    // },
    //里面定义方法，操作state方法
    // mutations: {
    //     updateIsbtnShow: function (state, value) {
    //         state.isbtnShow = value
    //     },
    //     pushitemList: function (state, value) {
    //         state.itemList = null
    //         state.itemList.push(value)
    //     },
    //     updateitemList: function (state, value) {
    //         state.itemList = null
    //         console.log(state.itemList);
    //         state.itemList = value
    //         console.log(state.itemList);
    //     },
    //     // 修改播放列表里的歌曲
    //     updateitemListIndex: function (state, value) {
    //         state.itemListIndex = null
    //         state.itemListIndex = value


    //     },
        // updateCurrentTime: function (state, value) {
        //     // console.log(state.currentTime);
        //     state.currentTime = value
        //   },
        //   updateLyricList: function (state, value) {
        //     state.lyricList = value
        //   },
    // },

    //操作异步，操作mutations
    // actions: {
        // getLyric: async function (context, value) {
        //   let res = await getMusicLyric(value)
        //   console.log(res);
        //   context.commit("updateLyricList", res.data.lrc)
        // },
        // getLogin: async function (context, value) {
        //   let res = await getPhoneLogin(value);
        //   // console.log(res);
        //   return res
        // }
//     },
//     modules: {}

// })