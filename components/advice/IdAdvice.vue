<template>
    <section>
        <div class="container-advice">
            <div class="catalog__block-link">
              <img src="~assets/images/icons/strelka.png" alt="">
              <NuxtLink to="/advice" class="catalog__link">Обратно к советам</NuxtLink>
            </div>
          <div class="container-advice__description">
            <h1 class="container-advice__title">Как поливать цветы, когда уезжаешь в отпуск?</h1>
            <div class="block-author">
                <p class="block-author__date">19.02.2022</p>
                <NuxtLink to="#" class="block-author__name underline">Александр Закадычный</NuxtLink>
            </div>
            <p class="container-advice__text">Существует такое понятие, как тургор растения. Тургор - это наполненность клеток растения водой. Если растению не достаточно воды, листья и ветки поникают, становятся вялыми, то говорят о потери тургора. Если растение было обезвожено не долго, то достаточно почву хорошенько пропитать водой, чтобы тургор восстановился. Но если корни сильно пересохнут, полив уже не поможет, растения погибнут.

            Отлучаться из дома на некоторое время, оставляя цветы и даже животных приходилось, наверное, каждому. За время своего отсутствия мы переживаем за своих любимцев - как же они без присмотра. Каждый ищет свой выход из ситуации, в зависимости от сроков командировки или отпуска. Кто-то оставит ключи от квартиры соседке или родственникам с наказом вовремя полить, но многие не имеют такой возможности или просто не доверяют в таком щепетильном вопросе не опытному человеку.

            Готовиться к своему отпуску надо заранее, в то время как вы выбираете себе купальник или только еще просматриваете красочные иллюстрации туристических агентств стоит не просто поинтересоваться способами автоматического полива растений, но и испробовать их в деле, заранее потратив на это как минимум дня два.

            Ведь неправильно организованный автополив может привести к плачевным результатам, когда растения окажутся высохшими или напротив залитыми. Если вы оставляете заботу о растениях соседке или другу, то хотя бы позаботьтесь о точных инструкциях на этот счет. У любого человека могут оказаться понятия меры отличные от ваших, и если для вас обильный полив означает стакан воды на горшок, то кто-то может подразумевать под обильным поливам и 2-3 стакана воды.  Частота полива, как известно, зависит от вида растения, температуры воздуха и времени года. Поэтому давать однозначный ответ, насколько можно оставлять растение без воды нельзя не ссылаясь на его физиологическое состояние. Так кактусы и некоторые суккуленты летом находятся в состоянии роста и безболезненно перенесут отсутствие полива около 2 недель. Зимой же, во время периода покоя этот период может составлять до 1 месяца.</p>
            <div class="block-pagination">
                <p class="block-pagination__signature"> 1 из 2</p>
                <!-- <img src="~assets/images/icons/arrow-next.png" alt="стрелка вперед"> -->
                <button class="block-pagination__button"></button>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'IdAdvice'
}
</script>

<style scoped>

.container-advice{
    position: relative;
    width: 665px;
    height: auto;
    margin-left: 475px;
    margin-top: 50px;
    margin-bottom: 70px;
}
.catalog__link{
  font-size: 18px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #979CAE;
}

.container-advice__description{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.container-advice__title{
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #4E4E4E;
    margin-top: 50px;
    margin-bottom: 24px;
}

.block-author{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.block-author__date, .block-author__name{
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #8F8F8F;
}

.underline{
    text-decoration: underline;
}

.container-advice__text{
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #4E4E4E;
    margin-top: 33px;
    text-align: left;
    margin-bottom: 70px;
}

.block-pagination{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 20px;
    display: flex;
    
}

.block-pagination__signature{
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #8F8F8F;
    margin-right: 30px;
}

.block-pagination__button{
    background: url("~assets/images/icons/arrow-next.png") no-repeat;
    background-position: 100% 50%;
    height: 100%;
    width: 42px;
    border: none;
}
@media (max-width: 1172px) {
    .container-advice{
        width: 55%;
    }
}

@media (max-width: 1115px) {
    .container-advice{
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }
}

@media (max-width: 460px) {
    .block-author{
        flex-direction: column;
        align-items: center;
    }

    .container-advice__title, .container-advice__text{
        text-align: center;
    }
}

</style>