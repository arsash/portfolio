import Vue from 'vue';

// const skillItemFrontend = {
//     template: '#skill__item-frontend'
// }

// const skillItemWorkflow = {
//     template: '#skill__item-workflow'
// }


new Vue({
    el: '#skills-component',
    template: '#skills-list',
    data(){
        return {
            frontEndTitle: 'Front-end',
            workflowTitle: 'Workflow'
        }
    }
});