<template>
  <div class="home container">
    <img :src="img" @error="imgError">

    <div class="row row-cols-1 row-cols-md-3 g-4">

   <div v-for="item in secciones" :key="item">
        
          <div class="col">
            <div class="card bg-dark">
              <img :src="(`${item.imagen}`)">
              <div class="card-body ">
                <h5 class="card-title">{{item.nombre}}</h5>
               
              </div>
              
            </div>
            <br>
            
          </div>
        </div>
  </div>
  
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      secciones: [
        {nombre:'Characters', imagen:'https://starwars-visualguide.com/assets/img/categories/character.jpg'},
        {nombre:'Films', imagen:'https://starwars-visualguide.com/assets/img/categories/films.jpg'},
        {nombre:'Species', imagen:'https://starwars-visualguide.com/assets/img/categories/species.jpg'},
        {nombre:'Starships', imagen:'https://starwars-visualguide.com/assets/img/categories/starships.jpg'},
        {nombre:'Vehicles', imagen:'https://starwars-visualguide.com/assets/img/categories/vehicles.jpg'},
        {nombre:'Planets', imagen:'https://starwars-visualguide.com/assets/img/categories/planets.jpg'}
      ],

    }
  },
  components: { 
  },
  computed:{

  },

  methods: {  
   
       
     },
}
</script>
