<template>
    <main>
        <SideAdminMenu/>
        <Exit/>
        <Queries/>
    </main>
</template>

<script>
import Queries from '../../components/queries/Queries.vue'
export default {
  components: { Queries },
  name: 'QueriesPage',
  middleware: 'admin',
}
</script>