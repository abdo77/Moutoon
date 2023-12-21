jQuery(document).ready(function() {

   var counter = 0
   examName = 'test 1'
    exercise = [
      {
        questionType:'choose' , 
        questionHeader:' PREDICT THE TOP LOSER (for tomorrow) across these indices',
        choices:[
          'choice 1' ,'choice 2' ,'choice 3' , 
        ],
        rightChoice: 'choice 2' , 
        explain : 'Explaination of the question'
      } ,
      {
        questionType:'choose' , 
        questionHeader:' What is the question talking about ?',
        choices:[
          'choice 1' ,'choice 2' ,'choice 3' , 
        ],
        rightChoice: 'choice 3',
        explain : 'Explaination of the question'
      }
    ]



   var  appendQuestion = function(counter){
        if(exercise[counter].questionType == 'choose'){
          $('.question-container').append(`
          <div class="questionType choose-Question">
          <h3 class="QHeader fw-bold text-center">
               ${exercise[counter].questionHeader}
          </h3>
          <div class="choices-container mt-5">
              
          </div>
         
      </div>
        `)
        $('.question-container').closest('.row').append(`
        <div class="explaination-container card my-2 col-lg-8 col-12  shadow rounded-4 p-4 fw-bold mx-auto main-font d-none">
        ${exercise[counter].explain}
          </div>
        `)
        for (let i = 0; i < exercise[counter].choices.length; i++) {
            $('.choices-container').append(`
                            <label for="choice${i+1}" class="choice card rounded-4 shadow border-0 my-4">
                                    <input type="radio" class="d-none" name="QuestionNum${1}" id="choice${i+1}" value="${exercise[counter].choices[i]}">
                                    <div class="card-body p-3 px-4 d-flex align-items-center">
                                        <div class="choiceLetter d-flex align-items-center justify-content-center fs-4 rounded-circle p-1 fw-bold ">
                                            <span>${String.fromCharCode(i+97).toUpperCase()}</span>
                                            <i class="fa fa-check d-none"></i>
                                            <i class="fa fa-times d-none"></i>
                                        </div>
                                        <p class="fs-3 m-0 fw-bold mx-auto">
                                        ${exercise[0].choices[i]}
                                        </p>
                                    </div>
                                </label>
                  
            `)
          
        }
    
        }
    
    
      }
    appendQuestion(counter)

    $('.progress-container span').text(counter+'/'+exercise.length )
      
    $('body').on('change', 'label input', function(){
        $('label input').attr('disabled', 'disabled')
        if($(this).val() == exercise[counter].rightChoice){
          $(this).closest('.choice').addClass('correctChoice')
          $(this).closest('.questionType').addClass('answeredRight')
          $('.next-question-btn').removeClass('disabled')
          $('.next-question-btn').attr('disabled', false)
          var audioElement = document.createElement('audio');
          audioElement.setAttribute('src', '../../Assests/mixkit-correct-answer-tone-2870.wav');
          audioElement.play()
        }
        else{
          $(this).closest('.choice').addClass('wrongChoice')
          $(this).closest('questionType').addClass('answeredWrong')
          $('.explaination-container').removeClass('d-none');
          $('.next-question-btn').removeClass('disabled')
          $('.next-question-btn').attr('disabled', false)
          var audioElement = document.createElement('audio');
          audioElement.setAttribute('src', '../../Assests/mixkit-game-show-wrong-answer-buzz-950.wav');
          audioElement.play()
        }
    })


    var correctAnswers = 0 ;
    var answersPercents = 0 ;
    $('.next-question-btn').click(function(){
      $('.explaination-container').remove();
      if($('.questionType').hasClass('answeredRight')){
        
        correctAnswers++ ;
      }
      else{
      }
      $('.question-container').empty()
      if(counter + 1 < exercise.length){
        appendQuestion(counter+1)
        $(this).addClass('disabled')
        $(this).attr('disabled', 'disabled')
        
    }
    if(counter + 1 == exercise.length-1){
        $(this).text('Finish')
        $(this).addClass('disabled')
        $(this).attr('disabled', 'disabled')
        
    }
    $('.progress-bar').css('width', ((counter+1)/exercise.length) * 100+'%')
    $('.progress-container span').text(counter+1+'/'+exercise.length )

    if(counter +1 >= exercise.length){
        $('.exerciseName').remove()
        $('.progress-container').closest('.col-12').remove()
        $('footer').addClass(['bg-transparent','shadow-none','border-0'])
        $(".results").append(`
        <h3 class="QHeader fw-bold text-center">
        Results for ${examName}
        </h3>
        
        <div class="row mx-0 my-5">
            <div class="col-lg-6 col-md-6 col-12 mx-auto">
                <div class="results w-100">
                    <div class="card  shadow border-0 my-0 " style="border-top-left-radius: 20px;border-top-right-radius: 20px;">
                        <div class="card-body p-3 px-4 d-flex align-items-center">
                        <div class="checkContainer d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                        <i class="fa fa-money-bill-1-wave"></i>
                    </div>
                    <p class="fs-5 m-0 fw-bold mx-auto">
                        CORRECT PREDECTIONS 
                    </p>
                    <span class="me-0 fs-5 fw-bold">4</span>
                        </div>
                    </div>
                    <div class="card  shadow border-0 my-0" style="border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;">
                        <div class="card-body p-3 px-4 d-flex align-items-center">
                        <div class="checkContainer d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                            <i class="fa fa-check"></i>
                        </div>
                        <p class="fs-5 m-0 fw-bold mx-auto">
                            CORRECT PREDECTIONS 
                        </p>
                        <span class="me-0 fs-5 fw-bold">4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        `)
      }
      counter = counter + 1 < exercise.length ? counter+1 : $(this).unbind('click').addClass(['disabled','d-none']) &&  $('.done-btn').removeClass(['d-none','disabled']) && $('.done-btn').attr('disabled', false) && $('.question-container').remove() ;
    
      
      
    //    answersPercents = ((correctAnswers/exercise.length)*100);
       
    })

})