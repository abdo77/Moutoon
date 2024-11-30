jQuery(document).ready(function () {
    $('body').on('click','.accordion h5',function () {
        if($(this).hasClass('collapsed')) {
            $('.card').removeClass('uncollapsed')
            $(this).closest('.card').removeClass('uncollapsed')
        }
        else{
            $('.card').removeClass('uncollapsed')
            $(this).closest('.card').addClass('uncollapsed')
        }
    })
})