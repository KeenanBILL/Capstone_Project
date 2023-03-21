<template>

    <div class="container mb-5 mt-5">

        <div class="card">

            <div class="card-header">

                <h4>Add Product</h4>

            </div>

            <div class="card-body">

                <div class="mb-3">

                    <label for="">Product Name</label>

                        <input type="text" v-model="this.payload.prodName"  class="form-control"/>

                </div>

                <div class="mb-3">

                    <label for="">Price</label>

                        <input type="text" v-model="this.payload.price" class="form-control"/>

                </div>

                <div class="mb-3">

                    <label for="">Product Description</label>

                        <input type="text" v-model="this.payload.prodDes" class="form-control"/>

                </div>

                <div class="mb-3">

                    <label for="">Image</label>

                        <input type="text" v-model="this.payload.imgURL" class="form-control"/>

                </div>

                <div class="mb-3">

                    <button type="button" @click="addProduct" class="btn">Save</button>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {

data() {
    return {
        payload: {
            prodName:"",
            price:"",
            prodDes:"",
            imgURL:""
        },
    }
},
methods: {
    addProduct() {
        if(this.payload.results !== this.data) {
            alert("Product added successfully.")
        }
        else {
        this.$store.dispatch("addProduct", this.payload);
        }
    }
}
};

</script>

<style scoped>

</style>