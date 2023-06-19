<template>
    <section>
     <div class="container-edit__profile">
        <div class="catalog__block-link">
          <img src="~assets/images/icons/strelka.png" alt="">
          <NuxtLink to="/account" class="catalog__link">Обратно к профилю</NuxtLink>
        </div>
        <h1 class="catalog__title edit-profile">Редактирование профиля</h1>
        <!-- <input type="file" @change='upload_avatar' name="image">
        <img :src="get_avatar()" /> -->
        <div class="form-edit" v-if="user.name">
            <input class="form-edit__name" 
                type="text" 
                id="name"
                v-model="user.name"
                >
            <input class="form-edit__surname" 
                type="text" 
                id="surname"
                v-model="user.surname">
            <input class="form-edit__email" 
                type="email" 
                id="email" 
                v-model="user.email">
            <textarea class="form-edit__description" id="description" v-model="user.description" maxlength="255" autocorrect="on" @change="change = true"></textarea>
            <button class="form-edit__button-save" type="button" @click="updateUser()">Сохранить</button>
        </div>
     </div>
    </section>
</template>

<script>
export default {
  name: 'Edit',  
  change: false, 
  data: () => ({
    image: '',
  }),
  computed: {
    user() {
      return {...this.$store.state.user}
    },
  },
  created() {
    this.$store.dispatch('getUser');
  },
  methods: {
    // upload_avatar(e){
    //   let file = e.target.files[0];
    //   let reader = new FileReader();  

    //   if(file['size'] < 2111775)
    //   {
    //     reader.onloadend = (file) => {
    //       this.image = reader.result;
    //     }              
    //       reader.readAsDataURL(file);
    //   }else{
    //     alert('File size can not be bigger than 2 MB')
    //   }
    // },
    // get_avatar(){
    //   let photo = (this.image.length > 100) ? this.image : "img/profile/"+ this.image;
    //   return photo;
    // },
    updateUser() {
        console.log(this.user)
        this.$store.dispatch('updateUser', {
          name: this.user.name,
          surname: this.user.surname,
          email: this.user.email,
          image: this.image,
          description: this.user.description
      })
    },
  }
}
</script>

<style scoped>

</style>

