<template>
    <section>
        <div class="container-advice">
            <div class="catalog__block-link">
              <img src="~assets/images/icons/strelka.png" alt="">
              <NuxtLink to="/advice" class="catalog__link">Обратно к советам</NuxtLink>
            </div>
          <div class="container-advice__description">
            <h1 class="container-advice__title">{{ advice.title }}</h1>
            <div class="block-author">
                <p class="block-author__date">{{ advice.date_publish }}</p>
                <NuxtLink to="#" class="block-author__name underline" v-if="advice.users">{{ advice.users.name }} {{ advice.users.surname }}</NuxtLink>
            </div>
            <p class="container-advice__text">{{ advice.content }}</p>
            <div class="block-pagination">
                <p class="block-pagination__signature"> 1 из 2</p>
                <!-- <img src="~assets/images/icons/arrow-next.png" alt="стрелка вперед"> -->
                <button class="block-pagination__button"></button>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'IdAdvice',
  computed: {
    advice() {
      return this.$store.getters.ADVICE
    },
  },
  created() {
    this.$store.dispatch('getAdviceById', this.$route.params.id);
  },
}
</script>

<style scoped>

.container-advice{
    position: relative;
    width: 665px;
    height: auto;
    margin-left: 475px;
    margin-top: 50px;
    margin-bottom: 70px;
}
.catalog__link{
  font-size: 18px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #979CAE;
}

.container-advice__description{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.container-advice__title{
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #4E4E4E;
    margin-top: 50px;
    margin-bottom: 24px;
}

.block-author{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.block-author__date, .block-author__name{
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #8F8F8F;
}

.underline{
    text-decoration: underline;
}

.container-advice__text{
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #4E4E4E;
    margin-top: 33px;
    text-align: left;
    margin-bottom: 70px;
}

.block-pagination{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 20px;
    display: flex;
    
}

.block-pagination__signature{
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #8F8F8F;
    margin-right: 30px;
}

.block-pagination__button{
    background: url("~assets/images/icons/arrow-next.png") no-repeat;
    background-position: 100% 50%;
    height: 100%;
    width: 42px;
    border: none;
}
@media (max-width: 1172px) {
    .container-advice{
        width: 55%;
    }
}

@media (max-width: 1115px) {
    .container-advice{
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }
}

@media (max-width: 460px) {
    .block-author{
        flex-direction: column;
        align-items: center;
    }

    .container-advice__title, .container-advice__text{
        text-align: center;
    }
}

</style>