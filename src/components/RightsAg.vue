<template>
    <section class="rights">
        <p>
            WebApp sviluppata a puro scopo educativo da
            <span class="link__text">
                <a href="https://www.flowcode.com/page/ilguarnieri" target="_blank">
                    Angelo Guarnieri
                </a>
            </span>
                ispirato a
            <span class="link__text">
                <a href="https://www.dccomics.com/" target="_blank">
                    DC Comics
                </a>                    
            </span>
            (tutti i diritti sono riservati)
        </p>
    </section>
</template>

<script>
export default{
    name: 'RightsAg'
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

    .rights{
        font-size: 11px;
        font-weight: 700;

        .link__text{
            color: $blue;
        }
    }
</style>
