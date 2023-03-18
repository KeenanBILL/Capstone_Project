<template>
    <div class="container">

        <form  @submit.prevent="Login">

            <div class="input-box">

            <span class="form-label">Email Address</span>

            <input type="text" class="form-control" name="name" required v-model="payload.emailAdd">

            </div>

            <div class="input-box">

            <span class="form-label">Password</span>

            <input type="password" class="form-control" name="name" required v-model="payload.userPass">

            </div>

            <div class="col-6">

            <button class="btn" type="submit">Login</button>

            <!-- <button class="btn" type="submit"><router-link to: :to="/register"></router-link></button> -->

            </div>

        </form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                payload: {
                    emailAdd: "",
                    userPass: ""
                }
            }
        },
        methods: {
            Login() {
                this.$store.dispatch("Login", this.payload);
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>

</style>