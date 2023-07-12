$(() => {

    $("dd").addClass("invisible");


    // $(document).ready(function() {
    //     // Hide the target content initially
    //     $('#target-content').hide();
    //
    //     // When the toggle link is clicked
    //     $('#toggle-link').click(function(e) {
    //         e.preventDefault();
    //
    //         // Toggle the visibility of the target content
    //         $('#target-content').toggle();
    //     });

// walk through using jQuery================
    //add a button
//     $('body').append(`
//         <a href="#">Toggle Answers</a>
//     `);
//
//
//     $('a').on('click', () => {
//         $('dd').toggleClass('invisible');
//     })
//
//     //bonus
//     $('dt').on('click, function() {
//     $(this).toggleClass('highlighted')
// });
//


    // JS VERSION OF DOING THE SAME THING
    const togglevisibilityLink = document.createElement('a');
    togglevisibilityLink.innerText = 'Toggle Answers';

    const bodyElement = document.querySelector('body');
    bodyElement.appendChild(togglevisibilityLink);

    const ddElements = document.querySelectorAll('dd');
    togglevisibilityLink.addEventListener('click', () => {
        ddElements.forEach(ddElement) => {
            ddElement.classList.toggle('invisible');
        });
    });




    const dtElements = document.querySelectorAll('dt');
    dtElements.forEach(dtElement) => {
        dtElement.addEventListener('click', () => {
            dtElement.classList.toggle('highlighted');
        })
    }





//     MY VERSION OF DOING THIS
    // $(document).ready(function() {
    //     $("#toggle-link").click(function(e) {
    //         e.preventDefault();
    //         // $("dd").slideToggle();
    //         $("dd").toggleClass('invisible');
    //         var linkText = $(this).text();
    //         $(this).text(linkText === "Show Answers" ? "Hide Answers" : "Show Answers");
    //     });
    // });



});
