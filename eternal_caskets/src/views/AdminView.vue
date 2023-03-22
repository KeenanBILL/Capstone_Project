<template>

<!-- <div class="modal fade" id="hair-products" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

    <div class="modal-dialog" role="document">

        <div class="modal-content">

            <div class="modal-header">

                <h5 class="modal-title" id="exampleModalLabel">Admin</h5>

                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            
                        <span aria-hidden="true">&times;</span>

                    </button>

            </div>

            <div class="modal-body">

        <input id="id" class="form-control" type="text" placeholder="ID" aria-label="default input example"/>

        <input id="type" class="form-control" type="text" placeholder="Type" aria-label="default input example"/>

        <input id="color" class="form-control" type="text" placeholder="Color" aria-label="default input example"/>

        <input id="price" class="form-control" type="text" placeholder=" Price" aria-label="default input example"/>

        <input id="size" class="form-control" type="text" placeholder=" Size" aria-label="default input example"/>

        <input id="image" class="form-control" type="url" placeholder=" Image URL" aria-label="default input example"/>

        </div>

        <div class="modal-footer">

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                <button data-bs-dismiss="modal" type="button" class="btn btn-primary" onclick="Add">Save changes</button>

            </div>

        </div>

    </div>

</div> -->

<table class="table">

    <thead>

    <tr>

        <th scope="col">Image</th>

        <th scope="col">Product Name</th>

        <th scope="col">Price</th>

        <th scope="col">Product Description</th>

        <th scope="col">Edit</th>

        <th scope="col">Delete</th>

    </tr>

    </thead>

    <tbody v-for="item in Products" :key="item.prodID">

        <tr>
            
        <td> <img :src="item.imgURL" alt="..."> </td>

        <td> {{item.prodName}}</td>

        <td> R{{item.price}}</td>

        <td>{{item.prodDes}}</td>

        <td><button type="button" class="btn" >Edit</button></td>

        <td><button type="button" @click="delP(item.prodID)" class="btn">Delete</button></td>

    </tr>
    
</tbody>

</table>

<router-link to="/addProduct">

    <button type="button" class="btnA" >Add Product</button>

</router-link>

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
    methods:{
        delP(id){
            this.$store.dispatch('removeProduct', id);
            location.reload()
        }
    }
};

</script>

<style scoped>
.btn{
    border-radius: 25px;
    background-color: #05668D;
    color: #F0F3BD;
}

td{
    justify-content: center;
    padding: 6px;
}

img{
    width: 3vw;
    height: 5vh;
}

.btnA{
    border: none;
    border-radius: 25px;
    width: 18%;
    background-color: #05668D;
    color: #F0F3BD;
    margin-left: 3%;
}

</style>