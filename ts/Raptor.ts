class Raptor {

    protected raptorImageMarkup;
    protected raptorAudioMarkup;

    constructor(public image?:string, public sound?:string) {
        if(!this.image) this.image = '/img/raptor.png';
        if(!this.sound) this.sound = '/sounds/raptor-sound.mp3';
        this.buildRaptor();
    }

    public changeVolume(volume:number) {
        this.raptorAudioMarkup.volume = volume;
    }

    public trigger(): void {
        this.raptorImageMarkup.classList.add('active');
        this.raptorImageMarkup.onanimationend = (event) => {
            this.raptorImageMarkup.classList.remove('active');
        };
        this.raptorAudioMarkup.play();
    }

    public buildRaptor(): void {
        this.raptorImageMarkup = document.createElement('img');
        this.raptorImageMarkup.setAttribute("id", "elRaptor");
        this.raptorImageMarkup.setAttribute("src", this.image);

        this.raptorAudioMarkup = document.createElement('audio');
        this.raptorAudioMarkup.setAttribute("id","elRaptorShriek");
        this.raptorAudioMarkup.setAttribute("preload","auto");

        var sourceElement = document.createElement('source');
        sourceElement.setAttribute("src", this.sound)

        this.raptorAudioMarkup.append(sourceElement);

        document.body.append(this.raptorImageMarkup);
        document.body.append(this.raptorAudioMarkup);
    }
}
