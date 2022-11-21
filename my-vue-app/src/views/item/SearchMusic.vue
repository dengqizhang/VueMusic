<template>
    <div class="searchTop">
        <svg t="1668685289079" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4990" width="50" height="50">
            <path
                d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
                fill="" p-id="4991"></path>
        </svg>
        <div class="searchinput">
            <input type="text" placeholder="请输入歌手/歌曲名称/专辑/mv:" v-model="searchKey" @keydown.enter="enterkey">
        </div>


    </div>
    <div class="searchHistory">
        <p>历史</p>
        <svg t="1668692061811" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
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

            <div class="itemList">
                <table class="item" v-for="(item, i) in searchList" :key="i">
                    <div itemLeft>
                        <tr>
                            <th class="tableth">序号</th>
                            <th class="tableth">歌名</th>
                            <th class="tableth">歌手</th>
                        </tr>

                        <tr>
                            <td class="tabletd">{{ i + 1 }}</td>
                            <td class="tabletd">{{ item.name }}</td>
                            <td class="tabletd" v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}</td>

                             <router-link to="/home">
                                <button class="tabletd" v-on:click="props()">播放</button>
                            </router-link> 
                            <td class="tabletd">喜欢</td> 

                        </tr>
                    </div>

                    <audio :src="`https://music.163.com/song/media/outer/url?id=${item.id}.mp3`" controls></audio>
                </table>
            </div>
        </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
import { getSearchMusic } from '../../request/api/denglu.js'

export default {
    data() {
        return {
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
        props:function(id){
            axios.get(" https://music.163.com/song/media/outer/url?id=id.mp3",{
                params:{
                    id
                }
            }).then(res => {
                console.log(res.data);
            })
        }

    },

}
</script>
<style>
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

.tableth {
    border: solid 1px black;
    /* padding: 0px 100px 0px 100px; */
}

.tabletr {
    background-color: rgb(205, 151, 163)
}

.item {
    border: solid 1px black;
}

td {
    border: solid 1px black;
}
</style>