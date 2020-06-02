import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Login from './module/login_module';

export default new Vuex.Store({
    modules: {
        Login
    }
})