$(function(){
    $('.tab-btn').click(function(){
        $('#'+$(this).data('link')).siblings().hide()
        $('#'+$(this).data('link')).show()
    })

    $('.days a').click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
        $('#'+$(this).data("schedule")).siblings().hide()
        $('#'+$(this).data("schedule")).show()
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 350){
            $('header').addClass("active") 
        } else {
            $('header').removeClass("active")
        }
    })

    /* Synchronization */
    $(window).scroll(function(){
        
        $('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var blockID = $(this).attr('id')
                console.log(blockID)
                $('nav ul li a[data-scroll="'+blockID+'"]').addClass('active')
            }
        })
        
    })

});