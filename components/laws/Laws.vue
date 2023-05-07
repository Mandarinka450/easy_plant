<template>
    <section>
        <div class="container-laws">
            <p class="container-laws__title">Заявки на предоставление прав эксперта</p>
            <div class="block__filters">
                <div class="all" @click="all()">Все</div>
                <div class="all" @click="showOne()">На рассмотрении</div>
                <div class="all" @click="showTwo()">Одобренные</div>
                <div class="all" @click="showThree()">Отказанные</div>
            </div>
            <div class="laws" v-if="laws[0]" v-show="showAll">
                <div class="law-block" v-for="law in laws" :key="law.id">
                    <div class="law-block__info">
                        <p class="law-block__date">{{ law.date_create }}</p>
                        <p class="law-block__user" v-if="law.users">{{ law.users.name }} {{ law.users.surname }}</p>
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
                        <p class="law-block__date">{{ lawone.date_create }}</p>
                        <p class="law-block__user" v-if="lawone.users">{{ lawone.users.name }} {{ lawone.users.surname }}</p>
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
                        <p class="law-block__date">{{ lawtwo.date_create }}</p>
                        <p class="law-block__user" v-if="lawtwo.users">{{ lawtwo.users.name }} {{ lawtwo.users.surname }}</p>
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
                        <p class="law-block__date">{{ lawthree.date_create }}</p>
                        <p class="law-block__user" v-if="lawthree.users">{{ lawthree.users.name }} {{ lawthree.users.surname }}</p>
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
        showAll: true
    }
  }, 
  computed: {
    laws() {
      return this.$store.getters.LAWS
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