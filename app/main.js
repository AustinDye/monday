import { Racer } from "./models/racer.js";


class App {
    speed = new Racer('speed')
}

window['app'] = new App()