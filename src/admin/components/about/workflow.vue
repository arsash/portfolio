<template lang="pug">
    .about-group
        .about-group__header
            input(type="text" placeholder="Workflow" disabled).header__input
            div
                button(type="button").btn-header.btn-done
                button(type="button").btn-header.btn-del
        .about-group__footer
</template>

<script>
    export default {
        name: 'workflow'
    }
</script>

<style lang="postcss" scoped>
.about-group {
    width: 525px;
    height: 390px;
    background: #fff;
    box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);
    padding: 30px;
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
    background: #fff;
    color: #000;
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
</style>