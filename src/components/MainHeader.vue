<template>
    <header>
        <section class="container menu-wrapper">
            <!-- logo -->
            <figure class="menu-logo">
                <img src="../assets/img/dc-logo.png" alt="logo">
            </figure>

            <!-- menu -->
            <div class="menu-link">
                <ul>
                    <li v-for="(item, index) in menu" :key="index" :class="[item.activeMenu || index == activeIndex ? 'active' : '' ]" @mouseenter="item.activeMenu = true" @mouseleave="item.activeMenu = false">
                        <a :href="item.link">{{item.text}}</a>
                    </li>
                </ul>
            </div>
        </section>
    </header>    
</template>

<script>
    export default{
        name: 'MainHeader',
        data (){
            return{
                activeIndex: 1,
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
@import '../assets/scss/variables.scss';

header{    
    .menu-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 120px;

        .menu-logo{
            width: 80px;
            min-width: 80px;
        }

        .menu-link{
            display: flex;
            gap: 34px;
            
            ul{
                display: contents;
                
                li{
                    list-style: none;
                    text-transform: uppercase;
                    font-weight: 800;
                    font-size: 12PX;
                    letter-spacing: -0.05em;
                    position: relative;
                    height: 100%;
                    line-height: 120px;
                    transition: all 300ms linear;
                }

                .active{
                    color: $blue;

                    &::after{
                        content: '';
                        display: inline-block;
                        background-color: $blue;
                        height: 5px;
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        animation: after_enter 300ms linear;
                    }
                }
            }
        }

    }

    @keyframes after_enter {
        0%{
            height: 0;
        }
        100%{
            height: 5px;
        }        
    }
}

</style>