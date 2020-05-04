<template>
    <div class="member-info" @click="memberInfoClick">
      <div class="info-icon">
        <img src="~assets/images/profile/head.svg" alt="">
      </div>
      <div class="info-text">
        <div class="info-name">
          {{name}}
          <img src="~assets/images/profile/sex_unknown.svg" alt="">
        </div>
        <div class="info-phone">{{phone}}</div>
      </div>
      <div class="option">
        <img src="~assets/images/profile/go_right.svg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "MemberInfo",
      data(){
          return {
            name: "登录/注册",
            phone: "暂无绑定手机号"
          }
      },
      methods:{
        memberInfoClick(){
          alert("账号管理")
        }
      }
    }
</script>

<style scoped>
  .member-info{
    padding: 14px 16px;
    height: 124px;
    background-color: #794747;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    background-color: var(--color-high-text);
  }
  .info-icon{
    flex: 1;
    text-align: center;
  }
  .info-icon img{
    width: 64px;
    height: 64px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #ececec;
    box-shadow: 0 2px 2px rgba(202, 208, 204, 0.35);
  }
  .info-text{
    flex: 3;
    color: #fff;
    padding-left: 24px;
    line-height: 32px;
    font-size: 18px;
  }
  .info-phone{
    position: absolute;
    font-size: 14px;
    text-indent: 16px;
  }
  .info-phone::before{
    content: "";
    position: absolute;
    top: 5px;
    left: -6px;
    width: 22px;
    height: 22px;
    background: url("~assets/images/common/phone.svg") no-repeat;
    background-size: cover;
  }
  .info-name img{
    margin-left: 6px;
    width: 20px;
  }
  .option{
    flex: 1;
    text-align: center;
    padding: 18px 0;
  }
</style>
