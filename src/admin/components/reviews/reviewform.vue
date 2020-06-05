<template lang="pug">
    .form
        form(action="#")
            .form__row
                label.form_label Имя автора
                    input(type="text").form_input
                label.form_label Титул автора
                    input(type="text").form_input
            .form__row
                label.form_textarea Отзыв
                    textarea(resize="none").form_input
            .form__row
                .form_buttons
                    button(type="reset").reset_btn Отмена
                    button(type='submit').save_btn Сохранить
</template>

<script>
    export default {
        name: 'workform'
    }
</script>

<style lang="postcss" scoped>
.form__row {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.form_label {
    color: #9aa2af;
    width: 45%;
    display: inline-flex;
    flex-direction: column;
}

.form_textarea {
    width: 100%;
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
    width: 100%;
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