import axios from "axios";

export default {
    namespaced: true,
    state: {
        categories: []
    },
    getters: {
        getCategories: state => state.categories
    },
    actions: {
        async fetchCategories({ commit }) {
            try {
                const dataCategory = await axios.get("https://fakestoreapi.com/products/categories")
                commit('SET_CATEGORIES', dataCategory.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        }
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        }
    }
}