<template>
	<div class="subMenu">
		<router-link tag="div" v-for="(item,index) in subMenuData" :to="item.path" :key="index">{{item.name}}</router-link>
	</div>
</template>

<script>
	export default {
		name: "subMenu",
		props: {
			subMenuData: {
				type: Array,
				default: () => {
					return []
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.subMenu {
		position: absolute;
		top: calc(120rem / 96);
		right: calc(24rem / 96);
		transition: all ease .4s;
		text-align: left;
		z-index:999;
		div {
			position: relative;
			font-size: calc(40rem / 96);
			font-family: "xiaokai";
			font-weight: bolder;
			color: #DC9A4F;
			padding: calc(24rem / 96)  calc(40rem / 96) calc(24rem / 96)  calc(16rem / 96);
			box-sizing: border-box;
			border-bottom: 1px solid #ebb887;
			cursor: pointer;
			&:nth-child(1){
				border-top: 1px solid #ebb887;
			}
		}

	}
</style>
