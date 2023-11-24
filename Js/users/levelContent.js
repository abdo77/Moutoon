jQuery(document).ready(function() {
    $('main .nav.nav-tabs').width(function(){
        var width=0 ;        
        $(this).find('.nav-link').each(function(){
            width = $(this).outerWidth() + width ;
            console.log(width);
            return width ;
        })
        return Math.ceil(width);
    })
    
    setTimeout(() => {
        $('main .link-container-div').css('left', $('main .nav-link.active').position().left)
        console.log($('main .nav-link.active').position().left);
    $('main .link-container-div').css('width', $('main .nav-link.active').css('width'))
    $('main .link-container-div').css('height', $('main .nav-link.active').css('height'))
    $('body').on('click','main .nav-link',function() {
        var position = $(this).position().left
        var position1 = $(this).position().top
        console.log(position);
        $('main .link-container-div').css('left', position)
        $('main .link-container-div').css('top', position1)
        $('main .link-container-div').css('width', $($(this)).css('width'))
    })

    if($('#nav-exercise').html() == 0){
        $('#nav-exercise').append(`
    
            <div class="card shadow rounded-3 w-100">
                <div class='card-body text-center main-font fw-bold'>
                    No exercises found 
                </div> 
            </div>
    
        `)
    }
    console.log($('#nav-lessons').html());
     if($('#nav-lessons').html() == 0){
        $('#nav-lessons').append(`
    
            <div class="card shadow rounded-3 w-100">
                <div class='card-body text-center main-font fw-bold'>
                    No lessons found 
                </div> 
            </div>
    
        `)
    }
    if($('#nav-books').html() == 0){
        $('#nav-books').append(`
    
            <div class="card shadow rounded-3 w-100">
                <div class='card-body text-center main-font fw-bold'>
                    No books found 
                </div> 
            </div>
    
        `)
    }
}, 100);

})