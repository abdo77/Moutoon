jQuery(document).ready(function() {

    $('main .nav.nav-tabs').width(function(){
        var width=0 ;        
        $(this).find('.nav-link').each(function(){
            width = $(this).outerWidth() + width ;
            return width ;
        })
        return Math.ceil(width);
    })
    setTimeout(() => {
        $('main .link-container-div').css('left', $('main .nav-link.active').position().left)
    $('main .link-container-div').css('width', $('main .nav-link.active').css('width'))
    $('main .link-container-div').css('height', $('main .nav-link.active').css('height'))
    $('body').on('click','main .nav-link',function() {
        var position = $(this).position().left
        var position1 = $(this).position().top
        $('main .link-container-div').css('left', position)
        $('main .link-container-div').css('top', position1)
        $('main .link-container-div').css('width', $($(this)).css('width'))
    })
    $('main .nav.nav-tabs').width(function(){
        var width=0 ;        
        $(this).find('.nav-link').each(function(){
            width = $(this).outerWidth() + width ;
            return width ;
        })
        return Math.ceil(width);
    })
    
    }, 100);
    
    
  
    array = {
         "success": true,
         "chains": [
           {
             "name": "المتون",
             "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
             "type": "Readed",
             "levels": [
               {
                 "_id": "65470360c5320d552789d3b5",
                 "name": "المستوى الثاني",
                 "type": "Recorded",
                 "cover": "../../Assests/cover.jpg",
                 "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
                 "price": null,
                 "date": "2023-11-05T02:50:23.772Z",
                 "chain": "654700b48e6e36e06bc6c9f1",
                 "books": [],
                 "exercises": [
                   {
                     "exercise": null,
                     "_id": "65877b9f22237c8f99d01c99"
                   }
                 ],
                 "lessons": [
                   {
                     "lesson": null,
                     "_id": "6553b7b5d193b980e40ba95b"
                   },
                   {
                     "lesson": null,
                     "_id": "65877c3222237c8f99d01ce5"
                   }
                 ]
               },
               {
                 "_id": "65489c276cd1ec1a0cfba609",
                 "name": "المستوى الثالث",
                 "type": "Readed",
                 "cover": "../../Assests/cover.jpg",
                 "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
                 "price": null,
                 "date": "2023-11-06T07:54:34.684Z",
                 "chain": "654700b48e6e36e06bc6c9f1",
                 "books": [
                   {
                     "book": {
                       "_id": "655ff2e129894b5ff3f98637",
                       "name": "الأجرومية",
                       "cover": "/images/312278730_547038537343503_3299672620965268298_n.jpg",
                       "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
                       "price": 15,
                       "date": "2023-11-24T00:44:21.605Z"
                     },
                     "_id": "655ff2e129894b5ff3f98639"
                   }
                 ],
                 "exercises": [
                   {
                     "exercise": {
                       "_id": "655ff33b29894b5ff3f98666",
                       "name": "تدريبات الأجرومية",
                       "price": 20,
                       "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
                       "cover": "/images/312278730_547038537343503_3299672620965268298_n.jpg",
                       "chiled_exercise": [
                         {
                           "exercise": "655ff3a029894b5ff3f98698",
                           "_id": "655ff3a029894b5ff3f9869a"
                         },
                         {
                           "exercise": "6563a2c23e63033d6482f3b6",
                           "_id": "6563a2c23e63033d6482f3b8"
                         }
                       ]
                     },
                     "_id": "655ff33b29894b5ff3f98668"
                   }
                 ],
                 "lessons": [
                   {
                     "lesson": {
                       "_id": "6563a41c3e63033d6482f472",
                       "name": "الكلمة والكلام",
                       "cover": "/images/312278730_547038537343503_3299672620965268298_n.jpg",
                       "description": "في الأجرومية، يتم التفريق بين مفهومي الكلمة والكلام. الكلمة هي الوحدة الأصغر في اللغة، وتشير إلى تشكيلة من الأحرف تحمل معنى مستقل. بينما الكلام يشير إلى وحدة لغوية أكبر تتألف من مجموعة من الكلمات المرتبطة ببعضها البعض لتكوين جملة أو نص.",
                       "date": "2023-11-26T19:55:38.787Z"
                     },
                     "_id": "6563a41d3e63033d6482f475"
                   },
                   {
                     "lesson": {
                       "_id": "65651a4f6a3b7ddfde2d3507",
                       "name": "الكلمة والكلام2",
                       "cover": "/images/312278730_547038537343503_3299672620965268298_n.jpg",
                       "description": "في الأجرومية، يتم التفريق بين مفهومي الكلمة والكلام. الكلمة هي الوحدة الأصغر في اللغة، وتشير إلى تشكيلة من الأحرف تحمل معنى مستقل. بينما الكلام يشير إلى وحدة لغوية أكبر تتألف من مجموعة من الكلمات المرتبطة ببعضها البعض لتكوين جملة أو نص.",
                       "date": "2023-11-27T22:32:34.869Z"
                     },
                     "_id": "65651a516a3b7ddfde2d350a"
                   },
                   {
                     "lesson": {
                       "_id": "65653bcdb8e58903046ca139",
                       "name": "الدرس الثالث",
                       "cover": "/images/312278730_547038537343503_3299672620965268298_n.jpg",
                       "description": "في الأجرومية، يتم التفريق بين مفهومي الكلمة والكلام. الكلمة هي الوحدة الأصغر في اللغة، وتشير إلى تشكيلة من الأحرف تحمل معنى مستقل. بينما الكلام يشير إلى وحدة لغوية أكبر تتألف من مجموعة من الكلمات المرتبطة ببعضها البعض لتكوين جملة أو نص.",
                       "date": "2023-11-28T01:00:16.224Z"
                     },
                     "_id": "65653bceb8e58903046ca13c"
                   }
                 ]
               }
             ]
           },
           {
             "name": "المتون مسجلة",
             "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
             "type": "Recorded",
             "levels": [
               {
                 "_id": "65877eb822237c8f99d01e3e",
                 "name": "المستوى الأول",
                 "type": "Recorded",
                 "cover": "../../Assests/cover.jpg",
                 "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
                 "price": 10,
                 "date": "2023-12-24T00:28:23.048Z",
                 "chain": "65877e9322237c8f99d01e06",
                 "books": [],
                 "exercises": [
                   {
                     "exercise": {
                       "_id": "65877f4522237c8f99d01e6c",
                       "name": "تدريبات الأجرومية",
                       "price": 10,
                       "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
                       "cover": "/images/312278730_547038537343503_3299672620965268298_n.jpg",
                       "chiled_exercise": [
                         {
                           "exercise": "65877f9822237c8f99d01e9c",
                           "_id": "65877f9922237c8f99d01e9e"
                         }
                       ]
                     },
                     "_id": "65877f4622237c8f99d01e6e"
                   }
                 ],
                 "lessons": [
                   {
                     "lesson": {
                       "_id": "6587805b22237c8f99d01edb",
                       "name": "الدرس الأول",
                       "cover": "/images/312278730_547038537343503_3299672620965268298_n.jpg",
                       "description": "في الأجرومية، يتم التفريق بين مفهومي الكلمة والكلام. الكلمة هي الوحدة الأصغر في اللغة، وتشير إلى تشكيلة من الأحرف تحمل معنى مستقل. بينما الكلام يشير إلى وحدة لغوية أكبر تتألف من مجموعة من الكلمات المرتبطة ببعضها البعض لتكوين جملة أو نص.",
                       "date": "2023-12-24T00:28:23.056Z"
                     },
                     "_id": "6587805c22237c8f99d01ede"
                   }
                 ]
               }
             ]
           },
           {
             "name": "2المتون مسجلة",
             "description": "الأجرومية في اللغة العربية هي نمط لغوي يهدف إلى توفير مرونة في تحليل وتصميم الجمل والنصوص. وتتميز الأجرومية بعدم التركيز على ترتيب الكلمات أو النحو، بل تركز على تحديد القيود والشروط التي يجب أن تتوفر لتنفيذ الأوامر البرمجية المطلوبة. وبفضل هذا النمط، يمكن للمطورين التركيز على ما يجب أن يفعله البرنامج بدلاً من كيفية تنظيم الجمل والتراكيب النحوية، مما يسهل كتابة البرامج وتحليلها ويزيد من قابلية البرامج للتعديل والتطوير",
             "type": "Recorded",
             "levels": []
           }
         ]
       }
 
 
 
       for (let i = 0; i < array['chains'].length; i++) {
         if(array['chains'][i].type === "Recorded"){
            $('#nav-recorded').append(`
                <div class='chain-container py-3'>
                    <h4 class="fw-bold text-center my-4">${array['chains'][i].name}</h4>
                    <div class="owl-carousel carouselRecoreded${i}"></div>
                
                </div>
            `)
            for (let j = 0; j < array['chains'][i].levels.length; j++) {
                $(`.carouselRecoreded${i}`).append(`
                <div class="card level-container shadow py-2" id="${array['chains'][i].levels[j]._id}">
                <div class="card-body p-4">
                    <div class="card-title d-flex align-items-center">
                        <span class="level main-font2 fw-bold px-2">${array['chains'][i].levels[j].name}</span>
                        
                    </div>
                    <img src="${array['chains'][i].levels[j].cover}" alt="" class="img-fluid w-25 my-3">
                    <h5 class="levelName  fw-bold">
                        Level Name
                    </h5>
                    <p class="description text-muted main-font">
                        ${array['chains'][i].levels[j].description}
                    </p>
                    <hr class="w-25" style="height: 3px;background-color: #94a3b8;">
                    <div class="books main-font2 my-1">
                        <i class="fa fa-book text-muted me-1"></i>
                        <span class="text-muted fw-bold">${array['chains'][i].levels[j].books.length} Book</span>
                    </div>
                    <div class="complete-state my-1 main-font2">
                        <i class="fa fa-clipboard text-muted me-1"></i>
                        <span class="text-muted fw-bold">${array['chains'][i].levels[j].lessons.length} Lesson </span>
                    </div>
                    
                    <div class="type fw-bold my-1 text-muted main-font2">
                        <i class="fa fa-brain me-1"></i>
                        <span class="text-muted fw-bold">${array['chains'][i].levels[j].exercises.length} Exercise</span>
                    </div>
                </div>
                
                    <div class="progress rounded-0 bg-transparent" title="25%">
                        
                    </div>
                <div class="card-footer bg-transparent border-0 my-2 text-end">
                    <button class="btn btn-success me-0 ms-auto shadow-none rpl rpl-dark fw-bold">${ array['chains'][i].levels[j].price == null ? 'Buy'  : 'enroll'} <i class="fa fa-arrow-right ms-2"></i></button>
                </div>
            </div>
                `)
            }
        }
        if(array['chains'][i].type === "Readed"){
            $('#nav-readed').append(`
                <div class='chain-container'>
                    <h4 class="fw-bold text-center my-4">${array['chains'][i].name}</h4>
                    <div class="owl-carousel carouselReaded${i}"></div>
                
                </div>
            `)
            if(array['chains'][i].levels.length==0){
                $(`.carouselReaded${i}`).append(`
                <div">No Levels Here</div>
                `)
            }
            for (let j = 0; j < array['chains'][i].levels.length; j++) {
                $(`.carouselReaded${i}`).append(`
                <div class="card level-container shadow" id="${array['chains'][i].levels[j]._id}">
                <div class="card-body p-4">
                    <div class="card-title d-flex align-items-center">
                        <span class="level main-font2 fw-bold px-2">${array['chains'][i].levels[j].name}</span>
                        
                    </div>
                    <img src="${array['chains'][i].levels[j].cover}" alt="" class="img-fluid w-25 my-3">
                    <h5 class="levelName  fw-bold">
                        Level Name
                    </h5>
                    <p class="description text-muted main-font">
                        ${array['chains'][i].levels[j].description}
                    </p>
                    <hr class="w-25" style="height: 3px;background-color: #94a3b8;">
                    <div class="books main-font2 my-1">
                        <i class="fa fa-book text-muted me-1"></i>
                        <span class="text-muted fw-bold">${array['chains'][i].levels[j].books.length} Book</span>
                    </div>
                    <div class="complete-state my-1 main-font2">
                        <i class="fa fa-clipboard text-muted me-1"></i>
                        <span class="text-muted fw-bold">${array['chains'][i].levels[j].lessons.length} Lesson </span>
                    </div>
                    
                    <div class="type fw-bold my-1 text-muted main-font2">
                        <i class="fa fa-brain me-1"></i>
                        <span class="text-muted fw-bold">${array['chains'][i].levels[j].exercises.length} Exercise</span>
                    </div>
                </div>
                
                    <div class="progress rounded-0 bg-transparent" title="25%">
                        
                    </div>
                <div class="card-footer bg-transparent border-0 my-2 text-end">
                <button class="btn btn-success me-0 ms-auto shadow-none rpl rpl-dark fw-bold">${ array['chains'][i].levels[j].price == null ? 'Buy'  : 'enroll'} <i class="fa fa-arrow-right ms-2"></i></button>
                </div>
            </div>
                `)
            }
        }
       }

     var $owl =   $(".owl-carousel").owlCarousel({
        items:4 ,

        margin:20,
        responsiveClass:true,
        checkVisible :false ,
        nav : true ,
        autoplay : true ,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
       });

       $('body').on('click','.menu-btn , aside .close-aside-btn',function(){
            setTimeout(() => {
                $owl.trigger('refresh.owl.carousel');

            }, 300);
        })
 })