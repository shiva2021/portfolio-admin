import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    isAuthenticated: false,
    currentApp: "",
    apps: [
      {
        name: 'Portfolio',
        text: 'portfolio'
      },
      {
        name: 'Barter',
        text: 'barter'
      }
    ]
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    currentApp(state) {
      return state.currentApp;
    }
  },
  mutations: {
    setUser(state, user) {
      if (user) state.user = user;
    },
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setTokens(state, authdata) {
      localStorage.setItem("admin-token", authdata.token);
    },
    logout(state) {
      localStorage.removeItem("admin-token");
      state.user = "";
      state.isAuthenticated = false;
    },
    setCurrentApp(state, app) {
      state.currentApp = app;
    }
  },
  actions: {
    async LOGIN({ commit }, payload) {
      let { data } = await axios.post('/api/admin/login', payload);
      if (!data.err) {
        commit("setUser", data.user);
        commit("setTokens", data.authdata);
        commit("setAuthenticated", data.isAuthenticated);
      }
    },

    async LOGOUT({ commit }, payload) {
      commit("logout");
    },

    async GET_USER({ commit }) {
      try {
        let { data } = await axios.get('/api/get/user');
        if (!data.err) {
          commit("setUser", data.user);
          commit("setAuthenticated", data.isAuthenticated);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
