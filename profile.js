let color = document.querySelector('#color')
color.addEventListener('click', () => alert('My favorite color is BLUE!'))

document.querySelector('button#place').addEventListener('click', function(){alert('My favorite place is just being at HOME.')})

let ritual = document.querySelector('#ritual')
let myFavRitual = () => alert("My favorite ritual is FAMILY DINNERS.")
ritual.addEventListener('click', myFavRitual)