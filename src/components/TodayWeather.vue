<script>
import WeatherIcons from "@/components/WeatherIcons";

export default {
  name: 'todayweather',
  components: {
    WeatherIcons
  },
  data(){
    return {}
  },
  props: {
    icon: {
      type: String,
      require: true
    },

    temperature: {
      type: Number,
      require: true
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
    <WeatherIcons :icon="icon"/>
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