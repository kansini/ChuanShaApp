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
		<div class="list-btn-group">
			<router-link to="/" tag="div" class="list-btn">首页</router-link>
			<div class="btn-group-right">
				<router-link to="/" tag="div" class="list-btn">上一页</router-link>
				<router-link to="/" tag="div" class="list-btn">下一页</router-link>
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
				},
				{
					"id":"004",
					"name":"马桂英",
					"position":"新吉村民委员会村委委员"
				},
				{
					"id":"005",
					"name":"马桂英",
					"position":"新吉村民委员会村委委员"
				},
				{
					"id":"006",
					"name":"马桂英",
					"position":"新吉村民委员会村委委员"
				},
				{
					"id":"007",
					"name":"马桂英",
					"position":"新吉村民委员会村委委员"
				},
				{
					"id":"008",
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
			margin-bottom: calc(24rem / 96);
			font-family: "xiaokai";
			font-weight: bolder;
			color: #d22000;
			span{
				position: relative;
				&::before{
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
				&::after{
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
			background: rgba(211, 16, 26, .7);
			border: 4px solid #fff;
			border-radius: calc(8rem / 96);
			box-sizing: border-box;
			font-size: calc(24rem / 96);
			color: #fffde3;
			.list-group{
				display: flex;
				justify-content: flex-start;
				.list-item{
					width: 100%;
					font-family: "kaiti";
					height: calc(72rem / 96);
					line-height: calc(72rem / 96);
					border-bottom:1px solid rgba(255,255,227,.2);
					&:nth-child(1){
						width: 10%;
					}
					&:nth-child(2){
						width: 20%;
					}
					&:nth-last-child(1){
						width: 70%;
					}
				}
			}
		}
		.list-btn-group{
			font-family: "kaiti";
			width: 100%;
			padding: calc(32rem / 96) 0;
			display: flex;
			justify-content: space-between;
			.btn-group-right{
				display: flex;
				justify-content: flex-end;
				.list-btn:nth-child(1){
					margin-right: calc(24rem / 96);
				}
			}
			.list-btn{
				width: calc(212rem / 96);
				height: calc(53rem / 96);
				line-height: calc(55rem / 96);
				text-align: center;
				font-size: calc(24rem / 96);
				color: #fff;
				background: url(../assets/img/btn_base.png) no-repeat center;
				background-size: 100%;
				color: #fff;
				cursor: pointer;
				text-shadow: 0 0 4px #824208;
			}
		}
	
	}
</style>
