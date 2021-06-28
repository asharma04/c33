class Snow{
    constructor(){
        var options = {
            density : 0.5,
            friction : 1

        }
        this.body = Bodies.rectangle(100,100,20,20,options)
        this.image = loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display(){
        image(this.image,100,100,20,20)
    }
}