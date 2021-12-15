<template>
    <div>
        <header>
            <div class="row align-items-center">
                <div class="col-4"></div>
            <div class="logo align-item-center col-4">
                <div class="title" id="arriba">star</div>
                <div class="subtitle">A VISUAL GUIDE</div>
                <div class="title" id="abajo">wars</div>
            </div>
            <div class="col-4">
                <login></login>
            </div>
            </div>
        </header>
    </div>
</template>
<script>
import Login from '../components/Login.vue'

export default {
  components: { Login },
    name:'Header',
    component:{
        Login
    }
    
}
</script>