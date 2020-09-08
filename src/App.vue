<template>
  <div id="app">
    <h1>Batalla de Github</h1>
    <div class="main">
      <router-view />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  
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
h1 {
  background-color: #fff;
  padding: 10px 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
.main {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>
