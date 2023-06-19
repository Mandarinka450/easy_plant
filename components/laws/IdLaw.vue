<template>
    <section>
        <div class="container__cart" v-if="law.id">
            <div class="catalog__block-link">
              <img src="~assets/images/icons/strelka.png" alt="">
              <NuxtLink to="/laws" class="catalog__link">Обратно к зявкам</NuxtLink>
            </div>
            <p class="cart__user">{{ law.users.name }} {{ law.users.surname }} от {{ law.date_create }}</p>
            <div class="cart__body">
                <p class="cart__element"><b>ID:</b> {{ law.users.id }}</p>
                <p class="cart__element"><b>ФИО:</b> {{ law.users.name }} {{ law.users.surname }}</p>
                <p class="cart__element"><b>Присвоенная квалификация:</b> {{ law.science_degree }}</p>
                <p class="cart__element"><b>Место обучения:</b> {{ law.place_study }}</p>
                <p class="cart__element"><b>О себе:</b> {{ law.about_me }}</p>
                <p class="cart__element"><b>Статус:</b> {{ law.status }}</p>
                <p class="block-rooms__message" :class="{ 'show-message': showMessage }">Права успешно выданы данному пользователю!</p>
                <div class="footer" v-if="law.status === 'На рассмотрении'">
                  <button class="footer__button-positive" @click="giveRole(law)">Выдать права</button>
                  <button class="footer__button-negative" @click="updateLaw(law)">Отказать</button>
               </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'IdLaw',
  data() {
    return{
        status: '',
        showMessage: false,
    }
  }, 
  computed: {
    law() {
      return this.$store.getters.LAW
    },
  },
  created() {
    this.$store.dispatch('getLawById', this.$route.params.id);
  },
  methods: {
    updateLaw (law){
      this.$store.dispatch('updateLaw', {id: law.id, law: {
        status: "Отказано",
      }})
    },
    hide(){
      setTimeout(() => {
        this.showMessage = false
      }, 4000)
    },
    giveRole(law){
      this.$store.dispatch('giveRoleExpert', law.users.id);
      this.$store.dispatch('updateLaw', {id: law.id, law: {
        status: "Одобрено",
      }})
      .then(() => {
        this.showMessage = true;
      }) 
      this.hide()
    }
  },
}
</script>

<style scoped>

</style>