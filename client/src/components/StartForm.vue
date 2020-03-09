<template lang="html">
  <div id="start-form">
      <form @submit.prevent="handleSubmit">
        <select  v-model="choosenCategory">
          <option value="" disabled selected hidden>Choose a category</option>
          <option v-for="(category, index) in categories" :key="index" :value="category.id">{{category.name}}</option>
        </select>
        <select v-model="difficulty">
          <option value="" disabled selected hidden>Choose a difficulty</option>
    			<option selected value="easy">Easy</option>
    			<option value="medium">Medium</option>
    			<option value="hard">Hard</option>
  		</select>
      <button type="submit" >START</button>
      </form>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: "start-form",
  props: ['categories'],
  data(){
    return{
      choosenCategory: "",
      difficulty: ""
    }
  },
  methods: {
    handleSubmit(){
      const payload = {
        id: this.choosenCategory,
        difficulty: this.difficulty
      }
      eventBus.$emit('category-selected', payload)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
