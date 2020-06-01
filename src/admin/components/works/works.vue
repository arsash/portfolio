<template lang="pug">
    .container
        .content
            .header
                h2.title Блок "Работы"
        .works
            h2.works__title Редактирование работы
            .works__adding
                .works__adding-left
                    label.label
                        .label__text Перетащите или загрузите
                        .label__text для загрузки изображения
                        .upload загрузить
                        input(type="file").file
                .works__adding-right
                    .form
                        form(action="#")
                            label.form_label Название
                                input(type="text").form_input
                            label.form_label Ссылка
                                input(type="text").form_input
                            label.form_label Описание
                                textarea(resize="none").form_input
                            label.form_label Добавление тега
                                input(type="text").form_input
                            .form_buttons
                                button(type="reset").reset_btn Отмена
                                button(type='submit').save_btn Сохранить
                            
</template>

<script>
    export default {
        name: 'works'
    }
</script>

<style lang="postcss" scoped>
.container {
    width: 100%;
    height: 100vh;
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

.form_label {
    color: #9aa2af;
}

.form_input {
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    padding: 15px 0;
    font-size: 18px;
    margin-bottom: 20px;
}

textarea {
    resize: none;
}

.form_buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.save_btn {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    background: #1756e1;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
}

.reset_btn {
    width: 180px;
    height: 50px;
    font-size: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #383bcf;
    font-weight: bold;
}
</style>