import { createStore } from "vuex";

import product from "./modules/product";
import category from "./modules/category";
import auth from "./modules/auth";
import surah from "./modules/surah";

export default createStore({
    modules: {
        product,
        category,
        auth,
        surah,
    }
});