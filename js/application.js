

$(document).ready(function(){
    var cardContainer = $('#cardContainer')
        ,column = 1
        , pageData = contentData;console.log(contentData[0]);

    $.each(pageData, function () {
        if(1 === column) {
            cardContainer.append('<div class="section group"></div>');
        }
        cardContainer.children(':last-child').append('<div class="card col span_1_of_3">'
                                                    +'<h3>'+this['title']+'</h3>'
                                                    +'<img src="images/contentImages/'+this['image']+'">'
                                                    +'<p>'+this['leadin']+'</p>'
                                                    +'<a href="javascript:toggleContent('+this['id']+')" class="toggleButton">Click to see&nbsp;more</a>'
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
        , blankDiv = $('#blankDiv')
        ,iframe = $('IFRAME');

    background.width(containerWidth);
    blankDiv.height(background.height()/5);
    iframe.height(background.height() * .8);
    $('.card').matchHeight();
}

function toggleContent (id)
{
    var hiddenDiv = $('#hiddenDiv')
        ,cardContainer = $('#cardContainer')
        ,facebookText = '';

    if('' != contentData[id]['facebook']) {
        facebookText = '<iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F'+contentData[id]['facebook']+'&amp;height=590&amp;colorscheme=light&amp;show_faces=true&amp;border_color=%23625DA4&amp;stream=true&amp;header=true"'
        +'scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:590px;" allowTransparency="true"></iframe>'
    }

    hiddenDiv.empty();
    hiddenDiv.append(
        '<div class="section content">'
        +'<div class="col span_3_of_3"><h3>'+contentData[id]['title']+'</h3></div>'
        +'</div><div class="section content">'
        +'<div class="col span_2_of_3">'+contentData[id]['content']+'</div>'
        +'<div class="col span_1_of_3">'+facebookText+'</div>'
        +'</div><div class="section content>"'
        +'<div class="col span_3_of_3"><a class="toggleButton" href="javascript:toggleBack()">Close</a></div>'
        +'</div>'
    );
    hiddenDiv.slideToggle();
    cardContainer.slideToggle();
}

function toggleBack ()
{
    var hiddenDiv = $('#hiddenDiv')
        ,cardContainer = $('#cardContainer');
    cardContainer.slideToggle();
    hiddenDiv.slideToggle();
}