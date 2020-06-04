<template lang="pug">
    .container
        .work_item.work_adding
            button.add_btn(type='button') +
            .add_text Добавить работу
        workitem
        workitem
        workitem
        workitem
        workitem
</template>

<script>
import workitem from './workitem';
    export default {
        name: 'worksall',
        components: {
            workitem
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
</style>