<template>
    <main>
        <SideMenu/>
        <Laws/>
    </main>
</template>

<script>
import Laws from '../../components/laws/Laws.vue'
export default {
  components: { Laws },
  name: 'LawsPage'
}
</script>