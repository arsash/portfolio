<template lang="pug">
    .container
        .work_item.work_adding
            button.add_btn(type='button') +
            .add_text Добавить работу
        .work_item
            .work_img
                img(src="../../img/2.png", alt="alt").work_img
            .work_text
                h3 Сайт школы образования
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .work_link
                a(href="#") LoftSchool.com
            .work_controls
                .edit
                    span.text Править
                    img(src="../../img/edit-button.png").icon
                .del
                    span.text Удалить
                    img(src="../../img/cancel.png").icon
        .work_item
            .work_img
                img(src="../../img/2.png", alt="alt").work_img
            .work_text
                h3 Сайт школы образования
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .work_link
                a(href="#") LoftSchool.com
            .work_controls
                .edit
                    span.text Править
                    img(src="../../img/edit-button.png").icon
                .del
                    span.text Удалить
                    img(src="../../img/cancel.png").icon
        .work_item
            .work_img
                img(src="../../img/2.png", alt="alt").work_img
            .work_text
                h3 Сайт школы образования
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .work_link
                a(href="#") LoftSchool.com
            .work_controls
                .edit
                    span.text Править
                    img(src="../../img/edit-button.png").icon
                .del
                    span.text Удалить
                    img(src="../../img/cancel.png").icon
        .work_item
            .work_img
                img(src="../../img/2.png", alt="alt").work_img
            .work_text
                h3 Сайт школы образования
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .work_link
                a(href="#") LoftSchool.com
            .work_controls
                .edit
                    span.text Править
                    img(src="../../img/edit-button.png").icon
                .del
                    span.text Удалить
                    img(src="../../img/cancel.png").icon

</template>

<script>
    export default {
        name: 'worksall'
    }
</script>

<style lang="postcss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.work_item {
    width: 30%;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
}

.work_adding {
    background: #1a54df;
    padding: 160px 0;
}

.add_btn {
    width: 100px;
    height: 100px;
    background: transparent;
    border-radius: 50%;
    border: 3px solid #fff;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
}

.add_text {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    width: 100px;
    text-align: center;
    line-height: 2;
}

p {
    font-size: 16px;
    font-family: "OpenSans";
    color: rgba(65, 76, 99, 0.702);
    line-height: 1.875;
}

.work_img {
    width: 100%;
}
</style>