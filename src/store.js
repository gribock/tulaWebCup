import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userName: '',
    galleryItems: []
  },
  mutations: {
    GET_TOKEN (state) {
      state.token = /access_token=([^&]+)/.exec(document.location.hash)[1];
      sessionStorage.setItem('token', state.token);
    },
    UPDATE_TOKEN (state) {
      state.token = sessionStorage.getItem('token');
    },
    UPDATE_USERNAME (state, payload) {
      state.userName = payload;
    },
    GET_GALLERY_ITEMS (state, payload) {
      state.galleryItems = payload;
    }
  },
  actions: {
    getToken({ commit }) {
      commit('GET_TOKEN');
    },
    updateToken({ commit }) {
      commit('UPDATE_TOKEN');
    },
    getDiskInfo({ commit, state }) {
      axios.get('https://cloud-api.yandex.net/v1/disk/', { headers: { Authorization: `OAuth ${state.token}` } })
          .then((response) => {
              commit('UPDATE_USERNAME', response.data.user.display_name);
      });
    },
    getGalleryItems({ commit, state }) {
      axios.get(
        'https://cloud-api.yandex.net:443/v1/disk/resources/files?fields=items.file&media_type=image', 
        { headers: { Authorization: `OAuth ${state.token}` } }
        ).then((response) => {
          commit('GET_GALLERY_ITEMS', response.data.items);
        });
    }
  },
  getters: {
    token: state => state.token,
    userName: state => state.userName,
    galleryItems: state => state.galleryItems
  }
})
