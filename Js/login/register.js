jQuery(document).ready(function () {
    $('#dateOfBirth').flatpickr()
    $("#Nationality").countrySelect({
        responsiveDropdown: true
    });

    $('#phoneNumber').intlTelInput({
        autoPlaceholder: "polite",
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
        separateDialCode : true ,
    })


    // Ezyk ya Ahmed 

    $('body').click(function () {
        $('.customSelect-container ul').removeClass('show')
    })
    $('.customSelect').click(function (e) {
        e.stopPropagation()
        e.preventDefault()
        $(this).closest('.customSelect-container ').find('ul').toggleClass('show')
    })
    $.fn.customSelect = function () {
        id = $(this).prop('id')

        $('#' + id + ' > option').each(function () {
            $('.customSelect-container #' + id + ' + ul').append(`
        <li>
        <a href="#" class="main-font text-dark text-decoration-none d-block p-2" data-val="`+ $(this).val() + `">` + $(this).text() + `</a>
        </li>
        `)
        })
    }
    $('.customSelect-container select').each(function () {
        $(this).customSelect()
    })


    $('body').on('click', '.customSelect-container ul a', function () {
        console.log('clicked');
        $(this).closest('.customSelect-container').find('select').val($(this).attr('data-val')).change()


    })

    $('.customSelect-container').find('select').change(function () {
        $(this).closest('.customSelect-container').find('.customSelect').val($(this).find('option:selected').text()).change()
    })





    $('body').on('change keypress input', '.form-control', function () {
        $(this).removeClass('not-valid')
        $(this).closest('.input-group').find('.error-p').addClass('d-none');
        $(this).closest('.input-group').find('.error-p').text('')
    })

    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    basicURl = 'http://localhost:3000'


    $('#submit').click(async function () {
        console.log(String($('.iti__selected-dial-code').text()+$('#phoneNumber').val()).replace('+',''));
        var valid = false;
        $('.form-control').each(function () {
            if ($(this).val() == '') {
                $(this).closest('.input-group').find('.error-p').removeClass('d-none');
                $(this).closest('.input-group').find('.error-p').text('Please enter ' + $(this).closest('.form-floating').find('label').text())
                $(this).addClass('not-valid')
                valid = false;

            }
            else {
                if ($(this).prop('id') == 'email') {
                    if (regex.test($(this).val())) {
                        valid = true;

                    }
                    else {
                        $(this).closest('.input-group').find('.error-p').removeClass('d-none');
                        $(this).closest('.input-group').find('.error-p').text('Please enter valid ' + $(this).closest('.form-floating').find('label').text())
                        $(this).addClass('not-valid')
                        valid = false;
                    }
                }
                
                // if($('#password').val() == $('#confirmpassword').val() ){
                //     valid = true;
                // }
                // else {
                //     $('#confirmpassword').closest('.input-group').find('.error-p').removeClass('d-none');
                //     $('#confirmpassword').closest('.input-group').find('.error-p').text($(this).closest('.form-floating').find('label').text() +' not the same')
                //     $('#confirmpassword').addClass('not-valid')
                //     valid = false;
                // }

            }
        })
        if(valid){
            const register =  await $.post(basicURl+'/register' ,{
                email: $('#email').val(),
                password:$('#password').val(),
                username: $('#name').val(),
                phone :String($('.iti__selected-dial-code').text()+$('#phoneNumber').val()).replace('+',''),
                country : $('#Nationality').val(),
                countryCode : $('.iti__selected-flag').find('.iti__flag').prop('class').split('__')[$('.iti__selected-flag').find('.iti__flag').prop('class').split('__').length -1] ,
                gender : $('#gender').val(),
                role : $('#roleType').val(),
                birthDate : $('#dateOfBirth').val(),
               })
               console.log(register);
            if(register.success == false){
                $('.status-message').removeClass('d-none') ;
                $('.status-message').addClass('bg-danger') ;
                $('.status-message').text(register.message)
                setTimeout(() => {
                    $('.status-message').addClass('d-none') ;
                    $('.status-message').removeClass('bg-danger') ;
                }, 10000);
            }
            else{
                $('.status-message').removeClass('d-none') ;
                $('.status-message').addClass('bg-success') ;
                $('.status-message').text(register.data.message+"...") ;
                localStorage.setItem('userToken' , `Bearer ${register.data.token}`)
                setTimeout(() => {
                    location.replace('../../Html/users/chains.html')
                }, 1500);
                
            }
        }
    })
})