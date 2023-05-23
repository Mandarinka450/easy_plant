<template>
    <section>
      <div class="plant">
        <div class="catalog__block-link">
          <img src="~assets/images/icons/strelka.png" alt="">
          <NuxtLink to="/categories" class="catalog__link">Обратно к каталогу</NuxtLink>
        </div>
        <h1 class="search-plant">Найти растение</h1>
        <form action="" class="container__form">
            <img src="~assets/images/icons/search.png" alt="Иконка поиска">
            <input name="search" placeholder="Поиск" type="text" class="search" v-model="query" @input="searchPlants()">
        </form>
        <div class="container-plants" v-if="plants[0]">
        <div class="container-plants__block gray" v-for="plant in plants" :key="plant.id" @click="goToPlant(plant, url)">
          <p class="container-plants__title">{{ plant.name_rus }}</p>
          <img class="container-plants__image" :src="plant.image" alt="комнатное растение">
        </div>
    </div>
  </div>
    </section>
</template>

<script>
export default {
  name: 'Plants',
  data() {
    return{
        query: '',
    }
  }, 
  created(){
    this.$store.dispatch('getPlants', this.$route.params.subcategories);
    this.$store.dispatch('searchPlantIsEmpty')
  },
  computed:{
    plants(){
      return this.$store.getters.PLANTS
    },
    url(){
      return this.$route.params.subcategories
    },
  },
  methods:{
    goToPlant(plant, url) {
      this.$router.push(url + '/' + plant.id)
    },
    async searchPlants() {
      this.$store.dispatch('searchPlant', this.query)
    },
  }
}
</script>

<style scoped>

</style>