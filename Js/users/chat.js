jQuery(document).ready(function(){
    $('main').css('height',$('body').css('height'));
    $(".emoji-container").disMojiPicker();
    twemoji.parse(document.body);
    $('.fa-face-smile').click(function(e){
        $(".emoji-container").toggleClass('d-none')
        e.stopPropagation()

    })
    $('.emoji-container').click(function(e){
        e.stopPropagation()
    })

    $(".emoji-container").picker(function(emoji){
        $('.message-input').val($('.message-input').val()+emoji)
        
    });
        
    $('body').click(function(){
        $(".emoji-container").addClass('d-none')
    })
    $('.fa-paper-plane').click(function(){
        if($('.message-input').val() != null){
            $('.messages').append(`
            <div class="sent-message position-relative ms-auto main-font2 fw-bold my-2 bg-success p-1 text-white px-3 rounded-3 me-0 w-auto">${$('.message-input').val()}</div>
            `)
            $('.message-input').val(null)
        }
    })


})