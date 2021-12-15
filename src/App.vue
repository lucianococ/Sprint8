<template>
  <div id="app">
    <div class="contenedor">
    <Header></Header>
   <the-navbar></the-navbar>
   <router-view :key="$route.path" />

   <br>
  <footer >
    <div class="footer-content">
        <div class="copyright">
          Designed and Developed by   
          <a href="lucianococcio.com">Luciano Coccio</a>
          @copyright 2021
        </div>
      
      
   </div>
  </footer>

   </div>
    
  </div>
</template>
<script>
import TheNavbar from '../src/components/TheNavbar.vue'
import Header from '../src/components/Header.vue'


export default {
  components: { TheNavbar, Header },
       
 
}
</script>

<style lang="scss">

#app {
  height: calc(100vh - 15px);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000;
  background-image: url('https://www.script-tutorials.com/demos/360/images/stars.png');
  text-decoration: none;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #fff;
    font-style: none;
    font-size: 30px;

    &.router-link-exact-active {
      color: rgb(255, 238, 88);
    }
   
   
  }
}
footer{
  //position: absolute;
  bottom: 0;
  a {
       color: rgb(255, 238, 88)
    }

}
 
.router-link{
  &.router-link{
      text-decoration: none;
    }
}
.title{
  font-family: Star Jedi Hollow ;
  font-size: 60px;
  color: rgb(255, 238, 88) ;
  box-sizing: border-box;
  text-align: center;
  line-height: 96px; 
}
#arriba{
  margin-bottom: -15px;
}
#abajo{
  margin-top: -39px;
}
.subtitle{
  font-family: Biko;
  box-sizing: border-box;
  text-align: center;
  font-size: 15px;
  letter-spacing: 9.6px;
  margin-bottom: 20px;
  margin-top: 10px;
  line-height: 15px;
  color: #fff ;
}

.card-title{
  font-family: Star Jedi Outline ;
  color: rgb(255, 238, 88)
}
.imgcard {
  height: 100px;
  width: 100px;
}


 
 @font-face {
    font-family:'Star Jedi Hollow';
    src: url('./assets/fonts/Starjhol.ttf');
  }
   @font-face {
    font-family:'Star Jedi Outline';
    src: url('./assets/fonts/Starjout.woff');
  }
   @font-face {
    font-family:'Biko';
    src: url('./assets/fonts/Biko_Regular.ttf');
  }

</style>
