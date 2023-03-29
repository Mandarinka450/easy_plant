<template>
    <main>
      <PlantIn/>
      <Avatar/>
      <SideMenu/>
      <IdAdvice/>
    </main>
</template>

<script>
import IdAdvice from '../../../components/advice/IdAdvice.vue'
export default {
  components: { IdAdvice },
  name: 'AdviceIdPage'
}
</script>