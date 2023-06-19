<template>
    <section>
        <div class="container-laws">
            <p class="container-laws__title">Заявки на опубликование статьи</p>
            <div class="block__filters">
                <div class="all" @click="all()" v-bind:class="{ active: isActiveAll }">Все</div>
                <div class="all" @click="showOne()" v-bind:class="{ active: isActiveOne }">На проверке</div>
                <div class="all" @click="showTwo()" v-bind:class="{ active: isActiveTwo }">Опубликованные</div>
                <div class="all" @click="showThree()" v-bind:class="{ active: isActiveThree }">Отказанные</div>
            </div>
            <div class="laws" v-if="queries[0]" v-show="showAll">
                <div class="law-block" v-for="query in queries" :key="query.id">
                    <div class="law-block__info">
                        <p class="law-block__date"><b>Дата подачи:</b> {{ query.date_create }}</p>
                        <p class="law-block__date"><b>ID:</b> {{ query.users.id }}</p>
                        <p class="law-block__user"><b>ФИО:</b> {{ query.users.name }} {{ query.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/queries/${query.id}`">Подробнее</NuxtLink>
                        <p v-if="query.status === 'На проверке'" class="law-block__status blue">{{ query.status }}</p>
                        <p v-else-if="query.status === 'Опубликовано'" class="law-block__status green">{{ query.status }}</p>
                        <p v-else-if="query.status === 'Отказано'" class="law-block__status red">{{ query.status }}</p>
                    </div>
                </div>
            </div>
            <div class="laws" v-if="queriesone[0]" v-show="One">
                <div class="law-block" v-for="queryone in queriesone" :key="queryone.id" >
                    <div class="law-block__info">
                        <p class="law-block__date"><b>Дата подачи:</b> {{ queryone.date_create }}</p>
                        <p class="law-block__date"><b>ID:</b> {{ queryone.users.id }}</p>
                        <p class="law-block__user"><b>ФИО:</b> {{ queryone.users.name }} {{ queryone.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/queries/${queryone.id}`">Подробнее</NuxtLink>
                        <p class="law-block__status blue">{{ queryone.status }}</p>
                    </div>
                </div>
            </div>
            <div class="laws" v-if="queriestwo[0]" v-show="Two">
                <div class="law-block" v-for="querytwo in queriestwo" :key="querytwo.id" >
                    <div class="law-block__info">
                        <p class="law-block__date"><b>Дата подачи:</b> {{ querytwo.date_create }}</p>
                        <p class="law-block__date"><b>ID:</b> {{ querytwo.users.id }}</p>
                        <p class="law-block__user"><b>ФИО:</b> {{ querytwo.users.name }} {{ querytwo.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/queries/${querytwo.id}`">Подробнее</NuxtLink>
                        <p class="law-block__status green">{{ querytwo.status }}</p>
                    </div>
                </div>
            </div>
            <div class="laws" v-if="queriesthree[0]" v-show="Three">
                <div class="law-block" v-for="querythree in queriesthree" :key="querythree.id" >
                    <div class="law-block__info">
                        <p class="law-block__date"><b>Дата подачи:</b> {{ querythree.date_create }}</p>
                        <p class="law-block__date"><b>ID:</b> {{ querythree.users.id }}</p>
                        <p class="law-block__user"><b>ФИО:</b> {{ querythree.users.name }} {{ querythree.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/queries/${querythree.id}`">Подробнее</NuxtLink>
                        <p class="law-block__status red">{{ querythree.status }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Queries',
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
    queries() {
      return this.$store.getters.QUERIES
    },
    queriesone() {
      return this.$store.getters.QUERIESONE
    },
    queriestwo() {
      return this.$store.getters.QUERIESTWO
    },
    queriesthree() {
      return this.$store.getters.QUERIESTHREE
    },
  },
   created() {
      this.$store.dispatch('getQueries');
      this.$store.dispatch('queriesOneStatus');
      this.$store.dispatch('queriesTwoStatus');
      this.$store.dispatch('queriesThreeStatus');
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