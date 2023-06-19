<template>
    <div class="text-center">
      <b-spinner variant="success" label="Spinning" style="width: 3rem; height: 3rem;"></b-spinner>
    </div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style scoped>
.text-center{
  position: absolute;
  top: 30%; 
  left: 0;  
  right: 0;

}
</style>