<template>
    <section>
      <div class="catalog plant">
        <div class="catalog__block-link">
          <img src="~assets/images/icons/strelka.png" alt="">
          <NuxtLink to="/categories" class="catalog__link">Обратно к каталогу</NuxtLink>
        </div>
        <h1 class="catalog__title roro">Найти растение</h1>
        <Search/>
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
  created(){
    this.$store.dispatch('getPlants', this.$route.params.subcategories)
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
      this.$router.push(url+ '/' + plant.id)
    }
  }
}
</script>

<style scoped>

.plant{
  position: relative;
  margin-top: 50px;
  margin-left: 475px;
  margin-bottom: 70px;
}
.roro{
  font-weight: 600;
  font-size: 28px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #000000;
  position: relative;
  margin-top: 50px;
  margin-bottom: 20px;
}

.container-plants{
  width: 420px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 20px;
  margin-top: 30px;
}

.container-plants__block{
  cursor: pointer;
  position: relative;
  background-color: #FEF8F7;
  border-radius: 20px;
  width: 155px;
  height: 191px;
  overflow: hidden;
}

.container-plants__image{
  width: 80%;
  height: auto;
  position: absolute;
  bottom: -25px;
  left: 10px;
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

.catalog__link{
  font-size: 18px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #979CAE;
  margin-top: 50px;
}

@media (max-width: 1160px) {
  .plant{
    width: 55%;
  }

  .container-plants{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1115px) {
  .plant{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 550px) {
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

@media (max-width: 320px) {
  .container-plants{
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>