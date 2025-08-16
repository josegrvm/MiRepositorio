


$(document).ready(function(){
    $(".box").hover(
    function() {
        $(this).addClass("hovered");
    },
    function() {
        $(this).removeClass("hovered");
    }
    );
});