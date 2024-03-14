jQuery(document).ready(function(){
    $('main').css('height',$('body').css('height'));
    var voices  = null;

    $(".emoji-container").disMojiPicker();
    twemoji.parse(document.body);
    $('.fa-face-smile').click(function(e){
        $(".emoji-container").toggleClass('d-none')
        e.stopPropagation()

    })
    $('.emoji-container').click(function(e){
        e.stopPropagation()
    })

    $(".emoji-container").picker(function(emoji){
        $('.message-input').val($('.message-input').val()+emoji)
        
    });
        
    $('body').click(function(){
        $(".emoji-container").addClass('d-none')
    })
    $('.fa-paper-plane').click(function(){
        if (!$('.message-input').hasClass('d-none')) {
            if($('.message-input').val()){
                $('.messages').append(`
                <div class="sent-message position-relative ms-auto main-font2 fw-bold my-2 bg-success p-1 text-white px-3 rounded-3 me-0 w-auto">${$('.message-input').val()}</div>
                `)
                $('.message-input').val(null)
            }
        }
        if(!$('.recording-display').hasClass('d-none')){
            // console.log(voices);

            $('.recording-display .fa-pause').click()
            $('audio').attr('src','');
        $('.recording-display').addClass('d-none')
        $('#mic').removeClass('d-none')
        $('.fa-face-smile').removeClass('d-none')
        $('.message-input').removeClass('d-none')
        $('.fa-paper-plane').removeClass('ms-auto')
            // if(voices.length > 0){
                
                setTimeout(() => {
                    $('.messages').append(`
                <div role="button" data-src=${voices} class="play-audio sent-audio position-relative ms-auto main-font2 fw-bold my-2 bg-success p-2 text-white px-3 rounded-3 me-0 w-auto">
                    <span class="text-white fw-bold me-2">${pad(totalSeconds % 60)}:${pad(parseInt(totalSeconds / 60))}</span>
                    <i class="fa fa-play"></i>
                </div>
                `)
                }, 100);
            // }
        }
    })
    let can_record = false ;
    let is_recording = false ;
    let recorder = null ; 
    let chunks = [];
    console.log(voices);
    function setUpAudio(){
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia({
                audio: true 
            })
            .then(setUpStream)
            .catch(err=>{
                console.log(err);
            })
        }
    }

    function setUpStream(stream){
        const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);
    const analyzer = context.createAnalyser();
    source.connect(analyzer);
    let rec = true ;

    // The array we will put sound wave data in
    const array = new Uint8Array(analyzer.fftSize);

    function getPeakLevel() {
        analyzer.getByteTimeDomainData(array);
        return array.reduce((max, current) => Math.max(max, Math.abs(current - 127)), 0) / 128;
    }

    function tick() {
        const peak = getPeakLevel();
        console.log(`${peak * 100}%`)
        
        $('.peak-container').animate({width: `${peak * 100}%`}, 10)
        if(rec){
            setTimeout(() => {
                requestAnimationFrame(tick);
            }, 200);
        }
    }
    var interval ;
    recorder = new MediaRecorder(stream)
        console.log(recorder);
        recorder.onstart = () =>{
            rec = true ;
            tick();
            totalSeconds = 0 ;
            interval = setInterval(setTime, 1000);
            $('.recording-display .fa-trash').removeClass('d-none')
            $('.seconds').html('00') ;
            $('.minuts').html('00') ;
            // $('.recording-display .fa-pause').removeClass('d-none')
        };
        recorder.ondataavailable = e => {
            chunks.push(e.data)
            console.log('data',e.data);
        }
        recorder.onstop = e => {
            const blob = new Blob(chunks , {type : 'audio/ogg'})
            console.log(chunks);
            rec = false ;
            chunks = [] ;
            const audioUrl = window.URL.createObjectURL(blob);
            $('audio').attr('src', audioUrl)
            voices = audioUrl
            console.log('voices array' , voices);
            stream.getTracks().forEach( track => track.stop() );
            clearInterval(interval);
            $('.recording-display .fa-trash').removeClass('d-none')
            $('.recording-display .fa-pause').addClass('d-none')
        }
        can_record = true ;
    }
    setUpAudio()    

    $('#mic').click(function(){
        console.log('Microphone clicked');
        if(!can_record){
            setUpAudio()    
        }
        $('.fa-face-smile').addClass('d-none')
        $('.fa-paper-plane').addClass('ms-auto')
        $('.message-input').addClass('d-none')
        $('#mic').addClass('d-none')
        $('.recording-display').removeClass('d-none')
       setTimeout(() => {
        is_recording = !is_recording ;
        if(is_recording){
            console.log('start');
            recorder.start();
            
            // setTimeout(() => {
            // recorder.stop() ;
            // recorder = null ;
            // can_record = !can_record
            // is_recording = !is_recording ;

            // }, 5000);
        }
        else{
        
        }
       }, 300);
    })

    $('.recording-display .fa-pause').click(function(){
        console.log('stop');
        recorder.stop() ;
        recorder = null ;
        can_record = !can_record;
        is_recording = !is_recording ;


    })

    $('.recording-display .fa-trash').click(function(){

        console.log('stop');
        recorder.stop() ;
        recorder = null ;
        can_record = !can_record;
        is_recording = !is_recording ;

        $('audio').attr('src','');
        $('.recording-display').addClass('d-none')
        $('#mic').removeClass('d-none')
        $('.fa-face-smile').removeClass('d-none')
        $('.message-input').removeClass('d-none')
        $('.fa-paper-plane').removeClass('ms-auto')


    })



    totalSeconds = 0
    function setTime() {
        ++totalSeconds;
        $('.seconds').html( pad(totalSeconds % 60)) ;
        $('.minuts').html( pad(parseInt(totalSeconds / 60))) ;
      }
      
      function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }

      playPause = false ;
      $('body').on('click','.play-audio',function() {
        if($(this).find('i').hasClass('fa-play')){
            playPause = true ;
            console.log('played');
        }
        else{
            playPause = false ;
        }
        if(playPause){
            $('audio').attr('src', $(this).attr('data-src'))
        $('audio')[0].play();
        $('.play-audio').find('.fa.fa-pause').addClass('fa-play')
        $('.play-audio').find('.fa.fa-pause').removeClass('fa-pause')
        $(this).find('.fa.fa-play').addClass('fa-pause')
        $(this).find('.fa.fa-play').removeClass('fa-play')
        }
        else{
            $('audio')[0].pause();
            $('audio')[0].currentTime = 0
            
        $(this).find('.fa.fa-pause').addClass('fa-play')
        $(this).find('.fa.fa-pause').removeClass('fa-pause')
        }
      })
      $('audio').on('ended',function() {
        $('.play-audio').find('.fa.fa-pause').addClass('fa-play')
        $('.play-audio').find('.fa.fa-pause').removeClass('fa-pause')
      })
})