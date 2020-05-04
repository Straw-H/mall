<template>
  <div class="menu-list">
    <profile-menu :ment-data="orderMenu"/>
    <div class="member-order">
      <div class="order-item">
        <img src="~assets/images/profile/pay.svg" alt="">
        <div class="text">待支付</div>
      </div>
      <div class="order-item">
        <img src="~assets/images/profile/harvest.svg" alt="">
        <div class="text">待收获</div>
      </div>
      <div class="order-item">
        <img src="~assets/images/profile/commented.svg" alt="">
        <div class="text">待评价</div>
      </div>
      <div class="order-item">
        <img src="~assets/images/profile/post_sale.svg" alt="">
        <div class="text">售后/退款</div>
      </div>
    </div>
    <profile-menu :ment-data="infoMenu"/>
    <profile-menu :ment-data="addressMenu"/>
    <profile-menu :ment-data="shopMenu"/>
    <profile-menu :ment-data="othersMenu"/>
    <profile-menu :ment-data="currencyMenu"/>
    <profile-menu />
  </div>
</template>

<script>
  import ProfileMenu from './ProfileMenu'

    export default {
        name: "ProfileList",
      components: {
        ProfileMenu
      },
      data(){
          return{
            orderMenu:[
              { icon: require("assets/images/profile/order.svg"), text: "我的订单" }
            ],
            infoMenu:[
              { icon: require("assets/images/profile/account.svg"), text: "账号与安全" }
            ],
            addressMenu: [
              { icon: require("assets/images/profile/express.svg"), text: "收获地址" },
              { icon: require("assets/images/profile/collection.svg"), text: "我的收藏" },
              { icon: require("assets/images/profile/history.svg"), text: "浏览历史" },
              { icon: require("assets/images/profile/comment.svg"), text: "我的评论" }
            ],
            shopMenu: [
              { icon: require("assets/images/profile/integral.svg"), text: "积分商城" },
              { icon: require("assets/images/profile/member.svg"), text: "会员中心" }
            ],
            othersMenu: [
              { icon: require("assets/images/profile/contact.svg"), text: "联系客服" },
              { icon: require("assets/images/profile/help.svg"), text: "帮助与反馈" },
              { icon: require("assets/images/profile/share.svg"), text: "推荐给好友" }
            ],
            currencyMenu: [
              { icon: require("assets/images/profile/privacy.svg"), text: "隐私设置" },
              { icon: require("assets/images/profile/currency.svg"), text: "通用设置" }
            ]

          }
      }
    }
</script>

<style scoped>
  .menu-list{
    padding-top: 46px;
    background-color: #f2f2f2;
  }
  .member-order{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 6px 16px;
    text-align: center;
    font-size: 12px;
    background-color: #fff;
  }
  .member-order .text{
    line-height: 26px;
  }
</style>
