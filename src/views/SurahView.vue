<template>
    <div class="flex w-full px-5">
        <div class="mx-4 xl:max-w-7xl xl:mx-auto w-full">
            <h2 class="text-center text-2xl my-4 font-semibold">
                Halaman Surah
            </h2>
            <div class="flex flex-col w-full">
                <div v-for="dataSurahs in getSurahs" :key="dataSurahs.number">
                    <RouterLink :to="'/surah/'+ dataSurahs.number">
                        <div class="px-3 py-5 rounded-xl border hover:shadow-lg flex flex-wrap my-4">
                            <div class="mx-3"><b>{{ dataSurahs.number }}</b></div>
                            <div>{{ dataSurahs.name }}</div>
                            <div>: {{ dataSurahs.translation }}</div>
                            <div class="ms-auto">Jumlah ayat: {{ dataSurahs.numberOfAyahs }}</div>
                        </div>
                    </RouterLink>
                </div>
                <!-- {{ getSurahs }} -->
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapGetters } from "vuex";

export default {
    mounted() {
        this.$store.dispatch("surah/fetchSurahs");
    },
    computed: {
        ...mapGetters("surah", ['getSurahs'])
    },
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 3)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>