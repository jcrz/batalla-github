<template>
  <div>
    <div class="buscador">
      <input type="text" v-model="usuario" />
      <button class="btn-buscar" @click="updateUser">Buscar</button>
    </div>
    <div>
      <img v-if="isLoading" alt="Cargando" src="../assets/loading.gif" />
    </div>
    <div v-if="info && !isLoading" class="perfil-usuario">
      <div>
        <div class="header">
          <a :href="info.html_url" class="redirect">
            <i class="fas fa-external-link-alt"></i>
          </a>
          <div class="content">
            <img class="image" :src="info.avatar_url" />
            <h3 class="name">{{ info.name }}</h3>
            <h3 class="sub-name">@{{ info.login }}</h3>
          </div>
        </div>
        <div class="estadisticas">
          <div class="info">
            <h3>About</h3>
            <div>
              <h5>Public repos</h5>
              <p>{{ info.public_repos }}</p>
            </div>
            <div>
              <h5>Public Gists</h5>
              <p>{{ info.public_gists }}</p>
            </div>
            <div>
              <h5>Followers</h5>
              <p>{{ info.followers }}</p>
            </div>
            <div>
              <h5>Following</h5>
              <p>{{ info.following }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerfilUsuario",
  data() {
    return {
      usuario: "",
      info: null,
      isLoading: false,
    };
  },
  mounted() {
    if (this.usuario != "") {
      this.getUserGitData();
    }
  },
  methods: {
    updateUser() {
      this.getUserGitData();
    },
    async getUserGitData() {
      try {
        this.isLoading = true;
        let response = await this.$http.get(
          `https://api.github.com/users/${this.usuario}`
        );
        this.info = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(`Ocurrio el siguiente error: ${error}`);
        this.isLoading = false;
        if (error.response) {
          // here, you may want to drill even further to handle 400 and 500 level errors differently
          alert("Usuario no encontrado.");
          console.log(error.response);
        } else if (error.request) {
          // this will only be reached if the request didn't ever receive a response
          alert("No hay respuesta del servidor..." + error.request);
          console.log(error.request);
        } else {
          // something in the setup of the request triggered an error
          alert("Error en la solicitud." + error.message);
          console.log(error.message);
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.perfil-usuario {
  position: relative;
  margin-left: 30px;
  background-color: #fff;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  overflow: hidden;
}
.buscador {
  margin-left: 30px;
}
.perfil-usuario:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 270px;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, #00e9f5, #4facfe);
  clip-path: circle(400px at 50% -48.5%);
}
.header {
  position: relative;
  height: 265px;
}
.redirect {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 1.5rem;
  color: #fff;
  opacity: 0.8;
  transition: 0.3s;
  z-index: 3;
}
.redirect:hover {
  opacity: 1;
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content .image {
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: no-repeat center / cover;
  border: 4px solid #00d8fe;
  margin-bottom: 2px;
  overflow: hidden;
  cursor: pointer;
}
.name {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 500;
  line-height: 1;
  margin: 5px 0;
}
.sub-name {
  font-family: "Cutive Mono", monospace;
  font-size: 1.2rem;
  opacity: 0.8;
  color: #fff;
}
.estadisticas {
  padding: 1rem 2.5rem 2.6rem 2.5rem;
}
input {
    width: 200px;
    padding: 4px 20px;
    border-radius: 20px;
    border: 1px solid #f7f7f7;
    margin-bottom: 10px;
    margin-right: 5px;
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);
    outline: none;
}
.btn-buscar {
    border: none;
    padding: 4px 20px;
    border-radius: 20px;
    background-image: linear-gradient(to left, #00e9f5, #4facfe);
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    outline: none;
}
.btn-buscar:hover {
    color: white;
}
</style>
