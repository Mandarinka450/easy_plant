<template>
    <div class="container-advice">
        <h1 class="container-advice__title">Советы</h1>
        <div class="card">
            <div class="block-hover">
                <img src="~assets/images/three-plants.png" alt="#">
            </div>
            <p class="card__date-publish">17.02.2022</p>
            <p class="card__title">Ошибки при уходе за растениями</p>
            <p class="card__description">Недостаток света, отсутствие свежего воздуха, чрезмерная его сухость, сквозняк...</p>
        </div>
        <div class="card">
            <div class="block-hover">
                <img src="~assets/images/three-plants.png" alt="#">
            </div>
            <p class="card__date-publish">17.02.2022</p>
            <p class="card__title">Ошибки при уходе за растениями</p>
            <p class="card__description">Недостаток света, отсутствие свежего воздуха, чрезмерная его сухость, сквозняк...</p>
        </div>
        <div class="card">
            <div class="block-hover">
                <img src="~assets/images/three-plants.png" alt="#">
            </div>
            <p class="card__date-publish">17.02.2022</p>
            <p class="card__title">Ошибки при уходе за растениями</p>
            <p class="card__description">Недостаток света, отсутствие свежего воздуха, чрезмерная его сухость, сквозняк...</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Advice'
}
</script>

<style scoped>
.container-advice{
    width: 650px;
    height: auto;
    margin-left: 170px;
    margin-top: 50px;
}

.container-advice__title{
    font-weight: 600;
    font-size: 28px;
    line-height: 85.5%;
    letter-spacing: 0.4px;
    color: #000000;
    margin-bottom: 30px;
}

.card{
    width: 100%;
    height: auto;
    max-height: 120px;
    overflow: hidden;
    box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #FFFFFF;
    margin-bottom: 25px;
    transition: max-height 0.7s;
}

.card__date-publish{
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #8F8F8F;
    margin-top: 10px;
    margin-left: 20px;
}

.card__title{
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -1px;
    margin-top: -10px;
    color: #4E4E4E;
    margin-left: 20px;
}

.card__description{
    font-weight: 300;
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #A3A3A3;
    margin-left: 20px;
}

.card:hover{
    max-height: 300px;
    transition: 0.7s;
}

.card:hover .card__description{
    display: none;
}


.card:hover .block-hover img{
    display: block;
}

.card:hover .block-hover{
    z-index: 10;
    height: 230px;
}
.block-hover{
    background-color: #FAE5CB;
}

.block-hover img{
    margin-top: 30px;
    width: 340px;
    height: 150px;
    display: none;
    margin-left: auto;
    margin-right: auto;
}

</style>