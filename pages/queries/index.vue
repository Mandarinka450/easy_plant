<template>
    <main>
        <SideMenu/>
        <Queries/>
    </main>
</template>

<script>
import Queries from '../../components/queries/Queries.vue'
export default {
  components: { Queries },
  name: 'QueriesPage'
}
</script>