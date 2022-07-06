export class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        return `${this.name} from ${this.country} is playing!`;
    }
}
