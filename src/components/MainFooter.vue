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
                        <h4 class="widget__title">Dc Comics</h4>
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
                        <h4 class="widget__title">Dc Comics</h4>
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
                                <img src="../assets/img/footer-twitter.png" alt="facebook">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/footer-youtube.png" alt="facebook">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/footer-pinterest.png" alt="facebook">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/footer-periscope.png" alt="facebook">
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>

    </footer>    
</template>

<script>
    export default{
        name: 'MainFooter',
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

    .footer__body{
        height: calc(100% - 110px);

        .container{
            display: flex;
            padding: 10px;
            height: 100%;
            background-image: url('../assets/img/dc-logo-bg.png');
            background-repeat: no-repeat;
            background-position: right center;

            .col{
                width: 150px;

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
        }
    }

    .footer__social{
        height: 110px;
        background-color: #303030;

        .container{
            height: 100%;
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .btn-sign{
                @include btn;
                @include itemFont;
            }

            .link__social{
                display: flex;
                align-items: center;
                gap: 20px;

                .link__title{
                    @include itemFont;
                    color: $blue;
                }

                ul{
                    display: contents;
                }
            }
        }
    }
}

</style>