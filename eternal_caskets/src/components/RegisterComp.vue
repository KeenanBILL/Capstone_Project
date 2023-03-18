<template>

    <div class="container">

        <form class="form" @submit.prevent="$event=> addUser()">

            <div class="input-box">

            <span class="form-label">First Name</span>

            <input type="text" class="form-control" name="name" required v-model="payload.firstName">

            </div>

            <div class="input-box">

            <span class="form-label">Last name</span>

            <input type="text" class="form-control" name="name" required v-model="payload.lastName">

            </div>

            <div class="input-box">

            <span class="form-label">Gender</span>

            <input type="text" class="form-control" name="name" required v-model="payload.genDer">

            </div>

            <div class="input-box">

            <span class="form-label">Cellphone Number</span>

            <input type="text" class="form-control" name="name" required v-model="payload.cellNumb">

            </div>

            <div class="input-box">

            <span class="form-label">Create Password</span>

            <input type="password" class="form-control" name="name" required v-model="payload.userPass">

            </div>

            <div class="input-box">

            <span class="form-label">Confirm Password</span>

            <input type="password" class="form-control" name="name" required v-model="payload.confirm_pass">

            </div>

            <div class="input-box">

            <span class="form-label">Email Address</span>

            <input type="text" class="form-control" name="name" required v-model="payload.emailAdd">

            </div>

            <div class="col-6">

            <button class="btn" type="submit">Submit</button>

            </div>

        </form>

    </div>

</template>

<script>

    export default {

        data() {
            return {
                payload: {
                    firstName: "",
                    lastName: "",
                    genDer: "",
                    cellNumb:"",
                    userPass:"",
                    emailAdd:"",
                },
                confirm_pass: ""
            }
        },
        methods: {
            addUser() {
                if(this.payload.userPass !== this.confirm_pass) {
                    alert("Password not valid.")
                }
            else {
                this.$store.dispatch("addUser", this.payload);
            }
        }
        
    }
};
</script>

<style scoped>

.input-box{
    width: 50%;
}

</style>