<template>
    <main>
      <SideAdminMenu/>
      <IdQuery/>
    </main>
</template>

<script>
import IdQuery from '../../../components/queries/IdQuery.vue'
export default {
  components: { IdQuery },
  name: 'IdQueryPage',
  middleware: 'admin',
}
</script>