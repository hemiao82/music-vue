import request from  "./request"
export function holle(params:object){
    request({
        url: "holle",
        method: 'get',
        params
      })
}