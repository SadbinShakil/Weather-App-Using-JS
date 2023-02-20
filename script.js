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

 
    })

	.catch(err => console.error(err));


}

getWeather("Dhaka")


submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
    // console.log(city[0]);
    // console.log(city[1].innerHTML.toString());
    // console.log(city[2]);

    // console.log(city);
    // document.getElementById("check").innerHTML = city[2].value;
    var cities = []; 
    
    for (var i=0; i<city.length; i++){
        // console.log("hey");         
        cities.push(city[i].value);
    }
    var myList = new Array();
    for (const letter of cities) {
        //console.log("Before",letter);
        if(letter.length != 0){
            myList.push(letter);
        }      
      }
      //console.log("hey")
    //   for (var i = 0; i < myList .length; i ++ ){
    //     window.console.log("After",myList[i]);
    // }

if(myList.length >5){
    document.getElementById("check").innerHTML =  myList[1];
    document.getElementById("check2").innerHTML = myList[2];
    document.getElementById("check3").innerHTML = myList[3];
    document.getElementById("check4").innerHTML = myList[4];
    document.getElementById("check5").innerHTML = myList[5];
}
else if(myList.length==3){
    document.getElementById("check").innerHTML = myList[1];
    document.getElementById("check2").innerHTML = myList[2];
    document.getElementById("check3").innerHTML = myList[3];
}
else if(myList.length==2){
    document.getElementById("check").innerHTML = myList[1];
    document.getElementById("check2").innerHTML = myList[2];
    // document.getElementById("check3").innerHTML = myList[3];
}
else if(myList.length==4){
    document.getElementById("check").innerHTML =  myList[1];
    document.getElementById("check2").innerHTML = myList[2];
    document.getElementById("check3").innerHTML = myList[3];
    document.getElementById("check4").innerHTML = myList[4];
}

//dynamic City Weather Update
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myList[1], options)
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


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myList[2], options)
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

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myList[3], options)
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

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myList[4], options)
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

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + myList[5], options)
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

    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + check6, options)
	// .then(response => response.json())
	// .then(response => {
           
    //     console.log(response)
    //     cloud_pct8.innerHTML = response.cloud_pct
    //     feels_like8.innerHTML = response.feels_like
    //     humidity8.innerHTML = response.humidity
    //     max_temp8.innerHTML = response.max_temp
    //     min_temp8.innerHTML = response.min_temp
    //     sunrise8.innerHTML = response.sunrise
    //     sunset8.innerHTML = response.sunset
    //     temp8.innerHTML = response.temp
    //     wind_degrees8.innerHTML = response.wind_degrees
    //     wind_speed8.innerHTML = response.wind_speed
 
    // })


})






















