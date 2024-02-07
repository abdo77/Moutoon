
jQuery(document).ready(function() {

    counter =0;
    examName = 'test 1'
     exercise = [
      {
        questionType: 'read',
        questionHeader:' Read',
        paragraph : 'This is a test for a paragraph that got some missing information so you have to complete it',
        answers :['test','info'],
        questions :['What is the answer of name ?','what is the answer of added to']
      },
      {
        questionType: 'e3raab',
        questionHeader:' Find the expression position of underlined words',
        paragraph : 'This is a test for a paragraph that got some missing information so you have to complete it',
        words :['test','info'],
        answers :['Name','added to it']
      },
      {
        questionType: 'Extract',
        questionHeader:' Extract the needed words',
        paragraph : 'This is a test for a paragraph that got some missing information so you have to complete it',
        words :['added to','Name'],
        answers :['test','information']
      },
      {
        questionType: 'Complete',
        questionHeader:' Complete the following paragraph',
        paragraph : 'This is a test for a paragraph that got some missing information so you have to complete it',
        answers :['test','information']
      },
      {
        questionType:'Match' , 
        firstRow :['frow1','frow2','frow3'],
        secondRow :['srow1','srow2'],
        answers:["frow1:srow2","frow2:srow1"]

      },  
      {
        questionType:'Match' , 
        firstRow :['frow3','frow1','frow2'],
        secondRow :['srow1','srow2'],
        answers:["frow1:srow1","frow2:srow3"]

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
          <div class="questionType Match-Question text-center" >
          <h4 class="QHeader my-3 mt-5 fw-bold text-center">
              Match The Following
          </h4>
          <div class="matchContainer position-relative row mx-0"  >
            <div class="firstRow d-flex flex-column align-items-center flex-wrap justify-content-center my-4 col-6 text-center" ></div>

            <div class="secondRow d-flex flex-column align-items-center flex-wrap justify-content-center my-4 col-6" ></div>

            <div class="col-12">
            <button  class="btn shadow rounded-4 rpl fs-6 rpl-dark p-3 px-4w fw-bold text-white my-2 Submit-match mx-auto disabled" style="width: 200px;">
                    Submit Match
                </button>
            </div>
          </div>
          </div>
          `)
          $('.questionType').prop('id',counter)
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
                <div class="d-flex align-items-center fw-bold px-2 match-element my-2"  id="eleader${i}">
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
        else if(exercise[counter].questionType == 'Complete'){
          $('.question-container').append(`
           <div class="questionType complete-Question text-center">
           <h4 class="QHeader fw-bold text-center">
                ${exercise[counter].questionHeader}
           </h4>
           <div class="paragraphContainer border-0 card shadow rounded-3 mt-5">
               <div class="card-body ">
                  <p class="text-center fw-bold">${exercise[counter].paragraph}</p>
               </div>
           </div>
           <button  class="btn shadow rounded-4 rpl fs-6 rpl-dark p-3 px-4w fw-bold text-white mt-4 my-2 Submit-complete mx-auto disabled" style="width: 200px;">
           Submit Complete
       </button>
       </div>
         `)
         for (let i = 0; i < exercise[counter].answers.length; i++) {
          $('.paragraphContainer p').html($('.paragraphContainer p').html().replace(exercise[counter].answers[i] , '<span style="min-width:100px !important ; outline:none" contenteditable="true" class="px-1 d-inline-block ">_______</span>'));
         }
        }
        else if(exercise[counter].questionType == 'e3raab'){
          $('.question-container').append(`
           <div class="questionType e3raab-Question text-center">
           <h4 class="QHeader fw-bold text-center">
                ${exercise[counter].questionHeader}
           </h4>
           <div class="paragraphContainer border-0 card shadow rounded-3 mt-5">
               <div class="card-body ">
                  <p class="text-center fw-bold">${exercise[counter].paragraph}</p>
               </div>
           </div>
           <div class="row mx-0 align-items-center e3raabContainer">
              
            </div>
           <button  class="btn shadow rounded-4 rpl fs-6 rpl-dark p-3 px-4w fw-bold text-white mt-4 my-2 Submit-e3raab mx-auto disabled" style="width: 200px;">
           Submit Complete
       </button>
       </div>
         `)
         for (let i = 0; i < exercise[counter].words.length; i++) {
          $('.paragraphContainer p').html($('.paragraphContainer p').html().replace(exercise[counter].words[i] , `<span style=" outline:none" class="text-success text-decoration-underline px-1 d-inline-block "> ${exercise[counter].words[i]}</span>`));
         }

         for (let i = 0; i < exercise[counter].words.length; i++) {
          $('.e3raabContainer').append(`
            <div class="col-lg-6 col-md-6 col-12 my-3" >
              <div class="card border-0 shadow rounded-4">
                <div class="card-body d-flex aling-align-items-end flex-wrap">
                  <div class="rounded-2 fw-bold text-success d-block me-2">
                    ${exercise[counter].words[i]} :
                  </div>
                  <input type="text" style="outline:none;" class="text-center fw-bold flex-grow-1 bg-transparent border-0 text-success" placeholder="Write your answer here">
                </div>
              </div>
            </div>
          `)
         }
        }
        else if(exercise[counter].questionType == 'Extract'){
          $('.question-container').append(`
           <div class="questionType extract-Question text-center">
           <div class="paragraphContainer border-0 card shadow rounded-3 mt-5">
               <div class="card-body ">
                  <p class="text-center fw-bold">${exercise[counter].paragraph}</p>
               </div>
           </div>
           <p class="QHeader fw-bold text-start mt-3">
           ${exercise[counter].questionHeader} :
            </p>
            <div class="row mx-0 align-items-center extractionsContainer">
              
            </div>
           <button  class="btn shadow rounded-4 rpl fs-6 rpl-dark p-3 px-4w fw-bold text-white mt-4 my-2 Submit-extract mx-auto disabled" style="width: 200px;">
           Submit Complete
       </button>
       </div>
         `)

         for (let i = 0; i < exercise[counter].words.length; i++) {
          $('.extractionsContainer').append(`
          <div class="col-lg-5 col-md-5 col-12 px-0 my-3">
          <div class="card extraction-card border-3 rounded-3  shadow">
          <div class="card-body ">
              ${exercise[counter].words[i]}
          </div>
          </div>
        </div>
        <div class="col-lg-1 col-md-1 col-1  mx-auto my-1">
        <div class="card rounded-3 border-0 shadow">
        <div class="card-body px-0 fw-bold">
            :
        </div>
        </div>
        </div>
        <div class="col-lg-5 col-md-5 col-12 px-0 my-3">
        <div class="card extraction-card-answer bg-transparent rounded-3 border-3  ">
        <div class="card-body p-0">
            <div contenteditable="true" class="card-body fw-bold text-muted extractAnswer" style="outline:none ">Write your answer here</div>
        </div>
        </div>
        </div>
          `)
          
         }
         
        }
        else if(exercise[counter].questionType == 'read'){
          $('.question-container').append(`
           <div class="questionType read-Question text-center">
           <h4 class="QHeader fw-bold text-center">
                ${exercise[counter].questionHeader} then answer
           </h4>
           <div class="paragraphContainer border-0 card shadow rounded-3 mt-5">
               <div class="card-body ">
                  <p class="text-center fw-bold">${exercise[counter].paragraph}</p>
               </div>
           </div>
           <p class="fw-bold text-start my-3 answerThefollowing">Answer the following questions:</p>
           <div class="row mx-0 align-items-center readContainer">
              
            </div>
           <button  class="btn shadow rounded-4 rpl fs-6 rpl-dark p-3 px-4w fw-bold text-white mt-4 my-2 Submit-read mx-auto disabled" style="width: 200px;">
           Submit Answers
       </button>
       </div>
         `)

         for (let i = 0; i < exercise[counter].questions.length; i++) {
          $('.readContainer').append(`
          <div class="shadow rounded-3 border-0 card my-2">
              <div class="card-body py-1">
              <p class="fw-bold text-start my-3 ">${i+1}- ${exercise[counter].questions[i]}</p>
              <textarea style="border-color:#c2c2c2;outline:none;min-height:100px" class="bg-transparent p-1 border-2 w-100 rounded-3"></textarea>
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
 
      var Lines ={} ;
     
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
       for (const key in Lines) {
        Lines[key].remove()
        delete Lines[key]
       }
       
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
     $('body').on('click',` .firstRow .match-element`, function(){
      if($(this).closest('.questionType').hasClass('answered')==false){
          if($(this).hasClass('Selected')){
            //$('.Selected').removeClass('Selected');
          $(this).removeClass('Selected')
          }
          else{
            $('.Selected').removeClass('Selected');
          $(this).addClass('Selected')
          }
        }
        
     })
     
    
     $('body').on('click',' .secondRow .match-element', function(){
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
        var name = $(this).find('.match-text').text()
        Lines[name].size =3 ; 
        Lines[name].setOptions({startSocket: 'right', endSocket: 'left'});
        Lines[name].position()
        
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
   })

   $('body').on('click','.Submit-match' , function(){
    $('.match-element').addClass('disabled')
    $(this).unbind('click')
    $(this).closest('.questionType').addClass('answered') ;
    $(this).addClass('disabled')
   
 
    
   
    $('.next-btn').removeClass('disabled')
    $('.next-btn').attr('disabled', false)
    // for (let i = 0; i < exercise[counter].answers.length; i++) {
    //   console.log('answer: ');
    //   $(this).closest('.Match-Question').find(`.binded[value="${exercise[counter].answers[i]}"] .card`).addClass('correctChoice')
      
    // }
    $(' .match-element').each(function(){
      var correct = 0
      var empty = true
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
    })
   })


     // Complete Function
     $('body').on('focus','.paragraphContainer p span', function(){
      var regex = '_';
      if($(this).text().match(regex)){
        $(this).text('') ;
      }
     })
     $('body').on('focusout','.paragraphContainer p span', function(){
      var regex = '_'
      var missing = 0 ;
      if($(this).text().match(regex)|| $(this).text()==0){
        $(this).removeClass('text-success')
        $(this).text('_______') ;
      }
      $('.paragraphContainer p span').each(function(){
        if($(this).text().match(regex)){
          missing++;
        }
      })
      if(missing == 0){
        setTimeout(() => {
          $('.Submit-complete').removeClass('disabled')
        $('.Submit-complete').attr('disabled',false)
        }, 1000);
      }
      else{
        $('.Submit-complete').addClass('disabled')
        $('.Submit-complete').attr('disabled',true)
      }
     })
     $('body').on('keydown','.paragraphContainer p span', function(e){
      var regex = '_'
      $(this).addClass('text-success')
      $('.Submit-complete').addClass('disabled')
        $('.Submit-complete').attr('disabled',true)
        return e.which != 13;
     })
     
     $('body').on('click','.Submit-complete' , function(){
      $('.paragraphContainer p span').removeAttr('contenteditable')
      $('.paragraphContainer p span').addClass('disabled')
      var word = 0 ;
      $('.paragraphContainer p span').each(function(){
        if($(this).text() != (exercise[counter].answers[word])){
          $(this).addClass('text-danger')
        }
        word++;
      })
      $(this).addClass('disabled')
      $(this).attr('disabled',true)
      $(this).off('click')
      $('.next-btn').removeAttr('disabled')
      $('.next-btn').removeClass('disabled')
    })
  
    // Extract Function
    $('body').on('focus','.extractAnswer', function(){
      $(this).closest('.extraction-card-answer').addClass('shadow')
      $(this).closest('.extraction-card-answer').addClass('border-success')
      $(this).removeClass('text-muted')
      $(this).addClass('text-success')
      if($(this).text() == 'Write your answer here'){
        $(this).text('') ;
      }
     })
     $('body').on('focusout','.extractAnswer', function(){
      $(this).closest('.extraction-card-answer').removeClass('shadow')
      $(this).closest('.extraction-card-answer').removeClass('border-success')
      $(this).addClass('text-muted')
      $(this).removeClass('text-success')
      if($(this).text() == 0 ){
        $(this).text('Write your answer here') ;
      }
      var missing = 0
      $('.extractAnswer').each(function(){
        if($(this).text()==0 || $(this).text()=='Write your answer here'){
          missing++;
        }
        else{
          $(this).addClass('text-success')
          $(this).removeClass('text-muted')
          $(this).closest('.extraction-card-answer').addClass('border-success')
        }
      })
      if(missing==0){
        setTimeout(() => {
          $('.Submit-extract').removeClass('disabled')
        $('.Submit-extract').attr('disabled',false)
        }, 1000);
      } 
     })


     $('body').on('keydown','.extractAnswer', function(e){
      $(this).addClass('text-success')
      $('.Submit-extract').addClass('disabled')
        $('.Submit-extract').attr('disabled',true)
        
        return e.which != 13;
     })

     $('body').on('click','.Submit-extract' , function(){
      $('.extractAnswer').removeAttr('contenteditable')
      $('.extractAnswer').addClass('disabled')
      var word = 0
      $('.extractAnswer').each(function(){
        if($(this).text() != exercise[counter].answers[word]){
          $(this).addClass('text-danger')
          $(this).removeClass('text-muted')
          $(this).closest('.extraction-card-answer').addClass('border-danger')
        }
        word++;
      })
      $(this).addClass('disabled')
      $(this).attr('disabled',true)
      $(this).off('click')
      $('.next-btn').removeAttr('disabled')
      $('.next-btn').removeClass('disabled')
    })

    //e3raab Functional

    $('body').on('focusout','.e3raabContainer input', function(){
      missing = 0 ;
      $('.e3raabContainer input').each(function(){
        if($(this).val() ==0){
          missing++
        }
      })
      if(missing==0){
        $('.Submit-e3raab').removeAttr('disabled')
        $('.Submit-e3raab').removeClass('disabled')
      }
    })
    $('body').on('keydown','.e3raabContainer input', function(e){
      $(this).addClass('text-success')
      $('.Submit-e3raab').addClass('disabled')
        $('.Submit-e3raab').attr('disabled',true)
        
        return e.which != 13;
     })
    $('body').on('click','.Submit-e3raab', function(){
      $('.e3raabContainer input').addClass('disabled') ;
      $('.e3raabContainer input').attr('disabled',true) ;
      $('.e3raabContainer input').attr('readonly',true) ;
      var answer = 0
      $('.e3raabContainer input').each(function(){
        if($(this).val()!=exercise[counter].answers[answer]){
          $(this).addClass('text-danger')
          $(this).addClass('text-danger')
        }
        else{

        }
        answer++;
      })
      $('.next-btn').removeAttr('disabled')
      $('.next-btn').removeClass('disabled')
    })

    // read function

    $('body').on('focusout','.readContainer textarea', function(){
      $(this).removeClass('border-success')
      missing = 0 ;
      $('.readContainer textarea').each(function(){
        if($(this).val() ==0){
          missing++
        }
      })
      if(missing==0){
        $('.Submit-read').removeAttr('disabled')
        $('.Submit-read').removeClass('disabled')
      }
    })

    $('body').on('focusin','.readContainer textarea', function(){
      $(this).addClass('border-success')
    })

    $('body').on('keydown','.readContainer textarea', function(e){
      
      $('.Submit-read').addClass('disabled')
        $('.Submit-read').attr('disabled',true)
        
        return e.which != 13;
     })
    $('body').on('click','.Submit-read', function(){
      $('.readContainer textarea').addClass('disabled') ;
      $('.readContainer textarea').attr('disabled',true) ;
      $('.readContainer textarea').attr('readonly',true) ;
      var answer = 0
      $('.readContainer textarea').each(function(){
        if($(this).val()!=exercise[counter].answers[answer]){
          $(this).addClass('text-danger')
          $(this).addClass('border-danger')
        }
        else{
          
          $(this).addClass('text-success')
          $(this).addClass('border-success')
        }
        answer++;
      })
      $('.next-btn').removeAttr('disabled')
      $('.next-btn').removeClass('disabled')
    })
  })

