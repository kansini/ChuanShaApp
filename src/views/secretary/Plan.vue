<template>
    <div>
        <div class="list-content">
            <div class="article">
                大团结大联合是统一战线的本质要求，是人民政协组织的重要特征。最大限度调动一切积极因素，团结一切可以团结的人，汇聚起共襄伟业的强大力量，是人民政协的神圣使命。
                <p> “新形势下，我们必须把人民政协制度坚持好、把人民政协事业发展好，增强开展统一战线工作的责任担当，把更多的人团结在党的周围。”在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上，习近平总书记发表重要讲话，站在党和国家事业发展全局的高度，深情回顾人民政协70年的光辉历程，高度评价人民政协在建立新中国和社会主义革命、建设、改革各个历史时期所作的重要贡献，全面总结党的十八大以来对人民政协工作提出的一系列新要求，深刻阐述新时代人民政协工作的使命任务、总体要求、着力重点，为新时代人民政协事业发展进一步指明了方向，提供了根本遵循。</p>
                <p> “新形势下，我们必须把人民政协制度坚持好、把人民政协事业发展好，增强开展统一战线工作的责任担当，把更多的人团结在党的周围。”在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上，习近平总书记发表重要讲话，站在党和国家事业发展全局的高度，深情回顾人民政协70年的光辉历程，高度评价人民政协在建立新中国和社会主义革命、建设、改革各个历史时期所作的重要贡献，全面总结党的十八大以来对人民政协工作提出的一系列新要求，深刻阐述新时代人民政协工作的使命任务、总体要求、着力重点，为新时代人民政协事业发展进一步指明了方向，提供了根本遵循。</p>
                <p> “新形势下，我们必须把人民政协制度坚持好、把人民政协事业发展好，增强开展统一战线工作的责任担当，把更多的人团结在党的周围。”在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上，习近平总书记发表重要讲话，站在党和国家事业发展全局的高度，深情回顾人民政协70年的光辉历程，高度评价人民政协在建立新中国和社会主义革命、建设、改革各个历史时期所作的重要贡献，全面总结党的十八大以来对人民政协工作提出的一系列新要求，深刻阐述新时代人民政协工作的使命任务、总体要求、着力重点，为新时代人民政协事业发展进一步指明了方向，提供了根本遵循。</p>

            </div>

        </div>

        <div class="list-btn-group">
            <div class="btn-group-right">
                <router-link to="/secretary" tag="div" class="list-btn">返回</router-link>
            </div>

            <!--            <div class="btn-group-right">-->
            <!--                <div class="list-btn" :class="{listBtnDisable:isFirst}">上一页</div>-->
            <!--                <div class="list-btn" :class="{listBtnDisable:isLast}">下一页</div>-->
            <!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Plan"
    }
</script>

<style lang="scss" scoped>
    .list-container {
        .article {
            padding:calc(16rem / 96) calc(24rem / 96);
            box-sizing: border-box;
            line-height: calc(48rem / 96);
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
                opacity: .9;
                cursor: not-allowed;
                filter: grayscale(70%);
            }
        }

    }

</style>