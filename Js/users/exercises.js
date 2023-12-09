jQuery(document).ready(function() {
    
    counter = 0
    exercise = [
      {
        questionType:'choose' , 
        questionHeader:' What is the question talking about !?',
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
    for (let i = 0; i < exercise.length; i++) {
        $('.QNumbers').append(`
        <li
                    class="nav-item  main-font2 d-flex flex-column align-items-start position-relative ps-md-3 ps-lg-3 w-100  pt-4 ">
                    <span>QuestionHeader</span>
                    <div class="Qstatus rounded-circle d-flex align-items-center justify-content-center">
                        <i class="fa fa-check main-font3 d-none"></i>
                        <i class="fa fa-times main-font3 d-none"></i>
                    </div>
                </li>
        `)
      
    }
    $('.QNumbers li:first-child').addClass('current')
    appendQuestion = function(counter){
      if(exercise[counter].questionType == 'choose'){
        $('.question-container').append(`
      <div class="card shadow border-0 rounded-0 questionType choose-Question">
                      <div class="card-header p-0 border border-1">
                          <div class="questionHeader  p-3 p-lg-5">
                              <div class="question-position text-muted main-font2 fw-bold mb-3">
                                  QUIZ QUESTION ${1} OF ${exercise.length}
                              </div>
                              <h4 class="question ">
                                  ${exercise[counter].questionHeader}
                              </h4>
                          </div>
                      </div>
                      <div class="card-body p-0 ">
                          <div class="choices-container"></div>
                      </div>
                  </div>
      `)
      for (let i = 0; i < exercise[counter].choices.length; i++) {
          $('.choices-container').append(`
          <label for="choice${i+1}" class=" d-block">
                              <input type="radio" class="d-none" name="QuestionNum${1}" id="choice${i+1}" value="${exercise[counter].choices[i]}">
                              <div class="choice   d-flex align-items-center px-3 py-4 px-lg-5">
                                  <div class="check  rounded-circle">
                                      <div class="rounded-circle w-100 h-100 d-flex align-items-center justify-content-center ">
                                          <i class="fa fa-check d-none"></i>
                                      <i class="fa fa-times d-none"></i>
                                      </div>
                                  </div>
                                  <p class="my-0 ms-3 main-font fw-bold">${exercise[0].choices[i]} </p>
                                  <p class="my-0 ms-auto me-0 main-font fw-bold AnswerState"> </p>
                              </div>
                          </label>
                
          `)
        
      }
  
      }
  
  
    }

    $('.explain-btn').click(function(){
      $('.explaination-container').removeClass('d-none').append(`
      <div class="card-header p-0  p-3 border-0" style="border:0px solid !important">
                    <div class="">
                        <div class="question-position text-muted main-font2 fw-bold mb-3">
                            Question ${(counter+1)}
                        </div>
                        <h4 class="">
                            Explaination of ${exercise[counter].questionHeader}
                        </h4>
                    </div>
                </div>
                <div class="card-body text-muted">
                      ${exercise[counter].explain}
                </div>
      `)
    })

    $('body').on('change', 'label input', function(){
      $('label input').attr('disabled', 'disabled')
      if($(this).val() == exercise[counter].rightChoice){
        $(this).closest('label').find('.choice').addClass('correctChoice')
        $(this).closest('.questionType').addClass('answeredRight')
        $(this).closest('label').find('.choice .AnswerState').addClass('text-success').text('Your answer is correct!')
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '../../Assests/mixkit-correct-answer-tone-2870.wav');
        audioElement.play()
      }
      else{
        $(this).closest('label').find('.choice').addClass('wrongChoice')
        $(this).closest('questionType').addClass('answeredWrong')
        $(this).closest('label').find('.choice .AnswerState').addClass('text-danger').text('Your answer is wrong!')
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '../../Assests/mixkit-game-show-wrong-answer-buzz-950.wav');
        audioElement.play()
      }
  })
    appendQuestion(counter)

    var correctAnswers = 0 ;
    var answersPercents = 0 ;
    $('.next-question-btn').click(function(){
      $('.explaination-container').addClass('d-none').empty();
      if($('.questionType').hasClass('answeredRight')){
        $('.QNumbers').find(`.nav-item:nth-child(${(counter+1)})`).removeClass('current').addClass('doneCorrect')
        correctAnswers++ ;
      }
      else{
        $('.QNumbers').find(`.nav-item:nth-child(${(counter+1)})`).removeClass('current').addClass('doneWrong')
      }
      $('.question-container').empty()
      if(counter + 1 < exercise.length){
        appendQuestion(counter)
      }
      
      counter = counter + 1 < exercise.length ? counter+1 : $(this).unbind('click').addClass(['disabled','d-none']) && $('.question-container').append('<div class="card"><div class="card-body text-center"><lord-icon src="https://cdn.lordicon.com/wzaldqbv.json" colors="primary:'+(dark?"#ffffff":"#000000")+'" trigger="loop" style="width:100%;height:350px"></lord-icon></div></div>') && $('.explain-btn').remove() && $('.explaination-container').remove() && $('.done-btn').removeClass('d-none') ;
      if(counter+1 <= exercise.length){
        $('.QNumbers').find(`.nav-item:nth-child(${(counter+1)})`).addClass('current')
      }
      
      
      
       answersPercents = ((correctAnswers/exercise.length)*100);
       chart.updateOptions({
        series: [answersPercents],

       })
    })




    

    console.log(localStorage.getItem('dark'));
    var dark = ( localStorage.getItem('dark') == 'false' || localStorage.getItem('dark')==null  ) ? false : true  ;

    var options = {
        chart: {
          height: 150,
          width:"100%" ,
          type: "radialBar" ,
          
        },
        responsive: [{
          breakpoint: 600,
          options: {
            chart :{
              height : 100,
            }
          },
      }] ,
        fill: {
            colors: ['#31947b']
          },
        series: [correctAnswers],
        
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%"
            },
            track: {
                background: 'transparent',
              },
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -10,
                show: false,
                color: "#888",
                fontSize: "13px"
              },
              value: {
                color: "#111",
                fontSize: "12px",
                show: true ,
                offsetY : 4,
                fontWeight :'1000',
                color :dark? '#ffffff' : "#31947b"
              }
            }
          }
        },
      
        
        labels: [""]
      };
      
      var chart = new ApexCharts(document.querySelector("#apexChart"), options);
      
      chart.render();
      
      
      $('body').on('click','.mode-switch',function() {
        dark = !dark
        localStorage.setItem('dark',dark)
        if(dark){
           $('lord-icon').attr('colors','primary:#fff')
        }
        else{
          $('lord-icon').attr('colors','primary:#000')
        }
    })
      
})

