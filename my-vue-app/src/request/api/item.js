import service from "..";

// 获取歌单详情页的数据
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
//获取歌单所有的歌曲
export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}
export function musicurl(data){
    return service({
        method:"GET",
        url:`/song/url?id=${data}`
    })
}