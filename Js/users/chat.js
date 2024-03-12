jQuery(document).ready(function(){
    $('main').css('height',$('body').css('height'));
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
        if($('.message-input').val() != null){
            $('.messages').append(`
            <div class="sent-message position-relative ms-auto main-font2 fw-bold my-2 bg-success p-1 text-white px-3 rounded-3 me-0 w-auto">${$('.message-input').val()}</div>
            `)
            $('.message-input').val(null)
        }
    })
    let can_record = false ;
    let is_recording = false ;
    let recorder = null ; 
    let chunks = [];

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
        $('.peak-container').append(`
            <div class="peak mx-1 p-1" style="height:${peak * 100}%">
            </div>
        `)
        $('.peak-container').animate({scrollLeft: $('.peak-container').prop("scrollWidth")}, 500)
        if(rec){
            setTimeout(() => {
                requestAnimationFrame(tick);
            }, 200);
        }
    }
    
    recorder = new MediaRecorder(stream)
        console.log(recorder);
        recorder.onstart = () =>{
            rec = true ;
            tick();
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
            $('audio').attr('src',audioUrl);
            stream.getTracks().forEach( track => track.stop() );
        }
        can_record = true ;
    }

    $('#mic').click(function(){
        console.log('Microphone clicked');
        if(!can_record){
            setUpAudio()    
        }

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
            console.log('stop');
            recorder.stop() ;
            recorder = null ;
            can_record = !can_record
        }
       }, 1000);
    })
})