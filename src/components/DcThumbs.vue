<template>
    <div class="dc__thumb">

        <figure class="thumb-img">
            <img :src="src">
        </figure>
        
        <h4 class="thumb-title">{{name}}</h4>

    </div>    
</template>

<script>
    export default{
        props: {
            src:{
                type: String,
                required: true
            },
            name:{
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dc__thumb{
        max-width: 185px;
        margin-bottom: 20px;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        .thumb-img{
            height: 185px;
            overflow: hidden;
            margin-bottom: 20px;
        }
        .thumb-title{
            text-transform: uppercase;
            letter-spacing: -0.05em;
            font-size: 14px;
            color: white;
        }

        &:hover{
            transform: scale(1.1);
        }
    }
</style>