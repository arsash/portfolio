<template lang="pug">
    .container
        .content
            .header
                h2.title Блок "Работы"
        .works
            h2.works__title Редактирование работы
            .works__adding
                .works__adding-left
                    workupload
                .works__adding-right
                    workform
        .all_works
            worksall
                            
</template>

<script>
import workupload from './workupload';
import workform from './workform';
import worksall from './worksall';
    export default {
        name: 'works',
        components: {
            workform, workupload, worksall
        }
    }
</script>

<style lang="postcss" scoped>
.container {
    width: 90%;
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
    box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);
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

.works__adding {
    width: 95%;
    margin: 0 auto;
    display: flex;
    padding: 30px;
    justify-content: space-between;
}

.works__adding-left, .works__adding-right {
    width: 45%;
}
</style>