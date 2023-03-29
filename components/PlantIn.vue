<template>
    <div class="container-plant">
         <img class="container-plant__image" src="~assets/images/plant-home.png" alt="#">
    </div>
</template>

<script>
export default {
  name: 'PlantIn'
}
</script>

<style scoped>
.container-plant{
    width: auto;
    height: 75%;
    position: fixed;
    right: 0;
    bottom: 0;
}
.container-plant__image{
    width: auto;
    height: 100%;
}

/* @media (max-width: 1526px) {
    .container-plant{
        display: none;
    }
} */

</style>