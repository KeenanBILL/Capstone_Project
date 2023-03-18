<template>

    <div class="container">
    
        <div class="row gap-3">

            <div class="card">
                
                <img :src="item?.imgURL" class="card-img-top" alt="...">
            
                    <div class="row card-body">

                        <h5 class="card-title">{{item?.prodName}}</h5>

                        <p class="card-text">R {{item?.price}}</p>

                        <p class="card-text">{{item?.prodDes}}</p>

                    <router-link to="/cart"><a class="btn" >Add to Cart</a></router-link>

                </div>

            </div>

        </div>
    
    </div>

</template>

<script>
    export default {
        name: 'SingleProd',
        computed: {
        item() {
            return this.$store.state.item
        }
    },
        created() {
        this.$store.dispatch('SingleProd', this.$route.params.id)
        }
    };
</script>

<style scoped>


</style>