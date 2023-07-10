"use strict";
$(() => {

//     function changeBackgroundColor(e) {
//         $(e.target).css('background-color', 'blue');
//         $('p').css('font-size', '18px');
//     }
//
//     $('h1')
//         .on('click', changeBackgroundColor)
// // arrow version as above walkthrough
    $('h1').on('click', (e) => {
        $(e.target).css('background', 'blue');
    });


    // double click event makes font-size bigger
    $('p').on('dblclick'), () => {
        $('p').css('font-size', '18px');


        // hover event makes 'li' change
        $('li').on('mouseenter', (e) => {
            $(e.target).css('color', 'red');
        });

        $('li').on('mouseleave', (e) => {
            $(e.target).css('color', 'red');
        });
    }
});