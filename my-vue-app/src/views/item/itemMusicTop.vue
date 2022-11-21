<template>
    <div class="itemMusicBox">
        <img :src="playlist.coverImgUrl" alt="" class="bgimg">
        <div class="itemMusicTop">

            <div class="itembox">
                <!-- <svg t="1668318142666" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1363" width="200" height="200"><path d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z" p-id="1364"></path></svg> -->
                <!-- <svg t="1668318158412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2269" width="200" height="200"><path d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z" fill="#444444" p-id="2270"></path></svg> -->
                <el-row class="">
                    <el-col :span="3">
                        <div class="grid-content ep-bg-purple">
                            <svg t="1668317343665" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5104" width="200" height="200"
                                @click="$router.go(-1)">
                                <path
                                    d="M213.333333 507.733333h725.333334v42.666667H204.8l145.066667 145.066667-29.866667 29.866666L128 533.333333 320 341.333333l29.866667 29.866667L213.333333 507.733333z"
                                    fill="#444444" p-id="5105"></path>
                            </svg>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content ep-bg-purple-light">
                            <div style="font-size: 30px; color: white;">歌单</div>
                        </div>
                    </el-col>
                    <el-col :span="3" :offset="12">
                        <div class="grid-content ep-bg-purple">
                            <svg t="1668319483483" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3172" width="200" height="200">
                                <path
                                    d="M448 768c176.725333 0 320-143.274667 320-320 0-176.725333-143.274667-320-320-320-176.725333 0-320 143.274667-320 320 0 176.725333 143.274667 320 320 320z m0 42.666667c-200.298667 0-362.666667-162.368-362.666667-362.666667S247.701333 85.333333 448 85.333333s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667z m304.917333-27.584a21.333333 21.333333 0 0 1 30.165334-30.165334l150.848 150.848a21.333333 21.333333 0 0 1-30.165334 30.165334l-150.848-150.826667z"
                                    fill="#3D3D3D" p-id="3173"></path>
                            </svg>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content ep-bg-purple-light">
                            <svg t="1668318158412" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2269" width="200" height="200">
                                <path
                                    d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z"
                                    fill="#444444" p-id="2270"></path>
                            </svg>
                        </div>
                    </el-col>
                </el-row>
                <div class="itemboxtxt">{{ playlist.name }}</div>
                <!-- <div class="itemboxtxt">{{ playlist.id }}</div> -->
                <div class="itemboxtxt_"><h3>简介：</h3>{{ playlist.description }}</div>

            </div>
        </div>
    </div>
</template>

<script>
import { filter } from 'lodash';

export default {
    setup(props) {
        console.log(props);


    },
    props: ['playlist'],
}

</script>

<style>
.itemboxtxt_ {
    font-size: 17px;
    padding: 50px 0px 0px 0px;
    margin-left: 47%;
    width: 700px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    
}

.itemboxtxt {
    font-size: 20px;
    font-weight: 900;
    margin-left: 47%;
    width: 700px;
}

.itemMusicTop {
    z-index: 2;
    position: relative;
    height: 300px;
}

.icon {
    width: 70px;
    height: 40px;
}

.itemLeft {
    display: flex;
}

.bgimg {
    padding: 0px 0px 0px 25%;
    z-index: 1;
    width: 20%;
    position: absolute;
}
</style>