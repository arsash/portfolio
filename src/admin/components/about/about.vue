<template lang="pug">
    .container
        .content
            .header
                h2.title Блок "Обо мне"
                button.btn.add-group(type='submit') +
                p.btn__title Добавить группу
            .groups
                newGroup
                workflow            
</template>

<script>
import newGroup from './newGroup'
import workflow from './workflow'
    export default {
        name: 'about',
        components: {
            newGroup, workflow
        }
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

.groups {
    display: flex;
    justify-content: space-around;
}

.add-group {
    width: 30px;
    height: 30px;
    background: #333fd2;
    border-radius: 50%;
    border: none;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 19px;
    color: #fff;
    font-weight: bold;
}

.btn__title {
    color: #333fd2;
    font-weight: bold;
    margin-left: 20px;
}
</style>