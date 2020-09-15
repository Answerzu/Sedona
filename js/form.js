var button = document.querySelector(".searchButtonShow");
var form = document.querySelector(".form");
var arrival = form.querySelector("[name=arrivalDate]");
var departure = form.querySelector("[name=departureDate]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var adultsPlus = document.querySelector(".adultsPlus");
var adultsMinus = document.querySelector(".adultsMinus");
var childrenPlus = document.querySelector(".childrenPlus");
var childrenMinus = document.querySelector(".childrenMinus");


button.addEventListener("click", function (evt) { /* добавляем возможность показать/скрыть форму */
	evt.preventDefault();
	form.classList.toggle("formShow");
	arrival.focus();
	form.classList.remove("formError");
});

form.addEventListener("submit", function (evt) { /* запрящаем отправлять форму, если есть пустые поля*/
	if (!arrival.value || !departure.value || adults.value == 0 && children.value == 0) {
		evt.preventDefault();
		form.classList.remove("formError");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("formError");
	}
});

window.addEventListener("keydown", function (evt) { /*добавляем закрытие фомры через Esc*/
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (form.classList.contains("formShow")) {
			evt.preventDefault();
			form.classList.remove("formShow");
			form.classList.remove("formError");
		}
	}
});


adultsPlus.addEventListener("click", function (evt) { /*оживляем кнопки плюс/минус*/
	evt.preventDefault();
	adults.value = ++adults.value;
});

adultsMinus.addEventListener("click", function (evt) {
	evt.preventDefault();
	if ( adults.value > 0 ) {
	adults.value = --adults.value;
	}
});

childrenPlus.addEventListener("click", function (evt) {
	evt.preventDefault();
	children.value = ++children.value;
});

childrenMinus.addEventListener("click", function (evt) {
	evt.preventDefault();
	if ( children.value > 0 ) {
	children.value = --children.value;
	}
});



