class Timer {
    constructor(duration, start, pause, callbacks) {
        this.duration = duration;
        this.startBtn = start;
        this.pauseBtn = pause;
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.timerId = setInterval(this.tick, 20);
    }

    pause = () => {
        clearInterval(this.timerId);
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.duration.value);
    }

    set timeRemaining(time) {
        this.duration.value = time.toFixed(2);
    }
}