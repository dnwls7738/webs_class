(function($){

    $(".menu > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    });
    $(".menu > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });
    
})(jQuery);