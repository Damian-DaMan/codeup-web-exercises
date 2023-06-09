"use strict";

$(() => {
    $(document).keyup(function(event){
        console.log(event.keyCode);
    });

// Konami Code
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiCodeIndex = 0;

    function konamiCodeHandler(event) {
        const key = event.key;

        if (key === konamiCode[konamiCodeIndex]) {
            konamiCodeIndex++;

            if (konamiCodeIndex === konamiCode.length) {
                // Konami code entered successfully, perform desired action here
                alertSound.play();
                alert('You have added 30 lives!');
                document.body.style.backgroundColor = 'purple';
            }
        } else {
            konamiCodeIndex = 0;
        }
    }


let alertSound = new Audio('../alert.mp3');
    document.addEventListener('keydown', konamiCodeHandler);

































});