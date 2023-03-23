<template>
    <main>
        <SideMenu/>
        <PlantIn/>
        <Avatar/>
        <Advice/>
    </main>
</template>

<script>
import Advice from '../../components/advice/Advice.vue'
export default {
  components: { Advice },
  name: 'AdvicePage'
}
</script>