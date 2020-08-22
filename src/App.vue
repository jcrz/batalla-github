<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <h1>Batalla de Github</h1>
    <div class="main">
      <PerfilUsuario msg="Welcome to Your Vue.js App"/>
      <PerfilUsuario msg="Welcome to Your Vue.js App"/>
    </div>
    
  </div>
</template>

<script>
import PerfilUsuario from './components/PerfilUsuario'

export default {
  name: 'App',
  components: {
    PerfilUsuario
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  background-color: #efefef;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 30px;
}
.main {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
