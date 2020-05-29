<template lang="pug">
    .about-group
        .about-group__header
            input(type="text" placeholder="Название новой группы").header__input
            div
                button(type="button").btn-header.btn-done
                button(type="button").btn-header.btn-del
        .about-group__footer
            input(type="text" placeholder="Новый навык").new-skill
            input(type="text" placeholder="100%").percent
            button.add-skill(type='submit') +
</template>

<script>
    export default {
        name: 'newGroup'
    }
</script>

<style lang="postcss" scoped>
.about-group {
    width: 525px;
    height: 390px;
    background: #fff;
    box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.about-group__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__input {
    width: 60%;
    border: none;
    border-bottom: 1px solid black;
    padding: 15px 0;
    font-size: 18px;
}

.btn-header {
    width: 15px;
    height: 12px;
    border: none;
    cursor: pointer;
}

.btn-done {
    background: url('../../img/tick.png') no-repeat;
}

.btn-del {
    background: url('../../img/cross.png') no-repeat;
    margin-left: 20px;
}

.new-skill {
    width: 50%;
    border: none;
    border-bottom: 1px solid black;
    padding: 15px 0;
    font-size: 18px;
    margin-left: 100px;
    margin-right: 10px;
}

.percent {
    width: 10%;
    border: none;
    border-bottom: 1px solid black;
    padding: 15px 0;
    font-size: 18px;
    margin-right: 30px;
}

.add-skill {
    width: 40px;
    height: 40px;
    background: #333fd2;
    border-radius: 50%;
    border: none;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 19px;
    color: #fff;
    font-weight: bold;
}
</style>