<template>
    <div>
        <div class="list-content">
            <person-list :personData="prData"/>
        </div>

        <div class="list-btn-group">
            <div class="btn-group-right">
                <div class="list-btn" :class="{listBtnDisable:isFirst}">上一页</div>
                <div class="list-btn" :class="{listBtnDisable:isLast}">下一页</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Trainee",
        data() {
            return {
                title: '团队成员',
                isFirst: true,
                isLast: false,
                prData: []
            }
        },
        mounted() {
            this.getPrData()
        },
        methods: {
            getPrData() {
                this.$axios.get('prList.json')
                    .then(res => this.prData = res.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container {



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
                opacity: .9;
                cursor: not-allowed;
                filter: grayscale(70%);
            }
        }

    }
</style>
