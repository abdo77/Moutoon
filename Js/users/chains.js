jQuery(document).ready(async function ($) {

    $('main .link-container-div').css('left', $('main .nav-link.active').position().left)
    $('main .link-container-div').css('width', $('main .nav-link.active').css('width'))
    $('main .link-container-div').css('height', $('main .nav-link.active').css('height'))
    $('body').on('click','main .nav-link',function() {
        var position = $(this).position().left
        $('main .link-container-div').css('left', position)
        $('main .link-container-div').css('width', $($(this   )).css('width'))
    })
    

    basicURl = 'https://smiling-gray-xerus.cyclic.app'
const userToken = localStorage.getItem('userToken');
const data = await $.ajax({
    async: true,
    type: 'Get',
    url:basicURl+'/users/chains',
   
    content: 'application/json;charset=utf-8',
    processData: true,
    beforeSend: function(xhr) {
           xhr.setRequestHeader('Authorization', userToken);
     },

})

console.log(data);
var readed , recorded = false ;
if(data.success){
    for (let i = 0; i < data.chains.length; i++) {
        if(data.chains[i].type=='Readed'){
            readed = true ;
            $('#nav-readed').append(`
            <div class="card col-12 mb-3 series-container shadow rounded-3 border-0 mx-auto px-0">
            <div class="card-body row mx-0 bg-white rounded-3">
                <img src="../../Assests/cover.jpg" alt="" class="img-fluid col-12 col-md-3 col-lg-3">
                <div class="col-12 col-md-6 col-lg-6 d-flex flex-column">
                    <h3 class="seriesName mb-1">${data.chains[i].name}</h3>
                    <div class="rate-container">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-stroke"></i>
                    </div>
                    <div class="confirmStatus main-font2 fw-bold mt-2">
                        Requires Confirmation 
                        ${data.chains[i].need_confirmation ? '<i class="fa-regular fa-check-circle text-success"></i>':'<i class="fa-regular fa-times-circle text-danger"></i>'}
                    </div>
                    <div class="confirmTeacheer main-font2 fw-bold ">
                        Requires Teacher 
                        ${data.chains[i].need_teacher ? '<i class="fa-regular fa-check-circle text-success"></i>':'<i class="fa-regular fa-times-circle text-danger"></i>'}
                    </div>
                    <p class="levels-num fw-bold main-font2 mb-2">Levels: ${data.chains[i].levels.length}</p>
                    <p class="description mb-0 main-font fw-bold mt-auto">
                        ${data.chains[i].levels.length > 0 ? data.chains[i].levels[0].level.description : 0}
                    </p>
                </div>
                <div class="col-12 col-md-3 col-lg-3 d-flex flex-column">
                   
                    <a href="" class="btn shadow rounded-3 rpl rpl-dark  fw-bold w-100 mt-auto" id="${data.chains[i]._id}">Details</a>
                </div>
            </div>
        </div>
            `)
        }
        else if(data.chains[i].type=='Recorded'){
            recorded = true;
            $('#nav-recorded').append(`
            <div class="card col-12 mb-3 series-container shadow rounded-3 border-0 mx-auto px-0">
            <div class="card-body row mx-0 bg-white rounded-3">
                <img src="../../Assests/cover.jpg" alt="" class="img-fluid col-12 col-md-3 col-lg-3">
                <div class="col-12 col-md-6 col-lg-6 d-flex flex-column">
                    <h3 class="seriesName mb-1">${data.chains[i].name}</h3>
                    <div class="rate-container">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-stroke"></i>
                    </div>
                    <div class="confirmStatus main-font2 fw-bold mt-2">
                        Requires Confirmation 
                        ${data.chains[i].need_confirmation ? '<i class="fa-regular fa-check-circle text-success"></i>':'<i class="fa-regular fa-times-circle text-danger"></i>'}
                    </div>
                    <div class="confirmTeacheer main-font2 fw-bold ">
                        Requires Teacher 
                        ${data.chains[i].need_teacher ? '<i class="fa-regular fa-check-circle text-success"></i>':'<i class="fa-regular fa-times-circle text-danger"></i>'}
                    </div>
                    <p class="levels-num fw-bold main-font2 mb-2">Levels: ${data.chains[i].levels.length}</p>
                    <p class="description mb-0 main-font fw-bold mt-auto">
                        ${data.chains[i].levels.length > 0 ? data.chains[i].levels[0].level.description : 0}
                    </p>
                </div>
                <div class="col-12 col-md-3 col-lg-3 d-flex flex-column">
                   
                    <a href="" class="btn shadow rounded-3 rpl rpl-dark  fw-bold w-100 mt-auto" id="${data.chains[i]._id}">Details</a>
                </div>
            </div>
        </div>
            `)
        }
        
    }
}

if(!readed){
    $('#nav-readed').append(`

        <div class="card shadow rounded-3">
            <div class='card-body text-center main-font fw-bold'>
                No results found 
            </div> 
        </div>

    `)
}
else if(!recorded){
    $('#nav-recorded').append(`

        <div class="card shadow rounded-3">
            <div class='card-body text-center main-font fw-bold'>
                No results found 
            </div> 
        </div>

    `)
}

})

