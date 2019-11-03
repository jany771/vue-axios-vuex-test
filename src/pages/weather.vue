<template>
  <section class="weather">
    <h1>I'm weather</h1>
    <div>
      请输入城市名称：
      <input type="text" value="" v-model="city"/>
      <button @click="submit">提交</button>
     
      <router-link to="/">go home</router-link>
    </div>
  </section>
</template>

<script>
import {getWeather} from '../../api/getData'
export default {
  name: 'weather',
  data() {
    return {
      city:" ",
      weather:this.$store.state.weather
    }
  },
  components: {},
  watch: {},
  updated() {

  },
 
  methods: {
    submit(){
      getWeather(this.city).then((data)=>{
        if(data.data.code === 1){
           console.log(data.data.msg)
           this.$store.dispatch('changeWeather',data.data)
           console.log(this.weather)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
