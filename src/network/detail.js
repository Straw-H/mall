import {request} from "./request";

/**
 * 获取商品详情信息
 * @param iid 商品ID
 * @returns {AxiosPromise}
 */
export function getHomeGoodsDetail(iid){
  return request(
    {
      url: '/detail',
      params:{
        iid
      }
    }
  )
}

/**
 * 获取推荐商品列表
 * @returns {AxiosPromise}
 */
export function getDetailRecommend(){
  return request(
    {
      url: '/recommend'
    }
  )
}

/**
 * 商品基本信息
 */
export class Goods{
  constructor(itemInfo, columns, services) {
    // 商品名称
    this.title = itemInfo.title
    // 与名称数据相同
    this.desc = itemInfo.desc
    // 当前价格
    this.newPrice = itemInfo.price
    // 历史价格
    this.oldPrice = itemInfo.oldPrice
    // 折扣信息
    this.discount = itemInfo.discountDesc
    // 销量、收藏信息
    this.columns = columns
    //  额外信息
    this.services = services
    // 最低价格
    this.eralPrice = itemInfo.lowNowPrice
  }

}

/**
 * 店铺信息
 */
export class Shop{
  constructor(shonInfo) {
    // 店铺图片
    this.logo = shonInfo.shopLogo
    // 店铺名称
    this.name = shonInfo.name
    // 总销量
    this.sells = shonInfo.cSells
    // 宝贝数量
    this.goods = shonInfo.cGoods
    // 店铺评价
    this.score = shonInfo.score

  }
}

/**
 * 商品详情
 */
export class ShopDetailInfo{
  constructor(detailInfo) {
    // 商品描述
    this.desc = detailInfo.desc
    // 商品标题
    this.key = detailInfo.detailImage[0].key
    // 商品图片列表
    this.images = detailInfo.detailImage[0].list
  }
}

/**
 * 商品规格
 */
export class ShopDetailSpecs{
  constructor(itemParams) {
    // 参数说明
    this.infoKey = itemParams.info.key
    // 参数内容
    this.infoSet = itemParams.info.set
    // 规格标题
    this.ruleKey = itemParams.rule.key
    // 详细规格
    this.ruleSet = itemParams.rule.tables
    // 规格备注
    this.ruleDisc = itemParams.rule.disclaimer
  }
}

/**
 * 获取用户评论
 */
export class GoodsUserRate{
  constructor(rate) {
    this.rate = rate.cRate
    this.userImg = rate.list[0].user.avatar
    this.userName = rate.list[0].user.uname
    this.content = rate.list[0].content
    this.createTime = rate.list[0].created
    this.specs = rate.list[0].style
  }
}
