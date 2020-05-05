<template>
    <div class="profile-menu" v-if="mentData !== ''">
      <div class="menu-item" v-for="item of mentData" @click="menuItemClick(item)">
        <span class="icon">
          <img :src="item.icon" alt="">
        </span>
        <div class="item-text">{{item.text}}</div>
        <span class="icon next">
          <img src="~assets/images/profile/menu_right.svg" alt="">
        </span>
      </div >
    </div>
</template>

<script>
    export default {
      name: "ProfileMenu",
      props:{
        mentData: Array,
        default(){
            return[]
        }
      },
      methods:{
        menuItemClick(item){
          this.$toast.show(item.text)
        }
      }
    }
</script>

<style scoped>
  .profile-menu{
    margin-top: 8px;
    background-color: #fff;
  }
  .menu-item{
    display: flex;
    flex-wrap: wrap;
    height: 45px;
    line-height: 45px;
    padding: 0 16px;
  }
  .icon img{
    width: 30px;
    display: inline-block;
    vertical-align: middle;
  }
  .menu-item .item-text{
    padding-left: 12px;
    flex: 2;
    font-size: 14px;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .menu-item:last-of-type .item-text{
    border: none;
  }
</style>
