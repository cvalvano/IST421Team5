$(document).ready(function(){
    contentResizer();
    $(window).resize(function(){
        contentResizer();
    });
});

function contentResizer() {
    var container = $('#container')
        , containerWidth = container.width()
        , background = $('#background')
        , blankDiv = $('#blankDiv');

    background.width(containerWidth);
    blankDiv.height(background.height()-100);
}