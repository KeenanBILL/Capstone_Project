import axios from "axios";
import { createStore } from "vuex";

const renderURL = "https://eternal-caskets.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
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
    }
  },

  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${renderURL}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${renderURL}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setProduct", err);
      }
    },
    async fetchProduct(context) {
      const res = await axios.get(`${renderURL}products/:id`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setProduct", err);
      }
    },
    async addProduct(context) {
      const res = await axios.post(`${renderURL}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setProduct", err);
      }
    }
  },
  
  modules: {},
});
