// Your web app's Firebase configuration



var firebaseConfig = {
	apiKey: "AIzaSyDD1q97j8JhhhOl_JIXx0axOh8_8mh9Kmc",
	authDomain: "skicka-mail.firebaseapp.com",
	projectId: "skicka-mail",
	storageBucket: "skicka-mail.appspot.com",
	messagingSenderId: "964214054238",
	appId: "1:964214054238:web:5c57564c2fb3b6198103cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("infos");
const success = true;
//const x = document.querySelector(".contact-section");
//x.addEventListener("submit", submitForm);
//document.querySelector(".contact-section").addEventListener("submit", submitForm);

function submitForm() {
	//e.preventDefault();
	


	let namn = document.getElementById('namn').value;
	let email = document.getElementById('email').value;
	let ämne = document.getElementById('ämne').value;
	let meddelande = document.getElementById('meddelande').value;

	var laddare = document.getElementById('laddare').style.display = 'block';

	sendEmail(namn, email, ämne, meddelande);

	//document.querySelector(".contact-form-text").reset();

	saveContactInfo(namn, email, ämne, meddelande);
}

function saveContactInfo(namn, email, ämne, meddelande) {
	let newContactInfo = contactInfo.push();

	newContactInfo.set({
		Namn: namn,
		Email: email,
		Ämne: ämne,
		Meddelande: meddelande,
	}).then(
		turnOffLoader()

	);

	
}



//function sendEmail(namn, email, ämne, meddelande) {
//	Email.send({
//		Host: "smtp.gmail.com",
//		Username: "rydqvistemail@gmail.com",
//		Password: "vinden12345",
//		To: "rydqvist92@gmail.com",
//		From: "rydqvistemail@gmail.com",
//		Subject: `${ämne}`,
//		Body: `Namn: ${namn} <br/> Email: ${email} <br/> Ämne: ${ämne} <br/> Meddelande: ${meddelande}`,
//	}).then(
//		document.getElementById('laddare').style.display = 'none')
	
//		.then(message => alert("Ditt meddelande har skickats")

//	);
//}


function sendEmail(namn, email, ämne, meddelande) {
	Email.send({
		Host: "smtp.gmail.com",
		Username: "rydqvistemail@gmail.com",
		Password: "vinden12345",
		To: "rydqvist92@gmail.com",
		From: "rydqvistemail@gmail.com",
		Subject: `${ämne}`,
		Body: `Namn: ${namn} <br/> Email: ${email} <br/> Ämne: ${ämne} <br/> Meddelande: ${meddelande}`,
	})
}


function turnOffLoader(){

	document.getElementById('laddare').style.display = 'none';
	alert("Ditt meddelande har skickats");
} 
