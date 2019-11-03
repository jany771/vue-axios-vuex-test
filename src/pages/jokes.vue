<template>
  <section class="jokes">
     <p><router-link to='/weather'>go to weather ,no params</router-link></p>
    <p><router-link :to='{path:"/weather",query:"合肥"}'>go to weather , params</router-link></p>
    <h1>I'm jokes</h1>
    <div v-if="jokes.length>0">笑话大全
      <ul>
        <li v-for="(item,index) in jokes" :key="index">{{item.content}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import {getJokes} from '../../api/getData'
export default {
  name: 'jokes',
  data() {
    return {
      jokes:[]
    }
  },
  components: {},
  watch: {},
  mounted() {
    getJokes().then(({data}) => {
      this.jokes = data.data
    })
  },
  methods: {}
}
</script>

<style scoped>

</style>
