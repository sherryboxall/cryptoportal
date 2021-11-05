// Button to search for coin
$("#btn-Search").click(function (){

var canvas1 = $("#myChart1")
canvas1.remove()

$("#chartResult1").html(`
<canvas id="myChart1"></canvas>
`)

var canvas2 = $("#myChart2")
canvas2.remove()

$("#chartResult2").html(`
<canvas id="myChart2"></canvas>
`)

let coinSearch = $("#coinInput").val().trim()

const messariApiCall = `https://data.messari.io/api/v1/assets/${coinSearch}/metrics`

// AJAX CALL
$.ajax({
    url: messariApiCall,
    method: "GET"
}).then(function (response) {

	// BAR CHART
    var ctx = document.getElementById('myChart1').getContext('2d');

    var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['2020', '2019', '2018', '2017', '2016'],
			datasets: [{
				label: `${response.data.name} Return on Investment (By Year)`,
				data: [response.data.roi_by_year["2020_usd_percent"], response.data.roi_by_year["2019_usd_percent"], response.data.roi_by_year["2018_usd_percent"],
				response.data.roi_by_year["2017_usd_percent"], response.data.roi_by_year["2016_usd_percent"]],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)'
				],
				borderWidth: 1
			}
		]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});

// LINE CHART
var ctx2 = document.getElementById('myChart2').getContext('2d');

var myChart2 = new Chart(ctx2, {
	type: 'line',
	data: {
		labels: ['30 Days', '90 Days', '1 year', '3 years'],
		datasets: [{
			label: `${response.data.name} Volatility Stats`,
			data: [response.data.risk_metrics.volatility_stats.volatility_last_30_days, response.data.risk_metrics.volatility_stats.volatility_last_90_days,
				response.data.risk_metrics.volatility_stats.volatility_last_1_year, response.data.risk_metrics.volatility_stats.volatility_last_3_years],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)'
			],
			fill: true,
			borderColor: [
				'red'
			],
			borderWidth: 1
		}
	]
	},
	options: {
		responsive: true,
		plugins: {
		  tooltip: {
			mode: 'index'
		  },
		},
		interaction: {
		  mode: 'nearest',
		  axis: 'x',
		  intersect: false
		},
		scales: {
		  x: {
			title: {
			  display: true,
			  text: 'Month'
			}
		  },
		  y: {
			stacked: true,
			title: {
			  display: true,
			  text: 'Value'
			}
		  }
		}
	  }
});

});

})
