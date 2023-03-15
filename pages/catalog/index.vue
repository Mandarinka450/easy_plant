<template>
    <main>
      <PlantIn/>
      <Avatar/>
      <Plants/>
    </main>
</template>

<script>
import Plants from '../../components/plants/Plants.vue'
export default {
  components: { Plants },
  name: 'CatalogPage'
}
</script>