<script>
import WeatherDaySunny from "@/assets/weathericons/wi-day-sunny.svg";
import WeatherStormShowers from "@/assets/weathericons/wi-storm-showers.svg";
import WeatherCloudy from "@/assets/weathericons/wi-cloudy.svg";
import WeatherDayCloudy from "@/assets/weathericons/wi-day-cloudy.svg";
import WeatherRain from "@/assets/weathericons/wi-rain.svg";
import WeatherShowers from "@/assets/weathericons/wi-showers.svg";
import WeatherSrinkle from "@/assets/weathericons/wi-sprinkle.svg";
export default {
  name: 'weather-icons',
  props: {
    icon: {
      type: String,
      required: true
    }
  },

  components: {
    WeatherDaySunny,
    WeatherStormShowers,
    WeatherCloudy,
    WeatherDayCloudy,
    WeatherRain,
    WeatherShowers,
    WeatherSprinkle
  },



};
</script>
<template>
    <div>
    <weather-day-sunny v-show="icon === 'sunny'"/>
    <weather-cloudy v-show="icon === 'cloudy'"/>
    <weather-storm-showers v-show="icon === 'storm_shower'"/>
    <weather-showers v-show="icon === 'showers'"/>
    <weather-day-cloudy v-show="icon === 'sunny_cloudy'"/>
    <weather-rain v-show="icon === 'rain'" />
    <weather-sprinkle v-show="icon === 'sprinkle'" />
    </div>
</template>
