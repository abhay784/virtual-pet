//Create variables here
var dog,happyDog
var datatbase
var foodS,foodStock

function preload()
{
  dog_image = loadImage("images/dogImg.png");
  happyDog_image = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dog_image);
  dog.scale = 0.15;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog_image);
}
  drawSprites();
  stroke("black")
  text("food:"+foodS,200,150);
  textSize(13);
  text("press up arrow to feed doggo",150,100);
  
  //add styles here
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

