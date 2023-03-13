<template>

  <section id="Home" class="Main py-5">

    <div class="container py-5">

        <div class="row py-5">

            <div class="col-lg-6 py-5">

                <p class="m-0">Welcome to</p>

                <h1 class="welcome-name">Eternal_Caskets</h1>

                <div class="line my-4"></div>

                <br>

                <button class="btn"><router-link class="links" to="/products">Shop Now</router-link></button>

            </div>

        </div>

    </div>

</section>

<!--Welcome-->

<section class="Welcome text-center pb-5">

    <div class="container py-5">

        <div class="row py-5 text-white">

            <div class="col-lg-6 m-auto">

                <p class="m-0">Agriculture</p>

                <h1>Organic Products</h1>

                <div class="line2 my-4"></div>

                <p>We do the walking for you by getting the best produce, that can be found internationally. </p>

            </div>

        </div>

        <div class="row">

            <div class="col-lg-4">

                <div class="card py-3">

                    <div class="card-body">

                        <span><i class="bi bi-shop-window"></i></span>

                        <h2>Always Fresh</h2>

                        <p>We serve our consumers the fresh produce, stored in at the right temperature. This maintains our products longevity</p>

                    </div>

                </div>

            </div>

            <div class="col-lg-4">

                <div class="card py-3">

                    <div class="card-body">

                        <span><i class="bi bi-flower2"></i></span>

                        <h2>Healthy Produce</h2>

                        <p>Providing fresh and best option to keep a healthy lifestyle by purchasing some healthy sugar from us.</p>

                    </div>

                </div>

            </div>

            <div class="col-lg-4">

                <div class="card py-3">

                    <div class="card-body">

                        <span><i class="bi bi-gift"></i></span>

                        <h2>100% Organic</h2>

                        <p>Tested and approved to be organic by the best agriculturist, so we always keeping to the standard.</p>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

</template>

<script>

export default {
  components: {
  }
}

</script>

<style scoped>

.main{
  background: url(https://i.postimg.cc/CKMd16pf/Background-Home.jpg) no-repeat;
  background-size: cover;
  height: auto;
  width: 100%;
  max-width: 100%;
}

.main h1{
  font-size: 5rem;
  font-family: 'Righteous', cursive;
  max-width: 100%;
}

.main p:nth-child(1){
  font-size: 18px;
  font-weight: 500;
  padding-top: 100px;
}

.main p:nth-child(2){
  font-size: 18px;
  color: grey;
}

.btn{
  border-radius: 25px;
  background-color: #05668D;
  color: #F0F3BD;
  height: 50px;
  width: 25%;
  outline: none;
  border: none;
  transition: all 0.4s;
}

</style>
