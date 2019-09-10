<template>
    <div class="list-container">
        <div class="list-title">
            <span>{{title}}</span>
        </div>
        <div class="list-content">
            <div class="list-group" v-for="(item,index) in npcMember" :key="item.id">
                <div class="list-item">{{item.id}}</div>
                <div class="list-item">{{item.name}}</div>
                <div class="list-item">{{item.position}}</div>
            </div>
        </div>
        <div class="list-btn-group">
            <div class="btn-group-right">
                <router-link to="/prEvent" tag="div" class="list-btn">活动集锦</router-link>
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
                title: '党代表名单',
                isFirst: true,
                isLast: false,
                "npcMember":[
                    {
                        "id":"001",
                        "name":"章叁",
                        "position":"新吉村民委员会村委委员"
                    },
                    {
                        "id":"002",
                        "name":"李肆",
                        "position":"新吉村民委员会村委委员"
                    },
                    {
                        "id":"003",
                        "name":"汪伍",
                        "position":"新吉村民委员会村委委员"
                    },
                    {
                        "id":"004",
                        "name":"赵陆",
                        "position":"新吉村民委员会村委委员"
                    },
                    {
                        "id":"005",
                        "name":"章叁",
                        "position":"新吉村民委员会村委委员"
                    },
                    {
                        "id":"006",
                        "name":"汪伍",
                        "position":"新吉村民委员会村委委员"
                    },
                    {
                        "id":"007",
                        "name":"赵陆",
                        "position":"新吉村民委员会村委委员"
                    },
                    {
                        "id":"008",
                        "name":"章叁",
                        "position":"新吉村民委员会村委委员"
                    }
                ]
                //npcMember:[]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container {
        position: absolute;
        top: calc(64rem / 96);
        left: calc(480rem / 96);
        width: calc(1004rem / 96);
        z-index:999;





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
                filter:grayscale(70%);
            }
        }

    }
</style>
