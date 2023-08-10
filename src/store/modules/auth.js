import axios from "axios";

const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || ''
    },
    getters: {
        isAuthenticated: state => !!state.token,
    },
    actions: {
        async login({commit}, credentials) {
            try {
                const response = await axios.post(
                    "https://fakestoreapi.com/auth/login",
                    credentials
                );
                const token = response.data.token;

                localStorage.setItem("token", token);
                commit("SET_TOKEN", token);
                return true
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        logout({commit}){
            // localStorage.removeItem('token');
            // commit("SET_TOKEN", "");
            const token = localStorage.getItem('token');
            localStorage.removeItem('token');
            commit("SET_TOKEN", '')
            console.log("Token removed : ", token)
        }
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token;
        }
    }
}

export default auth;