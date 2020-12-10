function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function random_fak(){
	let hat = ["img/Gryffindor.png", "img/Hufflepuff.png", "img/Ravenclaw1.png", "img/Slytherin_.png"];
	document.getElementById("fak").src=hat[getRandomInt(4)];
	document.getElementById("but").style.visibility="hidden";
}