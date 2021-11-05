// api url
const api_url = "https://data.messari.io/api/v1/assets?fields=symbol,metrics/market_data/price_usd";


$.ajax({
    method: 'GET',
    url: api_url,
    success: function (response)
    {
        console.log(response)

		for(var i = 0; i < 5; i++){
			$("#feed1").append(`<li>${response.data[i].symbol} $${response.data[i].metrics.market_data.price_usd}</li>`)
		}
        
        for(var i = 6; i < 11; i++){
			$("#feed2").append(`<li>${response.data[i].symbol} $${response.data[i].metrics.market_data.price_usd}</li>`)
		}
		
    }
});