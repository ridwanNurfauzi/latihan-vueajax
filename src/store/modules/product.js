import axios from "axios";

export default {
    namespaced: true,
    state: {
        products: [],
        product: []
    },
    getters: {
        getProduct: state => state.products
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const dataProduct = await axios.get("https://fakestoreapi.com/products")
                commit('SET_PRODUCT', dataProduct.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchProductById({ commit }, productId) {
            try {
                const dataProduct = await axios.get(`https://fakestoreapi.com/products/${productId}`)
                commit('SET_PRODUCT_BY_ID', dataProduct.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        }
    },
    mutations: {
        SET_PRODUCT(state, products) {
            state.products = products
        },
        SET_PRODUCT_BY_ID(state, products) {
            state.product = products
        }
    }
}