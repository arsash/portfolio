import Vue from 'vue';
import { data } from 'autoprefixer';

const skill = {
    template: '#skill',
    props: {
        skill : Object
    }
}

const category = {
    template: '#skill-category',
    props: {
        group: Object
    },
    components: {
        skill
    }
}

new Vue({
    el: '#skills-component',
    template: '#skills-list',
    data(){
        return {
            skills: []
        }
    },
    components: {
        category
    },
    created () {
        const skillsData = require('../data/skills');
        this.skills = skillsData;
    }
});