<template>
    <!-- <div class="footerbox">
        <div class="left"> -->
            <!-- <img :src="itemList[itemListIndex].al.picUrl" alt="" style="width: 50px; height: 50px;"> -->
            <!-- <div class="left_box"> -->
                 <!-- <p>{{ itemList[itemListIndex].al.name }}</p>  -->


                <!-- <div>
                    <svg t="1668767524280" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1184" width="30" height="30">
                        <path
                            d="M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.408z"
                            p-id="1185"></path>
                    </svg>

                    <svg t="1668768633405" class="icon" viewBox="0 0 1024 1024" version="1.1" @click="play"
                        v-if="isbtnShow" xmlns="http://www.w3.org/2000/svg" p-id="2718" width="30" height="30">
                        <path
                            d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                            fill="#000000" p-id="2719"></path>
                    </svg>

                    <svg t="1668769075623" class="icon" viewBox="0 0 1024 1024" version="1.1" @click="play" v-else
                        xmlns="http://www.w3.org/2000/svg" p-id="5087" width="30" height="30">
                        <path
                            d="M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z"
                            fill="#000000" p-id="5088"></path>
                    </svg>

                    <svg t="1668767541629" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1462" width="30" height="30">
                        <path
                            d="M817 160h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56zM648.314 546.191l-422.304 303.4c-32.294 23.201-77.282 15.83-100.484-16.464A72 72 0 0 1 112 791.117V232.064c0-39.764 32.235-72 72-72a72 72 0 0 1 39.95 12.1l422.762 281.959c25.73 17.16 32.677 51.93 15.517 77.66a56 56 0 0 1-13.915 14.408z"
                            p-id="1463"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="footerbox_right"> -->

            <!-- <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${itemList[itemListIndex].id}.mp3`"
                controls style="width: 600px;" autoplay></audio> -->
        <!-- </div>

    </div> -->

</template>
<script>
// import denglu from '../../request/api/denglu.js'
// import item from '../../request/api/item.js'
import axios from 'axios'
//生命周期钩子
import { reactive, onMounted } from 'vue';
export default {

    methods: {
        play: function () {
            if (this.$refs.audio.paused) {
                //播放
                this.$refs.audio.play();
                this.updateIsbtnShow(false)
            } else {
                //暂停
                this.$refs.audio.pause()
                this.updateIsbtnShow(true)
            }

        },
    },


};
</script>
<style>
/* audio::-webkit-media-controls-play-button {
    display: none;
} */

.left {
    display: flex;
    background-color: aquamarine;
    width: 400px;
    height: 40px;
}

.left img {
    border-radius: 50%;
}

.left_box {
    display: flex;
}

/* .footerbox {
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 4;
    background-color: rgb(175, 250, 244, 0.5);
} */
</style>