<template>
    <div class="list-container">
        <div class="list-title">
            <span>{{title}}</span>
        </div>
        <div class="list-content">
            <person-list :personData="npcMember"/>
        </div>
        <div class="list-btn-group">
            <div class="btn-group-right">
                <router-link to="/npcMemberEvent" tag="div" class="list-btn">活动集锦</router-link>
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
                title: '人大代表名单',
                isFirst: true,
                isLast: false,
                npcMember: []
            }
        },
        mounted() {
            this.getNpcMemberData()
        },
        methods: {
            getNpcMemberData() {
                this.$axios.get('prList.json')
                    .then(res => this.npcMember = res.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container {
        // position: absolute;
        // top: calc(64rem / 96);
        // left: calc(480rem / 96);
        // width: calc(1004rem / 96);
         z-index: 9999;

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
