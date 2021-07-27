import { request } from "./";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

//传入数据，包含类型type和页数page
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}