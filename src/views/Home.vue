<template>
  <div class="home">
    <div>
      Meteo du jour
    </div>  
    <div>
      Meteo de la semaine
      <!-- <hello :varenfant="test" @userClick="method">   -->
        <todayweather :weather="weatherData"></todayweather>
        <weather-forecast></weather-forecast>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherForecast from "../components/WeatherForecast";
import todayweather from '../components/TodayWeather';
export default {
  
  name: 'home',
  components: {
    WeatherForecast,
    todayweather
  },

  data() {
    return {
      weatherData: {}
    }
  },

  mounted(){
    this.fetchWeather();    
  },

  methods: {
    fetchWeather(){
      axios
      .get('/data/2.5/weather?q=Cergy,FR&appid=8abce26ea4b823746ee23875249a999b&units=metric') 
        // 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1', {})
      .then((todayweather) => {
        this.mappingWeather(todayweather);
        console.log(todayweather);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    mappingWeather(_todayweather){
      let _weather = _todayweather.data.weather[0].description;
      let _temp = _todayweather.weather.data.main.temp;
      
      if (_temp){
        this.weatherData.temp = _temp;
      }
      
      if( _weather && (_weather ==='few clouds'|| _weather === 'scattered clouds')){
        this.weatherData.weather = 'sunny_cloudy';
      }

      else if(_weather && _weather ==='clear sky'){
        this.weatherData.weather = 'sunny';
      }
      else if(_weather && _weather ==='thunderstorm'){
        this.weatherData.weather = 'storm_shower';        
      }
      else if(_weather && _weather ==='shower rain'){
        this.weatherData.weather = 'showers';        
      }
      else if(_weather && _weather ==='rain'){
        this.weatherData.weather = 'rain';       
      }
      else{

      }
      

    }
  },

};
</script>
