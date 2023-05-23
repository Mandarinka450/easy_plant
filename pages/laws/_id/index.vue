<template>
    <main>
      <SideAdminMenu/>
      <IdLaw/>
    </main>
</template>

<script>
import IdLaw from '../../../components/laws/IdLaw.vue'
export default {
  components: { IdLaw },
  name: 'LawIdPage'
}
</script>