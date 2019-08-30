<template>
	<div class="list-container">
		<div class="list-title">
			<span>{{title}}</span>
		</div>
		<div class="list-content">

		</div>
	</div>
</template>

<script>
	export default {
		name: "List",
		data() {
			return {
				title: '人大代表工作室'
			}
		},
	}
</script>

<style lang="scss" scoped>
	.list-container {
		position: absolute;
		top: calc(96rem / 96);
		right: calc(240rem / 96);
		width: calc(1004rem / 96);

		.list-title {
			text-align: center;
			font-size: calc(56rem / 96);
			height: calc(88rem / 96);
			line-height: calc(88rem / 96);
			//background: #fff;
			font-family: "xiaokai";
			font-weight: bolder;
			color: rgba(173, 0, 10, 1);
		}

		.list-content {
			width: calc(996rem / 96);
			height: calc(600rem / 96);
			background: rgba(255, 0, 0, .7);
			border: 4px solid #fff;
			border-radius: calc(8rem / 96);
			box-sizing: border-box;
		}
	}
</style>
