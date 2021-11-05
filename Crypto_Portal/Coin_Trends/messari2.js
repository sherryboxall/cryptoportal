// Button to search for coin
$("#btn-Search").click(function (){

    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
		type: 'bar',
        data: {
		datasets: [{
            data: []
        }]
    },
		options: {}
	});


let coinSearch = $("#coinInput").val();

const messariApiCall = `https://data.messari.io/api/v1/assets/${coinSearch}/metrics`;

$.ajax({
    method: 'GET', //post method
    url: messariApiCall,
    success: function (response)
    {
        
        var updatedData = [response.data.roi_by_year["2020_usd_percent"], response.data.roi_by_year["2019_usd_percent"], response.data.roi_by_year["2018_usd_percent"],
        response.data.roi_by_year["2017_usd_percent"], response.data.roi_by_year["2016_usd_percent"]];

        console.log(updatedData)

        myChart.data.datasets[0].data = updatedData
        // chart.data = result;
        myChart.update();
    }
});
    })
    