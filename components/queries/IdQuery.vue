<template>
    <section>
        <div class="container__cart" v-if="query.id">
            <div class="catalog__block-link">
              <img src="~assets/images/icons/strelka.png" alt="">
              <NuxtLink to="/queries" class="catalog__link">Обратно к зявкам</NuxtLink>
            </div>
            <p class="cart__user">{{ query.users.name }} {{ query.users.surname }} от {{ query.date_create }}</p>
            <div class="cart__body">
                <p class="cart__element"><b>ID:</b> {{ query.users.id }}</p>
                <p class="cart__element"><b>ФИО:</b> {{ query.users.name }} {{ query.users.surname }}</p>
                <p class="cart__element"><b>Название:</b> {{ query.title }}</p>
                <p class="cart__element"><b>Содержимое статьи:</b> {{ query.content }}</p>
                <p class="cart__element"><b>Статус:</b> {{ query.status }}</p>
                <div v-if="query.status === 'На проверке'" class="footer">
                  <button @click="updateQueryPublish(query)" class="footer__button-positive">Опубликовать</button>
                  <b-button v-b-modal.modal class="footer__button-negative">Отказать</b-button>
               </div>
            </div>
        </div>
        <b-modal id="modal" hide-footer content-class="modal-window">
            <div class="modal-window__body">
              <p>Напишите причину отказа, добавьте комментарий к ответу</p>
              <input type="text" placeholder="Причина отказа" class="modal-window__input" v-model="comment">
              <button class="modal-window__add-room" @click="updateQuery(query)">Отказать</button>
              </div>
        </b-modal>
    </section>
</template>

<script>
export default {
  name: 'IdQuery',
  data() {
    return{
        status: '',
        comment: '',
        query_id: '',
        title: '',
        content: '',
        user_id: ''
    }
  }, 
  computed: {
    query() {
      return this.$store.getters.QUERY
    },
  },
  created() {
    this.$store.dispatch('getQueryById', this.$route.params.id);
  },
  methods: {
    updateQuery(query){
      this.$store.dispatch('updateQuery', {id: query.id, query: {
        status: "Отказано",
        comment: this.comment
      }})
      .then(() => {
        this.$bvModal.hide('modal');
        this.comment = '';
      }) 
    },
    updateQueryPublish(query){
      this.$store.dispatch('updateQuery', {id: query.id, query: {
        status: "Опубликовано",
      }})
      this.$store.dispatch('addAdvice', {
        user_id: this.query.users.id,
        query_id: this.query.id,
        title: this.query.title,
        content: this.query.content,
      })
    }
  },
}
</script>

<style scoped>

</style>