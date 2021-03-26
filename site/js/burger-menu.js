var menuContainer = document.getElementById('mobile-menu');
var burgerBtn = document.getElementById('burger-btn');

/**
 * OUVERTURE DU MENU
 */

burgerBtn.addEventListener("click", function (e) {
    menuContainer.style.display = "block";
});

/**
 * FERMETURE DU MENU
 */

var closeIcon = document.getElementById('close-menu-btn');
closeIcon.addEventListener("click", function (e) {
    menuContainer.style.display = "none";
});

// menuContainer.addEventListener("click", function (e) {
//     menuContainer.style.display = "none";
// });