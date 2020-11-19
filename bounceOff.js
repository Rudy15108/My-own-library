
var fixedRect,movingRect;
function setup() {
createCanvas(1200,800);
fixedRect=createSprite(200, 200, 50, 80);
movingRect=createSprite(400,200,80,30);
 fixedRect.shapeColor="green"; 
movingRect.shapeColor="green"; 
movingRect.velocityX=-5
fixedRect.velocityX=+5 }

function draw() {
background(0,0,0);
bounceOff(fixedRect,movingRect);
console.log(movingRect.x-fixedRect.x);
drawSprites(); }

function bounceOff(object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2&&
        object2.x-object1.x<object2.width/2+object1.width/2){
            object1.x=object1.x*(-1);
            object2.x=object2.x*(-1)
        }
      
       if( object1.y-object2.y<object2.height/2+object1.height/2&&
        object2.y-object1.y<object2.height/2+object1.height/2){
            object1.y=object1.y*(-1)
            object2.y=object2.y*(-1)}
}

