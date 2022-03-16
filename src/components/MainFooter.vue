<template>
    <footer>

        <section class="footer__body">
            <div class="container">

                <!-- first col -->
                <div class="col">
                    <div class="widget">
                        <h4 class="widget__title">Dc Comics</h4>
                        <ul class="widget__menu">
                            <li>
                                <a href="#">
                                    Characters
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Comics
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Movies
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Tv
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Games
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Videos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    News
                                </a>
                            </li>
                        </ul>
                    </div>

                     <div class="widget">
                        <h4 class="widget__title">Shop</h4>
                        <ul class="widget__menu">
                            <li>
                                <a href="#">
                                    Shop DC
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shop DC Collectibles
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- second col -->
                <div class="col">
                    <div class="widget">
                        <h4 class="widget__title">DC</h4>
                        <ul class="widget__menu">
                            <li>
                                <a href="#">
                                    Terms Of use
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy policy (New)
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Ad Choices
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Advertising
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Jobs
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Subscriptions
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Talent Workshops
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    CPSC Certificates
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Ratings
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shop Help
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- third col -->
                <div class="col">
                    <div class="widget">
                        <h4 class="widget__title">Sites</h4>
                        <ul class="widget__menu">
                            <li>
                                <a href="#">
                                    DC
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    MAD Magazine
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    DC Kids
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    DC Universe
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    DC Power Visa
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="rights__general">
                    <RightsAg />
                </div>

            </div>
        </section>

        <section class="footer__social">
            <div class="container">
                <button class="btn-sign">
                    Sign-up now!
                </button>

                <div class="link__social">
                    <h4 class="link__title">Follow Us</h4>

                    <ul>
                        <li>
                            <a href="#">
                                <img src="../assets/img/footer-facebook.png" alt="facebook">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/footer-twitter.png" alt="twitter">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/footer-youtube.png" alt="fyoutube">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/footer-pinterest.png" alt="pinterest">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/footer-periscope.png" alt="periscope">
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>

        <section class="footer__rights">
             <RightsAg />
        </section>

    </footer>    
</template>

<script>
import RightsAg from './RightsAg.vue'

    export default{
        name: 'MainFooter',
        components:{
            RightsAg
        },
        data(){
            return{


            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixins.scss';

footer{
    height: 480px;
    background-image: url('../assets/img/footer-bg.jpg');
    background-position: center;
    background-size: cover;    
    background-repeat: no-repeat;
    color: white;
    user-select: none;

    .footer__body{
        height: calc(100% - 110px);

        .container{
            display: flex;
            padding: 10px;
            background-image: url('../assets/img/dc-logo-bg.png');
            background-repeat: no-repeat;
            background-position: right center;

            .col{
                min-width: 150px;

                .widget{
                    @include widget;

                    li{
                        color: $grayFooter;

                        a:hover{
                            color: $blue;
                        }
                    }
                }
            }

            .rights__general{
                align-self: flex-end;
                color: $grayFooter;
                margin: 0 auto;
            }
        }
    }

    .footer__social{
        height: 110px;
        background-color: $black3;

        .container{
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .btn-sign{
                @include btn;

                &:hover{
                    background-color: $blue;
                }
            }

            .link__social{
                display: flex;
                align-items: center;
                gap: 20px;

                .link__title{
                    @include styleFont;
                    color: $blue;
                }

                ul{
                    display: contents;
                }
            }
        }
    }

    .footer__rights{
        display: none;
        color: $grayFooter;
        height: 60px;
        background-color: $black2;
        align-items: center;
        padding: 10px;
        text-align: center;
    }

    @media screen and (max-width: 900px) {
        .footer__body{
            .container{
                background-image: url();
            }
        }
    }

    @media screen and (max-width: 560px) {

        height: 190px;
        background-image: url();
        background-color: $black1;

        .footer__body{
            display: none;
        }

        .footer__social{
            height: 100%;
            background-color: transparent;

            .container{
                background-image: url('../assets/img/dc-logo-bg.png');
                background-repeat: no-repeat;
                background-position: right center;
                background-size: 80%;
                padding: 20px 10px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;

                .btn-sign{
                    @include btn;
                    background-color: $blue;
                }

                .link__social{
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 20px;

                    .link__title{
                        @include styleFont;
                        color: $blue;
                    }

                    ul{
                        display: flex;
                        align-items: center;
                        gap: 20px;
                    }
                }
            }
        }

        .footer__rights{
            display: flex;
        }
    }
}

</style>