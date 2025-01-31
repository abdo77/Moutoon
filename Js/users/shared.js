jQuery(document).ready(function() {
    $('header:not(.specialHeader)').load('header.html');
    $('aside:not(.specialAside)').load('aside.html');
    $('body').on('click','.menu-btn',function() {
        $('body').removeClass('collapsed')
    })
    $('body').on('click','.close-aside-btn',function() {
        $('body').addClass('collapsed')
    })
    console.log(localStorage.getItem('dark'));
    var dark = ( localStorage.getItem('dark') == 'false' || localStorage.getItem('dark')==null  ) ? false : true  ;
    console.log(dark);
    setTimeout(() => {
        if(dark){
            $('.mode-switch').find('.switch-circle').find('.fa').removeClass('fa-sun').addClass('fa-moon') ;
            $('body').addClass('dark')
            $('.mode-switch').find('.switch-circle').addClass('switch-circle-move')
        }
        else{
            $('.mode-switch').find('.switch-circle').find('.fa').removeClass('fa-moon').addClass('fa-sun') ;
            $('body').removeClass('dark')
            $('.mode-switch').find('.switch-circle').removeClass('switch-circle-move')
        }
    }, 100);


    $('body').on('click','.mode-switch',function() {
        dark = !dark
        localStorage.setItem('dark',dark)
        $(this).find('.switch-circle').toggleClass('switch-circle-move')
        if(dark){
            $(this).find('.switch-circle').find('.fa').removeClass('fa-sun').addClass('fa-moon') ;
            $('body').addClass('dark')
        }
        else{
            $(this).find('.switch-circle').find('.fa').removeClass('fa-moon').addClass('fa-sun') ;
            $('body').removeClass('dark')
        }
        window.location.reload()
    })  

    $('.shadow-bg').click(function(){
        $('.close-aside-btn').click()
    })

    $('body').on('click','.lang-container .nav-item a',function(){
        localStorage.setItem('language',$(this).attr('data-lang'))
        location.reload()
    })

    var lang = ( localStorage.getItem('language') == 'en' || localStorage.getItem('language')==null  ) ? 'en' : localStorage.getItem('language') 
    setTimeout(() => {
        if(lang == 'ar'){
            $('Html').prop('dir', 'rtl')
            $('link[href="../../Css/Shared/bootstrap.min.css"]').attr('href','../../Css/Shared/bootstrapArabic.min.css');
            $('.selected-lang span').text('العربية')
            // $('link').prop('href').replace('../../Css/Shared/bootstrap.min.css','../../Css/Shared/bootstrapArabic.min.css')
        }
        else if(lang == 'en'){
            $('link[href="../../Css/Shared/bootstrapArabic.min.css"]').attr('href','../../Css/Shared/bootstrap.min.css');
            $('Html').prop('dir', 'ltr')
            $('.selected-lang span').text('English')
        }
        else{
            $('link[href="../../Css/Shared/bootstrapArabic.min.css"]').attr('href','../../Css/Shared/bootstrap.min.css');
            $('Html').prop('dir', 'ltr')
            $('.selected-lang span').text('French')
        }
    
    }, 100);
    $('body').on('click','header .nav-link',function() {
        var position = $(this).position().left
        $('header .border-div').css('left', position)
    })

    $('body').on('click', function(){
        $('.custom-dropdown').removeClass('show')
    })

    $('body').on('click','.noti-icon-container',function(e){
        e.stopPropagation()
        $('.custom-dropdown').not($('.noti-icon-container + .custom-dropdown')).removeClass('show')
        $(this).next('.custom-dropdown').toggleClass('show')
    })
    $('body').on('click','.selected-lang',function(e){
        e.stopPropagation()
        $('.custom-dropdown').not($('.selected-lang + .custom-dropdown')).removeClass('show')
        $(this).next('.custom-dropdown').toggleClass('show')
    })
    $('body').on('click','aside .settings',function(e){
        e.stopPropagation()
        $('.custom-dropdown').not($(this).find('.custom-dropdown')).removeClass('show')
        $(this).find('.custom-dropdown').toggleClass('show')
    })
    $('body').on('click','.custom-dropdown',function(e){
        e.stopPropagation()
        
    })

})