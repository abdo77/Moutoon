jQuery(document).ready(function() {
    $('.videoCover').click(function(){
        $(this).toggleClass('hide');
        $('#video').get(0).play()
    })
    $('#video').on('pause', function() {
        //Actions when video pause selected
        $('.videoCover').removeClass('hide');
      });
})