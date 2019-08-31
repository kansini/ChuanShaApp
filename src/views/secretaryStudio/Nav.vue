<template>
    <div class="secretaryNav">
        <mainMenu :menuData="menuData"/>
    </div>
</template>

<script>
    import mainMenu from '@/components/MainMenu'

    export default {
        name: 'secretaryNav',
        components: {mainMenu},
        data() {
            return {
                menuData: [
                    {
                        "name": "老毛书记工作室",
                        "path": "/secretarList"
                    },
                    {
                        "name": "康天祥书记工作室",
                        "path": "/"
                    },
                    {
                        "name": "马凤英书记工作室",
                        "path": "/"
                    }
                ]
            }
        },
    }
</script>
<style lang="scss" scoped>
   
</style>
