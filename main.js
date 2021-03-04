canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_images_array = ["Image Of Car 1.jpg", "Image Of Car 2.jpg", "Image Of Car 3.jpg", "Image Of Car 4.jpg"];
random_no = Math.floor(Math.random() * 4);
console.log(random_no);

background_image = car_images_array[random_no];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

rover_width = 100;
rover_height = 90;

car_image = "Car.png";

car_x = 10;
car_y = 150;

car_width = 150;
car_height = 90;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image

	car_imgTag = new Image(); //defining a variable with a new image
	car_imgTag.onload = uploadcar; // setting a function, onloading this variable
	car_imgTag.src = car_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadcar() {
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			uprover();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			downrover();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			leftrover();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			rightrover();
			console.log("right");
		}
// From Here it starts for The Car
		if(keyPressed == '87')
		{
			upcar();
			console.log("up");
		}
		if(keyPressed == '83')
		{
			downcar();
			console.log("down");
		}
		if(keyPressed == '65')
		{
			leftcar();
			console.log("left");
		}
		if(keyPressed == '68')
		{
			rightcar();
			console.log("right");
		}
}

function uprover() {
    if (rover_y >= 10) {
        rover_y -= 10;
        console.log("When Up arrow was pressed, X was " + rover_x + " and Y was " + rover_y);
        uploadBackground();
        uploadrover();
		uploadcar();
		who_won();
    }
}

function downrover() {
    if (rover_y <= 500) {
        rover_y += 10;
        console.log("When Down arrow was pressed, X was " + rover_x + " and Y was " + rover_y);
        uploadBackground();
        uploadrover();
		uploadcar();
		who_won();
    }
}

function rightrover() {
    if (rover_x <= 710) {
        rover_x += 10;
        console.log("When Right arrow was pressed, X was " + rover_x + " and Y was " + rover_y);
        uploadBackground();
        uploadrover();
		uploadcar();
		who_won();
    }
}

function leftrover() {
    if (rover_x >= 0) {
        rover_x -= 10;
        console.log("When Left arrow was pressed, X was " + rover_x + " and Y was " + rover_y);
        uploadBackground();
        uploadrover();
		uploadcar();
		who_won();
    }
}

// Car starts from here

function upcar() {
    if (car_y >= 10) {
        car_y -= 10;
        console.log("When W was pressed, X was " + car_x + " and Y was " + car_y);
        uploadBackground();
        uploadrover();
		uploadcar();
		who_won();
    }
}

function downcar() {
    if (car_y <= 500) {
        car_y += 10;
        console.log("When S was pressed, X was " + car_x + " and Y was " + car_y);
        uploadBackground();
        uploadrover();
		uploadcar();
		who_won();
    }
}

function rightcar() {
    if (car_x <= 710) {
        car_x += 10;
        console.log("When D was pressed, X was " + car_x + " and Y was " + car_y);
        uploadBackground();
        uploadrover();
		uploadcar();
		who_won();
    }
}

function leftcar() {
    if (car_x >= 0) {
        car_x -= 10;
        console.log("When A was pressed, X was " + car_x + " and Y was " + car_y);
        uploadBackground();
        uploadrover();
		uploadcar();
		who_won();
    }
}

function who_won() {
	if (rover_x == 700) {
		console.log("The Rover Won!");
		document.getElementById("status").innerHTML = "The Rover Won!";
	}

	if (car_x == 700) {
		console.log("The Car Won!");
		document.getElementById("status").innerHTML = "The Car Won!";
	}
}