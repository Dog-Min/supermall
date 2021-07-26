import { request } from "./";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}