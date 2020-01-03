<template>
    <div class="person-list">
        <div class="person-list-item" :class="{current:index == 2}" v-for="(item,index) in personData"
             :key="index">
            <div class="person-foto">
                <img :src="item.foto">
            </div>
            <div class="person-list-extra">{{item.name}}</div>
            <div class="person-list-extra">{{item.position}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personList",
        props: {
            personData: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .person-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;


        .person-list-item {
            width: calc(100% / 5);
            padding: calc(32rem / 96) calc(32rem / 96);
            font-family: "kaiti";
            box-sizing: border-box;
            color: #fffde3;
            box-sizing: border-box;
            transition: all ease .4s;

            .person-foto {
                width: 100%;
                height: calc(196rem / 96);
                border-radius: 6px;
                //border:4px solid #fff;
                overflow: hidden;
                box-sizing: border-box;

                img {
                    width: 100%;
                }
            }

            .person-list-extra {
                margin-top: calc(8rem / 96);
                line-height: calc(24rem / 96);
                font-size: calc(24rem / 96);

                &:nth-last-child(1) {
                    font-size: calc(20rem / 96);
                }
            }
        }

        .current {
            transform: scale(1.2);
            margin-top: calc(16rem / 96);
            padding: calc(16rem / 96);
            //box-shadow: 0 0 40px rgba(0, 0, 0, .4);
            // background: rgba(255, 255, 255, .3);
            // border: 1px solid;
            border-radius: 8px;
            box-sizing: border-box;
            z-index: 9999;
        }

    }
</style>
