
let hr = document.getElementById("hour-hand");
let min = document.getElementById("minute-hand");
let sec = document.getElementById("second-hand");

function displayTime(){
	let date = new Date();
	
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();
//   GRADOS DE ROTACIÓN
	let hRotation = 30*hh + mm/2;
	let mRotation = 6*mm; + ss/60
	let sRotation = 6*ss;
//    ASIGNAR ROTACIÓN
	hr.style.transform = `rotate(${hRotation}deg)`;
	min.style.transform = `rotate(${mRotation}deg)`;
	sec.style.transform = `rotate(${sRotation}deg)`;
}
//   ACTUALIZAR CADA SEGUNDO
setInterval(displayTime, 1000);
//   LLAMAR A LA FUNCIÓN
displayTime();
