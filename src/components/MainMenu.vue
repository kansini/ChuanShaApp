<template>
    <div class="main-menu">
        <router-link tag="div" v-for="(item,index) in menuData" :to="item.path" :key="index">{{item.name}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "MainMenu",
        props: {
            menuData: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-menu {
        position: absolute;
        top: calc(160rem / 96);
        right: calc(400rem / 96);
        width: calc(594rem / 96);
        //height: calc(560rem / 96);
        display: flex;
        justify-content: space-between;
		transition:all ease .4s;

        div {
            position: relative;
            font-size: calc(66rem / 96);
            font-family: "xiaokai";
            font-weight: bolder;
            color: rgba(173, 0, 10, .1);
            padding: 0 calc(56rem / 96);
            box-sizing: border-box;
            border-left: 2px solid #ebb887;
            text-align: center;
            cursor: pointer;
            background: url('../assets/img/clipMask.jpg') calc(300rem / 96) center;
            background-size: cover;
            -webkit-background-clip: text;
            //background-clip: text;
            text-shadow: 0px 0px 80px  #ebb887;


            &:nth-last-child(1) {
                border-right: 2px solid #ebb887;
            }

            &:nth-child(1)::before {
                position: absolute;
                content: '';
                width: 4px;
                height: 100%;
                background: #ebb887;
                top: 0;
                left: calc(-16rem / 96);
            }

            &:nth-last-child(1)::before {
                position: absolute;
                content: '';
                width: 4px;
                height: 100%;
                background: #ebb887;
                //background:  url('../assets/img/clipMask.jpg') center calc(100rem / 96);
                top: 0;
                right: calc(-16rem / 96);
            }
        }

    }
</style>