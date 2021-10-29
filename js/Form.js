class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Enter Your Name")
    this.playButton = createButton("PLAY")
    this.titleImage = createImg("./assets/title.png","Game Title")
    this.greeting = createElement("h2")
  }

  setElementsPosition(){
    this.input.position(width/2-110,height/-80)
    this.playButton.position(width/2-90,height/2-90)
    this.titleImage.position(120,100)
    this.greeting.position(width/2-300,height/2-100)
  }

 hide(){
   this.greeting.hide()
   this.input.hide()
   this.playButton.hide()
   
 }

 handleMousePressed(){
 this.playButton.mousePressed(()=>{
   this.input.hide()
   this.playButton.hide()
   var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);

 })

 }

  display(){
    this.setElementsPosition()
    this.handleMousePressed()

  }
  
}
