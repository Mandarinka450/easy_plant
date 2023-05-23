<template>
    <section>
      <div class="myplants">
        <div class="account__block-myplants">
            <img src="~assets/images/icons/plants-icon.png" alt="#">
            <p class="account__quantity-myplants">{{ count }} растений</p>
        </div>
        <h1 class="title-myplants">Мои растения</h1>
        <div class="container-myplants" v-if="myplants[0]">
        <div class="container-myplants__block gray" v-for="myplant in myplants" :key="myplant.id" @click="goToMyplant(myplant)">
          <p class="container-myplants__title">{{ myplant.name }}</p>
          <img class="container-myplants__image" :src="myplant.plants.image" alt="комнатное растение">
        </div>
    </div>
  </div>
    </section>
</template>

<script>
export default {
  name: 'MyPlants',
  computed: {
    count() {
      return this.$store.getters.COUNT
    },
    myplants(){
      return this.$store.getters.MYPLANTS
    }
  },
  created() {
    this.$store.dispatch('getCount');
    this.$store.dispatch('getMyplants');
  },
  methods: {
    goToMyplant(myplant) {
      this.$router.push('/my-plants/' + myplant.id)
    }
  }
}
</script>

<style scoped>

</style>