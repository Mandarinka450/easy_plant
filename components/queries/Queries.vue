<template>
    <section>
        <div class="container-laws">
            <p class="container-laws__title">Заявки на опубликование статьи</p>
            <div class="block__filters">
                <div class="all" @click="all()">Все</div>
                <div class="all" @click="showOne()">На проверке</div>
                <div class="all" @click="showTwo()">Опубликованные</div>
                <div class="all" @click="showThree()">Отказанные</div>
            </div>
            <div class="laws" v-if="queries[0]" v-show="showAll">
                <div class="law-block" v-for="query in queries" :key="query.id">
                    <div class="law-block__info">
                        <p class="law-block__date">{{ query.date_create }}</p>
                        <p class="law-block__user">{{ query.users.name }} {{ query.users.surname }}</p>
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
                        <p class="law-block__date">{{ queryone.date_create }}</p>
                        <p class="law-block__user" v-if="queryone.users">{{ queryone.users.name }} {{ queryone.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/laws/${queryone.id}`">Подробнее</NuxtLink>
                        <p class="law-block__status blue">{{ queryone.status }}</p>
                    </div>
                </div>
            </div>
            <div class="laws" v-if="queriestwo[0]" v-show="Two">
                <div class="law-block" v-for="querytwo in queriestwo" :key="querytwo.id" >
                    <div class="law-block__info">
                        <p class="law-block__date">{{ querytwo.date_create }}</p>
                        <p class="law-block__user" v-if="querytwo.users">{{ querytwo.users.name }} {{ querytwo.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/laws/${querytwo.id}`">Подробнее</NuxtLink>
                        <p class="law-block__status green">{{ querytwo.status }}</p>
                    </div>
                </div>
            </div>
            <div class="laws" v-if="queriesthree[0]" v-show="Three">
                <div class="law-block" v-for="querythree in queriesthree" :key="querythree.id" >
                    <div class="law-block__info">
                        <p class="law-block__date">{{ querythree.date_create }}</p>
                        <p class="law-block__user" v-if="querythree.users">{{ querythree.users.name }} {{ querythree.users.surname }}</p>
                    </div>
                    <div class="law-block__about">
                        <NuxtLink :to="`/laws/${querythree.id}`">Подробнее</NuxtLink>
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
        showAll: true
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
        this.One = true
    },
    showTwo(){
        this.showAll = false,
        this.One = false,
        this.Two = true
    },
    showThree(){
        this.showAll = false,
        this.Two = false,
        this.One = false,
        this.Three = true
    },
    all(){
        this.showAll = false,
        this.Two = false,
        this.One = false,
        this.Three = false,
        this.showAll = true
    },
  },
}
</script>

<style scoped>
.all{
    color: #B6B6B6;
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
}
.block__filters{
    height: 40px;
    width: 90%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
}
.blue{
    font-weight: 500;
    color: blue;
}
.green{
    font-weight: 500;
    color: green;
}
.red{
    font-weight: 500;
    color: red;
}
.container-laws{
  margin-top: 100px;
  margin-left: 475px;
}

.container-laws__title{
    font-weight: 600;
    font-size: 26px;
    line-height: 105%;
}

.laws{
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    margin-bottom: 30px;
}
.law-block{
    width: 90%;
    height: auto;
    border: 1px solid #CDCDCD;
    filter: drop-shadow(0.5px 0.5px 5px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    padding:20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.law-block__info{
    display: flex;
    flex-direction: column;
}
.law-block__about{
    width: 150px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: end;
}

@media (max-width: 1433px) {
  .container-laws{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
 
}

@media (max-width: 685px) {
  .all{
    padding: 15px 0px;

    }
  .law-block{
    width: 100%;
  }
  .block__filters{
    flex-direction: column;
    position: relative;
    height: auto;
    width: 100%;
  }
  .container-laws__title{
    text-align: center;
  }
 
}

@media (max-width: 330px) {
    .law-block{
        flex-direction: column;
    }
    .law-block__info, .law-block__about{
        align-items: center;
    }
}
</style>