var button = document.querySelector(".search-form");
var form = document.querySelector(".form");
var date1 = form.querySelector("[name=date1]");
var date2 = form.querySelector("[name=date2]");
var adults = form.querySelector("[name=num1]");
var children = form.querySelector("[name=num2]");
var plus1 = document.querySelector(".plus1");
var minus1 = document.querySelector(".minus1");
var plus2 = document.querySelector(".plus2");
var minus2 = document.querySelector(".minus2");


button.addEventListener("click", function (evt) { /* добавляем возможность показать/скрыть форму */
	evt.preventDefault();
	form.classList.toggle("form-show");
	date1.focus();
	form.classList.remove("form-error")
});

form.addEventListener("submit", function (evt) { /* запрящаем отправлять форму, если есть пустые поля*/
	if (!date1.value || !date2.value || adults.value == 0 && children.value == 0) {
		evt.preventDefault();
		form.classList.remove("form-error");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("form-error");
	}
});

window.addEventListener("keydown", function (evt) { /*добавляем закрытие форы через Esc*/
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (form.classList.contains("form-show")) {
			evt.preventDefault();
			form.classList.remove("form-show")
			form.classList.remove("form-error")
		}
	}
});


plus1.addEventListener("click", function (evt) {
	evt.preventDefault();
	adults.value = ++adults.value;
});

minus1.addEventListener("click", function (evt) {
	evt.preventDefault();
	if ( adults.value > 0 ) {
	adults.value = --adults.value;
	}
});

plus2.addEventListener("click", function (evt) {
	evt.preventDefault();
	children.value = ++children.value;
});

minus2.addEventListener("click", function (evt) {
	evt.preventDefault();
	if ( children.value > 0 ) {
	children.value = --children.value;
	}
});



