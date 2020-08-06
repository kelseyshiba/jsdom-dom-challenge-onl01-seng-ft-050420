document.addEventListener("DOMContentLoaded", () =>{
    let seconds = parseInt(document.getElementById('counter').innerText);
    let counter = setInterval(function () {
        seconds++;
        document.getElementById('counter').innerText = seconds
        if (seconds >= 1000) clearInterval(counter);
    }, 1000);

    let pause = document.getElementById('pause');
    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');
    let heartButton = document.getElementById('heart');
    let likes = document.getElementsByClassName('likes');
    pause.addEventListener('click', function() {
        if (pause.innerText === 'pause') {
            clearInterval(counter);
            pause.innerText = 'resume';
            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
        } else if (pause.innerText === 'resume') {
            setInterval(function () {
                seconds++;
                document.getElementById('counter').innerText = seconds
                if (seconds >= 1000) clearInterval(counter);
            }, 1000);

            pause.innerText = 'pause';
            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
        };
    });

    plusButton.addEventListener('click', function(){
        document.getElementById('counter').innerText = seconds + 1;
    });

    minusButton.addEventListener('click', function(){
        document.getElementById('counter').innerText = seconds - 1;
    });

    let form = document.querySelector('#comment-form');
    let input = document.querySelector('#comment-input');
    form.addEventListener("submit", function(e) {
        let comments = document.querySelector('div#list');
        let newli = document.createElement('li');
        comments.appendChild(newli);
        newli.innerText = `${input.value}`;
        e.preventDefault();
    });
});