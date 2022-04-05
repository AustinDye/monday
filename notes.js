// NOTE a class is simply a blueprint for what this object should be.
//this is a class definition
class Player {
    //constructors run immediatly when a class is instatiated
    constructor(name, position, team, imgURL){
        this.name = name
        this.positon = position
        this.team = team
        this.imgURL = imgURL
    }
    login(){
        console.log(this.name, 'just logged in!')
    }
}

let player1 = new Player('beezer twelve', 'lineman')

player1.login()