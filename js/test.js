function ready(fn) { 
	if (document.readyState != 'loading') { 
		fn(); 
	} else { 
		document.addEventListener('DOMContentLoaded', fn); 
	} 
} 

ready(select);
let backgr=[ 
'linear-gradient(to bottom, #00cc66 -2%, #000000 100%)'
]; 
let checking = 
[ 
{question: 'На какой факультет попал Гарри?', select: ["Грифиндор", "Когтевран", "Пуфендуй", "Слизерин"], correct: 0,image:'img/test11.jpg'}, 
{question: 'Какого цвета волосы у Рона?', select: ['Блонд', 'Русые', 'Рыжие', 'Брюнет'], correct: 2,image:'img/test2.jpg'}, 
{question: 'Как звали директора школы волшебства?', select: ['Дублидор', 'Даблдор', 'Дамблдор', 'Поттер'], correct: 2,image:'img/Дамблдор.jpg'}, 
{question: 'Первое существо, которое встретил Гарри Поттер?', select: ['Василиск', 'Трехголовый пес', 'Хагрид', 'Гиппогриф'], correct: 1,image:'img/test4.jpg'}, 
{question: 'Где жил Гарри у Дурслей?', select: ['Во дворце', 'В туалете','В чулане', 'На улице'], correct: 2,image:'img/test5.jpg'}, 
{question: 'Домашнее животное у Гарри?', select: ['Собака', 'Хагрид', 'Эльф', 'Сова'], correct: 3,image:'img/test6.jpg'},
{question: 'Как звали мальчика со шрамом?', select: ['Рон Уизли', 'Гарри Поттер', 'Хагрид', 'Гермиона Грейнджер'], correct: 1,image:'img/test7.jpg'},
{question: 'Сколько факультетов в Хогвартс?', select: ['4', '3', '5', '2'], correct: 0,image:'img/test8.jpg'},
{question: 'Где была подсказка к следующему заданию в части Кубок огня?', select: ['В коробке', 'У Хагрида', 'В чулане', 'В яйце'], correct: 3,image:'img/test9.jpg'},
{question: 'Настоящее имя Волан Де Морта?', select: ['Том Харди', 'Том Круз', 'Том Холланд', 'Том Реддл'], correct: 3,image:'img/test10.jpg'}
]; 
let num = 0; 
let a = 1; 
let score = 0; 
function ColorButton(){

	if(checking[num]['correct']==0){ 
		document.getElementById("button1").style.backgroundColor = "green"; 
		document.getElementById("button2").style.backgroundColor = "red"; 
		document.getElementById("button3").style.backgroundColor = "red"; 
		document.getElementById("button4").style.backgroundColor = "red"; 
	} 
	if(checking[num]['correct']==1){ 
		document.getElementById("button1").style.backgroundColor = "red"; 
		document.getElementById("button2").style.backgroundColor = "green"; 
		document.getElementById("button3").style.backgroundColor = "red"; 
		document.getElementById("button4").style.backgroundColor = "red"; 
	} 
	if(checking[num]['correct']==2){ 
		document.getElementById("button1").style.backgroundColor = "red"; 
		document.getElementById("button2").style.backgroundColor = "red"; 
		document.getElementById("button3").style.backgroundColor = "green"; 
		document.getElementById("button4").style.backgroundColor = "red"; 
	} 
	if(checking[num]['correct']==3){ 
		document.getElementById("button1").style.backgroundColor = "red"; 
		document.getElementById("button2").style.backgroundColor = "red"; 
		document.getElementById("button3").style.backgroundColor = "red"; 
		document.getElementById("button4").style.backgroundColor = "green"; 
	} 
	document.getElementById("next").style.backgroundColor="#4CAF50"; 
	document.getElementById("next").disabled = false;
}
function Answer(x, y) {
	let btnColor = document.getElementById(x).style.backgroundColor;
	if(checking[num]['correct']==y && btnColor == "white"){ 
	score++; 
	} 
	ColorButton();
}

function select() { 
	if (checking[num] === undefined) { 
		document.getElementById("button1").style.display = "none"; 
		document.getElementById("button2").style.display = "none";  
		document.getElementById("button3").style.display = "none";  
		document.getElementById("button4").style.display = "none";  
		document.getElementById("next").style.display = "none";  
		document.querySelector(".question").style.display = "none";  
		document.querySelector(".questionNumber").textContent = "Ваш результат"; 
		document.querySelector("#test").style.top="10%;" 
		document.querySelector("#test").style.height="auto";
		  
		document.querySelector("#test").style.backgroundImage="linear-gradient(rgba(207, 0, 15, 1),rgba(0,0,0,0.5))"; 

		if(score >= 8){ 
			document.getElementById("imgQ").src= "img/victory1.jpg";
			document.querySelector('.score').textContent ='А ты хорош! У тебя ' + score + ' из 10'; 
		} 
		if (score < 8 && score >= 5){
			document.getElementById("imgQ").src= "img/victory2.gif";
			document.querySelector('.score').textContent = 'Тебе есть куда расти! У тебя ' + score + ' из 10'; 
		}
		if (score < 5 && score >= 2){
			document.getElementById("imgQ").src= "img/victory3.gif";
			document.querySelector('.score').textContent = 'Не выспался чтоль? У тебя ' + score + ' из 10'; 
		} 
		if (score < 2){ 
			document.getElementById("imgQ").src= "img/victory4.gif";
			document.querySelector('.score').textContent = 'Иди посмотри фильмы! Классику нужно знать! У тебя ' + score; 
		} 

	} else { 
		let questionNumber = document.querySelector('.questionNumber'); 
		questionNumber.textContent = 'Вопрос ' + a; 

		let question = document.querySelector('.question'); 
		question.textContent = checking[num]['question']; 
		document.querySelector("#test").style.backgroundImage=backgr[num]; 
		document.getElementById("imgQ").src= checking[num]['image']; 
		for(let i=1;i<=4;++i) document.getElementById("button"+i).style.backgroundColor = "white"; 
		document.getElementById("next").style.backgroundColor="red"; 
		document.getElementById("next").disabled = true; 
		for(i=1;i<=4;++i) document.getElementById("button"+i).innerText=checking[num]['select'][i-1]; 
	} 
}
function next() { 
	let inputs = document.querySelectorAll('input'); 
	num++; 
	a++; 
	select(); 
}