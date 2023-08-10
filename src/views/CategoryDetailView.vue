<template>
    <div>
        <h2 class="text-center text-2xl my-4 font-semibold">
            {{ category_name }}
            <!-- {{ getProduct }} -->
        </h2>
        <div>
            <div class="flex flex-wrap justify-center">
                <div class="m-3 w-[200px] group hover:shadow-md border cursor-pointer rounded-t-lg rounded-b-lg"
                    v-for="data in getProduct">
                    <RouterLink :to="'/product/' + data.id">
                        <div class="flex flex-col h-full">
                            <div class="mb-3">
                                <div class="overflow-hidden w-[200px] h-[200px] rounded-t-lg">
                                    <img class="transition-all group-hover:scale-125 group-hover:opacity-75"
                                        :src="data.image" :alt="data.title">
                                </div>
                                <div class="px-2">
                                    <h3 class="font-semibold text-md" v-if="data.title.length >= 25">
                                    {{ data.title.slice(0,
                                        25)
                                        + ' ...' }}</h3>
                                    <h3 class="font-semibold text-md" v-else>{{ data.title }}</h3>
                                </div>
                            </div>
                            <div class="mt-auto p-2">
                                <div>
                                    <p class="font-semibold text-md">
                                        <span class="text-yellow-400 opacity-80 group-hover:opacity-60 transition-all"
                                            v-html="rateToStar((data.rating).rate)">
                                        </span>
                                        <b
                                            class="mx-[12px] bg-blue-400 transition-all group-hover:text-blue-600 group-hover:bg-opacity-[35%] bg-opacity-[50%] px-1 rounded-md text-blue-800">
                                            {{ data.rating.rate }}
                                        </b>
                                    </p>
                                </div>
                                <div>
                                    <h2 class="font-bold text-lg font-mono">${{ data.price }}</h2>
                                </div>
                                <div class="text-sm text-gray-500">
                                    {{ data.category }}
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>

            <h2 class="text-center text-xl font-bold my-12" v-if="products == undefined || products.length == 0">
                Loading ...
            </h2>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapState } from "vuex";

export default {
    props: ['category_name'],
    data() {
        return {
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
            }
        }
    },
    mounted() {
        // this.$store.dispatch("category/fetchCategories")
        this.$store.dispatch("product/fetchProduct")
    },
    computed: {
        // ...mapState('category', ['categories']),
        ...mapState('product', ['products']),
        getProduct(){
            let data = [];
            data = this.products.filter((e)=>{
                return this.category_name == e.category
            })
            return data;
        }
    },
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 0)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>
