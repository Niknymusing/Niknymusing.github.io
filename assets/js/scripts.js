document.addEventListener('DOMContentLoaded', function() {
    var navTrigger = document.getElementById('nav-trigger');
    var menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', function() {
        var isChecked = navTrigger.checked;
        navTrigger.checked = !isChecked; // Toggle the checkbox (hidden)
    });
});
