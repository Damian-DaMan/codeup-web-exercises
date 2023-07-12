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

    // const ddElements = document.querySelectorAll('dd');
    // togglevisibilityLink.addEventListener('click', () => {
    //     ddElements.forEach(ddElement) => {
    //         ddElement.classList.toggle('invisible');
    //     });
    // });




    // const dtElements = document.querySelectorAll('dt');
    // dtElements.forEach(dtElement) => {
    //     dtElement.addEventListener('click', () => {
    //         dtElement.classList.toggle('highlighted');
    //     })
    // }





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




    // Traversing exercise using jQuery #3
        // Add click event listener to the button
    $(document).on('click', '#highlightButton', function(e) {
        // Select the last list item in each unordered list and modify the background color
        $('ul li:last-child').css('background-color', 'yellow');
    });


//walkthrough on question above using JS

    //make some variables...
    // const yellowButton = document.querySelector('#highlightButton');
    // const ulElements = document.querySelectorAll('ul');
    // const h3Elements = document.querySelectorAll('h3');
    // const liElements = document.querySelectorAll('li');
    // //functions in the middle
    // function handleMakeYellowClick(e) {
    //     ulElements.forEach(ulElement) => {
    //         ulElement.lastElementChild.classList.add('yellow');
    //     }
    // }
    // function handleMakeBlueclick(e) {
    //     const clickedParent = e.target.parentElement;
    //     clickedParent.firstElementChild.classList.add('.blue')
    // }
    // function handleMakeFontBold(e) {
    //    const liElementCollection = e.target.nextElementSibling.children;
    //    Array.from(liElementCollection).forEach(liElement) => {
    //        liElement.classList.add('.bold');
    //     });
    // }
    //
    // //events down at the bottom
    // yellowButton.addEventListener('click', handleMakeYellowClick);
    //
    // liElements.forEach((liElement) => {
    //
    // })


    // question #4
    // When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.

    $('h3').on('click', function() {
        $(this).nextUntil('h3').css('font-weight', 'bold');
    });


//  question #5
    $('li').on('click', function() {
        $(this).parent().find('li:first').css('color', 'blue');
    });


    //bonus in JS
    // Variables
    const allPhotosContainer = document.querySelector('.container');
    const swapButton = document.querySelectorAll('.swap-btn');



    // Functions
    function handleSwapClick (e) {
        const clickedButton = e.target;
        const singleImageDiv = clickedButton.parentElement;
        //if left button is clicked
        // swap left two photos
        if(/* left button clicked */ singleImageDiv === allPhotosContainer.firstElementChild) {
            swapLeftTwoPhotos();
        }
        //if right button is clicked
        // swap right two photos
        else if(/* right button clicked*/ singleImageDiv === allPhotosContainer.lastElementChild) {
            swapRightTwoPhotos();
        }
        // //if middle button is clicked
        // // either swap left two or right two randomly
        else {
            Math.random() < 0.5 ? swapLeftTwoPhotos() : swapRightTwoPhotos;
        }
    }

    function swapLeftTwoPhotos(e) {
        //variables
        const leftPhoto = allPhotosContainer.firstElementChild.firstElementChild.firstElementChild;
        const middlePhoto = allPhotosContainer.querySelector('div:nth-child(2) img');
        const tempPhotoSrc = leftPhoto.src;

        //swap the src from both photos
        leftPhoto.src = middlePhoto.src;
        middlePhoto.src = tempPhoto.src;
    }

    function swapRightTwoPhotos(e) {
        //variables
        const rightPhoto = allPhotosContainer.firstElementChild.firstElementChild.firstElementChild;
        const middlePhoto = allPhotosContainer.querySelector('div:nth-child(2) img');
        const tempPhotoSrc = leftPhoto.src;

        //swap the src from both photos
        rightPhoto.src = middlePhoto.src;
        middlePhoto.src = tempPhoto.src;
    }

    // eventListeners
    swapButton.forEach((swapButton) => {
        swapButton.addEventListener('click', handleSwapClick);
    });






































});