<template>
    <div class="person-list">
        <div class="person-list-item" v-for="(item,index) in personData" :key="item.id">
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
            width: calc(100% / 4);
            padding: calc(8rem / 96);
            font-family: "kaiti";
            color: #fffde3;


            box-sizing: border-box;

            .person-foto {
                width: 100%;
                height: calc(264rem / 96);
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
    }
</style>