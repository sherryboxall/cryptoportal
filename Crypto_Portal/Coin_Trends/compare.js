// Button click to compare coins
$("#btnCompare").click(function () {

    // Removes chart each time the button is clicked
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

// Values of coins that we are comparing. Using trim to remove white space from beginning and end
    let coin1 = $("#coinInput1").val().trim()
    let coin2 = $("#coinInput2").val().trim()

    // If user does not input a coin on either text field, error alert
    if (coin1 === "" || coin2 === "") {
        alert("You MUST enter two coins to get data!")
    }
    else {

        // Links for API calls
        const messariApiCallOne = `https://data.messari.io/api/v1/assets/${coin1}/metrics`;
        const messariApiCallTwo = `https://data.messari.io/api/v1/assets/${coin2}/metrics`;

        // FIRST COIN AJAX CALL
        $.ajax({
            url: messariApiCallOne,
            method: "GET"
        }).then(function (responseOne) {

            // SECOND COIN AJAX CALL
            $.ajax({
                url: messariApiCallTwo,
                method: "GET"
            }).then(function (responseTwo) {

                var ctx = document.getElementById('myChart1').getContext('2d');

                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['2020', '2019', '2018', '2017', '2016'],
                        datasets: [{
                            data: [responseOne.data.roi_by_year["2020_usd_percent"], responseOne.data.roi_by_year["2019_usd_percent"], responseOne.data.roi_by_year["2018_usd_percent"],
                            responseOne.data.roi_by_year["2017_usd_percent"], responseOne.data.roi_by_year["2016_usd_percent"]],
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
                        },
                        {
                            data: [responseTwo.data.roi_by_year["2020_usd_percent"], responseTwo.data.roi_by_year["2019_usd_percent"], responseTwo.data.roi_by_year["2018_usd_percent"],
                            responseTwo.data.roi_by_year["2017_usd_percent"], responseTwo.data.roi_by_year["2016_usd_percent"]],
                            backgroundColor: [
                                'red',
                                'blue',
                                'yellow',
                                'green',
                                'purple'
                            ],
                            borderColor: [
                                'red',
                                'blue',
                                'yellow',
                                'green',
                                'purple'
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
                        },
                        plugins: {
                            // to show a title above the chart
                            title: {
                                display: true,
                                text: `${responseOne.data.name} vs. ${responseTwo.data.name} Return on Investment (By Year)`
                            },
                            // To hide the label that shows at the top
                            legend: {
                                display: false
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
			label: `${responseOne.data.name} Volatility Stats`,
			data: [responseOne.data.risk_metrics.volatility_stats.volatility_last_30_days, responseOne.data.risk_metrics.volatility_stats.volatility_last_90_days,
				responseOne.data.risk_metrics.volatility_stats.volatility_last_1_year, responseOne.data.risk_metrics.volatility_stats.volatility_last_3_years],
			backgroundColor: [
				'red'
			],
			fill: true,
			borderColor: [
				'red'
			],
			borderWidth: 1
		},
        {
			label: `${responseTwo.data.name} Volatility Stats`,
			data: [responseTwo.data.risk_metrics.volatility_stats.volatility_last_30_days, responseTwo.data.risk_metrics.volatility_stats.volatility_last_90_days,
				responseTwo.data.risk_metrics.volatility_stats.volatility_last_1_year, responseTwo.data.risk_metrics.volatility_stats.volatility_last_3_years],
			backgroundColor: [
				'rgba(75, 192, 192, 1)'
			],
			fill: true,
			borderColor: [
				'green'
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
        });

    }


})