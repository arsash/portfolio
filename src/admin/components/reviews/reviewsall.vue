<template lang="pug">
    .container
        .review_item.review_adding
            button.add_btn(type='button') +
            .add_text Добавить отзыв
        reviewitem
        reviewitem
        reviewitem
        reviewitem
        reviewitem
</template>

<script>
import reviewitem from './reviewitem';
    export default {
        name: 'worksall',
        components: {
            reviewitem
        }
    }
</script>

<style lang="postcss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px 0;
}

a {
    text-decoration: none;
    color: #383bcf;
}

.review_item {
    width: 30%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
}

.review_adding {
    background: #1a54df;
    padding: 80px 0;
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
</style>