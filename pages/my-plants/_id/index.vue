<template>
    <main>
        <SideMenu/>
        <!-- <PlantIn/> -->
        <Avatar/>
        <MyPlantsCard/>
    </main>
</template>

<script>
import MyPlantsCard from '../../../components/my-plants-card/MyPlantsCard.vue'
export default {
  components: { MyPlantsCard },
  name: 'MyPlantsCardPage'
}
</script>

