var contentData = [
    {
        "title"     : "Alzheimer's Disease"
        , "image"   : "alzheimers.jpg"
        , "leadin"  : ""
        , "content" : ""
        , "twitter" : ""
        , "facebook": ""
        , "survey"  : ""
    }
    ,{
        "title"     : "Familial Amyloid Polyneuropathy (FAP)"
        , "image"     : "amyloidosis.jpg"
        , "leadin"    : ""
        , "content"   : ""
        , "twitter"   : ""
        , "facebook"  : ""
        , "survey"    : ""
    }
    ,{
        "title"     : "Meniere's Disease"
        , "image"     : "menieres.jpg"
        , "leadin"    : ""
        , "content"   : ""
        , "twitter"   : ""
        , "facebook"  : ""
        , "survey"    : ""
    }
    ,{
        "title"     : "Prurigo Nodularis"
        , "image"     : "prurigo.png"
        , "leadin"    : ""
        , "content"   : ""
        , "twitter"   : ""
        , "facebook"  : ""
        , "survey"    : ""
    }
];

$(document).ready(function(){
    var cardContainer = $('#cardContainer')
        ,column = 1;

    $.each(contentData, function () {
        if(1 === column) {
            cardContainer.append('<div class="section group"></div>');
        }
        cardContainer.children(':last-child').append('<div class="card col span_1_of_3">'
                                                    +'<h3>'+this['title']+'</h3>'
                                                    +'<img src="images/contentImages/'+this['image']+'">'
                                                    +'</div>');

        if(3 !== column) {
            column++
        } else {
            column = 1;
        }
    });

    var lastContentRow = cardContainer.children(':last-child')
        , lastColumnCount = lastContentRow.children().length;
    if (1 === lastColumnCount) {
        lastContentRow.children(':first-child').before('<div class="col span_1_of_3"></div>');
    } else if (2 === lastColumnCount) {
        lastContentRow.children(':first-child').before('<div class="col span_1_of_6"></div>');
    }

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
    blankDiv.height(background.height()/2);
    $('.card').matchHeight();
}