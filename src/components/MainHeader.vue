<template>
    <header>
        <section class="container ">

            <div class="menu-wrapper">
                <!-- logo -->
                <figure class="menu-logo">
                    <img src="../assets/img/dc-logo.png" alt="logo">
                </figure>

                <!-- menu -->
                <div class="menu-link">
                    <ul>
                        <li v-for="(item, index) in menu" :key="index" 
                        :class="['nav-item', index == activeIndex ? 'active' : '' ]">

                            <a :href="item.link">{{item.text}}</a>
                        </li>
                    </ul> 
                </div>  

                <!-- menu icon -->
                <div class="menu-icon">
                    <a href="#">
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
            </div>                    

            <!-- hamburger menu -->
            <div class="hamburger-menu" :class="hamburgerMenu ? 'active' : 'd-none' ">
                <ul>
                    <li v-for="(item, index) in menu" :key="index" 
                    :class="['nav-item', index == activeIndex ? 'active' : '' ]">

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
                        link: '#'
                    },
                    {
                        text: 'Comics',
                        link: '#'
                    },
                    {
                        text: 'Movies',
                        link: '#'
                    },
                    {
                        text: 'TV',
                        link: '#'
                    },
                    {
                        text: 'Games',
                        link: '#'
                    },
                    {
                        text: 'Collectibles',
                        link: '#'
                    },
                    {
                        text: 'Videos',
                        link: '#'
                    },
                    {
                        text: 'Fans',
                        link: '#'
                    },
                    {
                        text: 'News',
                        link: '#'
                    },
                    {
                        text: 'Shop',
                        link: '#'
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
    user-select: none;

    .menu-wrapper{
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 120px;
        z-index: 999;

        .menu-logo{
            max-width: 80px;
            cursor: pointer;
        }

        .menu-link{
            display: flex;
            height: 100%;
            gap: 34px;
            
            ul{
                display: contents;

                .nav-item{
                    @include styleFont;
                    font-size: 12px;

                    a{
                        height: 100%;
                        display: flex;
                        align-items: center;
                        position: relative;
                    }

                    &.active, :hover{
                        color: $blue;
                        transition: all 300ms linear;
                    }

                    &.active, &:hover{

                        a::after{
                            content: '';
                            display: block;
                            background-color: $blue;
                            height: 5px;
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            animation: after_enter 300ms linear;
                        }
                    }
                }
            }
        }

        .menu-icon{
            display: none;
            font-size: 25px;
            z-index: 999;
        }
    }

    .hamburger-menu{
        display: none;
        position: relative;
        padding: 20px;
        min-width: 100vw;
        min-height: calc(100vh - 50px);
        background: #242526;
        color: white;
        font-size: 20px;               

        ul{
            .nav-item{
                @include styleFont;
                font-size: 18px;
                padding: 15px 0;
                    
                &.active, :hover{
                    color: $blue;
                    text-decoration: underline;
                    transition: all 300ms linear;
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

    @media screen and (max-width: 900px) {
        .menu-wrapper{
            height: 50px;

            .menu-logo{
            width: 35px;
            min-width: 35px;
            }

            .menu-link{
                display: none;
            }

            .menu-icon{
                display: inline-block;
            }              
        }

        .hamburger-menu.active{
            display: block;
        }    
    }
}

</style>