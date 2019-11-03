<template>
  <section class="index">
    <h1>I'm home page</h1>
    <p><router-link to='/jokes'>go to jokes ,no params</router-link></p>
    <p><router-link :to='{name:"jokes",params:"哈哈"}'>go to jokes , params</router-link></p>
     <div v-if="weatherO">
        所在城市：{{weatherO.data.address}}
        <ul>
          <li v-for="(item,index) in weatherO.data.forecasts " :key="index">
            {{item.date}}{{item.dayOfWeek}}
            <span>白天天气：{{item.dayWeather}}</span>
          </li>
        </ul>
      </div>
  </section>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {
       weatherO:this.$store.state.weather
    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>

</style>
