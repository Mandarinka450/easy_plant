<template>
    <main>
        <SideAdminMenu/>
        <Exit/>
        <Laws/>
    </main>
</template>

<script>
import Laws from '../../components/laws/Laws.vue'
export default {
  components: { Laws },
  name: 'LawsPage',
  middleware: 'admin',
}
</script>