var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var numInput=document.querySelector("input");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore=5;
var winningScoreDisplay=document.querySelector("p span");
var reset=document.querySelector("#reset")

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++
		if (p1Score===winningScore) {
			p1Display.classList.add("winner");
			gameOver=true;
		}
		p1Display.textContent= p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++
		if (p2Score===winningScore) {
			p2Display.classList.add("winner");
			gameOver=true;
		}
		p2Display.textContent= p2Score;
	}
});


reset.addEventListener("click", resetGame);

function resetGame(){
	gameOver=false
	p1Score=0
	p2Score=0
	p1Display.textContent= p1Score;
	p2Display.textContent= p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}	

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent=this.value;
	winningScore=Number(this.value);
	resetGame()
});

$(".attb").click(function(){
	$("html,body").animate({scrollTop:$(".att").offset().top},1000);
});