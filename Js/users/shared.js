jQuery(document).ready(function() {
    $('header').load('header.html');
    $('aside').load('aside.html');
    $('body').on('click','.menu-btn',function() {
        $('body').removeClass('collapsed')
    })
    $('body').on('click','.close-aside-btn',function() {
        $('body').addClass('collapsed')
    })
    var dark = false ;
    $('body').on('click','.mode-switch',function() {
        dark = !dark
        $(this).find('.switch-circle').toggleClass('switch-circle-move')
        if(dark){
            $(this).find('.switch-circle').find('.fa').removeClass('fa-sun').addClass('fa-moon') ;
        }
        else{
            $(this).find('.switch-circle').find('.fa').removeClass('fa-moon').addClass('fa-sun') ;
        }
    })



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
    $('body').on('click','aside .settings',function(e){
        e.stopPropagation()
        $('.custom-dropdown').not($(this).find('.custom-dropdown')).removeClass('show')
        $(this).find('.custom-dropdown').toggleClass('show')
    })
    $('body').on('click','.custom-dropdown',function(e){
        e.stopPropagation()
        
    })

})