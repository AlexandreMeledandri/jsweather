<template>
  <div class="about">
    <h1>Summary</h1>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
    
  },

  data() {
    return {
      test: "testValue"
    }
  },

  methods: {
    method(arg1, arg2) {
      console.log(arg1) // value1
      console.log(arg2) // value2
    }
  }
};
</script>
