import Vue from 'vue';
import { data } from 'autoprefixer';


new Vue({
    el: '#skills-component',
    template: '#skills-list',
    data(){
        return {
            skills: []
        }
    },
    created () {
        const skillsData = require('../data/skills');
        this.skills = skillsData;
    }
});

new Vue({
    el: '#skill-category-component',
    template: '#skill-category'
})

new Vue({
    el: '#skill-component',
    template: '#skill'
})