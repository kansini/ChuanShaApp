<template>
    <div id="secretaryNav">
        <div class="list-container">
            <div class="nav-group">
                <router-link to="member" tag="div" class="nav-group-item">团队成员</router-link>
                <router-link to="trainee" tag="div" class="nav-group-item">带教学员</router-link>
                <router-link to="plan" tag="div" class="nav-group-item">带教计划</router-link>
                <router-link to="event" tag="div" class="nav-group-item">活动集锦</router-link>
            </div>
            <router-view/>
        </div>

    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style lang="scss" scoped>
    #secretaryNav {
        height: 100vh;

        .nav-group {
            display: flex;
            justify-content: flex-start;
            padding: calc(16rem / 96) 0;
            box-sizing: border-box;
            color: #DC9A4F;

            .nav-group-item {
                font-family: "xiaokai";
                font-size: calc(36rem / 96);
                font-weight: bolder;
                //padding: 0 calc(24rem / 96);
                margin-right: calc(56rem / 96);
                cursor: pointer;
                transition: all ease .6s;
                &:hover{
                    color: #AD6D23;
                }
            }


        }
    }

</style>