jQuery(document).ready(function () {
    
    var options = {
      colors : ['#634fca', '#087c69','#f39739','#dfe3e6'],
        series: [{
        name: 'reported time this month',
        data: [44]
      }, {
        name: 'Time balance',
        data: [53]
      }, {
        name: 'Overtime this month',
        data: [12]
      }, {
        name: 'Annual Leave this month',
        data: [9]
      }],
        chart: {
        type: 'bar',
        height: 25,
        stacked: true,
        stackType: '100%',
        toolbar:{
          show:false
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 6,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          barHeight: '100%',
        },
      },
      dataLabels:{
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          right: 0 ,
          left: -15,
          bottom: -15 ,
          top: -30,
        }
        },
      legends:{
        show: false,
      },
      stroke: {
        width: 2,
        colors: localStorage.getItem('dark') == 'false' ? ['#fff'] : ['#1e1e1e']
      },
      title: {
        
        text: ''
      },
      yaxis: {
        labels: {
          show: false,
        },
        ticks:{
          show:false
        }
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
          
      },
      },
      tooltip: {
        show:false,
        
        
      },
      fill: {
        opacity: 1
      
      },
      legend: {
        show:false,
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
        
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();


      $($('.fc-col-header-cell-cushion')).each(function(){
        $(this).text($(this).attr('aria-label'))
      })
      $('.fc-col-header-cell.fc-day').each(function () {
          $(this).addClass('text-start')
      })
      $('.fc-col-header-cell').addClass('main-font2')
      $('.fc-daygrid-day').addClass('main-font2')
      $('.fc-daygrid-day-number').addClass('text-muted')
      $('.fc-event-time').addClass('me-auto')
      $('.fc-event-title').addClass('ms-auto')
      $('.fc-event-title').addClass('text-end')

})


document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar')
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    
    views: {
      dayGridMonth: { // name of view
        titleFormat: { day: '2-digit' }
        // other view-specific options here
      },
          
    },
    
    events: [
      {
        title: 'Event1',
        start: '2025-01-01T14:30:00',
        end: '2025-01-01T15:30:00',
        extendedProps: {
          status: 'done'
        },
        classNames : ['Event1']
      },
      {
        title: 'Event2',
        start: '2025-01-03T14:30:00',
        end: '2025-01-03T15:30:00',
        extendedProps: {
          status: 'done'
        },
        classNames : ['Event2'],
        allDay: false

      },
      {
        title: 'Event3',
        start: '2025-01-10T14:30:00',
        end: '2025-01-10T02:30:00',
        extendedProps: {
          status: 'done'
        },
        classNames : ['Event3'],
      },
      {
        title: 'Event4',
        start: '2025-01-21T02:00:00',
        end: '2025-01-21T09:00:00',
        extendedProps: {
          status: 'done'
        },
        classNames : ['Event4'],
      }
    ],
    timeFormat: 'h:mm',
  })
  calendar.render()
})