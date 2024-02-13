jQuery(document).ready(function(){
    
    $('.customSelect').focusout(function(e){
        e.stopPropagation()
        e.preventDefault()
        $(this).closest('.customSelect-container ').find('ul').removeClass('show')
    })
    $('.customSelect').focus(function(e){
        e.stopPropagation()
        e.preventDefault()
        $(this).closest('.customSelect-container ').find('ul').addClass('show')
    })
    $.fn.customSelect = function(){
        id = $(this).prop('id')

        $('#'+id+' > option').each(function(){
            $('.customSelect-container #'+id+' + ul').append(`
            <li>
            <a href="#" class="main-font text-dark text-decoration-none d-block p-2" data-val="`+ $(this).val() +`">`+$(this).text()+`</a>
            </li>
            `)
        })
    }
    $('.customSelect-container select').each(function(){
        $(this).customSelect()
    })


    $('body').on('click','.customSelect-container ul a',function(){
        console.log('clicked');
        $(this).closest('.customSelect-container').find('select').val($(this).attr('data-val')).change()
   
       
    })
    
    $('.customSelect-container').find('select').change(function(){
        $(this).closest('.customSelect-container').find('.customSelect').val($(this).find('option:selected').text())
    })


    $('input').each(function(){
        $(this).addClass('disabled')
        $(this).attr('disabled','disabled')
    })


    $('.edit-btn').click(function(){
        $(this).addClass('d-none')
        $('.edit-btns').removeClass('d-none')
        $('input').each(function(){
            $(this).removeClass('disabled')
            $(this).attr('disabled',false)
        })
    })
    $('.cancel-btn').click(function(){
        $('.edit-btn').removeClass('d-none')
        $('.edit-btns').addClass('d-none')
        $('input').each(function(){
            $(this).addClass('disabled')
            $(this).attr('disabled',true)
        })
    })
    $('.update-btn').click(function(){
        $('.edit-btn').removeClass('d-none')
        $('.edit-btns').addClass('d-none')
        $('input').each(function(){
            $(this).addClass('disabled')
            $(this).attr('disabled',true)
        })
        var windowHeight = $(window).height();
        var desiredBottom =80;

    var newPosition = windowHeight - desiredBottom;
        $(`
        <div class="updated mx-auto position-fixed d-flex align-items-center bg-success text-white  shadow fw-bold" style="top:120%">
            <i class="fa fa-check-circle text-white fs-4 me-3"></i> Updated
        </div>
    `).appendTo('body').animate({
            'top': newPosition

        },"fast")
        
    setTimeout(() => {
        $('.updated').animate({
            'top': '120%'

        },{dureation:'fast',
        complete:function(){
            $(this).remove()
        }})
    }, 2000);
    })
    
})