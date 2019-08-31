<template>
	<div class="list-container">
		<div class="list-title">
			<span>{{title}}</span>
		</div>
		<router-view></router-view>
		<div class="list-btn-group">
			<div class="btn-group-right">
				<router-link to="/" tag="div" class="list-btn">首页</router-link>
				<div class="list-btn" @click="$router.go(-1)">返回</div>
			</div>

			<div class="btn-group-right">
				<div class="list-btn" :class="{listBtnDisable:isFirst}">上一页</div>
				<div class="list-btn" :class="{listBtnDisable:isLast}">下一页</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "List",
		data() {
			return {
				title: '团队成员',
				isFirst: true,
				isLast: false,
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
			margin-bottom: calc(24rem / 96);
			font-family: "xiaokai";
			font-weight: bolder;
			color: #d22000;

			span {
				position: relative;

				&::before {
					position: absolute;
					content: '';
					left: calc(-40rem / 96);
					top: calc(20rem / 96);
					width: calc(24rem / 96);
					height: calc(24rem / 96);
					border-radius: 2px;
					background: rgba(173, 0, 10, 1);
					transform: rotate(45deg);
				}

				&::after {
					position: absolute;
					content: '';
					right: calc(-40rem / 96);
					top: calc(20rem / 96);
					width: calc(24rem / 96);
					height: calc(24rem / 96);
					border-radius: 2px;
					background: rgba(173, 0, 10, 1);
					transform: rotate(45deg);
				}
			}
		}

		.list-content {
			padding: calc(16rem / 96) calc(40rem / 96);
			font-family: "kaiti";
			width: calc(996rem / 96);
			height: calc(640rem / 96);
			background: rgba(211, 16, 26, .65);
			border: 6px solid #fff;
			border-radius: calc(16rem / 96);
			box-sizing: border-box;
			font-size: calc(24rem / 96);
			color: #fffde3;

			.list-group {
				display: flex;
				justify-content: flex-start;

				.list-item {
					width: 100%;
					font-family: "kaiti";
					height: calc(72rem / 96);
					line-height: calc(72rem / 96);
					border-bottom: 1px solid rgba(255, 255, 227, .2);

					&:nth-child(1) {
						width: 10%;
					}

					&:nth-child(2) {
						width: 15%;
						//text-align: center;
						color: #fff;
					}

					&:nth-last-child(1) {
						width: 80%;
					}
				}
			}
		}

		.list-btn-group {
			font-family: "kaiti";
			width: 100%;
			padding: calc(32rem / 96) 0;
			display: flex;
			justify-content: space-between;

			.btn-group-right {
				display: flex;
				justify-content: flex-end;

				.list-btn:nth-child(1) {
					margin-right: calc(24rem / 96);
				}
			}

			.list-btn {
				width: calc(212rem / 96);
				height: calc(53rem / 96);
				line-height: calc(55rem / 96);
				text-align: center;
				font-size: calc(24rem / 96);
				color: #fff;
				background: url(../../assets/img/btn_base.png) no-repeat center;
				background-size: 100%;
				color: #fff;
				cursor: pointer;
				text-shadow: 0 0 4px #824208;
			}

			.listBtnDisable {
				opacity: .6;
				cursor: not-allowed;
			}
		}

	}
</style>
