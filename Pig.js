class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //how much your object should display
    this.Visiblity=255;
  }

display()
{

console.log(this.body.speed);

if(this.body.speed<3)
{
  super.display();
}

else{
World.remove(world,this.body);
push();
//all objects are vanishing so we will reduce the Visiblity
this.Visiblity=this.Visiblity -5;
tint(255,this.Visiblity);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
}

}



}