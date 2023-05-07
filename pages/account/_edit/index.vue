<template>
    <main>
        <Exit/>
        <PlantIn/>
        <SideMenu/>
        <Edit/>
    </main>
</template>

<script>
import Edit from '../../../components/edit/Edit.vue'
export default {
  components: { Edit },
  name: 'EditPage',
  middleware: 'auth',
}
</script>