<template lang="pug">
    .review_item
        .review_header
            img(src="../../img/author.png", alt="alt")
            .review_header-text
                h3 Владимир Сабанцев
                h4 Преподаватель
        .review_text
            p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .review_controls
            .review_controls-col
                span.text Править
                img(src="../../img/edit-button.png").icon
            .review_controls-col
                span.text Удалить
                img(src="../../img/cancel.png").icon
</template>

<script>
    export default {
        name: 'reviewitem'
    }
</script>

<style lang="postcss" scoped>
.review_item {
    padding: 0 30px;
}

p {
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgba(65, 76, 99, 0.702);
    line-height: 1.875;
}

.review_img, .review_text, .review_link, .review_controls {
    width: 100%;
}

.review_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(65, 76, 99, 0.702);
}

.review_header-text {
    h3 {
        color: #414c63;
        margin-bottom: 10px;
    }
    h4 {
        color: rgba(65, 76, 99, 0.702);
    }
}

.review_controls {
    display: flex;
    justify-content: space-between;
}

.review_controls-col {
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
}
</style>