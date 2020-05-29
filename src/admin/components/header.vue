<template lang="pug">
    .container
        .content
            .left
                img(src="../../images/content/Ashot.jpg", alt="alt").avatar
                h2.name Аршалуйс Асланян
                .panel Панель администрирования
            .right
                a(href="#").logout Выйти
</template>

<script>
    export default {
        name: 'root-header'
    }
</script>

<style lang="postcss" scoped>
.container {
    width: 100%;
    height: 80px;
    display: flex;
    background: #3f3f5e;
}

.content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.left {
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.right {
    width: 45%;
    display: flex;
    justify-content: end;
    align-items: center;
}

.logout {
        font-size: 14px;
        color: #cac1b8;
        align-self: end;
    }

.avatar {
    width: 60px;
    border-radius: 50%;
}

.name {
    color: #fff;
    font-size: 18px;
}

.panel {
    font-size: 14px;
    color: #cac1b8;
}
</style>