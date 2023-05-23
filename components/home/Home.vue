<template>
    <section>
        <div class="container__wrapper">
            <div class="container__main">
                <p class="container__title">Пора помочь растениям</p>
                <div class="account__block-plants">
                   <img src="~assets/images/icons/plants-icon.png" alt="#">
                   <p class="account__quantity-plants">{{ count }} растений</p>
                </div>
                <div class="block-short-advice">
                    <p class="block-advice__text">Удерживайте температуру и влажность воздуха в разумных пределах, жар от батареи опасен для ваших питомцев.</p>
                </div>
                <div class="container-condition" v-for="room in rooms" :key="room.id"> 
                    <div class="block-indicators">
                        <img src="~assets/images/icons/temperature.png" class="image-indicators" alt="иконка температура комнаты">
                        <span>{{ room.temperature }}°С</span>
                    </div>
                    <div class="block-indicators">
                        <img src="~assets/images/icons/air.png" class="image-indicators" alt="иконка вложность воздуха в помещении">
                        <span>{{ room.air_humidity }}%</span>
                    </div>
                    <div class="block-indicators">
                        <img src="~assets/images/icons/bedroom.png" class="image-indicators" alt="иконка комнаты">
                        <span>{{ room.name }}</span>
                </div>
                </div>
                <div class="block__pictures">
                    <p class="block__title-pictures">Новые идеи для домашних джунглей</p>
                    <div class="block-grid">
                        <div class="block-grid__first">
                            <img class="block-grid__image" id="image1" src="~assets/images/new_idea/img1.png" alt="первая картинка с растениями">
                        </div>
                        <div class="block-grid__second">
                            <img class="block-grid__image" id="image2" src="~assets/images/new_idea/img2.png" alt="вторая картинка с растениями">
                        </div>
                        <div class="block-grid__third">
                            <img class="block-grid__image" id="image3" src="~assets/images/new_idea/img3.png" alt="третья картинка с растениями">
                        </div>
                        <div class="block-grid__fourth">
                            <img class="block-grid__image" id="image4" src="~assets/images/new_idea/img4.png" alt="четвертая картинка с растениями">
                        </div>
                        <div class="block-grid__fiveth">
                            <img class="block-grid__image" id="image5" src="~assets/images/new_idea/img5.jpg" alt="пятая картинка с растениями">
                        </div>
                        <div class="block-grid__sixth">
                            <img class="block-grid__image" id="image6" src="~assets/images/new_idea/img6.png" alt="шестая картинка с растениями">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="myModal" class="element-modal">
            <span class="element-modal-close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
            <div class="element-modal__content">
                <img class="element-modal__image" id="img">
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Home',
  head: {
    script: [
      {
        src: "../js/popup.js",
        body: true,
      },
    ],
  },
  computed: {
    rooms() {
      return this.$store.getters.ROOMS
    },
    count() {
      return this.$store.getters.COUNT
    },
  },
  created() {
    this.$store.dispatch('getRooms');
    this.$store.dispatch('getCount');
  },
}

</script>

<style scoped>

</style>