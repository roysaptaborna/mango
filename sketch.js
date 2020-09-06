const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;

var bg;

var ground;

var tree;

var stone;

var mango1,
	mango2,
	mango3,
	mango4,
	mango5,
	mango6,
	mango7,
	mango8,
	mango9,
	mango10;

var elastic;

function preload() {
	boy = loadImage("assets/boy.png");
	bg = loadImage("assets/background.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();

	world = engine.world;

	ground = new Ground(600, 585, 1200, 30);

	tree = new Tree(925, 335, 450, 550);

	stone = new Stone(200, 250, 20, 20);

	mango1 = new Mango(775, 250, 30, 30);
	mango2 = new Mango(850, 175, 30, 30);
	mango3 = new Mango(925, 125, 30, 30);
	mango4 = new Mango(975, 175, 30, 30);
	mango5 = new Mango(1025, 250, 30, 30);
	mango6 = new Mango(1100, 275, 30, 30);
	mango7 = new Mango(830, 275, 30, 30);
	mango8 = new Mango(1065, 175, 30, 30);
	mango9 = new Mango(900, 225, 30, 30);
	mango10 = new Mango(900, 300, 30, 30);

	elastic = new Elastic(boy, stone.body, 50, 50);

	Engine.run(engine);
}

function draw() {
	background(bg);

	ground.display();

	tree.display();

	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	elastic.display();

	imageMode(CENTER);
	image(boy, 175, 400, 300, 400);

	text("x:" + mouseX + "y:" + mouseY, mouseX, mouseY);
}
