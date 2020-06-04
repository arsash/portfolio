<template lang="pug">
    .work_item
        .work_img
            img(src="../../img/2.png", alt="alt").work_img
        .work_text
            h3 Сайт школы образования
            p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        .work_link
            a(href="#") https://LoftSchool.com
        .work_controls
            .work_controls-col
                span.text Править
                img(src="../../img/edit-button.png").icon
            .work_controls-col
                span.text Удалить
                img(src="../../img/cancel.png").icon
</template>

<script>
    export default {
        name: 'workitem'
    }
</script>

<style lang="postcss" scoped>
p {
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgba(65, 76, 99, 0.702);
    line-height: 1.875;
}

.work_img, .work_text, .work_link, .work_controls {
    width: 100%;
}

.work_controls {
    display: flex;
    justify-content: space-between;
}

.work_controls-col {
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
}
</style>