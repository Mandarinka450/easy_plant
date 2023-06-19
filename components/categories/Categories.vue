<template>
  <section>
  <div class="catalog">
    <h1 class="catalog__title">Каталог растений</h1>
    <div class="container-plants" v-if="categories[0]">
        <div class="container-plants__block gray" v-for="category in categories" :key="category.id" @click="goToPlants(category)">
          <p class="container-plants__title">{{ category.title }}</p>
          <img class="container-plants__image first" :src="category.image" alt="комнатное растение">
          <p class="container-plants__description">{{ category.description }}</p>
        </div>
    </div>
    <Loader v-else></Loader>
  </div>
  </section>
</template>

<script>
export default {
  name: 'Categories',
  created(){
    this.$store.dispatch('getCategories')
  },
  computed:{
    categories(){
      return this.$store.getters.CATEGORIES
    }
  },
  methods:{
    goToPlants(category) {
      this.$router.push('/categories/' + category.id)
    }
  }
}
</script>

<style scoped>


</style>