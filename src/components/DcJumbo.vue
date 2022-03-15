<template>

    <!-- jumbo -->
    <section class="jumbo">
        <img :src="srcJumbo" >
    </section>
    
</template>

<script>
    export default{
        name: 'DcJumbo',
        props: ['srcJumbo']
    }
</script>

<style lang="scss">
    .jumbo{
        max-height: 400px;
        overflow: hidden;

        img{
            width: 100%;
        }
    }

</style>