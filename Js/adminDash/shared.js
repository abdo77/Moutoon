jQuery(function(){
    $(".mCustomScrollbar1").mCustomScrollbar({
        axis: "y",
        autoHideScrollbar: true,
        scrollInertia: 0
        // horizontal scrollbar
    });
    $('.nav-item.notification .noti-link').click(function (e) {
        $(this).next('.card').toggleClass('show')
        $(this).toggleClass('active')
        e.stopPropagation()
        $('.lang .dropdown-menu').removeClass('show')
        $('.lang-link').removeClass('active')
        $('.profile .dropdown-menu').removeClass('show')
        $(' .prof-link').removeClass('active')
        $('header .input-group').removeClass('show')
        $(' .search-link').removeClass('active')

    })

    $('.nav-item.lang .dropdown-menu').click(function (e) {
        e.stopPropagation()
    })
    $('.nav-item.profile .dropdown-menu').click(function (e) {
        e.stopPropagation()
    })
    $('.nav-item.notification .noti-container').click(function (e) {
        e.stopPropagation()

    })
    $('header .input-group').click(function(e){
        e.stopPropagation()
    })
    $('body').click(function (e) {
        $('.lang .dropdown-menu').removeClass('show')
        $('.notification .noti-container').removeClass('show')
        $('.profile .dropdown-menu').removeClass('show')
        $('.lang-link').removeClass('active')
        $('.prof-link').removeClass('active')
        $(' .noti-link').removeClass('active')
        $(' .search-link').removeClass('active')
        $('header .input-group').removeClass('show')
        e.stopPropagation()
    })

    $('.nav-item.profile .prof-link').click(function (e) {
        $(this).toggleClass('active')
        $(this).next('ul').toggleClass('show')
        e.stopPropagation()
        $('.notification .noti-container').removeClass('show')
        $(' .noti-link').removeClass('active')
        $('.lang .dropdown-menu').removeClass('show')
        $(' .lang-link').removeClass('active')
        $('header .input-group').removeClass('show')
        $(' .search-link').removeClass('active')

    })



    $('aside .main-link').click(function(){
        $('.bg-overlay').toggleClass('show')
        if($(this).next('ul').hasClass('open')){
            $(this).next('ul').removeClass('open')
            $('header').removeClass('open')
            $('main').removeClass('open')
            
        }
        else{
            $('header').addClass('open')
            $('main').addClass('open')
            $('ul').removeClass('open')
            $(this).next('ul').addClass('open')
        }
    })
    $('.toggle').click(function(){
        $('aside').toggleClass('uncollapsed')
        $('header').toggleClass('uncollapsed')
        $('main').toggleClass('uncollapsed')
        $('.toggle').toggleClass('collapsed')
    })
    $('.bg-overlay').click(function(){
        $(this).removeClass('show')
        $('.sub-list').removeClass('open')
        $('header').removeClass('open')
        $('main').removeClass('open')
    })
})