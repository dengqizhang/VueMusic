import service from ".";
//获取歌单
export function getplaylist(){
    return service({
        method:"GET",
        url:"/personalized?limit=12"
    })
}
//获取轮播图
export function getmusicimg(){
    return service({
        method:"GET",
        url:"/banner?type=0"
    })
}
//获取歌单详情
export function getmusicList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
//全局搜索歌曲
export function getSearchMusic(data){
    return service({
        method: "GET",
        url: `/search?keywords=${data}`
    })
}
//推荐歌手
export function recommendsinger(){
    return service({
        method: "GET",
        url: "/artist/list?cat=1001"
    })
}

//登陆
export function login(phone,password){
    return service({
        method: "GET",
        url: `/login/cellphone?phone=${phone}&password=${password}`
    })
}
//歌曲播放页的歌曲详情
export function SongDetails(data){
    return service({
        method: "GET",
        url: `/song/detail?ids=${data}`
    })
}
//获取音乐歌词
export function getlyric(data){
    return service({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}
//获取歌手热门的50首歌
export function getMusicforsingers(data){
    return service({
        method: "GET",
        url: `/artist/top/song?id=${data}`
    })
}