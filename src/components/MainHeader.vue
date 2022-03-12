<template>
    <header>
        <!-- logo -->
        <figure>
            <img src="../assets/img/dc-logo.png" alt="logo">
        </figure>

        <!-- menu -->
        <div>
            <ul>
                <li v-for="(item, index) in menu" :key="index" :class="item.activeMenu ? 'active' : '' ">
                    {{item.text}}
                </li>
            </ul>
        </div>
    </header>    
</template>

<script>
    export default{
        name: 'MainHeader',
        data (){
            return{
                menu: [
                    {
                        text: 'Characters',
                        link: '#',
                        activeMenu: false
                    },
                    {
                        text: 'Comics',
                        link: '#',
                        activeMenu: true
                    },
                    {
                        text: 'Movies',
                        link: '#',
                        activeMenu: false
                    },
                    {
                        text: 'TV',
                        link: '#',
                        activeMenu: false
                    },
                    {
                        text: 'Games',
                        link: '#',
                        activeMenu: false
                    },
                    {
                        text: 'Collectibles',
                        link: '#',
                        activeMenu: false
                    },
                    {
                        text: 'Videos',
                        link: '#',
                        activeMenu: false
                    },
                    {
                        text: 'Fans',
                        link: '#',
                        activeMenu: false
                    },
                    {
                        text: 'News',
                        link: '#',
                        activeMenu: false
                    },
                    {
                        text: 'Shop',
                        link: '#',
                        activeMenu: false
                    }
                ]
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>