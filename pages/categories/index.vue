<template>
    <main>
      <PlantIn/>
      <Avatar/>
      <Categories/>
    </main>
</template>

<script>
import Categories from '../../components/categories/Categories.vue'
export default {
  components: { Categories },
  name: 'CategoriesPage'
}
</script>