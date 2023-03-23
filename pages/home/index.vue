<template>
    <main>
        <SideMenu/>
        <PlantIn/>
        <Avatar/>
        <Home/>
    </main>
</template>

<script>
import Home from '../../components/home/Home.vue'
export default {
  components: { Home },
  name: 'HomePage'
}
</script>