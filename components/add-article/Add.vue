<template>
    <section>
     <div class="container-edit">
        <div class="catalog__block-link yes">
          <div>
            <img src="~assets/images/icons/strelka.png" alt="">
            <NuxtLink to="/account" class="catalog__link">Обратно к профилю</NuxtLink>
          </div>
          <b-button class="rules" v-b-modal.modal>Памятка</b-button>
        </div>
        <h1 class="catalog__title send-article">Отправить статью</h1>
        <div class="form-add">
            <input class="form-add__name" 
                type="text" 
                id="title"
                placeholder="Введите название статьи"
                v-model="title">
            <textarea class="form-add__description" id="description" placeholder="Введите содержание статьи" v-model="content" autocorrect="on"></textarea>
            <button class="form-add__button-save" type="button" @click="addQuery()">Отправить</button>
        </div>
        <b-modal id="modal" hide-footer content-class="modal-window">
          <div class="modal-window__body">
            <p class="my-4 modal-window__title">Памятка</p>
            <p class="modal-window__text">Созданная автором статья перед ее опубликованием проверяется по следующим параметрам:</p>
            <span class="p">
              - оригинальность (учитывается в процентах); 
            </span>
            <span class="p">
              - количество знаков в Статье. Минимальное количество знаков в одной Статье – 100 символов с пробелами. Статья, содержащая менее 100 символов с пробелами не может быть опубликована;
            </span>
            <span class="p">
              - наличие нецензурной лексики. Слова из нецензурной лексики не дают возможности сохранить и опубликовать статью.
            </span>
          </div>
        </b-modal>
     </div>
    </section>
</template>

<script>
export default {
  name: 'Add',  
  data() {
    return{
        title: '',
        content: '',
        status: ''
    }
  }, 
  methods: {
    addQuery() {
      this.$store.dispatch('addQuery', {
        title: this.title,
        content: this.content,
        status: 'На проверке',
      })
    },
  }

}
</script>

<style scoped>

</style>