jQuery(document).ready(function(){
    $('.FAQS-tab').click(function(e){
        $('#FAQS-tab').tab('show')
        console.log('FAQS-tab clicked');
    })
    $('.Guides-tab').click(function(e){
        $('#Guides-tab').tab('show')
        console.log('Guides-tab clicked');
    })

    $('.Support-tab').click(function(e){
        $('#Support-tab').tab('show')
        console.log('Support-tab clicked');
    })
    $('.clear-btn').click(function(){
        $('.Support-container').find('input,textarea').val(null)
    })
})