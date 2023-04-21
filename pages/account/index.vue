<template>
    <main>
        <Exit/>
        <PlantIn/>
        <SideMenu/>
        <User/>
    </main>
</template>

<script>
import User from '../../components/account/User.vue'
export default {
  components: { User },
  name: 'AccountPage',
  middleware: 'auth',
}
</script>