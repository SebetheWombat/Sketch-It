$(document).ready(function(){
	makeGrid(16);
	changeGrid();
	clear();

	$("#rainbow").click(function(){
		if(rainbow){
			rainbow = false
		}else{
			rainbow = true;
		}
	});
});

var rainbow = false;

function makeGrid(squares){
	$(".container").text("");
	var rows = "";
	var boxWidth = 600/squares;
	for(var i = 0; i < squares; i++){
		for(var j = 0; j < squares; j++){
			$(".container").append("<div class='box'></div>");
		}
	}
	$(".box").width(boxWidth);
	$(".box").height(boxWidth);
	draw();
}

function draw(){
	var red, blue, green;

	$(".box").hover(function(){
		if(rainbow){
		red = Math.floor(Math.random(10) * 255);
		blue = Math.floor(Math.random(10) * 255);
		green = Math.floor(Math.random(10) * 255);
		console.log(red);
		}else{
			red = "50";
			blue = "33";
			green = "33";
		}
		var color = "rgb(" + red +"," + green +"," + blue +")";
		$(this).css("background-color", color);
	});
}

function clear(){
	$("#clear").click(function(){
		$(".box").css("background-color", "#fff");
	});
}

function changeGrid(){
	$("#change").click(function(){
		var size = 0
		while(size <= 0 || size > 150){
			size = prompt("Please enter grid size (between 1 and 150)");
		}
		rainbow = false;
		makeGrid(size);
	});
}


	
