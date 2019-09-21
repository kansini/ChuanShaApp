<template>
    <div class="secretary">
        <menus :menuData="menuData"></menus>
    </div>
</template>

<script>
    import menus from '@/components/Menu'


    export default {
        name: 'secretary',
        components: {
            menus,

        },
        data() {
            return {
                menuData: [{
                    "name": "老毛书记工作室",
                    "path": "/secretaryNav",
                    "studioData": {
                        "memberList": []

                        ,
                        "traineeList": []

                        ,
                        "planData": ""

                        ,
                        "eventData": []
                    }
                },
                    {
                        "name": "康天祥书记工作室",
                        "path": "/"
                    },
                    {
                        "name": "马凤英书记工作室",
                        "path": "/"
                    }
                ],

            }
        }
    }
</script>
<style lang="scss" scoped>
    .menu {
        position: absolute;
        top: calc(120rem / 96);
        left: calc(640rem / 96);
        transition: all ease .6s;
    }

    .flowers {
        position: absolute;
        right: 0;
        top: 0;
        width: calc(562rem / 96);
        height: calc(421rem / 96);
        background: url("../../assets/img/flowers.png") no-repeat center;
        background-size: 100%;
        opacity: .4;
    }
</style>
