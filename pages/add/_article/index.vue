<template>
    <main>
        <SideMenu/>
        <Avatar/>
        <Add/>
    </main>
</template>

<script>
import Add from '../../../components/add-article/Add.vue'
export default {
  components: { Add },
  name: 'ArticlePage'
}
</script>