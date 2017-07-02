   //catear
$(function(){
    $("div.rightMenu span").mouseenter(function(){
        var left = $(this).position().left;
        var top = $(this).position().top;
        var width = $(this).css("width");
//        var destLeft = parseInt(left) + parseInt(width)/2;

        $("img#catear").css("left",left+35);
        $("img#catear").css("top",top+185);
        $("img#catear").fadeIn(500);
    });
    $("div.rightMenu span").mouseleave(function(){
        $("img#catear").hide();
    });
});


