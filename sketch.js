//Objetos de la biblioteca matter 
const Engine = Matter.Engine;//Almacena otor físico 
const World= Matter.World;//Crea mundo físico y agrega objetos
const Bodies = Matter.Bodies;//Crea los objetos físicos que habitan el mundo

//Variables para almacenar objetos matter
var engine, world;

//Variables para objetos del juego
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create(); //Creamos motor físico
    world = engine.world;//Nombramos el mundo usando el motor físico
    
    //Asignamos clase (moldes) a cada variable
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,390,300,20)
}

function draw(){
    background(0);
    
    //Actualizamos motor físico 
    Engine.update(engine);
   
    //Mostramos atributos del objeto en consola 
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    //Llamamos función "mostrar" para visualizar los objetos
    box1.display();
    box2.display();
    ground.display();
}