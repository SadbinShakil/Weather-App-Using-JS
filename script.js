const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f7d6d68553mshe9587aaa9f8705ap176b4ejsn37e88be7a84c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (City)=>{
    cityName.innerHTML = City;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + City, options)
	.then(response => response.json())
	.then(response => {
           
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        feels_like2.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

        cloud_pct2.innerHTML = response.cloud_pct
        feels_like3.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        max_temp2.innerHTML = response.max_temp
        min_temp2.innerHTML = response.min_temp
        sunrise2.innerHTML = response.sunrise
        sunset2.innerHTML = response.sunset
        temp3.innerHTML = response.temp
        wind_degrees2.innerHTML = response.wind_degrees
        wind_speed3.innerHTML = response.wind_speed



        console.log(sunrise2.innerHTML)
 
    })

	.catch(err => console.error(err));
}
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka', options)
	.then(response => response.json())
	.then(response => {
           
        console.log(response)
        cloud_pct9.innerHTML = response.cloud_pct
        feels_like9.innerHTML = response.feels_like
        humidity9.innerHTML = response.humidity
        max_temp9.innerHTML = response.max_temp
        min_temp9.innerHTML = response.min_temp
        sunrise9.innerHTML = response.sunrise
        sunset9.innerHTML = response.sunset
        temp9.innerHTML = response.temp
        wind_degrees9.innerHTML = response.wind_degrees
        wind_speed9.innerHTML = response.wind_speed
 
    })


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chittagong', options)
	.then(response => response.json())
	.then(response => {
           
        console.log(response)
        cloud_pct4.innerHTML = response.cloud_pct
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        max_temp4.innerHTML = response.max_temp
        min_temp4.innerHTML = response.min_temp
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset
        temp4.innerHTML = response.temp
        wind_degrees4.innerHTML = response.wind_degrees
        wind_speed4.innerHTML = response.wind_speed
 
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sylhet', options)
	.then(response => response.json())
	.then(response => {
           
        console.log(response)
        cloud_pct5.innerHTML = response.cloud_pct
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        max_temp5.innerHTML = response.max_temp
        min_temp5.innerHTML = response.min_temp
        sunrise5.innerHTML = response.sunrise
        sunset5.innerHTML = response.sunset
        temp5.innerHTML = response.temp
        wind_degrees5.innerHTML = response.wind_degrees
        wind_speed5.innerHTML = response.wind_speed
 
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Comilla', options)
	.then(response => response.json())
	.then(response => {
           
        console.log(response)
        cloud_pct6.innerHTML = response.cloud_pct
        feels_like6.innerHTML = response.feels_like
        humidity6.innerHTML = response.humidity
        max_temp6.innerHTML = response.max_temp
        min_temp6.innerHTML = response.min_temp
        sunrise6.innerHTML = response.sunrise
        sunset6.innerHTML = response.sunset
        temp6.innerHTML = response.temp
        wind_degrees6.innerHTML = response.wind_degrees
        wind_speed6.innerHTML = response.wind_speed
 
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Khulna', options)
	.then(response => response.json())
	.then(response => {
           
        console.log(response)
        cloud_pct7.innerHTML = response.cloud_pct
        feels_like7.innerHTML = response.feels_like
        humidity7.innerHTML = response.humidity
        max_temp7.innerHTML = response.max_temp
        min_temp7.innerHTML = response.min_temp
        sunrise7.innerHTML = response.sunrise
        sunset7.innerHTML = response.sunset
        temp7.innerHTML = response.temp
        wind_degrees7.innerHTML = response.wind_degrees
        wind_speed7.innerHTML = response.wind_speed
 
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rangpur', options)
	.then(response => response.json())
	.then(response => {
           
        console.log(response)
        cloud_pct8.innerHTML = response.cloud_pct
        feels_like8.innerHTML = response.feels_like
        humidity8.innerHTML = response.humidity
        max_temp8.innerHTML = response.max_temp
        min_temp8.innerHTML = response.min_temp
        sunrise8.innerHTML = response.sunrise
        sunset8.innerHTML = response.sunset
        temp8.innerHTML = response.temp
        wind_degrees8.innerHTML = response.wind_degrees
        wind_speed8.innerHTML = response.wind_speed
 
    })



submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Dhaka")

