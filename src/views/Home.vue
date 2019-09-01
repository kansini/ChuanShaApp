<template>
    <div class="home">
		<div class="logo"></div>
		<div class="flowers"></div>
        <menus :menuData="menuData"/>
	 </div>
</template>

<script>
    import menus from '@/components/Menu'

    export default {
        name: 'home',
        components: {menus},
        data() {
            return {
                menuData: [
                    {
                        "name": "书记工作室",
                        "path": "/nav"
                    },
                    {
                        "name": "党代表工作室",
                        "path": "/pr"
                    },
                    {
                        "name": "人大代表工作室",
                        "path": "/npc"
                    }
                ]
            }
        },
    }
</script>
<style lang="scss" scoped>
    .home {
		
		.flowers {
			position: absolute;
			right: 0;
			top: 0;
			width: calc(562rem / 96);
			height: calc(421rem / 96);
			background: url("../assets/img/flowers.png") no-repeat center;
			background-size: 100%;
		}
    }
</style>
