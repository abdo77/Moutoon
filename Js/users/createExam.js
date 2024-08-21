jQuery(document).ready(function(){
    $('.pickQ').select2()


    $('.side-pick .after').click(function(){
      $('.side-pick').toggleClass('hide');
    })

  var examData = {
    examName : 'Test Exam',
    Subject : 'Arabic ' , 
    Date : '12:00PM 02/02/2024',
    Duration :'2H',
    QestionsNum:2
  }

  

  $('.exam-title').text(examData.examName)

    var questions = []

  $('.pickQ').on('change', function(){
    
    if($(this).val()=='trueFalse'){
      $('.question-container').append(trueFalse)
      
      $('.question-container').find('.trueFalse-Question:last-child').find('.trueOrFalse').append(`
        <label for="true${$('.question-container').find('.trueFalse-Question:last-child').index()}" class="choice card rounded-4 shadow border-0 my-4">
                                                   <input type="radio"  id="true${$('.question-container').find('.trueFalse-Question:last-child').index()}" class="d-none" name="trueFalse" value="true">
                                                   <div class="card-body p-4 px-4 d-flex align-items-center">
                                                       <div class="choiceLetter position-absolute d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                                           <span>A</span>
                                                           <i class="fa fa-check d-none"></i>
                                                           <i class="fa fa-times d-none"></i>
                                                       </div>
                                                       <p class="fs-5 m-0 fw-bold mx-auto">
                                                       True
                                                       </p>
                                                   </div>
                                               </label>
              
                                               <label for="false${$('.question-container').find('.trueFalse-Question:last-child').index()}" class="choice card rounded-4 shadow border-0 my-4">
                                               <input type="radio" id="false${$('.question-container').find('.trueFalse-Question:last-child').index()}" class="d-none" name="trueFalse" value="false">
                                               <div class="card-body p-4 px-4 d-flex align-items-center">
                                                   <div class="choiceLetter position-absolute d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                                       <span>B</span>
                                                       <i class="fa fa-check d-none"></i>
                                                       <i class="fa fa-times d-none"></i>
                                                   </div>
                                                   <p class="fs-5 m-0 fw-bold mx-auto">
                                                   false
                                                   </p>
                                               </div>
                                           </label>  
      `)
    }
    if($(this).val()=='Match'){
      $('.question-container').append(matchQuestion)
    }
    if($(this).val()=='Complete'){
      $('.question-container').append(completeQuestion)
    }
    if($(this).val()=='Read'){
      $('.question-container').append(ReadQuesiton)
    }
    if($(this).val()=='Choose'){
      $('.question-container').append(choose)
    }
    if($(this).val()=='ChooseAudio'){
      $('.question-container').append(chooseAudio)
    }
    if($(this).val()=='ChooseVideo'){
      $('.question-container').append(chooseVideo)
    }
    if($(this).val()=='Extract'){
      $('.question-container').append(ExtractQuestion)
    }
    if($(this).val()=='E3raab'){
      $('.question-container').append(e3raabQuestion)
    }
    console.log($(this).val());
    $(window).scrollTop($('.questionType:last-child').offset().top)
  });


      // true or false

    var trueFalse =`<div class="questionType trueFalse-Question">
                        <textarea name="" id="" style="height: 100px;" class="w-100 rounded-3 form-control shadow  p-2 text-center" placeholder="Write your Question Here"></textarea>
                    
                        <p class="fw-bold text-start my-3 answerThefollowing">Select the correct Answer:</p>
                        <div class="row mx-0 align-items-center trueOrFalse">
                                                            
                         </div>
                         <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Delete
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>   `
    
    
      $('body').on('change', '.trueFalse-Question label input', function(){
        $(this).closest('.questionType').find('.choice').removeClass('correctChoice')
          $(this).closest('.choice').addClass('correctChoice')
      })

      $('body').on('click', '.trueFalse-Question .submitQ',function(){
        var checkd = false ;
        $(this).closest('.questionType').find('.choice').each(function(){
            if($(this).hasClass('correctChoice')){
              checkd = true ;
            }
        })
        if($(this).closest('.questionType').find('textarea').val()==0 || $(this).closest('.questionType').find('textarea').val()==''){
          alert('please Write the question')
        }
        else if(!checkd){
          alert('please Choose the correct answer')
        }
        else{
          $(this).closest('.questionType').addClass('submited')
          questions.push({
            type:'trueFalse',
            Qheader:$(this).closest('.questionType').find('textarea').val(),
            answer:$(this).closest('.questionType').find('.correctChoice input').val()
          })
        $('.pickQuestion-container').show();
          console.log(questions);
        }
      })


      //Choice Question

    var choose = `
    <div class="questionType choose-Question">
                        <textarea name="" id="" style="height: 100px;" class="w-100 rounded-3 form-control shadow  p-2 text-center" placeholder="Write your Question Here"></textarea>
                            <div class="d-flex ">
                                <button class="addChoiceBtn btn btn-success shadow rpl rpl-dark main-font2 my-2 mx-auto">
                                    Add Choice
                                </button>
                            </div>
                        <div class="choices-container mt-5">
                            <label for="" class="choice card rounded-4 shadow border-0 my-4">
                                
                                <div class="card-body p-4 px-4 d-flex align-items-center">
                                    <div class="choiceLetter  d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                        <span>A</span>
                                        <i class="fa fa-check d-none"></i>
                                        <i class="fa fa-times d-none"></i>
                                    </div>
                                    
                                    <input type="text" placeholder="Write Choice" class="choiceInput text-center main-font2 w-75 mx-auto form-control shadow rounded-2">
                                    
                                    <button class="btn text-danger deleteChoice main-font2 rpl rpl-dark rounded-circle border-0 shadow-none">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    
                                </div>
                            </label>
                            <label for="" class="choice card rounded-4 shadow border-0 my-4">
                                
                                <div class="card-body p-4 px-4 d-flex align-items-center">
                                    <div class="choiceLetter  d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                        <span>B</span>
                                        <i class="fa fa-check d-none"></i>
                                        <i class="fa fa-times d-none"></i>
                                    </div>
                                    
                                    <input type="text" placeholder="Write Choice" class="choiceInput text-center main-font2 w-75 mx-auto form-control shadow rounded-2">
                                    
                                    <button class="btn deleteChoice text-danger main-font2 rpl rpl-dark rounded-circle border-0 shadow-none">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    
                                </div>
                            </label>
                            
                        </div>
                        <textarea class="explain form-control rounded-2 shadow my-3 text-center main-font2" placeholder="Explaination" style="height: 100px;"></textarea>
                        <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Delete
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>
    
    `

      $('body').on('click', '.addChoiceBtn',function(){
        var i = 0
        $(this).closest('.questionType').find('.choices-container').append(`
           <label for="" class="choice card rounded-4 shadow border-0 my-4">
                                
                                <div class="card-body p-4 px-4 d-flex align-items-center">
                                    <div class="choiceLetter  d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                        <span>A</span>
                                        <i class="fa fa-check d-none"></i>
                                        <i class="fa fa-times d-none"></i>
                                    </div>
                                    
                                    <input type="text" placeholder="Write Choice" class="choiceInput text-center main-font2 w-75 mx-auto form-control shadow rounded-2">
                                    
                                    <button class="btn text-danger deleteChoice main-font2 rpl rpl-dark rounded-circle border-0 shadow-none">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    
                                </div>
                            </label>
          `)
          $('.choice').each(function(){
            $(this).find('.choiceLetter').text(String.fromCharCode(i+97).toUpperCase())
            i++
          })
      })
      $('body').on('click', '.choiceInput',function(e){
        e.stopPropagation()

      })
      $('body').on('click', '.deleteChoice',function(e){
        e.stopPropagation()
        var i1=0
        $(this).closest('.questionType').find('.choice').each(function(){
          i1++
        })
        if(i1>2){
          console.log('sad');
        var i = 0
        $(this).closest('.choice').remove()
        $(this).closest('.questionType').find('.choice').each(function(){
            $(this).find('.choiceLetter').text(String.fromCharCode(i+97).toUpperCase())
            i++
          })
        }
        else{
          $(this).closest('.questionType').find('.deleteChoice').attr('disabled', 'disabled')
          var windowHeight = $(window).height();
        var desiredBottom =80;

    var newPosition = windowHeight - desiredBottom;
        $(`
        <div class="updated mx-auto position-fixed d-flex align-items-center bg-danger text-white  shadow fw-bold" style="top:120%">
            <i class="fa fa-check-circle text-white fs-4 me-3 main-font2"></i> The minimum number of choices is two
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
        $('.deleteChoice').attr('disabled', false)
    }, 2000);
        }
      })
      $('body').on('click', '.choose-Question label', function(e){
        $(this).closest('.questionType').find('.choice').removeClass('correctChoice')
          $(this).addClass('correctChoice')
      })
      $('body').on('click', '.choose-Question .submitQ',function(){
        var checkd = false ;
        var value = true ;
        $(this).closest('.questionType').find('.choice').each(function(){
            if($(this).hasClass('correctChoice')){
              checkd = true ;
            }
            if($(this).find('.choiceInput').val()==0 || $(this).find('.choiceInput').val()==''){
                value = false ;
            }
            
        })
        if($(this).closest('.questionType').find('textarea').val()==0 || $(this).closest('.questionType').find('textarea').val()==''){
          alert('please Write the question')
        }
        else if(!checkd){
          alert('please Choose the correct answer')
        }
        else if(!value){
          alert('please fill all choice inputs')
        }
        else{
          $(this).closest('.questionType').addClass('submited')
          answers = [] ;
          $(this).closest('.questionType').find('.choiceInput').each(function(){
            answers.push($(this).val()) ;
          })
          questions.push({
            questionType:'choose' , 
            questionHeader:$('textarea').val(),
            choices:answers,
            rightChoice: $('.correctChoice .choiceInput').val() , 
            explain : $('.explain').val(),
            
          })
          $('.pickQuestion-container').show();
          console.log(questions);
        }
      })

      //Choice Audio Question
var chooseAudio =`
<div class="questionType chooseAudio-Question">
                        <div class="mediaContainer d-flex flex-column">
                            <button class="upload mx-auto my-2 btn btn-success main-font2 shadow rpl rpl-dark">
                                Upload Voice
                            </button>
                            <input type="file" accept=".mp3,audio/*" class="d-none" name="" id="">
                            <audio controls class="w-100 my-3" src="" >
                                
                            </audio>
                        </div>
                        <div class="d-flex ">
                                <button class="addChoiceBtn btn btn-success shadow rpl rpl-dark main-font2 my-2 mx-auto">
                                    Add Choice
                                </button>
                            </div>
                        <div class="choices-container mt-5">
                            <label for="" class="choice card rounded-4 shadow border-0 my-4">
                                
                                <div class="card-body p-4 px-4 d-flex align-items-center">
                                    <div class="choiceLetter  d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                        <span>A</span>
                                        <i class="fa fa-check d-none"></i>
                                        <i class="fa fa-times d-none"></i>
                                    </div>
                                    
                                    <input type="text" placeholder="Write Choice" class="choiceInput text-center main-font2 w-75 mx-auto form-control shadow rounded-2">
                                    
                                    <button class="btn text-danger deleteChoice main-font2 rpl rpl-dark rounded-circle border-0 shadow-none">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    
                                </div>
                            </label>
                            <label for="" class="choice card rounded-4 shadow border-0 my-4">
                                
                                <div class="card-body p-4 px-4 d-flex align-items-center">
                                    <div class="choiceLetter  d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                        <span>B</span>
                                        <i class="fa fa-check d-none"></i>
                                        <i class="fa fa-times d-none"></i>
                                    </div>
                                    
                                    <input type="text" placeholder="Write Choice" class="choiceInput text-center main-font2 w-75 mx-auto form-control shadow rounded-2">
                                    
                                    <button class="btn deleteChoice text-danger main-font2 rpl rpl-dark rounded-circle border-0 shadow-none">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    
                                </div>
                            </label>
                            
                        </div>
                        <textarea class="explain form-control rounded-2 shadow my-3 text-center main-font2" placeholder="Explaination" style="height: 100px;"></textarea>
                        <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Delete
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>
`

      $('body').on('click','.chooseAudio-Question .upload',function(){
        $(this).next('input').click();
      })
      $('body').on('change','.mediaContainer input',function(target){
          const urlObj = URL.createObjectURL(target.target.files[0]);
          $(this).next('audio').attr('src',urlObj)
      })
      $('body').on('click', '.chooseAudio-Question label', function(e){
        $(this).closest('.questionType').find('.choice').removeClass('correctChoice')
          $(this).addClass('correctChoice')
      })
      $('body').on('click', '.chooseAudio-Question .submitQ',function(){
        var checkd = false ;
        var value = true ;
        $(this).closest('.questionType').find('.choice').each(function(){
            if($(this).hasClass('correctChoice')){
              checkd = true ;
            }
            if($(this).find('.choiceInput').val()==0 || $(this).find('.choiceInput').val()==''){
                value = false ;
            }
            
        })
        if($(this).closest('.questionType').find('input[type="file"]').val()==0 || $(this).closest('.questionType').find('input[type="file"]').val()==null){
          alert('please Insert th Audio File')
        }
        else if(!checkd){
          alert('please Choose the correct answer')
        }
        else if(!value){
          alert('please fill all choice inputs')
        }
        else{
          $(this).closest('.questionType').addClass('submited')
          answers = [] ;
          $(this).closest('.questionType').find('.choiceInput').each(function(){
            answers.push($(this).val()) ;
          })
          questions.push({
            questionType:'chooseAudio' , 
            questionHeader:$(this).closest('.questionType').find('input[type="file"]').val(),
            choices:answers,
            rightChoice: $(this).closest('.questionType').find('.correctChoice .choiceInput').val() ,
            explain : $(this).closest('.questionType').find('.explain').val() 
            
          })
          $('.pickQuestion-container').show();
          console.log(questions);
        }
      })


      var chooseVideo =`
<div class="questionType chooseVideo-Question">
                        <div class="mediaContainer d-flex flex-column">
                            <button class="upload mx-auto my-2 btn btn-success main-font2 shadow rpl rpl-dark">
                                Upload Voice
                            </button>
                            <input type="file" accept=".mp4,video/*" class="d-none" name="" id="">
                            <video controls class="w-100 my-3" src="" >
                                
                            </video>
                        </div>
                        <div class="d-flex ">
                                <button class="addChoiceBtn btn btn-success shadow rpl rpl-dark main-font2 my-2 mx-auto">
                                    Add Choice
                                </button>
                            </div>
                        <div class="choices-container mt-5">
                            <label for="" class="choice card rounded-4 shadow border-0 my-4">
                                
                                <div class="card-body p-4 px-4 d-flex align-items-center">
                                    <div class="choiceLetter  d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                        <span>A</span>
                                        <i class="fa fa-check d-none"></i>
                                        <i class="fa fa-times d-none"></i>
                                    </div>
                                    
                                    <input type="text" placeholder="Write Choice" class="choiceInput text-center main-font2 w-75 mx-auto form-control shadow rounded-2">
                                    
                                    <button class="btn text-danger deleteChoice main-font2 rpl rpl-dark rounded-circle border-0 shadow-none">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    
                                </div>
                            </label>
                            <label for="" class="choice card rounded-4 shadow border-0 my-4">
                                
                                <div class="card-body p-4 px-4 d-flex align-items-center">
                                    <div class="choiceLetter  d-flex align-items-center justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                        <span>B</span>
                                        <i class="fa fa-check d-none"></i>
                                        <i class="fa fa-times d-none"></i>
                                    </div>
                                    
                                    <input type="text" placeholder="Write Choice" class="choiceInput text-center main-font2 w-75 mx-auto form-control shadow rounded-2">
                                    
                                    <button class="btn deleteChoice text-danger main-font2 rpl rpl-dark rounded-circle border-0 shadow-none">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    
                                </div>
                            </label>
                            
                        </div>
                         <textarea class="explain form-control rounded-2 shadow my-3 text-center main-font2" placeholder="Explaination" style="height: 100px;"></textarea>
                        <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Delete
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>
`
      // Choice Video Question
      $('body').on('click','.chooseVideo-Question .upload',function(){
        $(this).next('input').click();
      })
      $('body').on('change','.mediaContainer input',function(target){
          const urlObj = URL.createObjectURL(target.target.files[0]);
          $(this).next('video').attr('src',urlObj)
      })
      $('body').on('click', '.chooseVideo-Question label', function(e){
        $(this).closest('.questionType').find('.choice').removeClass('correctChoice')
          $(this).addClass('correctChoice')
      })
      $('body').on('click', '.chooseVideo-Question .submitQ',function(){
        var checkd = false ;
        var value = true ;
        $(this).closest('.questionType').find('.choice').each(function(){
            if($(this).hasClass('correctChoice')){
              checkd = true ;
            }
            if($(this).find('.choiceInput').val()==0 || $(this).find('.choiceInput').val()==''){
                value = false ;
            }
            
        })
        if($(this).closest('.questionType').find('input[type="file"]').val()==0 || $(this).closest('.questionType').find('input[type="file"]').val()==null){
          alert('please Insert th Video File')
        }
        else if(!checkd){
          alert('please Choose the correct answer')
        }
        else if(!value){
          alert('please fill all choice inputs')
        }
        else{
          $(this).closest('.questionType').addClass('submited')
          answers = [] ;
          $(this).closest('.questionType').find('.choiceInput').each(function(){
            answers.push($(this).val()) ;
          })
          questions.push({
            questionType:'chooseVideo' , 
            questionHeader:$(this).closest('.questionType').find('input[type="file"]').val(),
            choices:answers,
            rightChoice: $(this).closest('.questionType').find('.correctChoice .choiceInput').val() , 
            explain : $(this).closest('.questionType').find('.explain').val()
            
          })
          $('.pickQuestion-container').show();
          console.log(questions);
        }
      })

      // Complete Question

      
      var completeQuestion = `
      <div class="questionType Complete-Question">
                        <h4 class="text-center my-3 fw-bold">Complete Question</h4>
                        <label for="" class="fw-bold main-font2 mt-3 mb-1">
                            Please Write the pargrapgh :
                        </label>
                        <textarea name="" id="" style="height: 100px;" class="w-100 rounded-3 form-control shadow  p-2 text-center" placeholder="Write the pargrapgh here"></textarea>
                        <label for="" class="fw-bold main-font2 mt-3">
                            Please Select the word you want the student to complete :
                        </label>
                        <p class="completePargraph fw-bold border rounded-2 border-2 p-2 py-3 main-font2 text-center border-success my-2">

                        </p>
                        
                        <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Delete
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>
      `

      $('body').on('keyup', '.Complete-Question textarea', function(){
        splitArr = [] ;
        var ret = $(this).val().split(" ");
        splitArr = ret 
        console.log(splitArr);
        $(this).closest('.questionType').find('.completePargraph').empty();
        for(var i = 0; i < ret.length; i++){
          $(this).closest('.questionType').find('.completePargraph').append(`<span>${ret[i]}</span> `)
        }
      })
      $('body').on('click','.Complete-Question .completePargraph span', function(){
        $(this).toggleClass('text-success')
      })


      $('body').on('click', '.Complete-Question .submitQ',function(){
        var checkd = false ;
        var selected = [];
        $(this).closest('.questionType').find('.completePargraph span').each(function(){
            if($(this).hasClass('text-success')){
              checkd = true ;
              selected.push($(this).text());
            }
        })
        if($(this).closest('.questionType').find('textarea').val()==0 || $(this).closest('.questionType').find('textarea').val()==''){
          alert('please Write the Pargrapgh')
        }
        else if(!checkd){
          alert('please select at least one word')
        }
        else{
          $(this).closest('.questionType').addClass('submited')
          questions.push({
            questionType: 'Complete',
            questionHeader:' Complete the following paragraph',
            paragraph : $(this).closest('.questionType').find('textarea').val(),
            answers :selected
          },)
        $('.pickQuestion-container').show();
          console.log(questions);
        }
      })

      //Read Question
      var ReadQuesiton = `
      <div class="questionType Read-Question">
                        <h4 class="text-center my-3 fw-bold">Read And Answer Question</h4>
                        <textarea name="" id="" style="height: 100px;" class="w-100 paraContainer mb-2 rounded-3 form-control shadow  p-2 text-center" placeholder="Write the pargrapgh here"></textarea>
                        <div class="text-center my-3">
                            <button class="addQ btn btn-success rounded-2 shadow mx-auto main-font2">Add another question</button>
                        </div>
                        <div class="singleQ-container">
                            <div class="singleQ card rounded-3 overflow-hidden shadow my-2">
                                <div class="card-body">
                                    <div class="d-flex align-items-baseline">
                                        <span class="main-font2">1- </span>
                                        <div class="flex-grow-1 ms-2">
                                            <input type="text" placeholder="Write Question Here" class="flex-grow-1  main-font2 form-control text-center shadow rounded-2 border-success">
                                        <textarea name="" id="" style="height: 100px;" class="w-100  my-2 rounded-3 form-control shadow  p-2 text-center" placeholder="Write the Answer here"></textarea>
                                        </div>
                                        <button class="btn deleteQ text-danger main-font2 rpl rpl-dark rounded-circle d-flex align-items-center justify-content-center shadow-none ms-2" style="width: 30px;height: 30px;">
                                            <i class="fa fa-times"></i>
                                        </button>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Delete
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>
      `
      $('body').on('click', '.Read-Question .addQ',function(){
        var i = 0
        $(this).closest('.questionType').find('.singleQ-container').append(`
           <div class="singleQ card rounded-3 overflow-hidden shadow my-2">
                            <div class="card-body">
                                <div class="d-flex align-items-baseline">
                                    <span class="main-font2">1- </span>
                                    <div class="flex-grow-1 ms-2">
                                        <input type="text" placeholder="Write Question Here" class="flex-grow-1  main-font2 form-control text-center shadow rounded-2 border-success">
                                    <textarea name="" id="" style="height: 100px;" class="w-100  my-2 rounded-3 form-control shadow  p-2 text-center" placeholder="Write the Answer here"></textarea>
                                    </div>
                                    <button class="btn deleteQ text-danger main-font2 rpl rpl-dark rounded-circle d-flex align-items-center justify-content-center shadow-none ms-2" style="width: 30px;height: 30px;">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
          `)
          $(this).closest('.questionType').find('.singleQ').each(function(){
            $(this).find('span').text(`${i+1}-`)
            i++
          })
      })
      $('body').on('click', '.Read-Question .deleteQ',function(e){
        e.stopPropagation()
        var i1=0
        $(this).closest('.questionType').find('.singleQ').each(function(){
          i1++
        })
        if(i1>1){
          console.log('sad');
        var i = 0
        $(this).closest('.singleQ').remove()
        $(this).closest('.questionType').find('.singleQ').each(function(){
            $(this).find('span').text(`${i+1}-`)
            i++
          })
        }
        else{
          $(this).closest('.questionType').find('.deleteQ').attr('disabled', 'disabled')
          var windowHeight = $(window).height();
        var desiredBottom =80;

    var newPosition = windowHeight - desiredBottom;
        $(`
        <div class="updated mx-auto position-fixed d-flex align-items-center bg-danger text-white  shadow fw-bold" style="top:120%">
            <i class="fa fa-check-circle text-white fs-4 me-3 main-font2"></i> The minimum number of choices is one
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
        $(this).closest('.questionType').find('.deleteQ').attr('disabled', false)
    }, 2000);
        }
      })

      $('body').on('click', '.Read-Question .submitQ',function(){
        var filled = true ;
        var filled2 = true ;
        $(this).closest('.questionType').find('.singleQ').each(function(){
            if($(this).find('input').val() == 0 || $(this).find('input').val() == ''){
              filled = false ;
            }
            if($(this).find('textarea').val() == 0 || $(this).find('textarea').val() == ''){
              filled2 = false ;
            }
        })
        if($(this).closest('.questionType').find('.paraContainer').val()==0 || $(this).closest('.questionType').find('.paraContainer').val()==''){
          alert('please Write the question')
        }
        else if(!filled){
          alert('please Write all Questions')
        }
        else if(!filled2){
          alert("please Write all Questions's Answers")
        }
        else{
          $(this).closest('.questionType').addClass('submited')
          var Q = [] ;
          var A = [] ;
          $(this).closest('.questionType').find('.singleQ textarea').each(function(){
            A.push($(this).val()) ;
          })
          $(this).closest('.questionType').find('.singleQ input').each(function(){
            Q.push($(this).val()) ;
          })
          questions.push({
            questionType: 'read',
            questionHeader:'Read',
            paragraph : $(this).closest('.questionType').find('.paraContainer').val(),
            answers :A,
            questions :Q
          },)
        $('.pickQuestion-container').show();
          console.log(questions);
        }
      })
      

      // e3raab Question
      
       var e3raabQuestion = `
       <div class="questionType e3raab-Question">
                        <h4 class="text-center my-3 fw-bold">e3raab Question</h4>
                        <label for="" class="fw-bold main-font2 mt-3 mb-1">
                            Find the expression position of underlined words :
                        </label>
                        <textarea name="" id="" style="height: 100px;" class="w-100 rounded-3 form-control shadow  p-2 text-center" placeholder="Write the pargrapgh here"></textarea>
                        <label for="" class="fw-bold main-font2 mt-3">
                            Please Select the word you want the student to Answer :
                        </label>
                        <p class="completePargraph fw-bold border rounded-2 border-2 p-2 py-3 main-font2 text-center border-success my-2">

                        </p>
                        <div class="answersDiv row mx-0 my-2">
                            
                        </div>
                        <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Cancel
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>
       `
      $('body').on('keyup', '.e3raab-Question textarea', function(){
        splitArr = [] ;
        var ret = $(this).val().split(" ");
        splitArr = ret 
        $(this).closest('.questionType').find('.completePargraph').empty();
        for(var i = 0; i < ret.length; i++){
          $(this).closest('.questionType').find('.completePargraph').append(`<span>${ret[i]}</span> `)
        }
      })
      
      $('body').on('click','.e3raab-Question .completePargraph span', function(){
        $(this).toggleClass('text-success')
        var found = false ;
        var val = ($(this).text()+`-`+$(this).index()) ;
        $(this).closest('.questionType').find('.answersDiv').find('div').each(function(){
          if($(this).attr('data-val') == val){
            $(this).remove() ; 
            found = true ;
          }
        })

        console.log($(this).text()+`-`+$(this).index());
        if(found){
          
        }
        else{
          $(this).closest('.questionType').find('.answersDiv').append(`
            <div class="col-lg-6 col-md-6 col-12 my-3" data-val="${$(this).text()+`-`+$(this).index()}">
                                  <div class="card border-0 shadow rounded-4">
                                    <div class="card-body d-flex aling-align-items-end flex-wrap">
                                      <div class="rounded-2 fw-bold text-success d-block me-2">
                                          ${$(this).text()} :
                                      </div>
                                      <input type="text" style="outline:none;" class="text-center fw-bold flex-grow-1 bg-transparent border-0 text-success" placeholder="Write your answer here">
                                    </div>
                                  </div>
                    </div>
            `)
        }
      })
      
      $('body').on('click', '.e3raab-Question .submitQ',function(){
        var checkd = false ;
        var selected = [];
        var filled = true ;
        $(this).closest('.questionType').find('.completePargraph span').each(function(){
            if($(this).hasClass('text-success')){
              checkd = true ;
              selected.push($(this).text());
            }
        })
        $(this).closest('.questionType').find('.answersDiv div').each(function(){
          if($(this).find('input').val() == 0 || $(this).find('input').val() == '' ){
            filled = false ;
          }
        })
        if($(this).closest('.questionType').find('textarea').val()==0 || $(this).closest('.questionType').find('textarea').val()==''){
          alert('please Write the Pargrapgh')
        }
        else if(!checkd){
          alert('please select at least one word')
        }
        else if(!filled){
          alert('please write all answers')
        }
        else{
          var words = [] ;
          var answers = [] ;
          $(this).closest('.questionType').find('.completePargraph .text-success').each(function() {
            words.push($(this).text()) ;
          })
          $(this).closest('.questionType').find('.answersDiv input').each(function() {
              answers.push($(this).val()) ;
          })
          questions.push({
            questionType: 'e3raab',
            questionHeader:' Find the expression position of underlined words',
            paragraph : $(this).closest('.questionType').find('textarea').val() ,
            words :words,
            answers :answers
          },)
        $('.pickQuestion-container').show();
          console.log(questions);
          $(this).closest('.questionType').addClass('submited')
        }
      })

      // Extract Question


      var ExtractQuestion = `
       <div class="questionType e3raab-Question">
                        <h4 class="text-center my-3 fw-bold">Extract Question</h4>
                        <label for="" class="fw-bold main-font2 mt-3 mb-1">
                            Find the expression position of underlined words :
                        </label>
                        <textarea name="" id="" style="height: 100px;" class="w-100 rounded-3 form-control shadow  p-2 text-center" placeholder="Write the pargrapgh here"></textarea>
                        <label for="" class="fw-bold main-font2 mt-3">
                            Please Select the word you want the student to complete :
                        </label>
                        <p class="completePargraph fw-bold border rounded-2 border-2 p-2 py-3 main-font2 text-center border-success my-2">

                        </p>
                        <div class="answersDiv row mx-0 my-2">
                            
                        </div>
                        <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Delete
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>
       `
      $('body').on('keyup', '.Extract-Question textarea', function(){
        splitArr = [] ;
        var ret = $(this).val().split(" ");
        splitArr = ret 
        $(this).closest('.questionType').find('.completePargraph').empty();
        for(var i = 0; i < ret.length; i++){
          $(this).closest('.questionType').find('.completePargraph').append(`<span>${ret[i]}</span> `)
        }
      })
      
      $('body').on('click','.Extract-Question .completePargraph span', function(){
        $(this).toggleClass('text-success')
        var found = false ;
        var val = ($(this).text()+`-`+$(this).index()) ;
        $(this).closest('.questionType').find('.answersDiv').find('div').each(function(){
          if($(this).attr('data-val') == val){
            $(this).remove() ; 
            found = true ;
          }
        })

        console.log($(this).text()+`-`+$(this).index());
        if(found){
          
        }
        else{
          $(this).closest('.questionType').find('.answersDiv').append(`
            <div class="col-lg-6 col-md-6 col-12 my-3" data-val="${$(this).text()+`-`+$(this).index()}">
                                  <div class="card border-0 shadow rounded-4">
                                    <div class="card-body d-flex aling-align-items-end flex-wrap">
                                      <div class="rounded-2 fw-bold text-success d-block me-2">
                                          ${$(this).text()} :
                                      </div>
                                      <input type="text" style="outline:none;" class="text-center fw-bold flex-grow-1 bg-transparent border-0 text-success" placeholder="Write your answer here">
                                    </div>
                                  </div>
                    </div>
            `)
        }
      })
      
      $('body').on('click', '.Extract-Question .submitQ',function(){
        var checkd = false ;
        var selected = [];
        var filled = true ;
        $(this).closest('.questionType').find('.completePargraph span').each(function(){
            if($(this).hasClass('text-success')){
              checkd = true ;
              selected.push($(this).text());
            }
        })
        $(this).closest('.questionType').find('.answersDiv div').each(function(){
          if($(this).find('input').val() == 0 || $(this).find('input').val() == '' ){
            filled = false ;
          }
        })
        if($(this).closest('.questionType').find('textarea').val()==0 || $(this).closest('.questionType').find('textarea').val()==''){
          alert('please Write the Pargrapgh')
        }
        else if(!checkd){
          alert('please select at least one word')
        }
        else if(!filled){
          alert('please write all answers')
        }
        else{
          $(this).closest('.questionType').addClass('submited')
          var words = [] ;
          var answers = [] ;
          $(this).closest('.questionType').find('.completePargraph .text-success').each(function() {
            words.push($(this).text()) ;
          })
          $(this).closest('.questionType').find('.answersDiv input').each(function() {
              answers.push($(this).val()) ;
          })
          questions.push({
            questionType: 'Extract',
            questionHeader:' Extract the needed words',
            paragraph : $(this).closest('.questionType').find('textarea').val() ,
            words :answers,
            answers :words
          },)
        $('.pickQuestion-container').show();
          console.log(questions);
        }
      })



     //Match Question

      var matchQuestion = `
           <div class="questionType Match-Question text-center" id='capture'>
                        <h4 class="QHeader my-3 mt-5 fw-bold text-center">
                            Match The Following
                        </h4>
                        <div class="matchContainer position-relative row mx-0"  >
                          <div class="firstRow d-flex flex-column align-items-center flex-wrap justify-content-start my-4 col-6 text-center" >
                          <div class="mb-3 btns-group">
                              <button class="btn add-element btn-success shadow rounded-2 main-font2 rpl rpl-dark">
                                Add Elemnt
                            </button>
                              <button class="btn remove-element btn-danger main-font2 shadow rounded-2 rpl rpl-dark">
                                remove Elemnt
                            </button>
                          </div>
                            <div class="d-flex align-items-center fw-bold px-2 match-element my-2" >
                                <div class="card border-0 rounded-4 shadow">
                                      <div class="card-body d-flex align-items-center ps-1 pe-4 py-2 ">
                                      <div class="choiceLetter  d-flex align-items-center me-3 justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                                           <span>1</span>
                                                           <i class="fa fa-check d-none"></i>
                                                           <i class="fa fa-times d-none"></i>
                                                       </div>
                                                       <span class="match-text"><input type="text" placeholder="Element text" class="text-center form-control main-font2 shadow border-success flex-grow-1 rounded-2"></span>
                                      </div>
                                </div>
                              </div>
                          </div>
              
                          <div class="secondRow d-flex flex-column align-items-center flex-wrap justify-content-start my-4 col-6" >
                          <div class="mb-3 btns-group">
                              <button class="btn add-element btn-success shadow rounded-2 main-font2 rpl rpl-dark">
                                Add Elemnt
                            </button>
                              <button class="btn remove-element btn-danger main-font2 shadow rounded-2 rpl rpl-dark">
                                remove Elemnt
                            </button>
                          </div>
                            <div class="d-flex align-items-center fw-bold px-2 match-element my-2" >
                                <div class="card border-0 rounded-4 shadow">
                                      <div class="card-body d-flex align-items-center ps-1 pe-4 py-2 ">
                                      <div class="choiceLetter  d-flex align-items-center me-3 justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                                           <span>A</span>
                                                           <i class="fa fa-check d-none"></i>
                                                           <i class="fa fa-times d-none"></i>
                                                       </div>
                                      <span class="match-text"><input type="text" placeholder="Element text" class="text-center form-control main-font2 shadow border-success flex-grow-1 rounded-2"></span></div>
                                </div>
                              </div>
                          </div>
              
                          
                        </div>
                        <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Delete
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                </div>
      `

      $('body').on('click','.firstRow .add-element',function(){
        $(this).closest('.questionType').find('.firstRow').append(`
              <div class="d-flex align-items-center fw-bold px-2 match-element my-2" >
                                <div class="card border-0 rounded-4 shadow">
                                      <div class="card-body d-flex align-items-center ps-1 pe-4 py-2 ">
                                      <div class="choiceLetter  d-flex align-items-center me-3 justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                                           <span></span>
                                                           <i class="fa fa-check d-none"></i>
                                                           <i class="fa fa-times d-none"></i>
                                                       </div>
                                                       <span class="match-text"><input type="text" placeholder="Element text" class="text-center form-control main-font2 shadow border-success flex-grow-1 rounded-2"></span>
                                      </div>
                                </div>
                              </div>
          `)
          var i=1 ;
          $(this).closest('.questionType').find('.firstRow').find('.choiceLetter').each(function(){
            $(this).find('span').text(i)
            i++;
          })
          
      })


      $('body').on('click','.secondRow .add-element',function(){
        $(this).closest('.questionType').find('.secondRow').append(`
              <div class="d-flex align-items-center fw-bold px-2 match-element my-2" >
                                <div class="card border-0 rounded-4 shadow">
                                      <div class="card-body d-flex align-items-center ps-1 pe-4 py-2 ">
                                      <div class="choiceLetter  d-flex align-items-center me-3 justify-content-center fs-5 rounded-circle p-1 fw-bold ">
                                                           <span></span>
                                                           <i class="fa fa-check d-none"></i>
                                                           <i class="fa fa-times d-none"></i>
                                                       </div>
                                                       <span class="match-text"><input type="text" placeholder="Element text" class="text-center form-control main-font2 shadow border-success flex-grow-1 rounded-2"></span>
                                      </div>
                                </div>
                              </div>
          `)
          var i=0 ;
          $(this).closest('.questionType').find('.secondRow').find('.choiceLetter').each(function(){
            $(this).find('span').text(String.fromCharCode(i+97).toUpperCase())
            i++;
          })
          
      })

      $('body').on('click', '.remove-element', function(){
        if($(this).closest('.d-flex').find('.match-element:last').index()>1){
          $(this).closest('.d-flex').find('.match-element:last').remove();
        }
        
      })
      
      $('body').on('click', '.Match-Question .submitQ',function(){
        console.log($('.firstRow').length);
        var filled = true ;
        $(this).closest('.questionType').find('.match-element input').each(function(){
            if($(this).val()==0 || $(this).val()==''){
              filled = false ;
            }
        })
        if(!filled){
          alert('please write all answers')
        }
        else{
          var firstRow = [] ;
          var secondRow = [] ;
          var answers = [] ;
          $(this).closest('.questionType').find('.firstRow .match-element').each(function() {
            firstRow.push($(this).find('input').val()) ;
          })
          $(this).closest('.questionType').find('.secondRow .match-element').each(function() {
            secondRow.push($(this).find('input').val()) ;
          })
          if($(this).closest('.questionType').find('.firstRow').length >= $(this).closest('.questionType').find('.secondRow').length ){
            for (let i = 0; i < secondRow.length; i++) {
              answers.push(firstRow[i]+':'+secondRow[i])
            }
          }
          else{
            $(this).closest('.questionType').addClass('submited')
            for (let i = 0; i < firstRow.length; i++) {
              answers.push(firstRow[i]+':'+secondRow[i])
            }
          }
          questions.push({
            questionType:'Match' , 
        firstRow :firstRow,
        secondRow :secondRow,
        answers:answers

          },)


        $('.pickQuestion-container').show();
          console.log(questions);
        }
      })




      $('body').on('click','.DeleteQ', function(){
        $(this).closest('.questionType').remove();
        $('.pickQuestion-container').show();

      })




      $('body').on('click','.submitQ', function(){
        $(`.qNum:nth-child(${questions.length})`).addClass('bg-success')
          $(`.qNum:nth-child(${questions.length})`).addClass('text-white')
        // if(questions.length==examData.QestionsNum){
        //   $('.question-container').append(`
        //       <div class="btns d-flex align-items-center my-5 justify-content-center">
        //                 <button class="endExam btn btn-danger rounded-2 mx-2 rpl rpl-dark fw-bold main-font2 shadow">
        //                     Cancel Exam
        //                 </button>
        //                 <button class="finishExam btn btn-success rounded-2 mx-2 rpl rpl-dark fw-bold main-font2 shadow">
        //                     Submit Exam
        //                 </button>
        //             </div>
        //     `)
        //   $('.pickQuestion-container').remove();
        // }
        
      })
      $('body').on('click','.finishExam', function(){
        qNums = 0
        questions = []
        $('.questionType').each(function(){
          $(this).find('.submitQ').trigger('click');
          if($(this).hasClass('submited') == false){
            $(window).scrollTop($(this).offset().top)
            return false;
          }
        qNums++;
        })

        console.log(qNums);
        if(qNums == questions.length && qNums >0){
          $(this).remove()
          $('.pickQuestion-container').remove()
          $('.side-pick').remove()
          $('.question-container').empty();
          $('.question-container').append(
            `
            <div class=" d-flex align-items-center justify-content-center">
            <lord-icon
    src="https://cdn.lordicon.com/wzwygmng.json"
    trigger="loop"
    colors="primary:#31947b"
    style="width:250px;height:250px">
</lord-icon>
            </div>
            `
          )
        }
        

      })
})



