<template>
    <div class="event-list">
        <div class="event-list-item" v-for="(item,index) in eventData" :key="item.id">
            <div class="person-foto">
                <img :src="item.foto">
            </div>
            <div class="event-list-extra">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "eventList",
        props: {
            eventData: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .event-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .event-list-item {
            width: calc(100% / 2);
            padding: calc(8rem / 96);
            font-family: "kaiti";
            color: #fffde3;


            box-sizing: border-box;

            .person-foto {
                width: 100%;
                height: calc(240rem / 96);
                border-radius: 6px;
                //border:4px solid #fff;
                overflow: hidden;
                box-sizing: border-box;

                img {
                    width: 100%;
                }
            }

            .event-list-extra {
                margin-top: calc(16rem / 96);
                /*line-height: calc(24rem / 96);*/
                /*font-size: calc(24rem / 96);*/
            }
        }
    }
</style>