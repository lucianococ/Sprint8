<template>
        <div>
            <h1>Starships</h1>
        
           <div class="container">
               <div class=" container btn-toolbar justify-content-end" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn btn-warning " @click="pageNext(starships.previous), getStarships()" >Anterior</button>
                        <button type="button" class="btn btn-warning " @click="agregarPage(1), getStarships()" >1</button>
                        <button type="button" class="btn btn-warning" @click="agregarPage(2), getStarships()">2</button>
                        <button type="button" class="btn btn-warning" @click="agregarPage(3), getStarships()">3</button>
                        <button type="button" class="btn btn-warning" @click="agregarPage(4), getStarships()">4</button>
                        <button type="button" class="btn btn-warning" @click="pagePrev(starships.next), getStarships()" >Siguiente</button>                       
                    </div>
                   
                </div>
                <br>
                <div class="row">
                    <div class="col-6" v-for='(item, i) in starships.results' :key='i'>
                        <router-link class="router-link" :to="{ name: 'StarshipsItem', params:{ name:item.name, starship:item}}" > 
                        <div class="container">  
                            <div class="card p-3 mb-3 bg-dark rounded">
                                <div class="card-body">
                                    <h4 class="card-title " >{{item.name }}</h4>
                                    <h5 class="card-title " >{{item.model}}</h5>
                  
                                </div>
                            </div> 
                            
                        </div> 
                    </router-link> 
                    </div> 
                    
                </div>
                
            </div>
     
        </div>
        
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    data(){
        return {
            page: 0,
            film: '',
        }
    },
      
    computed:{
        ...mapState(['starships']),
        
        pages:{
            get (){
                return this.$store.state.pages;            
                },
        
            set(val){
                this.$store.commit('SET_PAGES', val);
            }
        },    
    },
     mounted() {
    this.$store.dispatch("getStarships");
   
     },
      methods:{
        ...mapActions(['agregarPage', 'getStarships', 'pagePrev', 'pageNext'])
        
     }  
}
</script>
<style lang="scss">
a .router-link{
 text-decoration: none;
 text-decoration-line: none;
}
 



    
</style>