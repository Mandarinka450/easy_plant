<template>
    <section>
        <div class="container-laws">
            <p class="container-laws__title">Заявки на предоставление прав эксперта</p>
            <div class="block__filters">
                <div class="all" @click="all()" v-bind:class="{ active: isActiveAll }">Все</div>
                <div class="all" @click="showOne()" v-bind:class="{ active: isActiveOne }">На рассмотрении</div>
                <div class="all" @click="showTwo()" v-bind:class="{ active: isActiveTwo }">Одобренные</div>
                <div class="all" @click="showThree()" v-bind:class="{ active: isActiveThree }">Отказанные</div>
            </div>
            <div class="laws" v-if="laws[0]" v-show="showAll">
                <div class="law-block" v-for="law in laws" :key="law.id">
                    <div class="law-block__info">
                        <p class="law-block__date"><b>Дата подачи:</b> {{ law.date_create }}</p>
                        <p class="law-block__date"><b>ID:</b> {{ law.users.id }}</p>
                        <p class="law-block__user" v-if="law.users"><b>ФИО:</b> {{ law.users.name }} {{ law.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/laws/${law.id}`">Подробнее</NuxtLink>
                        <p v-if="law.status === 'На рассмотрении'" class="law-block__status blue">{{ law.status }}</p>
                        <p v-else-if="law.status === 'Одобрено'" class="law-block__status green">{{ law.status }}</p>
                        <p v-else-if="law.status === 'Отказано'" class="law-block__status red">{{ law.status }}</p>
                    </div>
                </div>
            </div>
            <div class="laws" v-if="lawsone[0]" v-show="One">
                <div class="law-block" v-for="lawone in lawsone" :key="lawone.id" >
                    <div class="law-block__info">
                        <p class="law-block__date"><b>Дата подачи:</b> {{ lawone.date_create }}</p>
                        <p class="law-block__date"><b>ID:</b> {{ lawone.users.id }}</p>
                        <p class="law-block__user" v-if="lawone.users"><b>ФИО:</b> {{ lawone.users.name }} {{ lawone.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/laws/${lawone.id}`">Подробнее</NuxtLink>
                        <p class="law-block__status blue">{{ lawone.status }}</p>
                    </div>
                </div>
            </div>
            <div class="laws" v-if="lawstwo[0]" v-show="Two">
                <div class="law-block" v-for="lawtwo in lawstwo" :key="lawtwo.id" >
                    <div class="law-block__info">
                        <p class="law-block__date"><b>Дата подачи:</b> {{ lawtwo.date_create }}</p>
                        <p class="law-block__date"><b>ID:</b> {{ lawtwo.users.id }}</p>
                        <p class="law-block__user" v-if="lawtwo.users"><b>ФИО:</b> {{ lawtwo.users.name }} {{ lawtwo.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/laws/${lawtwo.id}`">Подробнее</NuxtLink>
                        <p class="law-block__status green">{{ lawtwo.status }}</p>
                    </div>
                </div>
            </div>
            <div class="laws" v-if="lawsthree[0]" v-show="Three">
                <div class="law-block" v-for="lawthree in lawsthree" :key="lawthree.id" >
                    <div class="law-block__info">
                        <p class="law-block__date"><b>Дата подачи:</b> {{ lawthree.date_create }}</p>
                        <p class="law-block__date"><b>ID:</b> {{ lawthree.users.id }}</p>
                        <p class="law-block__user" v-if="lawthree.users"><b>ФИО:</b> {{ lawthree.users.name }} {{ lawthree.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/laws/${lawthree.id}`">Подробнее</NuxtLink>
                        <p class="law-block__status red">{{ lawthree.status }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Laws',
  data() {
    return{
        One: false,
        Two: false,
        Three: false,
        showAll: true,
        isActiveAll: true,
        isActiveOne: false,
        isActiveTwo: false,
        isActiveThree: false
    }
  }, 
  computed: {
    laws() {
      return this.$store.getters.LAWS
    },
    admin() {
      return this.$store.getters.ADMIN
    },
    lawsone() {
      return this.$store.getters.LAWSONE
    },
    lawstwo() {
      return this.$store.getters.LAWSTWO
    },
    lawsthree() {
      return this.$store.getters.LAWSTHREE
    },
  },
   created() {
      this.$store.dispatch('getLaws');
      this.$store.dispatch('lawsOneStatus');
      this.$store.dispatch('lawsTwoStatus');
      this.$store.dispatch('lawsThreeStatus');
  },
  methods: {
    showOne(){
        this.showAll = false,
        this.One = true,
        this.isActiveOne = true,
        this.isActiveAll = false,
        this.isActiveTwo = false,
        this.isActiveThree = false
    },
    showTwo(){
        this.showAll = false,
        this.One = false,
        this.Two = true,
        this.isActiveOne = false,
        this.isActiveAll = false,
        this.isActiveTwo = true,
        this.isActiveThree = false
    },
    showThree(){
        this.showAll = false,
        this.Two = false,
        this.One = false,
        this.Three = true,
        this.isActiveOne = false,
        this.isActiveAll = false,
        this.isActiveTwo = false,
        this.isActiveThree = true
    },
    all(){
        this.showAll = true,
        this.Two = false,
        this.One = false,
        this.Three = false,
        this.isActiveOne = false,
        this.isActiveAll = true,
        this.isActiveTwo = false,
        this.isActiveThree = false
    },
  },
}
</script>

<style scoped>

</style>