<template>
    <loginMain/>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'LoginPage',
  beforeMount(){
    if(Cookies.get('token')){
       this.$router.push('/account')
    }
  }
}
</script>