import { createStore } from 'vuex';
import axios from "axios";

const renderURL = "https://eternal-caskets.onrender.com"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
  },
  getters: {
    getUsers:(state)=>state.users,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setProducts(state, values) {
      state.products = values;
    },
    setProduct(state, value) {
      state.product = value;
    },
    showSpinner(state, value){
      state.showSpinner = value
    }
  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${renderURL}Users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchProducts(context) {
      context.commit('showSpinner', true)

      const res = await axios.get(`${renderURL}Products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
        context.commit("showSpinner", false);
      } else {
        context.commit("setProduct", err);
        context.commit("showSpinner", true);
      }
    },
  },
  modules: {},
});
