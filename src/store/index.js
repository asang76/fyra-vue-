import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const state = {
    'active_link': 'home',
    'contact_msg': false,
    'enquiry_msg': false,
}

const store = createStore({
    modules: {
    },
    state,
    mutations,
    actions,
    getters

});

export default store;
