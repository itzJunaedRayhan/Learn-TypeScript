export class Player {                  //  private, public, readonly are called access modifier
    private name : string;      //  private property cann't accessable and changeable from outside of class
    public age  : number;       //  public property can accessable and changeable from outside of class
    readonly country : string;  //  readonly property can accessable but cann't changeable from outside of class

    constructor (n: string, a:number, c:string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play () {
        return `${this.name} from ${this.country} is playing!`;
    }
}

