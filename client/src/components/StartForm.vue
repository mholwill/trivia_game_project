<template lang="html">
  <div id="start-form">
      <form @submit.prevent="handleSubmit">
        <select class="submit-form" v-model="choosenCategory">
          <option value="" disabled selected hidden>Choose a category</option>
          <option v-for="(category, index) in categories" :key="index" :value="category.id">{{category.name}}</option>
        </select>
        <br>
        <select class="submit-form" v-model="difficulty">
          <option value="" disabled selected hidden>Choose a difficulty</option>
    			<option selected value="easy">Easy</option>
    			<option value="medium">Medium</option>
    			<option value="hard">Hard</option>
  		</select>
      <br>
      <button class="submit-button" type="submit" >START</button>
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

#start-form {
  display: flex;
  justify-content: center;
}

.submit-form {
  font-family: 'Quicksand', sans-serif;
  padding: 1em;
  margin: 30px;
  font-size: 1em;
}

.submit-button {
  margin-top: 20px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  cursor: pointer;
  color: black;
  border-radius: 8px;
  font-size: 1em;
  font-family: 'Quicksand', sans-serif;
}

</style>
