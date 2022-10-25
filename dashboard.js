/* globals Chart:false, feather:false */
(() => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          '05/21',
          '06/21',
          '07/21',
          '08/21',
          '09/21',
          '10/21',
          '11/21',
          '12/21',
          '01/22',
          '02/22',
          '03/22',
          '04/22'
        ],
        datasets: [{
          data: [
            100,
            150,
            70,
            50,
            30,
            50,
            80,
            110,
	        80,
	        50,
        	40,
	        25
          ],
          lineTension: 0,
          backgroundColor: 'lightblue',
          borderColor: '#002fff',
          borderWidth: 2,
          pointBackgroundColor: '#002fff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  }
  )()
  
   
  