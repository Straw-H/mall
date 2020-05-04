import {request} from "./request";

/**
 * 获取分类列表
 * @returns {AxiosPromise}
 */
export function getCategory(){
  return request(
    {
      url: "/category"
    }
  )
}

/**
 * 获取子分类
 * @returns {AxiosPromise}
 */
export function getSubCategory(maitKey){
  return request(
    {
      url: "/subcategory",
      params: {
        maitKey
      }
    }
  )
}

/**
 * 获取子分类中的商品
 * @returns {*}
 */
export function getCategoryGoods(miniWallkey, type){
  return request(
    {
      url: "/subcategory/detail",
      params: {
        miniWallkey,
        type
      }
    }
  )
}
