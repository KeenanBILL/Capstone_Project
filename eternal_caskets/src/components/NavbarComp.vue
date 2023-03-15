<template>
    <div>

        <nav class="navbar navbar-expand-md">
            
            <div class="container-fluid">
    
                <div class="row">
    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        
                        <span class="navbar-toggler-icon"></span>
                        
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        
                        <ul class="navbar-nav mx-auto">
                            
                            <li class="nav-item mx-3" >
                                
                                <router-link to="/">Home</router-link>
                                
                            </li>
                            
                            <li class="nav-item mx-3">
                                
                                <router-link to="/products">Products</router-link>
                                
                            </li>
                            
                            <li class="nav-item mx-3">
                                
                                <router-link to="/contact">Contact</router-link>
                                
                            </li>
                            
                        </ul>
                        
                    </div>
                    
                </div>
                
            </div>
    
        </nav>
        
    </div>

</template>

<script>

    export default {
        
    }

</script>

<style>

.navbar {
    background-color: #00A896;
    border-radius: 20px;
    margin: 15px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 20px;
} 
.navbar a {
    font-weight: bold;
    color: #F0F3BD;
    text-decoration: none;
}
.navbar a:hover {
    text-decoration: none;
    color: #05668D;
}
.navbar a.router-link-exact-active {
    color: #05668D;
    text-decoration: none;
}
</style>