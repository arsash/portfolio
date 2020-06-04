<template lang="pug">
    label.label
        .label__text Перетащите или загрузите
        .label__text для загрузки изображения
        .upload загрузить
        input(type="file").file
</template>

<script>
    export default {
        name: 'workupload'
    }
</script>

<style lang="postcss" scoped>
.label {
    width: 100%;
    height: 300px;
    background: #dee4ed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    border: 1px dashed #9aa2af;
}

.file {
    visibility: hidden;
}

.upload {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    background: #1756e1;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding: 17px;
    cursor: pointer;
}

.label__text {
    width: 100%;
    color: #9aa2af;
    font-size: 16px;
}
</style>