<template>
    <div class="resultado">
        <h3>Ganador !</h3>
        <div class="ganador">
            @User
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resultado',

}
</script>

<style scoped>
.resultado {
    margin: 20%;
}
.ganador {
    width: 400px;
    background-color: white;
    border-radius: 8px;
    margin: 40px 0px;
    padding: 10px 0px;
}
</style>