import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userName: ''
  },
  mutations: {
    UPDATE_TOKEN (state) {
      state.token = /access_token=([^&]+)/.exec(document.location.hash)[1];
    },
    UPDATE_USERNAME (state, payload) {
      state.userName = payload;
    }
  },
  actions: {
    getToken({ commit }) {
      commit('UPDATE_TOKEN');
    },
    getDiskInfo({ commit, state }) {
      axios.get('https://cloud-api.yandex.net/v1/disk/', { headers: { Authorization: `OAuth ${state.token}` } })
          .then((response) => {
              commit('UPDATE_USERNAME', response.data.user.display_name);
      });
    }
  },
  getters: {
    token: state => state.token,
    userName: state => state.userName
  }
})
