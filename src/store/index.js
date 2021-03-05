import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    isAuthenticated: false
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },
  mutations: {
    setUser(state, user) {
      if (user) state.user = user;
    },
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  },
  actions: {
    async LOGIN({ commit }, payload) {
      let { data } = await axios.post('/api/admin/login', payload);
      if (data.userdata) {
        commit("setUser", data.user);
        commit("setAutheticated", data.isAuthenticated);
      }
    }
  },
  modules: {
  }
})
