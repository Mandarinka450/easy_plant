<template>
    <section>
        <div class="container__cart" v-if="law.id">
            <div class="catalog__block-link">
              <img src="~assets/images/icons/strelka.png" alt="">
              <NuxtLink to="/laws" class="catalog__link">Обратно к зявкам</NuxtLink>
            </div>
            <p class="cart__user">{{ law.users.name }} {{ law.users.surname }} от {{ law.date_create }}</p>
            <div class="cart__body">
                <p class="cart__element">{{ law.date_create }}</p>
                <p class="cart__element">{{ law.users.name }} {{ law.users.surname }}</p>
                <p class="cart__element">Присвоенная квалификация: {{ law.science_degree }}</p>
                <p class="cart__element">Место обучения: {{ law.place_study }}</p>
                <p class="cart__element">О себе: {{ law.about_me }}</p>
                <div class="footer" v-if="law.status === 'На рассмотрении'">
                  <button class="footer__button-positive">Выдать права</button>
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
    }
  },
}
</script>

<style scoped>
.footer{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 60px;
}
.footer__button-positive{
  width: 261px;
  height: 40px;
  background: #8FB377;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
  margin-right: 20px;
  transition: all 0.5s;
}
.footer__button-positive:hover{
    background: #768A68;
    transition: all 0.5s;
}
.footer__button-negative{
  width: 261px;
  height: 40px;
  background: #FF3F3F;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
  transition: all 0.5s;
}
.footer__button-negative:hover{
    background: #c12b2b;
    transition: all 0.5s;
}
.cart__body{
  width: 90%;
  height: auto;
  padding:20px 20px;
  border: 1px solid #CDCDCD;
  filter: drop-shadow(0.5px 0.5px 5px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
}
.cart__element{
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 110%;
  color: #4E4E4E;
}
.cart__user{
  font-weight: 600;
  font-size: 32px;
  line-height: 105%;
  color: #4E4E4E;
  margin-bottom: 60px;
  margin-top: 50px;
}
.container__cart{
    margin-top: 100px;
    margin-left: 475px;
}

@media (max-width: 1433px) {
  .container__cart{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
 
}

@media (max-width: 540px) {
  .cart__user{
    text-align: center;
  }
  .footer{
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
  }
  .footer__button-positive{
    margin-right: 0;
  }
  .cart__body{
    width: 100%;
  }
 
}
</style>