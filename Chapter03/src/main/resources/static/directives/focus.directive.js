Vue.directive('focus', {
    inserted: function (el) {
        // 요소에 초점을 둔다
        el.focus();
    }
});