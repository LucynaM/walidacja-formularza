"use.strict";

var zgoda1 = document.getElementById("zgoda-marketingowa-1");
var zgoda2 = document.getElementById("zgoda-marketingowa-2");
var zgodyWszystkie = document.getElementById("wszytskie-zgody");


function validateForm(e) {
	
	var poleNazwiska = document.getElementById("name").value;
	var poleEmail = document.getElementById("email").value;
	
	var formularz = document.querySelector("form");
	console.log(formularz);
	var komunikat = document.createElement("p");
	var trescKomunikatu = document.createTextNode("Wymagane pole");
	komunikat.appendChild(trescKomunikatu);
	komunikat.style.color = "red";
	
	if (zgoda1.checked==false) {
		var komunikatZgody = document.createElement("p");
		var trescKomunikatuZgody = document.createTextNode("To pole jest wymagane");
		komunikatZgody.appendChild(trescKomunikatuZgody);
		komunikatZgody.style.color = "red";
		formularz.replaceChild(komunikatZgody, formularz.children[10])
		
		e.preventDefault();

		console.log("Checkbox nie może być niekliknięty");
	} 
	
	if (poleNazwiska == "") {
		var komunikatNazwiska = document.createElement("p");
		var trescKomunikatuNazwiska = document.createTextNode("To pole jest wymagane");
		komunikatNazwiska.appendChild(trescKomunikatuNazwiska);
		komunikatNazwiska.style.color = "red";
		formularz.replaceChild(komunikatNazwiska, formularz.children[3])
		
		e.preventDefault();
		
		console.log("Pole nazwiska nie może być puste");
	} else {
		formularz.children[3].innerHTML = "";
	}
	
	if (poleEmail == "") {
		var komunikatEmail = document.createElement("p");
		var trescKomunikatuEmail = document.createTextNode("To pole jest wymagane");
		komunikatEmail.appendChild(trescKomunikatuEmail);
		komunikatEmail.style.color = "red";
		formularz.replaceChild(komunikatEmail, formularz.children[7])
		e.preventDefault();
	
		console.log("Pole email nie może być puste");
	} else {
		formularz.children[7].innerHTML = "";
	}

	
}

document.getElementById("wyslij").addEventListener("click", validateForm);

function checkingStatus () {
	
	if (zgodyWszystkie.checked) {
		zgoda1.checked = true;
		zgoda1.disabled = true;
		zgoda2.checked = true;
		zgoda2.disabled = true;
	}
	else {
		zgoda1.checked = false;
		zgoda1.disabled = false;
		zgoda2.checked = false;
		zgoda2.disabled = false;
	}

}

document.getElementById("wszytskie-zgody").addEventListener("change", checkingStatus);
