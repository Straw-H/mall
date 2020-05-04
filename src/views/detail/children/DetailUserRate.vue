<template>
    <div class="detail-rate" v-if="Object.keys(userRate).length !== 0">
      <div class="rate-key">
        <div class="rate-title">
            宝贝评价
            <span>{{userRate.rate}}</span>
        </div>
        <div class="rate-more" @click="rateMoreClick">
          查看全部
        </div>
      </div>
      <div class="user-rate">
        <div class="user-info">
          <img v-lazy="userRate.userImg" alt="">
          {{userRate.userName}}
        </div>
        <div class="rate-content">
          <div class="content-info">{{userRate.content}}</div>
          <div class="content-desc">
            <span class="data">{{userRate.createTime | showDate}}</span>
            <span>{{userRate.specs}}</span>
          </div>
          <div class="content-images">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { formatDate } from "common/util";

    export default {
        name: "DetailUserRate",
      props:{
        userRate:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      filters: {
        showDate: function (value) {
          let date = new Date(value*1000);
          return formatDate(date, 'yyyy-MM-dd')
        }
      },
      methods:{
        rateMoreClick(){
          alert("更多评价")
        }
      }
    }
</script>

<style scoped>
  .rate-key{
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    padding: 6px 16px;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 600;
    border-left: 4px solid var(--color-high-text);
    box-shadow: 0 2px 2px rgba(236, 236, 236, 0.35);
  }
  .rate-title span{
    font-weight: 500;
    color: var(--color-price);
  }
  .rate-more{
    position: relative;
    right: 24px;
    color:var(--color-high-text);
    font-size: 14px;
  }
  .rate-more::after{
    content: '';
    position: absolute;
    top: -2px;
    right: -18px;
    width: 18px;
    height: 18px;
    background: url("~assets/images/common/more.svg") no-repeat;
    background-size: cover;
    vertical-align: middle;
  }
  .user-rate{
    padding: 12px 18px 24px;
    border-bottom:5px solid #f2f5f8;
    font-size: 14px;
  }
  .user-info img{
    width: 38px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 12px;
  }
  .rate-content .content-info{
    padding: 12px 0;
  }
  .content-desc{
    color: #999999;
    font-size: 12px;
  }
  .content-desc .data{
    margin-right: 12px;
  }
  .content-images{

  }
</style>
