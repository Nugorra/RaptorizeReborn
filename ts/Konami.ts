class Konami {

    protected sequenz:Array<number> = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    protected current:Array<number> = [];
    protected testMode: boolean = false;
    protected timeStamp: number;

    constructor(protected action: Function, protected timed?: boolean) {
        if (timed == undefined) {
            this.timed = true;
        }
        document.addEventListener('keydown',(evt) => this.checkSequenz(evt));

    }

    protected checkSequenz: EventListener = (event: KeyboardEvent) => {
        if(this.testMode) console.log('Code: ' + event.keyCode);
        if(this.timed) {
            if(!this.current.length) this.timeStamp = event.timeStamp;
            if((event.timeStamp - this.timeStamp) > 1000) this.sequenzReset();
            this.timeStamp = event.timeStamp;
        }

        if (event.keyCode == this.sequenz[this.current.length]) {
            this.current.push(event.keyCode);
        } else {
            this.sequenzReset();
        }

        if (this.current.length == this.sequenz.length) {
            this.action();
            this.sequenzReset();
        }
    }

    protected sequenzReset(): void {
        this.current = [];
    }

    public sequenzAlter(sequenz: Array<number>): void {
        this.sequenz = sequenz;
    }

    public sequenzTest(): void {
        // Wanna alter the sequenz? Got yah back, so you don't have to lookup keyCode!
        this.testMode = true;
    }
}