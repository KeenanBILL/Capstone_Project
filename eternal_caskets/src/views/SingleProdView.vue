<template>

    <div class="container">
    
        <div class="row gap-3">
                
            <div class="card" style="width: 18rem ;" v-for="item in Products" :key="item.prodID">

                <img :src="item.imgURL" class="card-img-top" alt="...">

                    <div class="row card-body">

                        <h5 class="card-title">{{item.prodName}}</h5>

                        <p class="card-text">R {{item.price}}</p>

                        <p class="card-text">{{item.prodDes}}</p>

                    <router-link to="/SingleProd"><a class="btn" >Add to Cart</a></router-link>

                </div>

            </div>

        </div>
        
    </div>
</template>

<script>

import { computed } from "@vue/runtime-core";
    import { useStore } from "vuex";

    export default {
        setup() {
            const store = useStore();
            store.dispatch("fetchProduct");
            const Product = computed(() => store.state.product);
            return {
                Product,
            };
        },
    };

</script>

<style scoped>

</style>