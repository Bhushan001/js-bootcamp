const durationInput = document.querySelector('#duration');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const circle = document.querySelector('circle');

let duration;
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let currentOffset = 0;
const timer = new Timer(durationInput, start, pause, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
    },
    onComplete() {
        console.log('timer completed');
    }
});