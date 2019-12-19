<template>
    <div id="app">
        <div class="btn-fullScreen" :class="{isFullScreen:isFullScreen}" @click="toggleFullscreen"></div>
        <transition name="fadeIn">
            <router-view/>
        </transition>
        <div class="bottom"></div>
        <div class="building"></div>

    </div>
</template>
<script>
    import screenfull from 'screenfull'

    export default {
        name: "App",
        data() {
            return {
                isFullScreen: false
            }
        },
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
                this.isFullScreen = !this.isFullScreen
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
            left: calc(230rem / 96);
            top: calc(72rem / 96);
            width: calc(222rem / 96);
            height: calc(770rem / 96);
            background: url("./assets/img/logo.png") no-repeat center;
            background-size: 100%;
        }


        .btn-fullScreen {
            position: absolute;
            top: calc(32rem / 96);
            right: calc(16rem / 96);
            width: calc(40rem / 96);
            height: calc(40rem / 96);
            border-radius: 6px;
            cursor: pointer;
            background: url(./assets/img/ico-fullscreen.svg) no-repeat center;
            transition: background ease .6s;
            z-index: 999;
        }

        .isFullScreen {
            background: url(./assets/img/ico-unfullscreen.svg) no-repeat center;

        }

        .building {
            position: absolute;
            left: 0;
            bottom: calc(32rem / 96);
            width: calc(1190rem / 96);
            height: calc(520rem / 96);
            background: url("./assets/img/building.png") no-repeat center -20px;
            background-size: 100%;
            z-index: 998;
            animation: fadeIn 1s linear forwards;
        }

        .bottom {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 100%;
            height: calc(208rem / 96);
            background: url("./assets/img/flag.png") no-repeat center 10px;
            background-size: 100%;
            z-index: 999;
            animation: bottom .6s linear forwards;
        }

        @keyframes bottom {
            from {
                transform: translateY(50%);
            }

            to {
                transform: translateY(0%);
            }
        }

        @keyframes fadeIn {

            0%,
            50% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    }
</style>
