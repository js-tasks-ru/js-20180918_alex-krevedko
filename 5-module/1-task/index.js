'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

	let td = document.getElementsByTagName("td");

	for (let i = 0; i < td.length; i++) {

		if (+td[i].innerHTML < 18) {
			td[i].style.textDecoration = "line-through";
		};

		if (td[i].innerHTML === "m") {
			td[i].classList.add("male");
		}
		else if (td[i].innerHTML === "f"){
			td[i].classList.add("female");
		};

		var attribute = td[i].getAttribute("data-available");

		if (td[i].getAttribute("data-available") == "true"){
			td[i].classList.add("available");
		}

		else if (td[i].getAttribute("data-available") == "false") {
			td[i].classList.add("unavailable");
		}

		else {
			td[i].setAttribute("hidden", true);
		};
	};

};





