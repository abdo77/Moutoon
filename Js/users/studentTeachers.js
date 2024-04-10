jQuery(document).ready(function() {

    data = [
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    {
        id : '1',
        DB:'b0213213123',
        subject : 'Hello world',
        LastUpadted : 'few days ago',
        Status:'pending',
        Date:'2-2-2013',
    },
    
    ]

    for (let i = 0; i < data.length; i++) {
        $('.requests-table').find('tbody').append(`
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].DB}</td>
            <td>${data[i].subject}</td>
            <td>${data[i].LastUpadted}</td>
            <td>${data[i].Status}</td>
            <td>${data[i].Date}</td>
            <td><button class="btn btn-success show-btn shadow main-font2 px-3">Open</button></td>
        </tr>
        `)
        
    }




    $(".requests-table").Grid({
        search:true, 
        sort:true,
        pagination:true,
    });
    $(".modal-table").Grid({
        search:true, 

    });

    
})