<template>
	<div class="nav">
		<div class="logo"></div>
		<div class="flowers"></div>
		<subMenu :subMenuData="subMenuData" />
		<transition name="scaleIn">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import subMenu from '@/components/SubMenu'

	export default {
		name: 'secretaryNav',
		components: {
			subMenu
		},
		data() {
			return {
				subMenuData: [{
						"name": "返回首页",
						"path": "/"
					},
					{
						"name": "书记工作室",
						"path": "/secretary"
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
		background: url("../assets/img/flowers.png") no-repeat center;
		background-size: 100%;
		opacity: .4;
	}
</style>
