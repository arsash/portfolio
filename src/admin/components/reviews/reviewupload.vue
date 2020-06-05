<template lang="pug">
    label.label
        .upload Добавить фото
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
}

.file {
    visibility: hidden;
}

.upload {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    color: #1756e1;
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