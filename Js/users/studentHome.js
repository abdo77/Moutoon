jQuery(document).ready(function() {

   

    arrayLength = 3 ; 
    randomdChartValues = [20 , 80 ,90]
    
    for (let i = 0; i < arrayLength; i++) {

        $('.events #todayEvent .carousel-inner').append(`
        <div class=" carousel-item ">
                                        <!-- Single Course -->
                                        <div class="singleEvent d-flex flex-wrap align-items-center w-100">
                                            <div class="px-0 flex-shrink-0  d-flex align-items-center"
                                                style="width: 85px;height:120px">
                                                <div
                                                    class="rounded-circle icon-circle d-flex align-items-center green mx-auto">
                                                    <i class="fab fa-python mx-auto fs-3"></i>
                                                </div>
                                            </div>
                                            <div class="ms-2">
                                                <p class="fw-bold main-font mb-1">
                                                    Event Name
                                                </p>
                                                <div class="d-flex mx-0 gap-3 main-font2 text-muted fw-bold">
                                                    <div>
                                                        <div class="px-0 d-flex align-items-center markers">
                                                            <i class="fa fa-chevron-right   rounded-2 me-2"></i>
                                                            <span class="text-muted-sp-1">3 Topics</span>
                                                        </div>
                                                        <div class="px-0 d-flex align-items-center markers">
                                                            <i class="fa fa-chevron-right   rounded-2 me-2"></i>
                                                            <span class="text-muted-sp-1">50 Min</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="px-0 d-flex align-items-center markers">
                                                            <i class="fa fa-chevron-right   rounded-2 me-2"></i>
                                                            <span class="text-muted-sp-1">1 Speakers</span>
                                                        </div>
                                                        <div class="px-0 d-flex align-items-center markers">
                                                            <i class="fa fa-chevron-right   rounded-2 me-2"></i>
                                                            <span class="text-muted-sp-1">72 students</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 flex-grow w-100  d-flex ">
                                                <button
                                                    class="btn rpl rpl-dark  btn-light me-2 ms-2 shadow-none main-font mt-2 mb-0 ">Details</button>
                                                <button
                                                    class="btn border-0  bg-primary shadow-none text-white rpl rpl-dark main-font px-4 mt-2 mb-0 ">
                                                    Join Event
                                                </button>
                                            </div>
                                        </div>
                                    </div>
        `)



        $('.courses #todayCourse .carousel-inner').append(`
        <div class=" carousel-item ">
                                        <!-- Single Course -->
                                        <div class="singleCourse d-flex flex-wrap align-items-center w-100">
                                            <div class="px-0 flex-shrink-0" style="width: 85px;height:120px;overflow:hidden">
                                                <div class="chart" id="apexChart${i}"></div>
                                            </div>
                                            <div class="ms-2">
                                                <p class="fw-bold main-font mb-1">
                                                    Course Name
                                                </p>
                                                <div class="d-flex mx-0 gap-3 main-font2 text-muted fw-bold">
                                                    <div>
                                                        <div class="px-0 d-flex align-items-center markers">
                                                            <i class="fa fa-chevron-right   rounded-2 me-2"></i>
                                                            <span class="text-muted-sp-1">3 Topics</span>
                                                        </div>
                                                        <div class="px-0 d-flex align-items-center markers">
                                                            <i class="fa fa-chevron-right   rounded-2 me-2"></i>
                                                            <span class="text-muted-sp-1">50 Min</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="px-0 d-flex align-items-center markers">
                                                            <i class="fa fa-chevron-right   rounded-2 me-2"></i>
                                                            <span class="text-muted-sp-1">1 Speakers</span>
                                                        </div>
                                                        <div class="px-0 d-flex align-items-center markers">
                                                            <i class="fa fa-chevron-right   rounded-2 me-2"></i>
                                                            <span class="text-muted-sp-1">72 students</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 flex-grow w-100">
                                                <button
                                                    class="btn rpl rpl-dark  btn-light me-2 ms-2 shadow-none main-font mt-2 mb-0">Skip
                                                    This</button>
                                                <button
                                                    class="btn border-0  bg-success shadow-none text-white rpl rpl-dark main-font mt-2 px-4 mb-0">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
        `)
        var options = {
            chart: {
              height: 140,
              width:'100%' ,
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
            series: [randomdChartValues[i]],
            
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
                    show: false ,
                    offsetY : 4,
                    fontWeight :'1000',
                    color :dark? '#ffffff' : "#31947b"
                  }
                },
                track: {
                    background: '#d2e8e2',
                    strokeWidth: "100%"
                }
              },
              
            },
            stroke: {
                lineCap: "round"
            },
            
            labels: [""]
          };
          
          var chart = new ApexCharts(document.querySelector("#apexChart"+i+""), options);
          
          chart.render();
              
        $('.courses #todayCourse .carousel-indicators').append(`<button type="button" data-bs-target="#todayCourse" data-bs-slide-to="${i}"
        class=" bg-danger" aria-current="true" aria-label="Slide ${(i+1)}"></button>`)
        $('.events #todayEvent .carousel-indicators').append(`<button type="button" data-bs-target="#todayEvent" data-bs-slide-to="${i}"
        class=" bg-danger" aria-current="true" aria-label="Slide ${(i+1)}"></button>`)
    $('.carousel-indicators button:first-child').addClass('active')
    $(' .carousel-item:first-child').addClass('active')    
    }





    console.log(localStorage.getItem('dark'));
    var dark = ( localStorage.getItem('dark') == 'false' || localStorage.getItem('dark')==null  ) ? false : true  ;

 
    $('body').on('click','.like-btn', function() {
        $(this).toggleClass('liked')
    })
    $('body').on('click','.comment-btn', function() {
        $(this).closest('.post-container').find('.post-parent').addClass('d-none')
        $(this).closest('.post-container').find('.comments-container').removeClass('d-none')
    })
    $('body').on('click','.comments-container .fa-times', function() {
        $(this).closest('.post-container').find('.post-parent').removeClass('d-none')
        $(this).closest('.post-container').find('.comments-container').addClass('d-none')
    })

    

    $('body').on('click','.post-btn', function() {
        if($(this).closest('.comments-container').find('textarea').val()!=0){
            $(this).closest('.comments-container').find('.clearfix').append(`
        <div class="comment rounedd-2 border-bottom pb-4 py-3">
                                    <div class="d-flex align-items-center comment-pic">
                                        <div class="pic-container rounded-circle bg-success-light me-2 d-flex align-items-center">
                                            <i class="fa fa-user mx-auto text-success fs-5"></i>
                                        </div>
                                        <div>
                                            <p class="mb-0 main-font2" style="line-height: 1;">Ahmed ELhosseny</p>
                                            <span class="text-muted-sp-1 main-font3">10 hours ago</span>
                                        </div>
                                    </div>
                                
                                <div class="comment-text main-font2 text-muted-sp-1 ms-5 mt-2 ps-1">
                                        ${$(this).closest('.comments-container').find('textarea').val()}
                                </div>
                            </div>
        
        `)
        $(this).closest('.comments-container').find('textarea').val(null)
        $(this).closest('.comments-container').find('.clearfix').scrollTop($(this).closest('.comments-container').find('.clearfix')[0].scrollHeight);
        
        }
    })

})