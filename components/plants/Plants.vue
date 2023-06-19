<template>
    <section>
      <div class="plants-by-id" v-if="plants[0]">
        <div class="catalog__block-link">
          <img src="~assets/images/icons/strelka.png" alt="">
          <NuxtLink to="/categories" class="catalog__link">Обратно к каталогу</NuxtLink>
        </div>
        <h1 class="search-plant">Найти растение</h1>
        <form action="" class="container__form">
            <img src="~assets/images/icons/search.png" alt="Иконка поиска">
            <input name="search" placeholder="Поиск" type="text" class="search" v-model="query" @input="searchPlants()">
        </form>
        <div class="container-plants-by-id">
        <div class="container-plants-by-id__block gray" v-for="plant in plants" :key="plant.id" @click="goToPlant(plant, url)">
          <p class="container-plants-by-id__title">{{ plant.name_rus }}</p>
          <img class="container-plants-by-id__image" :src="plant.image" alt="комнатное растение">
        </div>
    </div>
   </div>
    <Loader v-else></Loader>
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
    this.$store.dispatch('searchPlantIsEmpty', this.$route.params.subcategories)
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
      this.$store.dispatch('searchPlant', {id:this.$route.params.subcategories, query: this.query})
    },
  }
}
</script>

<style scoped>

</style>