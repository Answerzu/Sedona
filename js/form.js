var button = document.querySelector(".search_button_show");
var form = document.querySelector(".form");
var arrival = form.querySelector("[name=arrival_date]");
var departure = form.querySelector("[name=departure_date]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var adults_plus = document.querySelector(".adults_plus");
var adults_minus = document.querySelector(".adults_minus");
var children_plus = document.querySelector(".children_plus");
var children_minus = document.querySelector(".children_minus");


button.addEventListener("click", function (evt) { /* добавляем возможность показать/скрыть форму */
	evt.preventDefault();
	form.classList.toggle("form_show");
	arrival.focus();
	form.classList.remove("form_error")
});

form.addEventListener("submit", function (evt) { /* запрящаем отправлять форму, если есть пустые поля*/
	if (!arrival.value || !departure.value || adults.value == 0 && children.value == 0) {
		evt.preventDefault();
		form.classList.remove("form_error");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("form_error");
	}
});

window.addEventListener("keydown", function (evt) { /*добавляем закрытие форы через Esc*/
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (form.classList.contains("form_show")) {
			evt.preventDefault();
			form.classList.remove("form_show")
			form.classList.remove("form_error")
		}
	}
});


adults_plus.addEventListener("click", function (evt) {
	evt.preventDefault();
	adults.value = ++adults.value;
});

adults_minus.addEventListener("click", function (evt) {
	evt.preventDefault();
	if ( adults.value > 0 ) {
	adults.value = --adults.value;
	}
});

children_plus.addEventListener("click", function (evt) {
	evt.preventDefault();
	children.value = ++children.value;
});

children_minus.addEventListener("click", function (evt) {
	evt.preventDefault();
	if ( children.value > 0 ) {
	children.value = --children.value;
	}
});



