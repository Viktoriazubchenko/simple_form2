//1. Set the final time
let deadline = '2021-08-05';
//2. Counting d, h, m, s, remaining time
function getTimeRemaining(endtime) {
    let timeRemaining = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((timeRemaining / 1000) % 60);
    let minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    let hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
    let days = Math.floor((timeRemaining / 1000/ 60 / 60/ 24));
//3. Creating the Object with all data, that will be returned by this function
    return {
        'total': timeRemaining,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}
//4. Taking all stuff from HTML and setting interval
function setTimer(id, endtime) {
    let timer = document.getElementById(id);
    let days = timer.querySelector('.days');
    let hours = timer.querySelector('.hours');
    let minutes = timer.querySelector('.minutes');
    let seconds = timer.querySelector('.seconds');
    let timeInterval = setInterval(updateTimer, 1000);

   
    //5. Addind new data to HTML by changing text content
    function updateTimer(){
        //5.1 Calling function getTimeRemaining to get an Object with all our data
        let timeRemaining = getTimeRemaining(endtime);
        //6. Fixing ZERO problem
        function addZero(num){
            if (num <= 9 ){
                return '0' + num;
            } else {
                return num;
            }
        }

        days.textContent = addZero(timeRemaining.days);
        hours.textContent = addZero(timeRemaining.hours);
        minutes.textContent = addZero(timeRemaining.minutes);
        seconds.textContent = addZero(timeRemaining.seconds);
        //7. Unsetting timer, when final time comes
        if (timeRemaining.total <= 0 ){
            clearInterval(timeInterval);
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }

    }
}
//8. Calling the function
setTimer('timer', deadline);



