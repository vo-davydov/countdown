window.addEventListener('DOMContentLoaded', function () {
let deadline = '2020-03-03';
  
function getTimeRemaining(endtime) {
    let betweenDate = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((betweenDate / 1000) % 60),
        minutes = Math.floor((betweenDate / 1000 / 60) % 60),
        hours = Math.floor((betweenDate / (1000 * 60 * 60)));

    return {
        'total': betweenDate,
        'hours': hours,
        'minuts': minutes,
        'seconds': seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let timeRamainig = getTimeRemaining(endtime);

        if (timeRamainig.hours >= 10) {
            hours.textContent = timeRamainig.hours;
        } else {
            hours.textContent = '0' + timeRamainig.hours;
        }

        if (timeRamainig.minutes >= 10) {
            minutes.textContent = timeRamainig.minutes;
        } else {
            minutes.textContent = '0' + timeRamainig.minutes;
        }

        if (timeRamainig.seconds >= 10) {
            seconds.textContent = timeRamainig.seconds;
        } else {
            seconds.textContent = '0' + timeRamainig.seconds;
        }

        if (timeRamainig.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}

setClock('timer', deadline);

});