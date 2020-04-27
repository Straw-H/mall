<template>
    <div class="tab-bar-item" @click = "itemClick">
        <div v-if="!isActive">
            <slot name="tab-icon"></slot>
        </div>
        <div v-else>
            <slot name="tab-icon-active"></slot>
        </div>
<<<<<<< HEAD
        <div :style="activeStyle">
=======
        <div :style="activeStyle" class="tab-text">
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
            <slot name="tab-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabBarItem',
        props:{
            path: String,
            activeColor: {
                type: String,
                default: '#1afa29'
            }
        },
        methods: {
            itemClick(){
                this.$router.replace(this.path);
            }
        },
        computed: {
            isActive(){
                return this.$route.path.indexOf(this.path) != -1
            },
            activeStyle(){
                return this.isActive ? {color: this.activeColor} : {}
            }
        }
    }
</script>

<style scoped>

    .tab-bar-item{
        flex: 1;
<<<<<<< HEAD
        height: 49px;
        font-size: 13px;
        margin-top: 3px;
    }
    .tab-bar-item img{
        width: 24px;
        height: auto;
        margin-top: 3px;
        vertical-align: middle;
    }
=======
        height: 38px;
        font-size: 13px;
        margin: 6px 0 2px;
    }
    .tab-bar-item img{
        width: 18px;
        height: auto;
        vertical-align: middle;
    }
  .tab-text{
    margin-top: 4px;
  }
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
</style>
