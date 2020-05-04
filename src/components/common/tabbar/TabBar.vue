<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TabBar'
    }
</script>

<style scoped>
    #tab-bar{
        position: fixed;
        /*top: calc(100% - 46px);*/
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        text-align: center;
        background-color: #f6f6f6;
        box-shadow: 0 -2px 2px rgba(202, 208, 204, 0.35);
        z-index: 10;
    }
</style>
