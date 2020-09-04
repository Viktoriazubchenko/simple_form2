window.addEventListener('DOMContentLoaded', function(){
    let btnGet = document.querySelector('.button');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.close');
    

    btnGet.addEventListener('click', function(){
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    });

    let message = {
        loading: 'Loading...',
        success: 'Thank You! We will contact You in a minute.',
        failure: 'Error occured. Please try again.'
    };

    let form = document.querySelector('#form');
    let input = form.getElementsByTagName('input');
    let statusMessage = document.querySelector('.status');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});