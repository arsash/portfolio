import Vue from 'vue';


new Vue ({
  el: '#reviews__block',
  template: '#review__block',
  methods: {
    next() {
      let reviewList = document.querySelector('.reviews__list');
      reviewList.style.marginLeft = -450 + 'px';
      reviewList.style.transition = 1 + 's';
    },
    prev() {
      let reviewList = document.querySelector('.reviews__list');
      reviewList.style.marginLeft = 50 + 'px';
      reviewList.style.transition = 1 + 's';
    }
  }
});