//Rectangle constructor 
class Rectangle {
  constructor(x, y, width, height, a_hex, b_hex, c_hex) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.a_hex = a_hex;
    this.b_hex = b_hex;
    this.c_hex = c_hex;

  }

  display(){
    let c = color(this.a_hex, this.b_hex, this.c_hex);
    fill(c);
    this.b = rect(this.x, this.y, this.width, this.height);
  }
}

class Arrow{
    constructor(x1, x2, y1, y2, z1, z2){
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.z1 = z1;
        this.z2 = z2;
    }

    display(){
        let c = color(0);
        fill(c);
        triangle(this.x1, this.x2, this.y1, this.y2, this.z1, this.z2);
    }
}

//Global variables
var rectangles = [];
var rectangles_length;
var current_position = 0;
var next_position = 1;
var tri;
var tri1x;
var tri1y;


function setup() {
	createCanvas(1440, 789);
    background(153);
    textSize(32);
    text("Bubble Sort Visualizer", 30, 750);
	createRectangles();
}

//When mouse is clicked, certain actions occur
function mouseClicked(){
    if (rectangles_length == 0){
        return;
    }

    if (current_position == rectangles_length-1){
        current_position = 0;
        next_position = 1;
        tri1 = rectangles[current_position].x + rectangles[current_position].width/2;
        tri2 = rectangles[current_position].y + rectangles[current_position].height + 40;
        tri.x1 = tri1;
        tri.x2 = tri2;
        tri.y1 = tri1 - 30;
        tri.y2 = tri2 + 50;
        tri.z1 = tri1 + 30;
        tri.z2 = tri2 + 50;
        updateBackground();
        updateRectangles();
        rectangles_length = rectangles_length - 1; 
        return;
        //console.log("END");
    }
    //console.log("Current element " + rectangles[current_position].height);
    //console.log("Next element " + rectangles[next_position].height);
    if (rectangles[current_position].height > rectangles[next_position].height){ 
        //console.log("SWAPPED");
        rectangles[current_position].x = rectangles[current_position].x + 100;
        rectangles[next_position].x = rectangles[next_position].x - 100;
        let holder = rectangles[current_position];
        rectangles[current_position] = rectangles[next_position];
        rectangles[next_position] = holder;      
    }
    //console.log(tri.x1);
    current_position += 1;
    next_position += 1;
    //tri.x1 = tri.x1 + 100;
    tri1 = rectangles[current_position].x + rectangles[current_position].width/2;
    tri2 = rectangles[current_position].y + rectangles[current_position].height + 40;
    tri.x1 = tri1;
    tri.x2 = tri2;
    tri.y1 = tri1 - 30;
    tri.y2 = tri2 + 50;
    tri.z1 = tri1 + 30;
    tri.z2 = tri2 + 50;
    updateBackground();
    updateRectangles(); 
    //console.log("Current element " + rectangles[current_position].height);
}

//Initializes creation of rectangles 
function createRectangles(){
	let x_start = 115;
	let y_start = 0;
    let x_width = 100; 
    for (let i = 0; i < 12; i++){
        let a_hex = random(0, 255);
        let b_hex = random(0, 255);
        let c_hex = random(0, 255);
        let y_width = random(100, 600);
    	let a = new Rectangle(x_start,y_start, x_width, y_width, a_hex, b_hex, c_hex);
        a.display();
    	x_start = x_start + x_width;
    	append(rectangles, a);
	}
    tri1 = rectangles[0].x + rectangles[0].width/2;
    tri2 = rectangles[0].y + rectangles[0].height + 40;
    tri = new Arrow(tri1, tri2, tri1 - 30, tri2 + 50, tri1 + 30, tri2 + 50);
    tri.display();
    rectangles_length = rectangles.length; 
}

//Redraws background when called
function updateBackground(){
    clear();
    background(153);
    fill(0);
    text("Bubble Sort Visualizer", 30, 750);
}

//Updates rectangles depending on information in rectangle array
function updateRectangles(){
    for (let i = 0; i < 12; i++){
        let c = color(rectangles[i].a_hex, rectangles[i].b_hex, rectangles[i].c_hex);
        fill(c);
        rect(rectangles[i].x, rectangles[i].y, rectangles[i].width, rectangles[i].height);
    }
    tri.display();
}

























