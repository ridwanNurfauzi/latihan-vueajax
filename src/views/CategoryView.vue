<template>
    <div>
        <h2 class="text-center text-2xl my-4 font-semibold">
            Halaman Kategori
        </h2>
        <div class="flex flex-wrap justify-center">
            <div v-for="category in categories">
                <RouterLink :to="'/category/' + category">
                    <div class="m-3 w-[250px] group hover:shadow-md border cursor-pointer rounded-t-lg rounded-b-lg">

                        <div class="my-5">
                            <h2 class="text-center text-xl font-semibold">{{ category }}</h2>
                        </div>

                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapState } from "vuex";

export default {
    mounted() {
        this.$store.dispatch("category/fetchCategories")
    },
    computed: {
        ...mapState("category", ['categories'])
    },
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 2)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>