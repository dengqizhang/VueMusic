<template>
    <div>播放列表</div>
    <button>歌单共：{{ itemList.length }}首歌曲</button>
    <button>此歌单被{{ subscribedCount }}人收藏</button>
    <div class="itemList">
        <table class="item" v-for="(item, i) in itemList" :key="i">
            <thead>
                    <tr>
                        <th class="tableth">序号</th>
                        <th class="tableth1">歌名</th>
                        <th class="tableth">歌手</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tabletd">{{ i + 1 }}</td>
                        <td class="tabletd1">{{ item.name }}</td>
                        <!-- 循环歌手，因为一个歌曲可能会有多个歌手，ar的参数是个数组 -->
                        <td class="tabletd" v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}</td>

                        <button>喜欢</button>
                        <button @click="itemMusic(item)" >播放</button>
                        <p id="demo"></p>
                    </tr>
                </tbody>
            
        </table>
        <audio ref="audio" :src="aaa" controls class="audio" loop @error="error"></audio>
        
    </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
export default {
    setup(props) {
        console.log(props);
        return {
            aaa: 'https://music.163.com/song/media/outer/url?id=1995608288.mp3'
        }
    },
    props: ['itemList', 'subscribedCount'],


    methods: {
        itemMusic: function (item) {
                this.aaa = 'https://music.163.com/song/media/outer/url?id=' + item.id + '.mp3'
                this.$refs.audio.src = this.aaa
        },
        error:function(){
            debugger
            alert("此歌曲为会员歌曲暂无版权")
        }
    }

}


</script>

<style>
.audio{
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
.tableth1,.tabletd1{
    padding: 0px 100px;
}
</style>