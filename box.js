class Box {
    constructor(x, y, width, height){ //properties
        var options = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill(255);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}

/*
rotate() - angle
translate() - about an axis (position of the object)
push() - capture the new setting
pop() - revert back to the old setting
*/