function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

function clean(){
	document.form.textarea.value = "";
}

function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}

function insert(value) {
	var display = document.getElementById("display");
	if (value === "**2") {
	  var currentValue = display.value;
	  var squaredValue = Math.pow(currentValue, 2);
	  display.value = squaredValue;
	} else {
	  display.value += value;
	}
  }
  