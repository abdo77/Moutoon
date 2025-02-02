jQuery(document).ready(function(){
    var options = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
        color:'#c5c5c5',
      }],
        chart: {
        height: 70,
        type: 'area',
        width: '100%',
        toolbar: {
            show : false
          },
          zoom:{
            enabled: false
          },
      },
      grid:{
        show : false,
        padding: {
            right: 0 ,
            left: -15,
            bottom: -15 ,
            top: -30,
          }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 1

      },
      xaxis: {
        labels : {
            show : false ,
        },
        
        axisTicks : {
            show : false,
        },
        axisBorder: {
            show: false,
            
        },
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      yaxis : {
        labels:{
            show:false
        },
        axisTicks : {
            show : false,
        },
        axisBorder: {
            show: false,
            
        },
      },
      tooltip: {
        enabled : false,
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };

      var chart = new ApexCharts(document.querySelector("#chart1"), options);
      chart.render();
    
    


      var options = {
        chart: {
          type: 'line',
          height:250,
          toolbar: {
            show: false,
        },
        },
        
        series: [{
          name: 'sales',
          data: [30,40,35,50,49,60,70,91,125]
        },
        {
            name: 'sales1',
            data: [30,40,45,55,69,60,50,91,115],
          }],
          stroke:{
            width : 3,
            dashArray: [0,2]
          },
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        },
        
  legend: {
    position: 'top',
    markers : {
        shape:'square'
    }
  }
      }
      
      var chart = new ApexCharts(document.querySelector("#chart2"), options);
      
      chart.render();
})