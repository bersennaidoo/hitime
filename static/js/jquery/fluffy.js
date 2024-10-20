$(function() {
    $("#clickMe").on("click", function(e) {
        $("img").fadeIn(1000)
        $("#picframe").slideToggle("slow")
    })
})