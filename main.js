$(document).ready(function() {
    // Handle subscribe button click
    // Handle select friend button click
    $('#subscribe-btn').click(function() {
        $("#subscribe-page").css("display", "none");
        $("#rms-page").css("display", "block")
    });

    $('.text-hire-btn').click(function() {
        $("#rms-page").css("display", "none");
        $("#confetti-page").css("display", "block")
    });

    $("#talk-to-sonia").click(function() {
        $("#confetti-page").css("display", "none");
        $("#player").css("display", "block")
    });

    $("#bye").click(function() {
        $("#player").css("display", "none");
        $("#confetti-page").css("display", "block")
    });

    $("#placeholder-div").click(function() {
        $("#placeholder-div").css("display", "none");
        $("#prop-images").css("display", "block")
    })

});
