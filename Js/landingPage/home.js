jQuery(document).ready(function() {
    

    $(".payment-method-slider").owlCarousel({
        items:1,
        loop:true,
        dots:false,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            950 :{
                items:4,
            }
        }
    });
    $('.priceContainer').mouseover(function(){
        $(".priceContainer").addClass('notSelected')
        $(this).removeClass('notSelected');
        $(this).addClass('selected');
    })
    $('.priceContainer').mouseleave(function(){
        $(".priceContainer").removeClass('notSelected')
        $(".priceContainer").removeClass('selected')
    })
})