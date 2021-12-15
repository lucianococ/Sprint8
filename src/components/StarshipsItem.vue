<template>
     <div>
        
        <h1 class="text-light" >{{$route.params.name | mayusculas}}</h1>
       

    <div class="container">
       
        <div class="card bg-dark text-light">
            <div class="card-header ">
                <h5 class="card-title "> {{$route.params.starship.name | capitalize}} </h5>
                
              
               
                <img :src="(`https://starwars-visualguide.com/assets/img/starship/${item.id}.jpg`)">

               



                
                <h6 class="card-subtitle mt-3">{{$route.params.starship.model | capitalize}}</h6>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <p class="card-text">{{$route.params.starship.manufacturer | capitalize}}</p>
                        <p>Cost in Credits : {{$route.params.starship.cost_in_credits | capitalize}}</p>
                        <p>Length: {{$route.params.starship.length | capitalize}}</p>
                        <p>Max Atmosphering Speed: {{$route.params.starship.max_atmosphering_speed | capitalize}}</p>
                        <p>Crew: {{$route.params.starship.crew | capitalize}}</p>
                    </div>
                    <div class="col-6">
                        <p>Passengers: {{$route.params.starship.passengers | capitalize}}</p>
                        <p>Cargo Capacity: {{$route.params.starship.cargo_capacity | capitalize}}</p>
                        <p>Consumables: {{$route.params.starship.consumables | capitalize}}</p>
                        <p>Hyperdriver rating: {{$route.params.starship.hyperdrive_rating| capitalize}}</p>
                        <p>MGLT: {{$route.params.starship.MGLT| capitalize}} </p>
                        <p>Starship Class: {{$route.params.starship.starship_class| capitalize}}</p>
                       
                    </div>
      
                </div>
                <div class="row">
                    <div class="col-6">
                         <card-peli></card-peli>
                       
                        
                    </div>
                    <div class="col-6">
                          <card-pilotos></card-pilotos>
                    </div>
                </div>
                
            </div>
           
           
        </div>
      
    </div>
    <br>
     

         <router-link to="/starships"><button class="btn btn-warning"> Volver</button></router-link> 

     
    </div>
    
</template>

<script>
import {  mapState, mapGetters} from 'vuex'
import CardPeli from '../components/CardPeli.vue'
import CardPilotos from '../components/CardPilotos.vue'


export default {
  components: { CardPeli, CardPilotos },
    name: 'StarshipsItem',
    

data(){
    return{
        id: this.$route.params.starship.url.split("/starships/").pop().replace('/', ''),
        url: this.$route.params.starship.url,
        piloto:  this.$route.params.starship.pilots,
        film: this.$route.params.starship.films,
       // defaultImg: "https://starwars-visualguide.com/assets/img/placeholder.jpg" 

        

    }
},
computed:{
    ...mapState(['peliculas', 'pelisFiltradas', 'pelisAsignadas']),
      
    
    films: {
            get (){
                return this.$store.state.pelisAsignadas        
                },
        
            set(val){
                this.$store.commit('SET_PELIS_ASIGNADAS', val);
            }
        },
    pilotos: {
            get (){
                return this.$store.state.pilotosAsignados       
                },
        
            set(val){
                this.$store.commit('SET_PILOTO_ASIGNADO', val);
            }
        },
       
     ...mapGetters(['filteredPelis', 'filteredPeople']),       
},
 mounted() {
     this.$store.dispatch("getfilms"); 
     this.$store.dispatch("getpeople"); 
     this.$store.dispatch("agregarpeli", this.film);
     this.$store.dispatch("agregarpiloto", this.piloto);   
},
}
</script>