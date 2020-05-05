<template>
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
      data(){
          return {
            message: "提示内容",
            isShow: false
          }
      },
      methods:{
          show(message, time = 1500){
            this.message = message;
            // 等待执行完再运行
            if(!this.isShow){
              this.isShow = true;
              setTimeout(() => {
                this.isShow = false;
                this.message = '';
              }, time)
            }
          }
      }
    }
</script>

<style scoped>
  .toast{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: rgba(0, 0, 0, .6);
    color: #f2f2f2;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 14px;
    line-height: 18px;
  }

</style>
