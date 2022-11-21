
import service from "..";
//获取首页轮播图的数据
export function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=0",
    })
}
//获取推荐歌单
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=8"
    })
}
//搜索
export function getSearchMusic(data){
    return service({
        method: "GET",
        url: `/search?keywords=${data}`
    })
}
//登陆的网易云手机号和密码
// export function getPhoneLogin(data){
//     return service({
//         method:"GET",
//         url:`/login/cellphone?phone=${data.phone}&password=${data.password}`,
//     })
// }