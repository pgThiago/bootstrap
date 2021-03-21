$(document).ready(function () {
	$('.carousel').carousel({
		interval: 5000
	})
});

function setActiveItem(element) {
	const liElements = document.querySelectorAll('.nav-item')
	for (item of liElements) {
		if (item !== element)
			item.classList.remove('active')
		else
			item.classList.add('active')
	}
}