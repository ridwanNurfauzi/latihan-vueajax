<template>
    <div class="flex">
        <div class="mx-4 xl:max-w-7xl xl:mx-auto">
            <div class="lg:container sm:grid sm:grid-cols-2 sm:gap-2">
                <div class="p-[40px] flex">
                    <img class="shadow my-auto" :src="product.image" :alt="product.title">
                </div>
                <div class="p-4 flex">
                    <div class="my-auto">
                        <h2 class="text-2xl font-semibold">{{ product.title }}</h2>
                        <p class="text-sm text-gray-500">{{ product.category }}</p>
                        <div class="my-10" v-if="product.price != undefined">
                            <b class="text-4xl font-bold font-mono">{{ '$' + product.price }}</b>
                        </div>
                        <div v-if="product.rating != undefined" class="text-xl group my-4">
                            <span
                                class="font-bold text-blue-700 bg-blue-300 rounded-lg text-base mx-3 px-2 group-hover:bg-opacity-75">{{
                                    product.rating.rate }}</span>
                            <span class="text-yellow-400 hover:scale-105 transition-all group-hover:text-yellow-300"
                                v-html="rateToStar(product.rating.rate)"></span>
                            <span
                                class="font-bold text-blue-700 bg-blue-300 rounded-lg text-base mx-3 px-2 group-hover:bg-opacity-75"><i
                                    class="bi bi-people"></i> {{ product.rating.count }}</span>
                        </div>
                        <div>
                            <p>{{ product.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { onMounted } from "vue";
// import product from "@/store/modules/product";

export default {
    props: [
        'id_produk'
    ],
    data() {
        return {
            // product: null,
            rateToStar(val) {
                const starFill = '<i class="bi bi-star-fill"></i>';
                const starHalf = '<i class="bi bi-star-half"></i>';
                const star = '<i class="bi bi-star"></i>';
                let txtHTML = '';
                for (let i = 0; i <= 4; i++) {
                    if (val - i >= 0.75) {
                        txtHTML += starFill;
                    }
                    else if (val - i > 0.25) {
                        txtHTML += starHalf;
                    }
                    else {
                        txtHTML += star;
                    }
                }
                return txtHTML;
            },
        }
    },
    setup(props, context) {
        // const productDetail = this.products.find((e)=>{
        //     return e.id = props.id_produk
        // })

        // return {
        //     productDetail
        // }
        onMounted(() => {
            try {
                context.emit("id-menu", 0)
            } catch (error) {
                console.log(error)
            }
        })
    },
    mounted() {
        this.$store.dispatch("product/fetchProductById", this.id_produk)
    },
    computed: {
        ...mapState('product', ['product'])
    }
}
</script>