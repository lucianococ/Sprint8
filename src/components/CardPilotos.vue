<template>
<div>
     <h5>Películas relacionadas</h5>
                        <div  v-for="(item, index) in filteredPeople" :key="index">                
                        {{item.name}}
                        <br>
                        <img class= "imgcard rounded-circle" :src="(`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`)">
                        </div>
</div>
    
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'CardPeli',

    computed:{
        ...mapGetters(['filteredPeople'])  
    }
    
}
</script>
