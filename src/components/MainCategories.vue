<template>

    <section class="dc__categories">

        <div class="container">
            <ul class="categories__wrapper">
                
                <li v-for="(el, i) in categories" :key="i" class="categories__item">
                    <a :href="el.link" >
                        <img :src="el.src">
                        <p>{{el.text}}</p>
                    </a>
                </li>

            </ul>
        </div>
        
    </section>
    
</template>

<script>
    export default{
        name: 'MainCategories',
        data(){
            return{
                categories:[
                    {
                        text: 'Digital Comics',
                        src: require('../assets/img/buy-comics-digital-comics.png'),
                        link: '#'
                    },
                    {
                        text: 'Dc Merchandise',
                        src: require('../assets/img/buy-comics-merchandise.png'),
                        link: '#'
                    },
                    {
                        text: 'Subscription',
                        src: require('../assets/img/buy-comics-subscriptions.png'),
                        link: '#'
                    },
                    {
                        text: 'Comic Shop Locator',
                        src: require('../assets/img/buy-comics-shop-locator.png'),
                        link: '#'
                    },
                    {
                        text: 'Dc Power Visa',
                        src: require('../assets/img/buy-dc-power-visa.svg'),
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

.dc__categories{
    background-color: $blue;
    height: 155px;

    .categories__wrapper{
        padding: 10px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        .categories__item{

            a{
                font-size: min(2.5vw, 12px);
                display: flex;
                align-items: center;
                gap: 10px;
                color: white;
                font-weight: 700;
                text-transform: uppercase;

                img{
                    max-width: 50px;
                    height: 55px;
                }
            }

            &:hover{
                transform: scale(1.1);
                transition: all 300ms ease-in-out;
            }          
        }
    }

    @media all and (max-width: 900px) {

        a{
            flex-direction: column;
            white-space: wrap;
            text-align: center;
        }
    }
}

</style>