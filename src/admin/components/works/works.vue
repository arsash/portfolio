<template lang="pug">
    .container
        .content
            .header
                h2.title Блок "Работы"
        .works
            h2.works__title Редактирование работы

</template>

<script>
    export default {
        name: 'works'
    }
</script>

<style lang="postcss" scoped>
.container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #f6f9fe;
}

.content {
    width: 90%;
    margin: 0 auto;
    padding-top: 70px;
}

.works {
    width: 90%;
    margin: 0 auto;
    background: #fff;
    padding: 50px;
}

.header {
    width: 90%;
    display: flex;
    align-items: center;
    margin-bottom: 70px;
}

.title {
    color: #414c63;
    margin-right: 100px;
}

.works__title {
    border-bottom: 1px solid #dedee0;
    padding-bottom: 20px;
    color: #414c63;
}
</style>