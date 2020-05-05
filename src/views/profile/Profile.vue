<template>
    <div id="profile">
      <nav-bar class="nav-bar" :class="{showShadow : showShadow}">
        <div slot="center">个人中心</div>
        <div slot="right">
          <img src="~assets/images/common/message.svg" alt="" @click="messageClick">
        </div>
      </nav-bar>
      <scroll class="scroll"
              :probe-type="3"
              @currentIndex="currentPosition"
              ref="scroll">
        <div class="profile-content">
          <member-info/>
          <section id="account">
            <div class="account-item">
              <div class="price">
                <span class="balance">0.00</span>元
              </div>
              <div class="account-info">账户余额</div>
            </div>
            <div class="account-item">
              <div class="price">
                <span class="balance">0</span>张
              </div>
              <div class="account-info">优惠券</div>
            </div>
            <div class="account-item">
              <div class="price">
                <span class="balance">0</span>张
              </div>
              <div class="account-info">礼品卡</div>
            </div>
            <div class="account-item">
              <div class="price">
                <span class="balance">0</span>分
              </div>
              <div class="account-info">我的积分</div>
            </div>
          </section>
          <profile-list ref="profileList"/>

        </div>
      </scroll>
    </div>
</template>

<script>
  import MemberInfo from './children/MemberInfo'
  import ProfileList from './children/ProfileList'

  import Scroll from "components/common/BScroll/BScroll"

  import NavBar from 'components/common/navbar/NavBar'

    export default {
        name: 'Profile',
      components: {
        MemberInfo,
        ProfileList,
        Scroll,
        NavBar
      },
      data(){
        return {
          profileListY: 0,
          showShadow:false
        }
      },
      mounted() {
        this.profileListY = this.$refs.profileList.$el.offsetTop;
      },
      methods:{
        messageClick(){
          this.$toast.show("消息中心")
        },
        currentPosition(index){
          let position = index.y;
          this.showShadow = position < - this.profileListY
        }
      }
    }
</script>

<style scoped>
  .scroll{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 46px;
  }
  #profile{
    position: relative;
    height: 100vh;
  }
  .nav-bar{
    box-shadow:0 0 0;
  }
  .showShadow{
    box-shadow: 0 2px 2px rgba(202, 208, 204, 0.35);
  }
  .nav-bar img{
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
  }

  #account{
    position: absolute;
    left: 0;
    right: 0;
    top: 89px;
    height: 80px;
    border-radius: 10px;
    margin: 0 12px;
    display: flex;
    background-color: #fff;
    text-align: center;
    padding: 14px 0;
    box-shadow: 0 -1px 8px rgba(230, 246, 235, 0.35);
  }
  .account-item {
    flex: 1;
    line-height: 24px;
  }
  .account-item .price {
    letter-spacing: 1px;
    font-size: 12px;
    color: var(--color-high-text);
  }
  .price .balance{
    font-size: 18px;
    margin-right: 2px;
  }
  .account-item .account-info{
    font-size: 12px;
  }

</style>
