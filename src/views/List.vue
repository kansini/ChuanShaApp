<template>
	<div class="list-container">
		<div class="list-title">
			<span>{{title}}</span>
		</div>
		<div class="list-content">
			<div class="list-group" v-for="(item,index) in NPCMemberList" :key="item.id">
				<div class="list-item">{{item.id}}</div>
				<div class="list-item">{{item.name}}</div>
				<div class="list-item">{{item.position}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "List",
		data() {
			return {
				title: '人大代表工作室',
				NPCMemberList:[{
					"id":"001",
					"name":"马桂英",
					"position":"新吉村民委员会村委委员"
				},
				{
					"id":"002",
					"name":"马桂英",
					"position":"新吉村民委员会村委委员"
				},
				{
					"id":"003",
					"name":"马桂英",
					"position":"新吉村民委员会村委委员"
				}]
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
			font-family: "xiaokai";
			font-weight: bolder;
			color: #d22000;
			span{
				position: relative;
				&::before{
					position: absolute;
					content: '';
					left: calc(-32rem / 96);
					top: calc(20rem / 96);
					width: calc(24rem / 96);
					height: calc(24rem / 96);
					border-radius: 2px;
					background: rgba(173, 0, 10, 1);
					transform: rotate(45deg);
				}
				&::after{
					position: absolute;
					content: '';
					right: calc(-32rem / 96);
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
			padding: calc(24rem / 96);
			font-family: "kaiti";
			width: calc(996rem / 96);
			height: calc(600rem / 96);
			background: rgba(211, 16, 26, .7);
			border: 4px solid #fff;
			border-radius: calc(8rem / 96);
			box-sizing: border-box;
			font-size: calc(22rem / 96);
			color: #fff;
			.list-group{
				display: flex;
				justify-content: flex-start;
				.list-item{
					height: calc(48rem / 96);
					line-height: calc(48rem / 96);
					&:nth-child(1){
						width: 10%;
					}
					&:nth-child(2){
						width: 20%;
					}
					&:nth-last-child(1){
						width: 60%;
					}
				}
			}
		}
	}
</style>
