let openMenu = document.querySelector(".navbar .navOpen"); //get the open button
let closeMenu = document.querySelector(".navbar .navClose"); //get the close button
let navigation = document.querySelector(".navbar .menu"); //get the menu

// change "right" for the side you hide the menu
//when open button clicked: set the menu style side to 0 showing it
openMenu.addEventListener("click", () => {
	navigation.style.right = "0";
});
//when close button clicked: set the menu style side to -100% hiding again
closeMenu.addEventListener("click", () => {
	navigation.style.right = "-100%";
});