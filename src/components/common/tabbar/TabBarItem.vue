<template>
    <div class="tab-bar-item" @click = "itemClick">
        <div v-if="!isActive">
            <slot name="tab-icon"></slot>
        </div>
        <div v-else>
            <slot name="tab-icon-active"></slot>
        </div>
        <div :style="activeStyle" class="tab-text">
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
</style>
