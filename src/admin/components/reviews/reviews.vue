<template lang="pug">
    .container
        .content
            .header
                h2.title Блок "Отзывы"
        .review
            h2.review__title Новый отзыв
            .review__adding
                .review__adding-left
                    .avatar
                        img(src="../../img/man-user.png", alt="alt")
                    reviewupload
                .review__adding-right
                    reviewform
        .all_review
            reviewsall           
</template>

<script>
import reviewupload from './reviewupload';
import reviewform from './reviewform';
import reviewsall from './reviewsall';
    export default {
        name: 'works',
        components: {
            reviewform, reviewupload, reviewsall
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

.review {
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

.review__title {
    border-bottom: 1px solid #dedee0;
    padding-bottom: 20px;
    color: #414c63;
}

.review__adding {
    width: 95%;
    margin: 0 auto;
    display: flex;
    padding: 30px;
    justify-content: space-between;
}

.review__adding-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.review__adding-right {
    width: 70%;
}

.avatar {
    width: 200px;
    height: 200px;
    background: #dee4ed;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>