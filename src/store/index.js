
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    starships: [],
    pages: '',
    api: 'https://swapi.py4e.com/api/starships/?page=',
    api2: 'https://swapi.py4e.com/api/starships/?page=',
    peliculas: [],
    pelisAsignadas: [],
    people:[],
    total: '',
    pilotosAsignados: [],
    Login: [],
    registrados: [],
    autentificacion: false
  },
  mutations: {
    SET_AUTENTIFICACION(state, status){
      state.autentificacion = status;
    },
    
    SET_PAGES( state, pages){
      state.pages = pages
    },
    SET_API(state, api){
      state.api = api  
    },
    SET_STARSHIPS( state, starships ){
      state.starships = starships  
    },
    SET_PELICULAS(state, peliculas){
      state.peliculas = peliculas
    }, 
    SET_PEOPLE(state, people){
        state.people.push(people)
      
    }, 
    SET_TOTAL(state, total){
      state.total = total
    },

    SET_PELIS_ASIGNADAS(state, val){
      state.pelisAsignadas = val
    }, 
    SET_PILOTO_ASIGNADO(state, val){
      state.pilotosAsignados = val
    }, 
    SET_REGISTROS(state, val){
      state.registros = val 
    },
    SET_REGISTRADOS(state,val){
      state.registrados.push({
        username: val.username,
        email: val.email,
        password:val.password3
      })
    },
    SET_LOGIN(state, Login){
      state.Login = Login
    }
      
  },
  actions: {
    agregarPage({commit, state}, val){
      state.pages =  val
      commit('SET_PAGES', val)
      commit('SET_API', this.state.api+this.state.pages) 
    },
    getStarships({commit}) {
      axios.get(this.state.api)
      .then(response => {
        commit('SET_STARSHIPS', response.data)
        commit('SET_API', this.state.api2) 
      })  
    },
    pagePrev({commit, state}, val){
      state.api = val
      commit ('SET_API', val)
    },
    pageNext({commit, state}, val){
      state.api = val
      commit ('SET_API', val)
    },
    getfilms({commit}) {
      axios.get('https://swapi.py4e.com/api/films/')
      .then(response => {
        commit('SET_PELICULAS', response.data)
        
      })  
    },
    
    
    getpeople({commit})
    {
      var totales = 'https://swapi.py4e.com/api/people'
      axios.get(totales)
      .then(response => {
        commit( 'SET_TOTAL', response.data.count)
        console.log(response.data.count)
      })
      
      var i = this.state.people.length
        do{
          axios.get('https://swapi.py4e.com/api/people/'+i)
          .then(response => {
              commit('SET_PEOPLE', response.data)
            
          })
            i++; 
          }while( i <= this.state.total)
           
     console.log(this.state.people) 
    },
  
  
      agregarpeli({commit, state}, val){
      state.pelisAsignadas 
        commit('SET_PELIS_ASIGNADAS', val )
    },
    agregarpiloto({commit, state}, val){
      state.pilotosAsignados
        commit('SET_PILOTO_ASIGNADO', val )
    },
    agregarRegistro({commit, state}, val) {
      const registrado = state.registrados.find(item => item.username === val.username)
      if (!registrado){
        commit('SET_REGISTRADOS', val)
      }
     
    },
    agregarLogin({commit, state}, val) {
      state.login
        commit('SET_LOGIN', val)   
        let usuarios = state.registrados;
        const autentificacion = usuarios.some(usuario => usuario.username == state.Login.username) && usuarios.some(usuario=> usuario.password == state.Login.password)
        if (autentificacion == true){
          commit('SET_AUTENTIFICACION', true)
        }
    }  
  },
  getters: {
   
    filteredPelis(state) {
      let resultado = []
      let asignadas = state.pelisAsignadas
      asignadas.forEach(peli => filtro(peli) );
      function filtro(peli){
      let peliculas = state.peliculas.results
      let filtradas = Object.entries(peliculas)
      let recorrer = filtradas.filter(element => element[1].url == peli)
      Object.keys(recorrer).map(key => {
        const value = recorrer[key]
        const id = value[1].url.split("/films/").pop().replace('/', '')
        const name = value[1].title
        console.log(value[1].url)
        resultado.push({name: name, id: id, contenido: value[1]})
        console.log(id)
      })
      }
      return resultado
    },
    filteredPeople(state){
      let resultado = []
      let asignados = state.pilotosAsignados
      asignados.forEach(people => filtro(people) );
      function filtro(people){
      let pilotos = state.people
      let filtrados = Object.entries(pilotos)
      let recorrer = filtrados.filter(element => element[1].url == people)
      //console.log(filtrados)
      //console.log(recorrer)

      Object.keys(recorrer).map(key => {
        const value = recorrer[key]
        const id = value[1].url.split("/people/").pop().replace('/', '')
        //console.log(value[1].name)
        const name = value[1].name
        resultado.push({name: name, id: id, contenido: value[1]})
        //console.log(resultado)
        
      })
      }     

      return resultado
    }
  
  },
  
})
