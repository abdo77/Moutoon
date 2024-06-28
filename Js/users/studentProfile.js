jQuery(document).ready(function() {
    var options = {
        chart: {
          type: 'bar',
          foreColor: '#373d3f', 
          height:'350px'
        },
        series: [{
            
          name: 'S(Thousands)',
          data: [30,40,35,50,49,60,70,91,125,150],
          color:'#31947b'
        }],
        xaxis: {

            fillColor:'#31947b',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Sep','Oct','Nov', 'Dec']
        },
        yaxis: {
            show:true,
            title: {
                text: 'S(Thousands)',
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '14px',
                  fontWeight:  'bold',
                  fontFamily:  undefined,
                  color:  '#263238'
                },
            }

        },
        plotOptions:{
            bar: {
                columnWidth: '6px',
                
              },
        },
        dataLabels: {
            enabled: false
          },
          grid: {
            borderColor: '#c2c2c251',
        },
        
      }
      
      var chart = new ApexCharts(document.querySelector("#revenueChart"), options);
      
      chart.render();
})