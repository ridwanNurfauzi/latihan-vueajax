import { createStore } from "vuex";
// import axios from "axios";

import product from "./modules/product";
import category from "./modules/category";
import auth from "./modules/auth";
import surah from "./modules/surah";

export default createStore({
    // state: {
    //     products: []
    // },
    // getters: {
    //     getProduct: state => state.products
    // },
    // actions: {
    //     async fetchProduct({ commit }){
    //         try {
    //             const dataProduct = await axios.get("https://fakestoreapi.com/products")
    //             commit('SET_PRODUCT', dataProduct)
    //         } catch (error) {
    //             alert("Ada error");
    //             console.log(error);
    //         }
    //     }
    // },
    // mutations: {
    //     SET_PRODUCT(state, products) {
    //         state.products = products
    //     }
    // }
    modules: {
        product,
        category,
        auth,
        surah,
    }
});