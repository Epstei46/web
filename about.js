console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Thank you for your feedback!");
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);


let handleImageMouseover = (event) =>{
	event.preventDefault();
	alert("Stay PAWsitive ya paw-some hu-man")
}

let image = document.querySelector('img');
image.addEventListener('mouseover', handleImageMouseover)