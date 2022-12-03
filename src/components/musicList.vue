<template>
    <div class="musicList">歌曲列表</div>
    <div class="CumulativeSongs">
        <el-button type="primary" class="musicListbutton">歌单共：{{ state.musicList.length }}首歌曲</el-button>
    </div>
    <!-- <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="musicname" label="musicname" width="180" />
        <el-table-column prop="name" label="name" />
    </el-table> -->
            <div class="itemList" v-for="(item, i) in state.musicList" :key="i">
                <table class="item">
                    <thead>
                        <tr>
                            <th class="tableth1">序号</th>
                            <th class="tableth2">歌名</th>
                            <th class="tableth3">歌手</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tabletd1">{{ i + 1 }}</td>
                            <td class="tabletd2">{{ item.name }}</td>
                            <!-- 循环歌手，因为一个歌曲可能会有多个歌手，ar的参数是个数组 -->
                            <div class="aaa">
                                <td class="tabletd3" v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}/
                                </td>
                                <!-- <button class="button">喜欢</button>
                        <button class="button">播放</button> -->


                            </div>

                        </tr>
                    </tbody>
                </table>
                <svg t="1669702506763" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="5607" @click="mainStore.getmusicurl(item.id,item.name,item.al.picUrl)">
                    <path
                        d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                        fill="#3D3D3D" p-id="5608"></path>
                </svg>

                <svg id="like" t="1669702713264" class="icon1" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="6526">
                    <path
                        d="M523.733333 841.024l33.173334-32.576 99.690666-97.813333c70.976-69.632 120.32-117.973333 138.709334-135.893334 59.008-57.514667 93.248-121.28 99.626666-184.234666 6.250667-61.44-15.488-119.744-61.589333-164.672-44.992-43.84-98.88-61.909333-157.034667-52.906667-49.365333 7.616-101.034667 34.624-150.016 78.848a21.333333 21.333333 0 0 1-28.586666 0c-48.981333-44.224-100.650667-71.232-150.016-78.869333-58.154667-8.96-112.042667 9.088-157.034667 52.928-46.101333 44.928-67.84 103.210667-61.610667 164.693333 6.4 62.933333 40.64 126.72 99.648 184.213333a100207.573333 100207.573333 0 0 1 145.92 142.826667l24.256 23.765333L512 852.522667l11.733333-11.498667z m-11.733333 11.52l-1.493333 1.429333A2.133333 2.133333 0 0 1 512 853.333333c0.512 0 1.045333 0.213333 1.493333 0.64l-1.493333-1.450666z m157.781333-721.792c71.637333-11.093333 138.901333 11.477333 193.344 64.533333 55.317333 53.930667 81.834667 124.992 74.282667 199.530667-7.466667 73.642667-46.549333 146.368-112.32 210.474667-18.346667 17.898667-67.669333 66.218667-138.453333 135.637333-31.829333 31.232-65.706667 64.448-99.84 97.984L553.6 871.466667l-13.184 12.949333a40.554667 40.554667 0 0 1-56.832 0l-114.602667-112.64-24.213333-23.722667a677626.346667 677626.346667 0 0 0-145.856-142.762666C133.141333 541.184 94.08 468.48 86.613333 394.816c-7.552-74.538667 18.944-145.6 74.282667-199.530667 54.442667-53.056 121.706667-75.605333 193.344-64.533333 53.162667 8.213333 107.093333 34.688 157.781333 76.949333 50.709333-42.24 104.618667-68.736 157.781334-76.949333z"
                        fill="#3D3D3D" p-id="6527"></path>
                </svg>
            </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue"
import { getmusicList } from "../request/api";
import { useRoute } from "vue-router";
import { useStore } from '../store/index.js'
export default {
    setup() {
        //实例化pinia
        const mainStore = useStore()
        //定义响应式数据
        const state = reactive({
            musicList: [],
        })

        onMounted(async () => {
            //实例化route
            const route = useRoute()
            //接受id参数赋给getmusicList的方法
            const res = await getmusicList(route.query.id)

            console.log(res);
            state.musicList = res.data.playlist.tracks
            console.log(state.musicList);
        })
        // const setmusicurl= ()=>{
        //     mainStore.getmusicList()
        // }
        return {
            mainStore,
            // setmusicurl,
            state,
        }
    }
}
</script>
<style>
/* 电脑端css */
@media screen and (min-width: 1200px) {
    .musicListbutton{
        margin-left: 20%;
    }
    .musicList {
        font-size: 1.7rem;
        margin-left: 20%;
    }

    .CumulativeSongs {
        padding: .625rem 0px .625rem 0px;
        /* background-color: rgb(255, 248, 174); */
    }

    .tableth {
        padding: 0px 10px 0px 10px;
    }

    /* .tableth1 {
        padding: 0px 10px 0px 10px;
    } */

    .itemList {
        margin-left: 16%;
        display: flex;
    }

    .icon {
        width: 40px;
    }

    .icon1 {
        width: 40px;
    }

    .musicList {
        font-size: 35px;
        margin-left: 45%;
    }

    .button {
        background-color: rgb(255, 194, 194);
        padding: 0px 20px 0px 20px;
    }

    .audio {
        position: fixed;
        bottom: 0;
    }

    .footerbox {
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 4;
        background-color: rgb(175, 250, 244, 0.5);
    }

    .tableth1 {
        border: solid 1px black;
        width: 5%;
        text-align: center;
        /* padding: 0px 100px 0px 100px; */
    }

    .item {
        border: solid 1px black;
    }

    th {
        background-color: rgb(143, 143, 143);
    }

    td {
        border: solid 1px black;
        background-color: rgb(173, 173, 173);
    }

    .tableth1,
    .tabletd1 {
        /* padding: 0px 1.875rem; */
        width: 300px;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .tabletd2,
    .tableth2 {
        /* padding: 0px 100px; */
        width: 300px;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .tabletd3,
    .tableth3 {
        width:300px;
        max-width: 300px;

    }

    .aaa {
        width: 300px;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

/* 手机端css */
@media only screen and (max-width: 798px) {
    .musicList {
        font-size: 1.7rem;
        margin-left: 20%;
    }

    .CumulativeSongs {
        padding: .625rem 0px .625rem 0px;
        /* background-color: rgb(255, 248, 174); */
    }

    .tableth {
        padding: 0px 10px 0px 10px;
    }

    /* .tableth1 {
        padding: 0px 10px 0px 10px;
    } */

    .itemList {

        display: flex;
    }

    .icon {
        width: 40px;
    }

    .icon1 {
        width: 40px;
    }

    .musicList {
        font-size: 35px;
        margin-left: 45%;
    }

    .button {
        background-color: rgb(255, 194, 194);
        padding: 0px 20px 0px 20px;
    }

    .audio {
        position: fixed;
        bottom: 0;
    }

    .footerbox {
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 4;
        background-color: rgb(175, 250, 244, 0.5);
    }

    .tableth1 {
        border: solid 1px black;
        width: 5%;
        text-align: center;
        /* padding: 0px 100px 0px 100px; */
    }

    .item {
        border: solid 1px black;
    }

    th {
        background-color: rgb(143, 143, 143);
    }

    td {
        border: solid 1px black;
        background-color: rgb(173, 173, 173);
    }

    .tableth1,
    .tabletd1 {
        /* padding: 0px 1.875rem; */
        width: 10%;
        max-width: 10%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .tabletd2,
    .tableth2 {
        /* padding: 0px 100px; */
        width: 5.375rem;
        max-width: 5.375rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .tabletd3,
    .tableth3 {
        width: 120px;
        max-width: 120px;

    }

    .aaa {
        width: 120px;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>