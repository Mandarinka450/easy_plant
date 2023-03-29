<template>
    <main>
        <PlantIn/>
        <Avatar/>
        <SideMenu/>
        <MyPlants/>
    </main>
</template>

<script>
import MyPlants from '../../components/my-plants/MyPlants.vue'
export default {
  components: { MyPlants },
  name: 'MyPlantsPage'
}
</script>