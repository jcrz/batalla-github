import Vue from 'vue';
import VueRouter from 'vue-router';

import Usuarios from '../components/Usuarios';
import Resultado from '../components/Resultado';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Usuarios
        },
        {
            path: '/resultado',
            name: 'resultado',
            component: Resultado
        }
    ]
})