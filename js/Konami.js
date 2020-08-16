var Konami = /** @class */ (function () {
    function Konami(action, timed) {
        var _this = this;
        this.action = action;
        this.timed = timed;
        this.sequenz = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        this.current = [];
        this.testMode = false;
        this.checkSequenz = function (event) {
            if (_this.testMode)
                console.log('Code: ' + event.keyCode);
            if (_this.timed) {
                if (!_this.current.length)
                    _this.timeStamp = event.timeStamp;
                if ((event.timeStamp - _this.timeStamp) > 1000)
                    _this.sequenzReset();
                _this.timeStamp = event.timeStamp;
            }
            if (event.keyCode == _this.sequenz[_this.current.length]) {
                _this.current.push(event.keyCode);
            }
            else {
                _this.sequenzReset();
            }
            if (_this.current.length == _this.sequenz.length) {
                _this.action();
                _this.sequenzReset();
            }
        };
        if (timed == undefined) {
            this.timed = true;
        }
        document.addEventListener('keydown', function (evt) { return _this.checkSequenz(evt); });
    }
    Konami.prototype.sequenzReset = function () {
        this.current = [];
    };
    Konami.prototype.sequenzAlter = function (sequenz) {
        this.sequenz = sequenz;
    };
    Konami.prototype.sequenzTest = function () {
        // Wanna alter the sequenz? Got yah back, so you don't have to lookup keyCode!
        this.testMode = true;
    };
    return Konami;
}());
