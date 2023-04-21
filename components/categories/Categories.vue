<template>
  <section>
  <div class="catalog" v-if="categories[0]">
    <h1 class="catalog__title">Каталог растений</h1>
    <div class="container-plants">
        <div class="container-plants__block gray" v-for="category in categories" :key="category.id" @click="goToPlants(category)">
          <p class="container-plants__title">{{ category.title }}</p>
          <img class="container-plants__image first" :src="category.image" alt="комнатное растение">
          <p class="container-plants__description">{{ category.description }}</p>
          <!-- <NuxtLink :to="`/categories/${category.id}`">Перейти</NuxtLink> -->
        </div>
    </div>
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

.catalog{
  margin-top: 65px;
  margin-left: 475px;
}
.catalog__title{
  font-weight: 600;
  font-size: 28px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #000000;
  position: relative;
}

.container-plants{
  width: 420px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 20px;
  margin-top: 95px;
  
}

.container-plants__block{
  cursor: pointer;
  position: relative;
  background-color: #DEF1D0;
  border-radius: 20px;
  width: 155px;
  height: 191px;
  overflow: hidden;
}

.container-plants__block:nth-child(2){
  background: #FAE5CB;
}

.container-plants__block:nth-child(3){
  background: #F8E3E3;
}

.container-plants__block:nth-child(4){
  background: #D8F0F8;
}

.container-plants__block:nth-child(5){
  background: #FAE5CB;
}

.container-plants__block:nth-child(6){
  background: #F8E3E3;
}

.container-plants__block:nth-child(7){
  background: #DEF1D0;
}

.container-plants__block:nth-child(8){
  background: #FAE5CB;
}

.container-plants__image{
  width: 80%;
  height: auto;
  position: absolute;
  bottom: -25px;
  left: 10px;
}

.container-plants__block:nth-child(5) img, .container-plants__block:nth-child(7) img, .container-plants__block:nth-child(3) img{
  width: 100%;
  bottom: 0;
  left: 0;
}
.container-plants__block:nth-child(2) img{
  width: 95%;
  bottom: -25px;
}
.container-plants__block:nth-child(6) img{
  width: 100%;
  left: 0;
  bottom: -10px;
}
.container-plants__block:nth-child(8) img{
  width: 120%;
  left: -20px;
  bottom: -25px;
}
.container-plants__title{
  position: absolute;
  left: 8px;
  top: 14px;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -1px;
  color: #4E4E4E;
}

.container-plants__description{
  opacity:0;
  transition: 0.7s;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px;
}

.container-plants__block:hover .container-plants__description{
  background: rgba(195, 226, 236, 0.8);
  opacity:1;
  transition: 0.7s;
  color: #000000;
}

@media (max-width: 1160px) {
  .catalog{
    width: 55%;
  }

  .container-plants{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1115px) {
  .catalog{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .container-plants{
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 720px) {
  .container-plants{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 540px) {
  .container-plants{
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  .container-plants__block{
    width: 100%;
  }

  .container-plants__title{
    font-size: 18px;
    z-index: 1;
  }
}

@media (max-width: 390px) {
  .catalog{
    margin-top: 95px;
  }
}

@media (max-width: 320px) {
  .container-plants{
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>