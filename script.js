let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');
let reamur = document.getElementById('reamur');
let kelvin = document.getElementById('kelvin');


celcius.oninput = () => {
	let outputF = parseFloat(celcius.value *9) /5 + 32;
	fahrenheit.value = parseFloat(outputF.toFixed(2));


		let outputR = parseFloat(celcius.value *4) /5;
	reamur.value = parseFloat(outputR.toFixed(2));


		let outputK = parseFloat(celcius.value) + 273;
	kelvin.value = parseFloat(outputK.toFixed(2));



};



fahrenheit.oninput = () => {
	let output1 = parseFloat(fahrenheit.value - 32)*5 /9;
	celcius.value = parseFloat(output1.toFixed(2));

	let output2 = parseFloat(fahrenheit.value - 32)*4 /9;
	reamur.value = parseFloat(output2.toFixed(2));

	let output3 = parseFloat(fahrenheit.value -32)*5 /9 + 273;
	kelvin.value = parseFloat(output3.toFixed(2));


};



reamur.oninput = () => {
	let output4 = parseFloat(reamur.value *5) /4;
	celcius.value = parseFloat(output4.toFixed(2));


	let output5 = parseFloat(reamur.value *9) /4 + 32;
	fahrenheit.value = parseFloat(output5.toFixed(2));

	let output6 = parseFloat(reamur.value *5) /4 + 273;
	kelvin.value = parseFloat(output6.toFixed(2));



}



kelvin.oninput = () => {
	let output7 = parseFloat(kelvin.value - 273);
	celcius.value = parseFloat(output7.toFixed(2));

	let output8 = parseFloat(kelvin.value -273)*4 /5;
	reamur.value = parseFloat(output8.toFixed(2));


	let output9 = parseFloat(kelvin.value -273)*9 /5 + 32;
	fahrenheit.value = parseFloat(output9.toFixed(2));
}


function kosong(){
	let celcius = document.getElementById('celcius').value = "";
	let fahrenheit = document.getElementById('fahrenheit').value = "";
	let reamur = document.getElementById('reamur').value = "";
	let kelvin = document.getElementById('kelvin').value = ""; 
}