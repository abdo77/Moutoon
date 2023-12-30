jQuery(document).ready(function() {

   

    console.log(localStorage.getItem('dark'));
    var dark = ( localStorage.getItem('dark') == 'false' || localStorage.getItem('dark')==null  ) ? false : true  ;

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
        series: [70],
        
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
      
      var chart = new ApexCharts(document.querySelector("#apexChart"), options);
      
      chart.render();

      var chart1 = new ApexCharts(document.querySelector("#eventChart1"), options);
      
      chart1.render();
})