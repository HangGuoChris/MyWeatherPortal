var page = document.createElement('div');   //this is the whole page
page.setAttribute("id", "page");


var title = document.createElement('h1');
var titleText = document.createTextNode('My Weather Portal');
title.appendChild(titleText);
page.appendChild(title);

{
    var headerBlock = document.createElement('div');
    headerBlock.setAttribute("id", "headerBlock");

    var headerText = document.createElement('p');
    headerText.appendChild(document.createTextNode('Hong Kong'));
    headerText.setAttribute("id", "headerText");

    var lastUpdateTime = document.createElement('p');
    lastUpdateTime.setAttribute("id", "lastUpdateTime");
    lastUpdateTime.appendChild(document.createTextNode("Last Update: 10:02"));

    var headerBttn = document.createElement('button');
    headerBttn.setAttribute("id", "headerBttn");
    headerBttn.appendChild(document.createTextNode("Warning"));

    var weatherIcon = document.createElement('img');
    weatherIcon.setAttribute("src", "images/drop-48.png");
    weatherIcon.setAttribute("id", "weatherIcon");
    weatherIcon.setAttribute("class", "image");

    var temperature = document.createElement('p');
    temperature.setAttribute("id", "temperature");
    temperature.appendChild(document.createTextNode('20'));
    temperature.setAttribute("class", "block");

    var temperatureUnit = document.createElement('p');
    temperatureUnit.appendChild(document.createTextNode("°C"));
    temperatureUnit.setAttribute("id", "temperatureUnit");
    temperatureUnit.setAttribute("class", "unit");

    var humidityimg = document.createElement('img');
    humidityimg.setAttribute("src", "images/drop-48.png");
    humidityimg.setAttribute("id", "humidityimg");
    humidityimg.setAttribute("class", "image");

    var humidity = document.createElement('p');
    humidity.setAttribute("id", "humidity");
    humidity.appendChild(document.createTextNode('63'));
    humidity.setAttribute("class", "block");

    var humidityUnit = document.createElement('p');
    humidityUnit.appendChild(document.createTextNode("%"));
    humidityUnit.setAttribute("class", "unit");
    humidity.appendChild(humidityUnit);

    var rainfallimg = document.createElement('img');
    rainfallimg.setAttribute("src", "images/rain-48.png");
    rainfallimg.setAttribute("id", "rainfallimg");
    rainfallimg.setAttribute("class", "image");

    var rainfall = document.createElement('p');
    rainfall.setAttribute("id", "rainfall");
    rainfall.appendChild(document.createTextNode("0"));
    rainfall.setAttribute("class", "block");

    var rainfallUnit = document.createElement('p');
    rainfallUnit.appendChild(document.createTextNode("mm"));
    rainfallUnit.setAttribute("class", "unit");
    rainfall.appendChild(rainfallUnit);

    var UVlevelimg = document.createElement('img');
    UVlevelimg.setAttribute("src", "images/UVindex-48.png");
    UVlevelimg.setAttribute("id", "UVlevelimg");
    UVlevelimg.setAttribute("class", "image");

    var UVlevel = document.createElement('p');
    UVlevel.setAttribute("id", "UVlevel");
    UVlevel.appendChild(document.createTextNode(""));
    UVlevel.setAttribute("class", "block");

    var UV = document.createElement('div');
    UV.setAttribute("id", "UV");
    UV.appendChild(UVlevelimg);
    UV.appendChild(UVlevel);



    var headerTemp = document.createElement('div');
    headerTemp.setAttribute("id", "headerTemp");
    headerTemp.setAttribute("class", "headerElement");
    headerTemp.appendChild(temperature);
    headerTemp.appendChild(temperatureUnit);

    var headerHumi = document.createElement('div');
    headerHumi.setAttribute("id", "headerHumi");
    headerHumi.setAttribute("class", "headerElement");
    headerHumi.appendChild(humidityimg);
    headerHumi.appendChild(humidity);
    headerHumi.appendChild(humidityUnit);

    var headerRain = document.createElement('div');
    headerRain.setAttribute("id", "headerRain");
    headerRain.setAttribute("class", "headerElement");
    headerRain.appendChild(rainfallimg);
    headerRain.appendChild(rainfall);
    headerRain.appendChild(rainfallUnit);

    var headerUV = document.createElement('div');
    headerUV.setAttribute("id", "headerUV");
    headerUV.setAttribute("class", "headerElement");
    headerUV.style.visibility = "hidden";
    headerUV.appendChild(UVlevelimg);
    headerUV.appendChild(UVlevel);

    var headerArray = document.createElement('div');
    headerArray.setAttribute("id", headerArray);
    headerArray.appendChild(weatherIcon);
    headerArray.appendChild(headerTemp);
    headerArray.appendChild(headerHumi);
    headerArray.appendChild(headerRain);
    headerArray.appendChild(headerUV);



    headerBlock.appendChild(headerArray);
    headerBlock.appendChild(headerText);
    headerBlock.appendChild(lastUpdateTime);
    headerBlock.appendChild(headerBttn);


}


var locaAndTempBlock = document.createElement('div');
locaAndTempBlock.setAttribute("id", "locaAndTempBlock");

{
    var locationBlock = document.createElement('div');
    locationBlock.setAttribute("id","locationBlock");

    var locationHeader = document.createElement('div');
    locationHeader.appendChild(document.createTextNode('My Location'));
    locationHeader.setAttribute("id", "locationHeader");

    var area = document.createElement('div');
    var district = document.createElement('div');
    var suburb = document.createElement('div');
    area.setAttribute("id", "area");
    district.setAttribute("id", "district");
    suburb.setAttribute("id", "suburb");
    district.appendChild(document.createTextNode("Central and Western District"));
    suburb.appendChild(document.createTextNode("Sai Wan"));
    area.appendChild(district);
    area.appendChild(suburb);

    var locaTemp = document.createElement('div');
    locaTemp.setAttribute("id", "locaTemp");
    locaTemp.appendChild(document.createTextNode("20 °C"));



    {   //Location Rainfall Segment
        var locaRainimg = document.createElement('img');
        locaRainimg.setAttribute("src", "images/rain-48.png");
        locaRainimg.setAttribute("id", "locaRainimg");
        locaRainimg.setAttribute("class", "image");

        var locaRainnum = document.createElement('p');
        locaRainnum.setAttribute("id", "locaRainnum");
        locaRainnum.appendChild(document.createTextNode("0"));
        locaRainnum.setAttribute("class", "block");

        var locaRainUnit = document.createElement('p');
        locaRainUnit.setAttribute("id", "locaRainUnit")
        locaRainUnit.appendChild(document.createTextNode("mm"));
        locaRainUnit.setAttribute("class", "unit");

        var locaRainfall = document.createElement('p');
        locaRainfall.setAttribute("id", "locaRainfall");
        locaRainfall.appendChild(locaRainnum);
        locaRainfall.appendChild(locaRainUnit);

        var locaRain = document.createElement('div');
        locaRain.setAttribute("id", "locaRain");
        locaRain.appendChild(locaRainimg);
        locaRain.appendChild(locaRainfall);
    }

    var AQHIRL = document.createElement('div');
    AQHIRL.setAttribute("id", "AQHIRL");

    var AQHIimg = document.createElement('img');
    AQHIimg.setAttribute("src", "images/aqhi-low.png");
    AQHIimg.setAttribute("id", "AQHIimg");

    var RLdata = document.createElement('div');
    RLdata.setAttribute("id", "RLdata");

    var AQHInum = document.createElement('div');
    AQHInum.setAttribute("id", "AQHInum");
    AQHInum.appendChild(document.createTextNode("3"));

    var riskLevel = document.createElement('div');
    riskLevel.setAttribute("id", "riskLevel");
    riskLevel.appendChild(document.createTextNode("Low"));

    RLdata.appendChild(AQHInum);
    RLdata.appendChild(riskLevel);

    AQHIRL.appendChild(AQHIimg);
    AQHIRL.appendChild(RLdata);

    // var firstTwo = document.createElement('div');
    // firstTwo.setAttribute("id", "firstTwo");
    // firstTwo.appendChild(area);
    // firstTwo.appendChild(locaTemp);

    var locationArray = document.createElement('div');
    locationArray.setAttribute("id", "locationArray");

    locationArray.appendChild(area);
    locationArray.appendChild(locaTemp);
    // locationArray.appendChild(firstTwo);
    locationArray.appendChild(locaRain);
    locationArray.appendChild(AQHIRL);

    locationBlock.appendChild(locationHeader);
    locationBlock.appendChild(locationArray);



}

{
    var temperatureBlock = document.createElement('div');
    temperatureBlock.setAttribute("id", "temperatureBlock");

    var temperatureText = document.createElement('div');
    temperatureText.setAttribute("id", "temperatureText");
    temperatureText.appendChild(document.createTextNode("Temperatures"));

    var selectText = document.createElement('div');
    selectText.setAttribute("id", "selectText");
    selectText.appendChild(document.createTextNode("Select the location"));

    var selectList = document.createElement('select');
    selectList.setAttribute("id", "selectList");

    var selectTemperature = document.createElement('div');
    selectTemperature.setAttribute("id", "selectTemperature");

    var selectTemperatureUnit = document.createElement('div');
    selectTemperatureUnit.setAttribute("id", "selectTemperatureUnit");
    selectTemperatureUnit.appendChild(document.createTextNode("°C"));
    selectTemperatureUnit.style.visibility="hidden";

    var selectResult = document.createElement('div');
    selectResult.setAttribute("id", "selectResult");
    selectResult.appendChild(selectTemperature);
    selectResult.appendChild(selectTemperatureUnit);

    temperatureBlock.appendChild(temperatureText);
    temperatureBlock.appendChild(selectText);
    temperatureBlock.appendChild(selectList);
    temperatureBlock.appendChild(selectResult);
}


locaAndTempBlock.appendChild(locationBlock);
locaAndTempBlock.appendChild(temperatureBlock);


{
    var forecastBlock = document.createElement('div');
    forecastBlock.setAttribute("id", "forecastBlock");

    var forecastText = document.createElement('p');
    forecastText.setAttribute("id", "forecastText");
    forecastText.appendChild(document.createTextNode("9-Day Forecast"));

    var forecastArray = document.createElement('div');
    forecastArray.setAttribute("id", "forecastArray");
    for (var i = 0; i < 9; i++) {
        var forecastElement = document.createElement('div');
        forecastElement.setAttribute("id", "forecastElement"+i);
        forecastElement.setAttribute("class", "forecastElement");
        var forecastDate = document.createElement('p');
        forecastDate.setAttribute("id","forecastDate"+i);
        forecastDate.setAttribute("class", "forecastDate");
        forecastDate.appendChild(document.createTextNode("Wed 17/2"));
        var forecastIcon = document.createElement('img');
        forecastIcon.setAttribute("id","forecastIcon"+i);
        forecastIcon.setAttribute("class", "forecastIcon");
        forecastIcon.setAttribute("src", "images/drop-48.png");
        var forecastTemp = document.createElement('p');
        forecastTemp.setAttribute("id","forecastTemp"+i);
        forecastTemp.setAttribute("class", "forecastTemp");
        forecastTemp.appendChild(document.createTextNode("18-24 °C"));
        var forecastHumi = document.createElement('p');
        forecastHumi.setAttribute("id","forecastHumi"+i);
        forecastHumi.setAttribute("class", "forecastHumi");
        forecastHumi.appendChild(document.createTextNode("50-90 %"));
        forecastElement.appendChild(forecastDate);
        forecastElement.appendChild(forecastIcon);
        forecastElement.appendChild(forecastTemp);
        forecastElement.appendChild(forecastHumi);
        forecastArray.appendChild(forecastElement);
    }
    forecastBlock.appendChild(forecastText);
    forecastBlock.appendChild(forecastArray);
}

page.appendChild(headerBlock);
page.appendChild(locaAndTempBlock);
page.appendChild(forecastBlock);
var refNode = document.getElementsByTagName('head');
refNode[0].insertAdjacentElement('afterend',page);

var weather = "noRain";

function getWeatherInfo(){
    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
        .then(response => {
            if(response.status == 200){
                response.json().then(data =>{
                    let iconNum = data.icon[0];
                    if(iconNum > 61 && iconNum < 66){
                        weather = "rain";
                    }else{
                        weather = "noRain";
                    }
                });
            }
        });
}

function fetchHeaderInfo(){
    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
        .then(response => {
            if(response.status == 200){
                response.json().then(data =>{

                    //Header Part
                    let weatherIcon = document.getElementById("weatherIcon");
                    let iconNum = data.icon[0];
                    weatherIcon.setAttribute( "src","https://www.hko.gov.hk/images/HKOWxIconOutline/pic"+iconNum+".png");

                    let tempElement = document.getElementById("temperature");
                    tempElement.innerHTML = data.temperature.data[1].value;

                    let humiElement = document.getElementById("humidity");
                    humiElement.innerHTML = data.humidity.data[0].value;

                    let rainfallElement = document.getElementById("rainfall");
                    rainfallElement.innerHTML = data.rainfall.data[13].max;

                    let lastUpdateTime = document.getElementById("lastUpdateTime");
                    lastUpdateTime.innerHTML = "Last Update: " + data.updateTime.slice(11, 16);

                    try{
                        let UVlevel = document.getElementById("UVlevel");
                        UVlevel.innerHTML = data.uvindex.data[0].value;
                        let UVElement = document.getElementById("headerUV");
                        UVElement.style.visibility = "visible";
                    }catch (e) {
                        console.log("No UV information.");
                    }


                } )
            }
            else{
                console.log("Fetch failed in HeaderBlock, HTTP return status: "+response.status);
            }
        })
        .catch();
}

function fetchTemperature(){
    //fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
    fetch('https://hangguochris.github.io/MyWeatherPortal/data/data/weather-Feb26-raining-night.json')
        .then(response => {
            if(response.status == 200){
                response.json().then( data =>{
                    var tempArray = [];
                    for(var i = 0; i < 27; i++){

                        var tempOption = document.createElement('option');
                        tempOption.setAttribute("value", i);
                        tempOption.setAttribute("label", data.temperature.data[i].place);

                        if(i == 0){
                            tempOption.setAttribute("selected", true);
                        }else{
                            tempOption.setAttribute("selected", false);
                        }
                        tempArray.push(tempOption);
                    }
                    tempArray.sort(function (a, b){     //alphabetical order
                        return (a.label + '').localeCompare(b.label+'');
                    })
                    for(var i = 0; i < tempArray.length; i++){
                        selectList.appendChild(tempArray[i]);
                    }
                })
            }
            else{
                console.log("Fetch failed in TemperatureBlock, HTTP return status: "+response.status);
            }
        })
}

let selector = document.getElementById('selectList');
selector.addEventListener('change', (evt) =>{
    let locationIndex = selector.value;
    showSelectedTemperature(locationIndex);
} );

function fetchForecastInfo(){
    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en')
        .then(response =>{
            if(response.status == 200){
                response.json().then(data =>{
                    for(var i = 0; i < 9; i++){
                           var forecastWeek = data.weatherForecast[i].week.slice(0,3);
                           var forecastDateNum = data.weatherForecast[i].forecastDate.slice(6,8)+"/"+data.weatherForecast[i].forecastDate.slice(5,6);
                           var forecastDate = document.getElementById("forecastDate"+i);
                           forecastDate.innerHTML = forecastWeek+" "+forecastDateNum;

                           var forecastIcon = document.getElementById("forecastIcon"+i);
                           var iconNum = data.weatherForecast[i].ForecastIcon;
                           forecastIcon.setAttribute("src", "https://www.hko.gov.hk/images/HKOWxIconOutline/pic"+iconNum+".png")

                           var forecastTemp = document.getElementById("forecastTemp"+i);
                           forecastTemp.innerHTML = data.weatherForecast[i].forecastMintemp.value+"-"+data.weatherForecast[i].forecastMaxtemp.value+" °C";

                           var forecastHumi = document.getElementById("forecastHumi"+i);
                           forecastHumi.innerHTML = data.weatherForecast[i].forecastMinrh.value+"-"+data.weatherForecast[i].forecastMaxrh.value+" %";



                    }
                })
            }
            else{
                console.log("Fetch failed in ForecastBlock, HTTP return status: "+response.status);
            }
        })
}

function showSelectedTemperature(locationIndex){
    //fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
    fetch('https://hangguochris.github.io/MyWeatherPortal/data/data/weather-Feb26-raining-night.json')
        .then(response => {
            if(response.status == 200){
                response.json().then( data =>{
                    var selectTemp = document.getElementById("selectTemperature");
                    selectTemp.innerHTML = data.temperature.data[locationIndex].value;
                    selectTemp.setAttribute("visibility", "visiable");
                    var selectTempUnit = document.getElementById("selectTemperatureUnit");
                    selectTempUnit.style.visibility = "visible";
                })
            }
            else{
                console.log("Fetch failed in TemperatureBlock, HTTP return status: "+response.status);
            }
        })
}

function changeHeaderBackground(){
    var date = new Date();
    var hour = date.getHours();

    var timing;
    if(hour < 6 || hour > 18){
        timing = "nightTime";
    }else{
        timing = "dayTime";
    }

    getWeatherInfo();
    var headerBackground = document.getElementById("headerBlock");
    var temp = document.getElementById("humidity");

    if(timing == "dayTime" && weather == "noRain"){
        headerBackground.style.backgroundImage =  "url('images/blue-sky.jpg')";
        headerBackground.style.color = "black";
    }else if(timing == "nightTime" && weather == "noRain"){
        headerBackground.style.backgroundImage = "url('images/night-sky.jpg')";
        headerBackground.style.color = "white";
    }else if(timing == "dayTime" && weather == "rain"){
        headerBackground.style.backgroundImage = "url('images/water-drops-glass-day.jpg')";
        headerBackground.style.color = "black";
    }else if(timing == "nightTime" && weather == "rain"){
        headerBackground.style.backgroundImage = "url('images/water-drops-glass-night.jpg')";
        headerBackground.style.color = "white";
    }else {
        console.log("Error occurs in changeHeaderBackground() function.");
    }

}

fetchHeaderInfo();
fetchTemperature();
fetchForecastInfo();
changeHeaderBackground();
