var Raptor = /** @class */ (function () {
    function Raptor(image, sound) {
        this.image = image;
        this.sound = sound;
        if (!this.image)
            this.image = '/img/raptor.png';
        if (!this.sound)
            this.sound = '/sounds/raptor-sound.mp3';
        this.buildRaptor();
    }
    Raptor.prototype.changeVolume = function (volume) {
        this.raptorAudioMarkup.volume = volume;
    };
    Raptor.prototype.trigger = function () {
        var _this = this;
        this.raptorImageMarkup.classList.add('active');
        this.raptorImageMarkup.onanimationend = function (event) {
            _this.raptorImageMarkup.classList.remove('active');
        };
        this.raptorAudioMarkup.play();
    };
    Raptor.prototype.buildRaptor = function () {
        this.raptorImageMarkup = document.createElement('img');
        this.raptorImageMarkup.setAttribute("id", "elRaptor");
        this.raptorImageMarkup.setAttribute("src", this.image);
        this.raptorAudioMarkup = document.createElement('audio');
        this.raptorAudioMarkup.setAttribute("id", "elRaptorShriek");
        this.raptorAudioMarkup.setAttribute("preload", "auto");
        var sourceElement = document.createElement('source');
        sourceElement.setAttribute("src", this.sound);
        this.raptorAudioMarkup.append(sourceElement);
        document.body.append(this.raptorImageMarkup);
        document.body.append(this.raptorAudioMarkup);
    };
    return Raptor;
}());
