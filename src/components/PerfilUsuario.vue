<template>
    <div class="perfil-usuario">
        <div class="header">
            <a href="#" class="redirect">
                <i class="fas fa-external-link-alt"></i>
            </a>
            <div class="content">
                <div class="image">
                    <div class="hover">
                        <i class="fas fa-camera fa-2x"></i>
                    </div>
                </div>
                <h3 class="name">Juan Fuentes</h3>
                <h3 class="sub-name">@Juan_1994</h3>
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
</template>

<script>
export default {
  name: "PerfilUsuario",
  data() {
      return {
          info: null
      };
  },
  mounted() {
      this.getUserGitData();
  },
  methods: {
      async getUserGitData() {
          try {
              let response = await this.$http.get("https://api.github.com/users/eantillanca")
              this.info = response.data;
          } catch(error) {
              console.log(`Ocurrio el siguiente error: ${error}`);
          }
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.perfil-usuario {
  position: relative;
  background-color: #fff;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  overflow: hidden;
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
    background: url('https://i.redd.it/v0caqchbtn741.jpg') no-repeat center / cover;
    border: 4px solid #00d8fe;
    margin-bottom: 2px;
    overflow: hidden;
    cursor: pointer;
}
.image .hover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(79, 172, 254, .7);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: .5s;
    opacity: 0;
}
.image:hover .hover{
    opacity: 1;
}
.name{
    font-size: 1.2rem;
    color: #fff;
    font-weight: 500;
    line-height: 1;
    margin: 5px 0;
}
.sub-name {
    font-family: 'Cutive Mono', monospace;
    font-size: 1.2rem;
    opacity: .8;
    color: #fff;
}
.estadisticas {
    padding: 1rem 2.5rem 2.6rem 2.5rem;
}
</style>
