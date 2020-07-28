var button = document.querySelector(".search-form");
var form = document.querySelector(".form");
var date1 = form.querySelector("[name=date1]");
var date2 = form.querySelector("[name=date2]");
var adults = form.querySelector("[name=num1]");
var children = form.querySelector("[name=num2]");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("form-show");
	date1.focus();
});

form.addEventListener("submit", function (evt) {
	if (!date1.value || !date2.value || adults.value == 0 && children.value == 0) {
		evt.preventDefault();
		console.log("Нужно ввести пароль");
	}
});


