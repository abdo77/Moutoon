jQuery(document).ready(function(){
    $('.pickQ').select2()


    var questions = []

    





      // true or false

    var trueFalse =`<div class="questionType trueFalse-Question">
                        <textarea name="" id="" style="height: 100px;" class="w-100 rounded-3 form-control shadow  p-2 text-center" placeholder="Write your Question Here"></textarea>
                    
                        <p class="fw-bold text-start my-3 answerThefollowing">Select the correct Answer:</p>
                        <div class="row mx-0 align-items-center trueOrFalse">
                            <label for="true" class="choice card rounded-4 shadow border-0 my-4">
                                                   <input type="radio"  id="true" class="d-none" name="trueFalse" value="true">
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
              
                                               <label for="false" class="choice card rounded-4 shadow border-0 my-4">
                                               <input type="radio" id="false" class="d-none" name="trueFalse" value="false">
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
                         </div>
                         <div class="btns d-flex align-items-center justify-content-center">
                            <button class="btn btn-danger shadow rounded-1 rpl rpl-dark main-font2 mx-2 DeleteQ">
                                Cancel
                            </button>
                            <button class="btn btn-success shadow rounded-1 rpl rpl-dark main-font2 mx-2 submitQ">
                                Add Question
                            </button>
                         </div>
                    </div>   `
    
    
      $('body').on('change', '.trueFalse-Question label input', function(){
        $('body').find('.choice').removeClass('correctChoice')
          $(this).closest('.choice').addClass('correctChoice')
      })

      $('body').on('click', '.trueFalse-Question .submitQ',function(){
        var checkd = false ;
        $('.choice').each(function(){
            if($(this).hasClass('correctChoice')){
              checkd = true ;
            }
        })
        if($('textarea').val()==0 || $('textarea').val()==''){
          alert('please Write the question')
        }
        else if(!checkd){
          alert('please Choose the correct answer')
        }
        else{
          questions.push({
            type:'trueFalse',
            Qheader:$('textarea').val(),
            answer:$('label input').val()
          })
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

      $('body').on('click', '.addChoiceBtn',function(){
        var i = 0
        $('.choices-container').append(`
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
        $('.choice').each(function(){
          i1++
        })
        if(i1>2){
          console.log('sad');
        var i = 0
        $(this).closest('.choice').remove()
          $('.choice').each(function(){
            $(this).find('.choiceLetter').text(String.fromCharCode(i+97).toUpperCase())
            i++
          })
        }
        else{
          $('.deleteChoice').attr('disabled', 'disabled')
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
        $('body').find('.choice').removeClass('correctChoice')
          $(this).addClass('correctChoice')
      })
      $('body').on('click', '.choose-Question .submitQ',function(){
        var checkd = false ;
        var value = true ;
        $('.choice').each(function(){
            if($(this).hasClass('correctChoice')){
              checkd = true ;
            }
            if($(this).find('.choiceInput').val()==0 || $(this).find('.choiceInput').val()==''){
                value = false ;
            }
            
        })
        if($('textarea').val()==0 || $('textarea').val()==''){
          alert('please Write the question')
        }
        else if(!checkd){
          alert('please Choose the correct answer')
        }
        else if(!value){
          alert('please fill all choice inputs')
        }
        else{

          answers = [] ;
          $('.choiceInput').each(function(){
            answers.push($(this).val()) ;
          })
          questions.push({
            questionType:'choose' , 
            questionHeader:$('textarea').val(),
            choices:answers,
            rightChoice: $('.correctChoice .choiceInput').val() , 
            
          })

          console.log(questions);
        }
      })

      //Choice Question

      $('body').on('click','.upload',function(){
        $(this).next('input').click();
      })
      $('body').on('change','.mediaContainer input',function(target){
          const urlObj = URL.createObjectURL(target.target.files[0]);
          $(this).next('audio').attr('src',urlObj)
      })
})