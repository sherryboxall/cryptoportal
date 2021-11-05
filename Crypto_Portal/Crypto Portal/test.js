// api url
const api_url = "https://data.messari.io/api/v1/assets?fields=symbol,metrics/market_data/price_usd";


$.ajax({
    method: 'GET',
    url: api_url,
    success: function (response)
    {
        console.log(response)

		for(var i = 0; i < response.data.length; i++){
			$("#price-feed1").append(`${response.data[i].symbol} $${response.data[i].metrics.market_data.price_usd}`)
		}
		
        /*for(var i = 0; i < response.data.slice(10, 20); i++){
			$("#price-feed2").append(`<span style="margin-right: 20px">${response.data[i].symbol} $${response.data[i].metrics.market_data.price_usd}</span>`)
		}*/
    }
});

$.ajax({
    method: 'GET',
    url: api_url,
    success: function (response)
    {
        console.log(response)

		for(var i = 0; i < response.data.length; i++){
			$("#price-feed2").append(`<span style="margin-right: 20px">${response.data[i].symbol} $${response.data[i].metrics.market_data.price_usd}</span>`)
		}
		
        /*for(var i = 0; i < response.data.slice(10, 20); i++){
			$("#price-feed2").append(`<span style="margin-right: 20px">${response.data[i].symbol} $${response.data[i].metrics.market_data.price_usd}</span>`)
		}*/
    }
});