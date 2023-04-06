<template>
   <Registration/>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'RegistrationPage',
  beforeMount(){
    if(Cookies.get('token')){
       this.$router.push('/account')
    }
  }
}
</script>

<style scoped>

</style>