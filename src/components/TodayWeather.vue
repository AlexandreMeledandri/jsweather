<script>
import WeatherDaySunny from "@/assets/weathericons/wi-day-sunny.svg";

export default {
  name: 'todayweather',
  components: {
    WeatherDaySunny
  },
  data(){
    return {
      temperature: 20
    }
  }
};
</script>

<template>
<div class="row align-items-center">
  <div class="col-md-12">
    <h2>Today</h2>
  </div>
  <div class ="col-md-2 offset-md-4">
    <WeatherDaySunny/>
  </div>
  <div class="col-md-2">
    <p class="temperature-text text-center">{{temperature}}°</p>
  </div>
</div>
</template>
<style>
.temperature-text{
  font-size:6em;
}
</style>