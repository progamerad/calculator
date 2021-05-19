var add,sub,multi,divi
var num1,num2,result
var a1,a2


function setup() {
  
  createCanvas(400, 400);
  
  add = createButton("+")
  add.position(170,200)
  add.size(25)

  sub =createButton("-")
  sub.position(107,200)
  sub.size(25)

  multi = createButton("×")
  multi.position(233,200)
  multi.size(25)

  divi = createButton("÷")
  divi.position(170,250)
  divi.size(25)

  num1 = createInput()
  num1.position(40,50)
  num1.size(50)

  num2 = createInput()
  num2.position(280,50)
  num2.size(50)

  result=0


  add.mousePressed(addition)

  sub.mousePressed(subtract)

  multi.mousePressed(mu)

  divi.mousePressed(di)
}

function draw() {
  background(200,10,200)

text("num1",52,45)
text("num2",291,45)
text("Result= "+result,148,148)
text("Result= "+result,148,148)
text("Result= "+result,148,148)

}

function addition(){
  a1=parseInt(num1.value())
a2=parseInt(num2.value())
result = a1+a2

}

function subtract(){
  a1=parseInt(num1.value())
  a2=parseInt(num2.value())
  result = a1-a2
}

function mu(){ 
  a1=parseInt(num1.value())
  a2=parseInt(num2.value())
  result = a1*a2
}

function di(){
  a1=parseInt(num1.value())
  a2=parseInt(num2.value())
  result = a1%a2 
}
