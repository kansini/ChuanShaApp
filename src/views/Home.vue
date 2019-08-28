<template>
    <div class="home">
        <div class="logo"></div>
        <mainMenu :menuData="menuData"/>
    </div>
</template>

<script>
    import mainMenu from '@/components/MainMenu'

    export default {
        name: 'home',
        components: {mainMenu},
      data() {
        return {
          menuData: [
            {
              "name":"书记工作室",
              "path":"/"
            },
            {
              "name":"党代表工作室",
              "path":"/"
            },
            {
              "name":"人大代表工作室",
              "path":"/"
            }
          ]
        }
      },
    }
</script>
<style lang="scss" scoped>
    .home {
        .logo {
            position: absolute;
            left: calc(180rem / 96);
            top: calc(64rem / 96);
            width: calc(222rem / 96);
            height: calc(770rem / 96);
            background: url("../assets/img/logo.png") no-repeat center;
            background-size: 100%;

        }
    }
</style>
