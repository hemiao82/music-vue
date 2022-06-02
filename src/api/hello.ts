import request from  "./request"
export function holle(params?:object){
  return  request({
        url: "/holle",
        method: 'get',
        params
      })
}