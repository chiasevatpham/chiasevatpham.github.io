const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "31 Dec 2020";

function countdown() {
    document.getElementById('abc').style.visibility = 'hidden';
    document.getElementById('abc1').style.visibility = 'hidden';
    document.getElementById('abc2').style.visibility = 'hidden';
    document.getElementById('abc3').style.visibility = 'hidden';
    document.getElementById('abc4').style.visibility = 'hidden';
    const newYearsDate = new Date(2021, 9, 5, 14, 0, 0, 0);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    if (mins == 0 && seconds == 0 || hours > 12) {
        daysEl.innerHTML = 0;
        hoursEl.innerHTML = 0;
        minsEl.innerHTML = 0;
        secondsEl.innerHTML = 0;
        document.getElementById('abc').style.visibility = 'visible';
        document.getElementById('abc1').style.visibility = 'visible';
        document.getElementById('abc2').style.visibility = 'visible';
        document.getElementById('abc3').style.visibility = 'visible';
        document.getElementById('abc4').style.visibility = 'visible';
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
