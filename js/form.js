var button = document.querySelector(".search-form");
var form = document.querySelector(".form")

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("form-show");
});


