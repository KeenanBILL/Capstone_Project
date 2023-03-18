import axios from "axios";
import { createStore } from "vuex";
import router from "@/router"; 

const renderURL = "https://eternal-caskets.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    message: null,
    loadSpinner: true
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
    setItem(state, value) {
      state.SingleProd = value;
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
    async SingleProd(context, id) {
      const res = await axios.get(`${renderURL}products/${id}`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setItem", results[0]);
      } else {
        context.commit("setMessage", err);
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
    },
    async updateProd(context) {
      const res = await axios.put(`${renderURL}products/:id`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setProduct", err);
      }
    },
    async removeProduct(context) {
      const res = await axios.delete(`${renderURL}products/:id`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setProduct", err);
      }
    },
    async addUser(context, payload) {
      const res = await axios.post(`${renderURL}register`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        router.push("/register");
      } else {
        alert(err);
      }
    }
  },
  
  modules: {},
});
