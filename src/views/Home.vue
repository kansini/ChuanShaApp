<template>
    <div class="home">
        <mainMenu :menuData="menuData"/>
    </div>
</template>

<script>
    import mainMenu from '@/components/MainMenu'

    export default {
        name: 'home',
        components: {mainMenu},
        data() {
            return {
                menuData: [
                    {
                        "name": "书记工作室",
                        "path": "/secretary"
                    },
                    {
                        "name": "党代表工作室",
                        "path": "/"
                    },
                    {
                        "name": "人大代表工作室",
                        "path": "/"
                    }
                ]
            }
        },
    }
</script>
<style lang="scss" scoped>
    .home {

    }
</style>
