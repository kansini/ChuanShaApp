<template>
	<div class="list-content">
		<div class="list-group" v-for="(item,index) in NPCMemberList.data" :key="item.id" v-if="index < NPCMemberList.pageSie">
			<div class="list-item">{{item.id}}</div>
			<div class="list-item">{{item.name}}</div>
			<div class="list-item">{{item.position}}</div>
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
				NPCMemberList: {
					"msg": "ok",
					"pageSie": 8,
					"data": [{
							"id": "001",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "002",
							"name": "刘晓薇",
							"position": "民义村民委员会村会计"
						},
						{
							"id": "003",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "004",
							"name": "马桂英",
							"position": "民义村民委员会村会计"
						},
						{
							"id": "005",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "006",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "007",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "008",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "009",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "010",
							"name": "刘晓薇",
							"position": "民义村民委员会村会计"
						},
						{
							"id": "011",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "012",
							"name": "马桂英",
							"position": "民义村民委员会村会计"
						},
						{
							"id": "013",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "014",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "015",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						},
						{
							"id": "016",
							"name": "马桂英",
							"position": "新吉村民委员会村委委员"
						}
					]
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
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
					color: #fff;
				}

				&:nth-last-child(1) {
					width: 80%;
				}
			}
		}
	}
</style>
