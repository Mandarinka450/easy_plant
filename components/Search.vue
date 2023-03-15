<template>
    <form action="" class="container__form">
        <img src="~assets/images/icons/search.png" alt="Иконка поиска">
        <input name="s" placeholder="Поиск" type="search" class="search">
    </form>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
.container__form{
    position: relative;
    width: 680px;
    height: 43px;
}
.search{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 1px solid #B6B6B6;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.05);
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #CDCDCD;
    padding-left: 50px;
}
.search:focus{
    outline: 0.4px solid #9D9D9D;
}

.container__form img{
    left: 15px;
    top: 8px;
    position: absolute;
}
</style>