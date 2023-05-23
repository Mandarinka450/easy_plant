<template>
    <section>
     <div class="container-edit__profile">
        <div class="catalog__block-link">
          <img src="~assets/images/icons/strelka.png" alt="">
          <NuxtLink to="/account" class="catalog__link">Обратно к профилю</NuxtLink>
        </div>
        <h1 class="catalog__title roro">Редактирование профиля</h1>
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
.container-edit__profile{
    width: 1000px;
    height: auto;
    margin-top: 90px;
    margin-left: 475px;
    position: relative;
    z-index: 1;
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

.form-edit{
    width: 500px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.form-edit__name, .form-edit__surname, .form-edit__email{
    position: relative;
    box-sizing: border-box;
    height: 43px;
    width: 100%;
    background: transparent;
    padding-left: 19px;
    border: none;
    border-bottom: 0.5px solid #8FB377;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.05);
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #656262;
}
.form-edit__name:focus, .form-edit__surname:focus, .form-edit__email:focus, .form-edit__description:focus{
    outline: none;
}

.form-edit__description{
    resize: none;
    border: none;
    border-bottom: 0.5px solid #8FB377;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.05);
    height: 83px;
    background: transparent;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #656262;
    padding-left: 19px;

}

.form-edit__button-save{
    width: 40%;
    height: 40px;
    transition: all 0.5s;
    background: #8FB377;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 99.5%;
    letter-spacing: 0.4px;
    border: none;
    margin-top: 45px;
    color: #FFFFFF;
}

.form-edit__button-save:hover{
    background: #768A68;
    transition: all 0.5s;
}
.catalog__link{
  color: #979CAE;
}

@media (max-width: 1433px) {
  .container-edit__profile{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
 }
 .form-edit{
  width: 100%;
 }
}

@media (max-width: 768px) {
    .container-edit__profile{
      margin-top: 100px;
    }
}

@media (max-width: 430px) {
  .roro{
    text-align: center;
  }
  .form-edit__button-save{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .form-edit__description{
    min-height: 150px;
  }
}
</style>

