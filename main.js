canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

CAR_width = 100;
CAR_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

CAR_x = 100;
CAR_y = 100;

function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = parkingLot.jpg;

 car_imgTag = new Image();
 car_imgTag.onload = uploadgreencar;
 car_imgTag.src = car2;
}

function uploadBackground() {
  ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
  ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
  if(CAR_y >= 0){
    CAR_y = CAR_y-10
    uploadBackground();
    uploadgreencar();
  }
}

function down()
{
	if(CAR_y <= 500){
    CAR_y = CAR_y+10
    uploadBackground();
		uploadgreencar();
  }
}

function left()
{
	if(CAR_x >= 0){
    CAR_x = CAR_x-10
    uploadBackground();
    uploadgreencar();
  }
}

function right()
{
	if(CAR_x <= 700){
    CAR_x = CAR_x+10
    uploadBackground();
    uploadgreencar();
  }
}
