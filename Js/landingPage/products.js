jQuery(document).ready(function () {
    
        

        if(localStorage.getItem("lang") == "Arabic"){
            $(".owl-carousel").owlCarousel({
                items:1,
                dots:false,    
                rtl:true
            });
        }
        else{
            $(".owl-carousel").owlCarousel({
                items:1,
                dots:false,
                
            });
        }

    // $('body').on('click','.productsContainer .likeBtn',function(){
    //     $(this).toggleClass('liked')
    //     if($(this).hasClass('liked')){
    //         $(this).find('.fa-regular').addClass('fa');
    //         $(this).find('.fa-regular').removeClass('fa-regular');
            
    //     }
    //     else{
    //         $(this).find('.fa').addClass('fa-regular');
    //         $(this).find('.fa').removeClass('fa');
    //     }
        
    // })
})