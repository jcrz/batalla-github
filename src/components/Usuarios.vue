<template>
    <div>
        <div class="main">
            <PerfilUsuario />
            <PerfilUsuario />
        </div>
        <div>
            <button class="btn-lucha" @click="verResultado()" >A Luchar</button>
        </div>
    </div>
</template>

<script>
import PerfilUsuario from './PerfilUsuario'

export default {
    name: 'Usuarios',
    components: {
        PerfilUsuario
    },
    methods: {
    verResultado() {
      this.$router.push({ name: 'resultado' });
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.btn-lucha {
    margin-top: 20px;
  cursor: pointer;
  padding: 4px 65px;
  font-size: 18px;
  color: white;
  border-radius: 20px;
  background-color: #29A745;
  border: none;
}
.btn-lucha:hover {
  background-color: #218838;
}
</style>