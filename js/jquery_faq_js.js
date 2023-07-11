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


    $(document).ready(function() {
        $("#toggle-link").click(function(e) {
            e.preventDefault();
            // $("dd").slideToggle();
            $("dd").toggleClass('invisible');
            var linkText = $(this).text();
            $(this).text(linkText === "Show Answers" ? "Hide Answers" : "Show Answers");
        });
    });



});
