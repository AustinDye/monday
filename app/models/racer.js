export class Racer {
    constructor(name, picture, number, distance = 0){
        this.name = name
        this.picture = picture
        this.number = number
        this.distance = distance 
    }
    go(distance){
       if (distance <= 95){
           distance += Math.random() * 100
       }
    }
}