<template>
    <div id="app">
        <div class="logo"></div>
        <div class="btn-fullScreen" @click="toggleFullscreen"></div>
        <router-view/>
    </div>
</template>
<script>
    import screenfull from 'screenfull'

    export default {
        name: "App",
        methods: {
            toggleFullscreen() {
                if (!screenfull.enabled) {
                    this.$message({
                        message: 'you browser can not work',
                        type: 'warning'
                    })
                    return false
                }
                screenfull.toggle()
            }
        }
    }
</script>
<style lang="scss">
    #app {
        position: relative;
        width: 100%;
        height: 100vh;
        background: url("./assets/img/mainBg.jpg") no-repeat center;
        background-size: 100% 100%;

        .logo {
            position: absolute;
            left: calc(180rem / 96);
            top: calc(64rem / 96);
            width: calc(222rem / 96);
            height: calc(770rem / 96);
            background: url("./assets/img/logo.png") no-repeat center;
            background-size: 100%;
        }
        .btn-fullScreen{
            position: absolute;
            top: calc(40rem / 96);
            right: calc(40rem / 96);
            width: calc(40rem / 96);
            height: calc(40rem / 96);
            background: #ebb887;
            border-radius: 6px;
            cursor: pointer;
        }
    }
</style>
