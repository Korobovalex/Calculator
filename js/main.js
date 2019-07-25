function insert(number) {
	document.form.textview.value = document.form.textview.value + number;
}

function equal() {
	let exp = document.form.textview.value;
	if (exp) {
		document.form.textview.value = eval(exp);
	}
}

function c() {
	document.form.textview.value = "";
}

function back() {
	let exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
}

function root() {
	let exp = document.form.textview.value;
	document.form.textview.value = Math.sqrt(exp);
}