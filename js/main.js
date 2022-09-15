
var btn = document.getElementById("btn");

 function func (){

var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var phone = document.getElementById("phone").value;
var mail = document.getElementById("mail").value;
var error = "";
var save =[];
	
	if (name.length == "" || surname.length == "" || phone.length == "" || mail.length == "" ) {
		error = "Заполните все поля";
	}
	else if (name.length <= 2 || name.length >= 10 ) {
		error = "Поле имя, не верно";
	}
	else if (surname.length <= 2 || surname.length >= 20 ) {
		error = "Поле фамилия, не верно";
	}
	else if (phone.length <= 9 || phone.length >= 15 ) {
		error = "Поле телефон, не верно";
	}
	else if (mail.length <= 7 || mail.length >= 40) {
		error = "Поле емаил, не верно";
	}
	else if (mail.indexOf("@") < 1 || mail.indexOf(".") < 1) {
		error = "Поле емаил, не верно";
	}
	if (error != "") {

		document.getElementById("text").innerHTML = error;

		return false;

	}

	else{
			save.push(name,surname,phone,mail);

			var menu = document.querySelector(".menu");
			var menu1 = document.querySelector(".menu1");
			var menu2 = document.querySelector(".menu2");
			var menu3 = document.querySelector(".menu3");
			var li = document.createElement("li");
			li.innerHTML = save[0];
			menu.appendChild(li);

			var li1 = document.createElement("li");
			li1.innerHTML = save[1];
			menu1.appendChild(li1);

			var li2 = document.createElement("li");
			li2.innerHTML = save[2];
			menu2.appendChild(li2);

			var li3 = document.createElement("li");
			li3.innerHTML = save[3];
			menu3.appendChild(li3);

		
		console.log(save);

		
		return false;	

		
		

	}


}