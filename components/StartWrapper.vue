<template>
    <div class="container-start">
      <div class="container-main">
           <StartContainer/>
      </div>
      <div class="container-picture">
        <img class="container-picture__image" src="~assets/images/plant.png" alt="#">
      </div>
    </div>
    
</template>

<script>
export default {
  name: 'StartWrapper'
}
</script>

<style scoped>
.container-start{
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #E0F0D5;
}
.container-main{
  width: 49%;
  height: 100%;
}
.container-picture{
  width: 51%;
  height: 100%;
}
.container-picture__image{
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media (max-width: 850px) {
  .container-start{
    flex-direction: column-reverse;
  }
  .container-main, .container-picture{
    width: 100%;
    height: 50%;
  }
}
</style>