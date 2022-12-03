<template>
    <div class="searchTop">
        <!-- 返回图标 -->
        <svg t="1668685289079" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4990" width="50" height="50">
            <path
                d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
                fill="" p-id="4991"></path>
        </svg>
        <!-- 搜索输入框 -->
        <div class="searchinput">
            <input type="text" placeholder="请输入歌手/歌曲名称/专辑/mv:" v-model="searchKey" @keydown.enter="enterkey">
        </div>
    </div>
    <div class="searchHistory">
        <p>历史</p>
        <svg t="1668692061811" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="6101" width="30" height="30" @click="delHistory">
            <path
                d="M829.952 271.36h-126.976v-51.2a76.288 76.288 0 0 0-75.776-76.288h-256a76.288 76.288 0 0 0-75.776 76.8v51.2H168.448a25.6 25.6 0 0 0 0 51.2h661.504a25.6 25.6 0 0 0 0-51.712z m-178.176 0h-307.2v-51.2a26.112 26.112 0 0 1 25.6-25.6h256a24.576 24.576 0 0 1 24.576 25.6zM448.512 677.376V398.336a25.6 25.6 0 0 0-51.2 0v279.04a25.6 25.6 0 0 0 51.2 0zM601.088 677.376V398.336a25.6 25.6 0 0 0-51.2 0v279.04a25.6 25.6 0 0 0 51.2 0z"
                fill="" p-id="6102"></path>
            <path
                d="M735.744 346.624a25.6 25.6 0 0 0-25.6 25.6v381.44a102.4 102.4 0 0 1-102.4 102.4H390.656a102.4 102.4 0 0 1-102.4-102.4V372.224a25.6 25.6 0 0 0-51.2 0v381.44a153.6 153.6 0 0 0 153.6 153.6h217.6a153.6 153.6 0 0 0 153.6-153.6V372.224a25.6 25.6 0 0 0-26.112-25.6z"
                fill="" p-id="6103"></path>
        </svg>
    </div>
    <div>
        <span v-for="item in keyWorldList" :key="item" class="sslb" @click="searchHistory(item)">
            {{ item }}/
        </span>

        <div class="itemList" v-for="(item, i) in searchList" :key="i">
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
                        <div class="aaa">
                            <td class="tabletd3" v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}</td>
                        </div>
                    </tr>
                </tbody>
            </table>
            <svg t="1669702506763" class="icon2" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="5607" @click="mainStore.getmusicurl(item.id,item.name,item.al.picUrl)">
                <path
                    d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                    fill="#3D3D3D" p-id="5608"></path>
            </svg>

            <svg id="like" t="1669702713264" class="icon3" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="6526">
                <path
                    d="M523.733333 841.024l33.173334-32.576 99.690666-97.813333c70.976-69.632 120.32-117.973333 138.709334-135.893334 59.008-57.514667 93.248-121.28 99.626666-184.234666 6.250667-61.44-15.488-119.744-61.589333-164.672-44.992-43.84-98.88-61.909333-157.034667-52.906667-49.365333 7.616-101.034667 34.624-150.016 78.848a21.333333 21.333333 0 0 1-28.586666 0c-48.981333-44.224-100.650667-71.232-150.016-78.869333-58.154667-8.96-112.042667 9.088-157.034667 52.928-46.101333 44.928-67.84 103.210667-61.610667 164.693333 6.4 62.933333 40.64 126.72 99.648 184.213333a100207.573333 100207.573333 0 0 1 145.92 142.826667l24.256 23.765333L512 852.522667l11.733333-11.498667z m-11.733333 11.52l-1.493333 1.429333A2.133333 2.133333 0 0 1 512 853.333333c0.512 0 1.045333 0.213333 1.493333 0.64l-1.493333-1.450666z m157.781333-721.792c71.637333-11.093333 138.901333 11.477333 193.344 64.533333 55.317333 53.930667 81.834667 124.992 74.282667 199.530667-7.466667 73.642667-46.549333 146.368-112.32 210.474667-18.346667 17.898667-67.669333 66.218667-138.453333 135.637333-31.829333 31.232-65.706667 64.448-99.84 97.984L553.6 871.466667l-13.184 12.949333a40.554667 40.554667 0 0 1-56.832 0l-114.602667-112.64-24.213333-23.722667a677626.346667 677626.346667 0 0 0-145.856-142.762666C133.141333 541.184 94.08 468.48 86.613333 394.816c-7.552-74.538667 18.944-145.6 74.282667-199.530667 54.442667-53.056 121.706667-75.605333 193.344-64.533333 53.162667 8.213333 107.093333 34.688 157.781333 76.949333 50.709333-42.24 104.618667-68.736 157.781334-76.949333z"
                    fill="#3D3D3D" p-id="6527"></path>
            </svg>
        </div>
    </div>


</template>

<script>
import { ref, reactive, onMounted } from "vue"
import { getSearchMusic } from "../request/api";
import { useStore } from "../store";
export default {
    data() {
        return {
            //实例化pinia
            mainStore: useStore(),

            //保存搜索的数组
            keyWorldList: [],
            //搜索关键字的变量
            searchKey: "",
            //搜索结果的保存数组
            searchList: []


        }
    },
    mounted() {
        //渲染完把localStorage里面的值赋给keyWorldList,如果添加的时候没有数组就赋值给一个空数组
        this.keyWorldList = JSON.parse(localStorage.getItem('keyWorldList')) ? JSON.parse(localStorage.getItem('keyWorldList')) : []
    },
    methods: {
        enterkey: async function () {
            if (this.searchKey !== "") {
                this.keyWorldList.unshift(this.searchKey);
                //去重，用new set数组无重复值
                this.keyWorldList = [...new Set(this.keyWorldList)]
                //搜索的记录长度限制，超出限制删除最后一个
                if (this.keyWorldList.length > 5) {
                    this.keyWorldList.splice(this.keyWorldList.length - 1, 1)
                }
                //搜索的数组永久保存
                localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList))
                let res = await getSearchMusic(this.searchKey)
                console.log(res);
                this.searchList = res.data.result.songs
                this.searchKey = ""
            }

        },
        delHistory: function () {
            //removeitem删除方法
            localStorage.removeItem("keyWorldList")
            this.keyWorldList = []
            console.log(111);
        },
        searchHistory: async function (item) {
            let res = await getSearchMusic(item)
            console.log(res);
            this.searchList = res.data.result.songs
        },
    },
}

</script>

<style>
/* 电脑端css  */
@media screen and (min-width: 1200px) {
    .icon2 {
        width: 40px;
        /* margin-left: 65%; */
        /* padding: 0px 0px 150px 0px; */
        /* margin-top: -200px; */
    }

    .icon3 {
        /* padding: 0px 10px; */
        width: 40px;
        /* padding: 0px 0px 150px 0px; */
        /* margin-top: -200px; */
    }

    .searchHistory {
        display: flex;
    }

    .searchTop {
        display: flex;
    }

    .searchinput input {
        width: 500px;
        height: 50px;
        border: none;
        border-bottom: 1px solid black;
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
        width: 20em;
        max-width: 20em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .tabletd2,
    .tableth2 {
        width: 20em;
        max-width: 20em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .tabletd3,
    .tableth3 {
        width: 20em;
        max-width: 20em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .aaa {
        width: 20em;
        max-width: 20em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .itemList {
        display: flex;
    }

    .musicList {
        font-size: 1.7rem;
        margin-left: 20%;
    }
}

/* 手机端css */
@media only screen and (max-width: 798px) {
    .musicList {
        font-size: 1.7rem;
        margin-left: 20%;
    }

    .icon2 {
        width: 40px;
        /* margin-left: 65%; */
        /* padding: 0px 0px 150px 0px; */
        /* margin-top: -200px; */
    }

    .icon3 {
        /* padding: 0px 10px; */
        width: 40px;
        /* padding: 0px 0px 150px 0px; */
        /* margin-top: -200px; */
    }

    .searchHistory {
        display: flex;
    }

    .searchTop {
        display: flex;
    }

    .searchinput input {
        width: 500px;
        height: 50px;
        border: none;
        border-bottom: 1px solid black;
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
        width: 40px;
        max-width: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .tabletd2,
    .tableth2 {
        width: 70px;
        max-width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .tabletd3,
    .tableth3 {
        width: 100px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .aaa {
        width: 100px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .itemList {
        display: flex;
    }
}
</style>