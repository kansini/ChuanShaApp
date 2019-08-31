<template>
	<div class="list-content">
		<!-- {{studioTile}} -->
		<div class="list-group" v-for="(item,index) in teamMember" :key="item.id">
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
				studioData: {},
				teamMember: [],
				studioTile: '',
				pageSie: null,
			}
		},
		mounted() {
			this.getTeamMemberData()


		},
		methods: {
			getTeamMemberData() {
				this.$axios.get('secretaryStudio.json')
					.then(res => this.teamMember = res.data.data[0].teamMember.data)
			}
		}
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
