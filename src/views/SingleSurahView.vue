<template>
    <div class="flex w-full px-5" v-if="getSingleSurah">
        <div class="mx-4 xl:max-w-7xl xl:mx-auto w-full" v-if="getSingleSurah.number != undefined">
            <h2 class="text-center text-2xl my-4 font-semibold">
                Surah {{ getSingleSurah.name }}
            </h2>
            <p class="text-center mb-3 text-gray-700">
                {{ getSingleSurah.translation }}
            </p>
            <div>
                <div class="flex flex-col w-full">
                    <div class="my-3" v-if="getSingleSurah.number != 1 && getSingleSurah.number != 9">
                        <div class="text-right w-full text-lg font-serif"><b>{{ getSingleSurah.bismillah.arab }}</b></div>
                        <div class="w-full">{{ getSingleSurah.bismillah.translation }}</div>
                    </div>
                    <div v-for="dataSurah in getSingleSurah.ayahs">
                        <div class="px-3 py-5 rounded-xl border hover:shadow-lg flex flex-col my-4">
                            <div class="w-full text-lg font-serif flex justify-end">
                                <div class="min-w-[3.5rem]">
                                    <span class="font-semibold">
                                        {{
                                            '﴾' +
                                            numberToArabicNumber(dataSurah.number.inSurah.toString()) +
                                            '﴿'
                                        }}
                                    </span>
                                </div>
                                <div class="text-right">
                                    <b>
                                        {{ dataSurah.arab }}
                                    </b>
                                </div>
                            </div>
                            <div class="my-2 ">
                                <p>
                                    {{ dataSurah.translation }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapGetters } from "vuex";

export default {
    mounted() {
        this.$store.dispatch("surah/fetchSingleSurah", this.number);
    },
    computed: {
        ...mapGetters("surah", ['getSingleSurah']),

    },
    methods: {
        numberToArabicNumber(val) {
            const ar = [
                '٠',
                '١',
                '٢',
                '٣',
                '٤',
                '٥',
                '٦',
                '٧',
                '٨',
                '٩'
            ];
            let data = val;
            for (let i = 0; i < 10; i++) {
                data = data.replaceAll(i.toString(), ar[i]);
            }
            return data;
        }
    },
    props: ['number'],
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