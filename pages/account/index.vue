<template>
    <main>
        <Exit/>
        <PlantIn/>
        <User/>
    </main>
</template>

<script>
import User from '../../components/account/User.vue'
export default {
  components: { User },
  name: 'AccountPage'
}
</script>