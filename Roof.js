class Roof{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        push();
        fill("brown");
        translate(this.body.position.x, this.body.position.y);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        rectMode(CENTER);
        rect(0,0,this.width,this,height);
        pop();
      }
}