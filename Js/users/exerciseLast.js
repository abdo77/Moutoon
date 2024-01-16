jQuery(document).ready(function() {

    var counter = 0
    examName = 'test 1'
     exercise = [
      {
        questionType:'Match' , 
        firstRow :['frow1','frow2','frow3'],
        secondRow :['srow1','srow2'],
        answers:["frow1:srow2","frow2:srow1"]

      },  

      {
        questionType:'chooseAudio' , 
        questionHeader:' What is the question talking about ?',
        src:'../../Assests/YG - Out On Bail (Official Video)(480P).mp4',
        choices:[
          'choice 1' ,'choice 2' ,'choice 3' , 
        ],
        rightChoice: 'choice 3',
        explain : 'Explaination of the question'
      },
   
          
        {
            questionType:'chooseVideo' , 
            questionHeader:' What is the question talking about ?',
            src:'../../Assests/YG - Out On Bail (Official Video)(480P).mp4',
            choices:[
              'choice 1' ,'choice 2' ,'choice 3' , 
            ],
            rightChoice: 'choice 3',
            explain : 'Explaination of the question'
          },
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
       } ,
       
     ]
 
 
 
    var  appendQuestion = function(counter){
      console.log('counters: ', counter);
         if(exercise[counter].questionType == 'choose'){
           $('.question-container').append(`
           <div class="questionType choose-Question">
           <h4 class="QHeader fw-bold text-center">
                ${exercise[counter].questionHeader}
           </h4>
           <div class="choices-container mt-5">
               
           </div>
          
       </div>
         `)
         $('.question-container').append(`
         <div class="explaination-container card my-2 text-center col-12  shadow rounded-4 p-4 fw-bold mx-auto main-font d-none">
         ${exercise[counter].explain}
           </div>
         `)
         for (let i = 0; i < exercise[counter].choices.length; i++) {
             $('.choices-container').append(`
                             <label for="choice${i+1}" class="choice card rounded-4 shadow border-0 my-4">
                                     <input type="radio" class="d-none" name="QuestionNum${1}" id="choice${i+1}" value="${exercise[counter].choices[i]}">
                                     <div class="card-body p-4 px-4 d-flex align-items-center">
                                         <div class="choiceLetter position-absolute d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                             <span>${String.fromCharCode(i+97).toUpperCase()}</span>
                                             <i class="fa fa-check d-none"></i>
                                             <i class="fa fa-times d-none"></i>
                                         </div>
                                         <p class="fs-5 m-0 fw-bold mx-auto">
                                         ${exercise[counter].choices[i]}
                                         </p>
                                     </div>
                                 </label>
                   
             `)
           
         }
     
         }
         else if(exercise[counter].questionType == 'chooseVideo'){
            $('.question-container').append(`
           <div class="questionType chooseVideo-Question text-center">
            <video style="max-width:500px" class="w-100 rounded-4 overflow-hidden mx-auto" controls src="${exercise[counter].src}">
            </video>
            <h4 class="QHeader my-3 mt-5 fw-bold text-center">
                ${exercise[counter].questionHeader}
           </h4>
           <div class="choices-container mt-5">
               
           </div>
          
       </div>
         `)
         $('.question-container').append(`
         <div class="explaination-container card my-2 text-center col-12  shadow rounded-4 p-4 fw-bold mx-auto main-font d-none">
         ${exercise[counter].explain}
           </div>
         `)
         for (let i = 0; i < exercise[counter].choices.length; i++) {
             $('.choices-container').append(`

                             <label for="choice${i+1}" class="choice card rounded-4 shadow border-0 my-4">
                                     <input type="radio" class="d-none" name="QuestionNum${1}" id="choice${i+1}" value="${exercise[counter].choices[i]}">
                                     <div class="card-body p-4 px-4 d-flex align-items-center">
                                         <div class="choiceLetter position-absolute d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                             <span>${String.fromCharCode(i+97).toUpperCase()}</span>
                                             <i class="fa fa-check d-none"></i>
                                             <i class="fa fa-times d-none"></i>
                                         </div>
                                         <p class="fs-5 m-0 fw-bold mx-auto">
                                         ${exercise[counter].choices[i]}
                                         </p>
                                     </div>
                                 </label>
                   
             `)
         }
        }
        else if(exercise[counter].questionType == 'chooseAudio'){
            $('.question-container').append(`
           <div class="questionType chooseAudio-Question text-center">
            <Audio style="max-width:500px" class="w-100 rounded-4 overflow-hidden mx-auto" controls src="${exercise[counter].src}">
            </Audio>
            <h4 class="QHeader my-3 mt-5 fw-bold text-center">
                ${exercise[counter].questionHeader}
           </h4>
           <div class="choices-container mt-5">
               
           </div>
          
       </div>
         `)
         $('.question-container').append(`
         <div class="explaination-container card my-2 text-center col-12  shadow rounded-4 p-4 fw-bold mx-auto main-font d-none">
         ${exercise[counter].explain}
           </div>
         `)
         for (let i = 0; i < exercise[counter].choices.length; i++) {
             $('.choices-container').append(`

                             <label for="choice${i+1}" class="choice card rounded-4 shadow border-0 my-4">
                                     <input type="radio" class="d-none" name="QuestionNum${1}" id="choice${i+1}" value="${exercise[counter].choices[i]}">
                                     <div class="card-body p-4 px-4 d-flex align-items-center">
                                         <div class="choiceLetter position-absolute d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                             <span>${String.fromCharCode(i+97).toUpperCase()}</span>
                                             <i class="fa fa-check d-none"></i>
                                             <i class="fa fa-times d-none"></i>
                                         </div>
                                         <p class="fs-5 m-0 fw-bold mx-auto">
                                         ${exercise[counter].choices[i]}
                                         </p>
                                     </div>
                                 </label>
                   
             `)
         }
        }
        else if (exercise[counter].questionType == 'Match') {
          $('.question-container').append(`
          <div class="questionType Match-Question text-center">
          <h4 class="QHeader my-3 mt-5 fw-bold text-center">
              Match The Following
          </h4>
          <div class="matchContainer position-relative">
            <div class="firstRow d-flex flex-wrap justify-content-center my-4 " ></div>

            <hr>
            <div class="secondRow d-flex flex-wrap justify-content-center my-4" ></div>

            <button class="btn shadow rounded-4 rpl fs-6 rpl-dark p-3 px-4w fw-bold text-white my-2 Submit-match mx-auto disabled" style="width: 200px;">
                    Submit Match
                </button>
          </div>
          </div>
          `)
          for (let i = 0; i < exercise[counter].firstRow.length; i++) {
            $('.firstRow').append(`
                <div class="d-flex align-items-center fw-bold px-2 match-element my-2"  id="sleader${i}">
                  <div class="card border-0 rounded-4 shadow">
                        <div class="card-body d-flex align-items-center ps-1 pe-4 py-2 ">
                        <div class="choiceLetter  d-flex align-items-center me-5 justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                             <span>${String.fromCharCode(i+97).toUpperCase()}</span>
                                             <i class="fa fa-check d-none"></i>
                                             <i class="fa fa-times d-none"></i>
                                         </div>
                        <span class="match-text">${exercise[counter].firstRow[i]}</span></div>
                  </div>
                </div>
            `)
            
          }
          for (let i = 0; i < exercise[counter].secondRow.length; i++) {
            $('.secondRow').append(`
                <div class="d-flex align-items-center fw-bold px-2 match-element"  id="eleader${i}">
                  <div class="card border-0 rounded-4 shadow">
                        <div class="card-body d-flex align-items-center ps-1 pe-4 py-2 ">
                        <div class="choiceLetter  d-flex align-items-center me-5 justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                             <span>${i+1}</span>
                                             <i class="fa fa-check d-none"></i>
                                             <i class="fa fa-times d-none"></i>
                                         </div>
                        <span class="match-text">${exercise[counter].secondRow[i]}</span></div>
                  </div>
                </div>
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
           $('.next-btn').removeClass('disabled')
           $('.next-btn').attr('disabled', false)
           var audioElement = document.createElement('audio');
           audioElement.setAttribute('src', '../../Assests/mixkit-correct-answer-tone-2870.wav');
           audioElement.play()
         }
         else{
           $(this).closest('.choice').addClass('wrongChoice')
           $(this).closest('questionType').addClass('answeredWrong')
           $('.explaination-container').removeClass('d-none');
           $('.next-btn').removeClass('disabled')
           $('.next-btn').attr('disabled', false)
           var audioElement = document.createElement('audio');
           audioElement.setAttribute('src', '../../Assests/mixkit-game-show-wrong-answer-buzz-950.wav');
           audioElement.play()
         }
     })
 
 
     var correctAnswers = 0 ;
     var answersPercents = 0 ;
     $('.next-btn').click(function(){
       $('.explaination-container').remove();
       if($('.questionType').hasClass('answeredRight')){
         
         correctAnswers++ ;
       }
       else{
       }
       $('.question-container').empty()
       Lines={}
       console.log('counter == ' , counter);
       console.log('counter == ' , exercise.length);
       $('.leader-line').remove()
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
     // Match Function
     var Lines ={} ;
     $('body').on('click','.firstRow .match-element', function(){
          if($(this).hasClass('Selected')){
            $('.Selected').removeClass('Selected');
          $(this).removeClass('Selected')
          }
          else{
            $('.Selected').removeClass('Selected');
          $(this).addClass('Selected')
          }
        
     })
    
     $('body').on('click','.secondRow .match-element', function(){
      
      if(!$(this).hasClass('binded')&&$('.firstRow .match-element').hasClass('Selected')){
        $(this).addClass('binded')
        Lines[$(this).find('.match-text').text()] = new LeaderLine(
          $('.firstRow .match-element.Selected')[0],
            $(this)[0],
            {
              hide: true,
              color:'#31947b'
            }
        )
        console.log(Lines);
        var name = $(this).find('.match-text').text()
        Lines[name].size =3 ; 
        Lines[name].setOptions({startSocket: 'bottom', endSocket: 'top'});
        
        
        $('.firstRow .match-element.Selected').addClass('binded')
        $('.firstRow .match-element.Selected').addClass($(this).find('.match-text').text())
        $(this).attr('value',$('.firstRow .match-element.Selected').find('.match-text').text()+':'+$(this).find('.match-text').text())
        $('.firstRow .match-element.Selected').attr('value',$('.firstRow .match-element.Selected').find('.match-text').text()+':'+$(this).find('.match-text').text())        
        
        Lines[name].show('draw')
        $('.firstRow ').find('.match-element.Selected').removeClass('Selected')
        var firstlength = 0
        var secondlength = 0
        $('.secondRow ').find('.match-element.binded').each(function() {
          secondlength++
        })
        $('.secondRow ').find('.match-element').each(function() {
          firstlength++
        })
        if(firstlength == secondlength) {
          $('.Submit-match').removeClass('disabled')
        }
        else{
          $('.Submit-match').addClass('disabled')
        }        
          
          
      }
      else if($(this).hasClass('binded')&&$('.firstRow .match-element').hasClass('Selected')&&$('.firstRow .match-element.Selected').hasClass(''+$(this).find('.match-text').text()+'')){
        $(this).removeClass('binded')
        var name = $(this).find('.match-text').text()

        console.log('hio');
        Lines[name].hide('draw')
        var firstlength = 0
        var secondlength = 0
        $('.secondRow ').find('.match-element.binded').each(function() {
          secondlength++
        })
        $('.secondRow ').find('.match-element').each(function() {
          firstlength++
        })
        if(firstlength == secondlength) {
          $('.Submit-match').removeClass('disabled')
        }
        else{
          $('.Submit-match').addClass('disabled')
        }        
          
        delete Lines[name]
        $('.firstRow .match-element.Selected').removeClass($(this).find('.match-text').text())
        $('.firstRow .match-element.Selected').removeClass('binded')
        $('.firstRow .match-element.Selected').removeClass('Selected')
        $(this).attr('value','')
        $('.firstRow .match-element.Selected').attr('value','')
        
      }
      console.log($(this).find('.match-text').text());
   })

   $('body').on('click','.Submit-match' , function(){
    $('.match-element').addClass('disabled')
    Lines ={}
    $(this).unbind('click')
    $(this).addClass('disabled')
    $('.match-element').attr('disabled', 'disabled')
    $('.match-element').addClass('disabled')
    $('body').off('','.Submit-match')
    $('.next-btn').removeClass('disabled')
    $('.next-btn').attr('disabled', false)
    $('body').off('','.firstRow .match-element');
    $('body').off('','.secondRow .match-element');
    // for (let i = 0; i < exercise[counter].answers.length; i++) {
    //   console.log('answer: ');
    //   $(this).closest('.Match-Question').find(`.binded[value="${exercise[counter].answers[i]}"] .card`).addClass('correctChoice')
      
    // }
    $(' .match-element').each(function(){
      var correct = 0
      var empty = true
      console.log($(this).attr('value'));
      for (let i = 0; i < exercise[counter].answers.length; i++) {
        if($(this).attr('value')!=null  && $(this).attr('value')!='' && $(this).attr('value')!=undefined){
            empty = false ;
          if($(this).attr('value')==exercise[counter].answers[i]) {
            correct++ ;
          }
        }
        
      }
      if(!empty){
        if(correct>0){
          $(this).find('.card').addClass('correctChoice')
        }
         
        else{
          $(this).find('.card').addClass('wrongChoice')
        }
      }
      console.log(correct);
    })
   })
 })

