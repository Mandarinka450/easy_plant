<template>
    <section>
        <div class="container__account">
            <div class="account">
                <div class="account__avatar">
                    <div class="account__image">
                    </div>
                    <button class="account__user-change">Стать экспертом</button>
                </div>
                <div class="account__info-user">
                    <div class="account__block-user">
                        <p class="account__name">{{ user.name }} {{ user.surname }}</p>
                        <img src="~assets/images/icons/change-icon.png" alt="#">
                    </div>
                    <p class="account__mail">{{ user.email }}</p>
                    <div class="account__block-plants">
                        <img src="~assets/images/icons/plants-icon.png" alt="#">
                        <p class="account__quantity-plants">10 растений</p>
                    </div>
                    <p class="account__description">{{ user.description }}</p>
                </div>
            </div>   
        </div>
    </section>
</template>

<script>
export default {
  name: 'Categories',
  computed: {
    user() {
      return this.$store.getters.USER
    },
  },
  created() {
    this.$store.dispatch('getUser')
  },
}
</script>

<style scoped>
.container__account{
    width: 1000px;
    height: auto;
    margin-top: 90px;
    margin-left: 475px;
    position: relative;
    z-index: 1;
}

.account{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.account__avatar{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 70px;
}

.account__info-user{
    width: 630px;
    margin-top: 60px;
}

.account__image{
    width: 266px;
    height: 266px;
    background-color: gray;
    border-radius: 100%;
    border: 6px solid #C3E2EC;
    margin-bottom: 40px;
}

.account__user-change{
    background: #D8F0F8;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    width: 308px;
    height: 40px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    line-height: 99.5%;
    letter-spacing: 0.4px;
    color: #5D6062;
    transition: all 0.5s;
}

.account__user-change:hover{
    background: #BFE7F5;
    transition: all 0.5s;
}

.account__name{
    font-weight: 600;
    font-size: 32px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #4E4E4E;
    text-transform: uppercase;
}

.account__mail{
    font-weight: 500;
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.4px;
    text-decoration-line: underline;
    color: #4E4E4E;
}

.account__quantity-plants{
    margin-top: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #8A8A8E;
}

.account__description{
    width: 90%;
    font-size: 20px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #000000;
    text-align: justify;
}

.account__block-user, .account__block-plants{
    display: flex;
}
.account__block-user img{
    margin-top: 7px;
    margin-left: 15px;
    width: 20px;
    height: 22px;
}
.account__block-plants img{
    width: 30px;
    height: 28px;
    margin-right: 8px;
}

@media (max-width: 1433px) {
    .container__account{
        width: 65%;
    }
}

@media (max-width: 1280px) {
    .container__account{
        width: 55%;
    }
}

@media (max-width: 1115px) {
   .container__account{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
   }
}

@media (max-width: 720px) {
   .account{
    flex-direction: column;
    align-items: center;
   }

   .account__info-user{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
   }

   .account__avatar{
    margin-right: 0;
   }

   .account__description{
    text-align: center;
   }
}

@media (max-width: 330px) {
   .account__user-change{
    width: 100%;
   }
}
</style>