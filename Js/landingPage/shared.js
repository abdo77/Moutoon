jQuery(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('header').toggleClass('opened');
    })



    $('.lang a').click(function () {
        localStorage.setItem('lang', $(this).prop('id'))
        setTimeout(() => {
            window.location.reload()
        }, 100);
    })

    if(localStorage.getItem('lang')=='Arabic'){
        $('link[href="../../Css/Shared/bootstrap.min.css"]').attr('href','../../Css/Shared/bootstrapArabic.min.css')
        $('body').attr('dir','rtl')
    }
})