jQuery(document).ready(function() {




    $(".finished").Grid({
        search:true ,
        sort:true ,
        paginations:true,
        className: {
            td: 'main-font2 fw-bold',
            th: 'main-font2 fw-bold',
          }
    },);
    $(".pending").Grid({
        search:true ,
        sort:true ,
        paginations:true,
        className: {
            td: 'main-font2 fw-bold',
            th: 'main-font2 fw-bold',
          }
    },);

    $('#date').flatpickr({
        enableTime: true,

    })

    $('#createBtn').click(function () {
        $('.modal input').val(null);
    })

    var redirect = true ;
    $('.modal-footer .btn.bg-success').click(function(){
        redirect = true
        $('.modal').find('input').each(function(){
            
            if($(this).val()==null || $(this).val()==''){
                redirect = false ;
            }
        })

        if(redirect){
            window.location.href = '../../Html/users/createExam.html'
        }
        else{
            var windowHeight = $(window).height();
        var desiredBottom =80;

    var newPosition = windowHeight - desiredBottom;
        $(`
        <div class="updated mx-auto position-fixed d-flex align-items-center bg-danger text-white  shadow fw-bold" style="top:120%">
            <i class="fa fa-check-circle text-white fs-4 me-3 main-font2"></i> Please fill all inputs
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
        }
    })

})