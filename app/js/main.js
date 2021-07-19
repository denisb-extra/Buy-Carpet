$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header, body" ).addClass("scrolled");
        } else {
            $("header, body" ).removeClass("scrolled");
        }
    }
    onScroll();
    if($(window).width() > 950) {
        $(".menu-button").width($(".header-top .icons").width());
    }

    $(".icon-search").on("click", function(){
        $(".search-field").slideToggle();
    });

    var scrollWidth = window.innerWidth-$("html").width();
    var pl = parseInt($("header .header-inner").css("padding-left"));
    console.log(pl);
    var pStyle = '<style>body.mmactive {padding-right:' +scrollWidth+ 'px;} body.mmactive header .header-inner {padding-right:'+(pl+scrollWidth)+'px;}</style>';
    //$('html').append(pStyle);


    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });

    $(document).click(function(event) { 
        $target = $(event.target);
        if(!$target.closest('.menu-button').length && !$target.closest('.sm_menu_outer').length) {
            $(".sm_menu_outer").removeClass('active');
            $("#sm_menu_ham").removeClass('open');
            $("body").removeClass("mmactive");
        }
 

        if(!$target.closest('.container-slide').length && !$target.closest('.button-open-filters').length) {
            $(".container-slide").removeClass('open');
        }
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );
});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}