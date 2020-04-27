import {request} from './request'

<<<<<<< HEAD
=======
/**
 * 请求首页特殊数据
 * @returns {AxiosPromise}
 */
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
export function getHomeMasterData(){
  return request(
    {
      url: '/home/multidata'
    }
  )
}
<<<<<<< HEAD
=======

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
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
