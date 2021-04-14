var cat,catimg1,catimg2,catimg3
var mouse,mouseimg1,mouseimg2,mouseimge3
var back,backimg

function preload() {
    
    catimg1 = loadAnimation("images/cat1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catimg3 = loadAnimation("images/cat4.png")
    mouseimg1 = loadAnimation("images/mouse1.png")  
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg3 = loadAnimation("images/mouse4.png")
    backimg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(800,800);

    back = createSprite(400,400,20,20)
    back.addImage("backimg",backimg)
    back.scale = 2

    cat = createSprite(675,675,20,20)
    cat.addAnimation("catimg1",catimg1)
    cat.scale = 0.2

    mouse = createSprite(125,675,20,20)
    mouse.addAnimation("mouseimg1",mouseimg1)
    mouse.scale = 0.1
}

function draw() {
    background(0);

    if(keyDown(LEFT_ARROW)){
        cat.velocityX = -3
        cat.addAnimation("cat_run",catimg2) 
        cat.changeAnimation("cat_run")
        mouse.addAnimation("mouse_run",mouseimg2)
        mouse.changeAnimation("mouse_run")
    }
    console.log(cat.x-mouse.x)
    console.log(cat.width/2 + mouse.width/2)
    if(cat.x - mouse.x === Math.round(cat.width/2 + mouse.width/2)){
        
        cat.addAnimation("catlastimg",catimg3)
        cat.changeAnimation("catlastimg",catimg3)
        mouse.addAnimation("mouselastimg",mouseimg3)
        mouse.changeAnimation("mouselastimg",mouseimg3)
        cat.velocityX = 0
    }
    drawSprites();
}
