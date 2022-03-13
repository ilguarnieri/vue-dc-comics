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
                    <li v-for="(item, index) in menu" :key="index" 
                    :class="[item.activeMenu || index == activeIndex ? 'active' : '' ]"
                    @mouseenter="item.activeMenu = true"
                    @mouseleave="item.activeMenu = false">

                        <a :href="item.link">{{item.text}}</a>
                    </li>
                </ul>

                <a href="#" class="hamburger-icon">
                    <!-- burger -->
                    <font-awesome-icon 
                    @click="hamburgerMenu = true"
                    :class="hamburgerMenu ? 'd-none' : ''"
                    icon="fa-bars" />

                    <!-- close -->
                    <font-awesome-icon
                    @click="hamburgerMenu = false"
                    :class="hamburgerMenu ? '' : 'd-none'"
                    icon="fa-times" />
                </a>  
            </div>

            <!-- hamburger menu -->
            <div class="hamburger-menu" :class="hamburgerMenu ? 'active' : 'd-none' ">
                <ul>
                    <li v-for="(item, index) in menu" :key="index" 
                    :class="[item.activeMenu || index == activeIndex ? 'active' : '']">

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
                hamburgerMenu: false,
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
@import '../assets/scss/mixins.scss';

header{
    padding: 0 10px;
    user-select: none;

    background-color: white;

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

            .hamburger-icon{
                display: none;
            }
            
            ul{
                display: contents;
                
                li{
                    @include liHeader;
                    position: relative;
                    height: 100%;
                    line-height: 120px;
                    font-size: 12PX;
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

        .hamburger-menu{
            display: none;
            position: absolute;
            bottom: 0;
            left: 0;                
            padding: 20px;
            min-width: 100vw;
            min-height: calc(100vh - 50px);
            background: #242526;
            color: white;
            font-size: 20px;

            ul{
                li{
                    @include liHeader;
                    padding: 15px 0;                
                }

                .active{
                    color: $blue;
                    text-decoration: underline;
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

    @media screen and (max-width: 940px) {
        .menu-wrapper{
            height: 50px;

            .menu-logo{
            width: 35px;
            min-width: 35px;
            }

            .menu-link{
                .hamburger-icon{
                    display: inline-block;
                    font-size: 25px;
                }
                ul{
                    display: none;  
                }                          
            }

            .hamburger-menu.active{
                display: block;
            }      
        }
    }
}

</style>