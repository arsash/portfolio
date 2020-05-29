<template lang="pug">
   .container
        .content
            ul.navBar
                li.navBar__item.active
                    a(href="#").navBar__link Обо мне
                li.navBar__item
                    a(href="#").navBar__link Работы
                li.navBar__item
                    a(href="#").navBar__link Отзывы
</template>

<script>
    export default {
        name: 'navBar'
    }
</script>

<style lang="postcss" scoped>
.container {
    width: 100%;
    height: 80px;
    display: flex;
    background: #fff;
}

.content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.navBar {
    display: flex;
}

.navBar__item {
    border-bottom: 3px solid transparent;
    padding: 30px;

    &:hover {
        border-bottom: 3px solid #383bcf;
    }
}

.active {
    border-bottom: 3px solid #383bcf;
}

.navBar__link {
    text-decoration: none;
    color: #414c63;
}
</style>