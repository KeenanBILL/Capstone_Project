<template>

    <div class="container">
    
        <div class="row gap-3">
                
            <div class="card" style="width: 18rem ;" v-for="item in Products" :key="item.prodID" >

                <img :src="item.imgURL" class="card-img-top" alt="...">

                    <div class="row card-body">

                        <h5 class="card-title">{{item.prodName}}</h5>

                        <p class="card-text">R {{item.price}}</p>

                        <p class="card-text">{{item.prodDes}}</p>

                    <router-link to="/SingleProd"><a class="btn" >See more</a></router-link>

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
            store.dispatch("fetchProducts");
            const Products = computed(() => store.state.products);
            return {
                Products,
            };
        },
    };

    </script>
    
    <style scoped>

        div.row{
            margin-left: 12px;
        }
        .Products{
        margin-top: 195px;
        margin-bottom: 50px;
        }
        .card{
            background-color:#05668D;
            opacity: 0.8;
            height: 28rem;
            margin-bottom:25px;
            margin-top: 25px;
            border: none;
            border-radius: 15px;
        }
        .card-text{
            color:#F0F3BD;
        
        }
        .card-title{
            color: #F0F3BD;
            font-size: x-large;
        }
        img{
            height: 39%;
        }

        .btn{
            border-radius: 25px;
            background-color: #05668D;
            color: #F0F3BD;
        }

    </style>