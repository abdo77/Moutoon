jQuery(document).ready(function(){

    basicURl = 'https://smiling-gray-xerus.cyclic.app'

    $('.form-control').on('keypress',function(){
        $(this).removeClass('not-valid')
        $(this).closest('.input-group').find('.error-p').addClass('d-none') ; 
        $(this).closest('.input-group').find('.error-p').text('')
    })

    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    $('#submit').click(async function(){
        var valid = false ;
        $('.form-control').each(function() {
            if($(this).val() ==''){
                $(this).closest('.input-group').find('.error-p').removeClass('d-none') ; 
                $(this).closest('.input-group').find('.error-p').text('Please enter '+ $(this).prop('id'))
                $(this).addClass('not-valid')
                valid = false ;
                
            }
            else if($(this).prop('id')=='email'){
                if(regex.test($(this).val())){
                valid = true ;   
                   
                }
                else{
                    $(this).closest('.input-group').find('.error-p').removeClass('d-none') ; 
                 $(this).closest('.input-group').find('.error-p').text('Please enter valid '+ $(this).prop('id'))
                 $(this).addClass('not-valid')
                 valid = false ;
                }
            }
        })
        if(valid){

            try{

                let login =  await $.post(basicURl+'/login' ,{
                    email: $('#email').val(),
                    password:$('#password').val(),
                   })
                   
                   
                   
                   console.log(login)
                   if(login.success === true){


                    $('.status-message').removeClass('d-none') ;
                    $('.status-message').addClass('bg-success') ;
                    $('.status-message').text(login.data.message+"...") ;
                    localStorage.setItem('userToken' , `Bearer ${login.token}`)
                    location.replace('../../Html/users/chains.html')
                    
                   }
    
                else{
                    $('.status-message').removeClass('d-none') ;
                    $('.status-message').addClass('bg-danger') ;
                    $('.status-message').text(login.data.message)
                    setTimeout(() => {
                        $('.status-message').addClass('d-none') ;
                        $('.status-message').removeClass('bg-danger') ;
                    }, 10000);
                }
    
                   
            }catch(error){
                console.log(error)

                if(error.statusText == 'Too Many Requests')

                $('.status-message').removeClass('d-none') ;
                $('.status-message').addClass('bg-danger') ;
                $('.status-message').text(error.statusText + ' try again later')
                setTimeout(() => {
                    $('.status-message').addClass('d-none') ;
                    $('.status-message').removeClass('bg-danger') ;
                }, 10000);


            }

        }
    })
})