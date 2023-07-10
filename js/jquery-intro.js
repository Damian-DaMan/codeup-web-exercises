"use strict";
$(() => {

    function changeBackgroundColor(e) {
        $(e.target).css('background-color', 'blue');
        $('p').css('font-size', '18px');
    }

    $('h2')
        .on('click', changeBackgroundColor)


});