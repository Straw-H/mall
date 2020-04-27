import {request} from './request'

/**
 * 请求首页特殊数据
 * @returns {AxiosPromise}
 */
export function getHomeMasterData(){
  return request(
    {
      url: '/home/multidata'
    }
  )
}

/**
 * 请求首页商品列表
 * @param type
 * @param page
 * @returns {AxiosPromise}
 */
export function getHomeGoodsData(type, page){
  return request(
    {
      url: '/home/data',
      params:{
        type,
        page
      }
    }
  )
}
