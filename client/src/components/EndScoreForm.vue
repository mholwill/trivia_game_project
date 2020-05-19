<template lang="html">
  <div class="container">
    <form id="end-score-form" v-on:submit="handleSubmit">
      <div class="formWrap">
        <label for="name">Your name: </label>
        <br>
        <input type="text" id="name" v-model="name" required/>
      </div>
      <div class="savedData">
        <label for="category">Category: </label>
        <br>
        <input disabled="disabled" type="text" id="category" :value="questionsAsked[0].category"/>
      </div>
      <div class="savedData">
        <label for="score">Total Score: </label>
        <br>
        <input disabled="disabled" type="text" id="score" :value="total"/>
      </div>
      <div class="savedData">
        <label for="difficulty">Difficulty: </label>
        <br>
        <input disabled="disabled" type="text" id="difficulty" :value="questionsAsked[0].difficulty"/>
      </div>
      <input class="submit-button" type="submit" value="Save" id="save"/>
    </form>
  </div>
</template>

<script>
// import ScoreService from '../services/ScoreService.js'
import {eventBus} from '@/main.js';
export default {
  name: 'endscoreform',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    handleSubmit(evt){
      evt.preventDefault();
      const payload = {
        name: this.name,
        score: this.total,
        difficulty: this.questionsAsked[0].difficulty,
        category: this.questionsAsked[0].category
      };
    }
  },
  props: ['questionsAsked', 'total']
}
</script>

<style lang="css" scoped>

.container {
  display: flex;
  justify-content: center;
}

.formWrap {
  font-size: 1.5em;
}

.savedData {
  font-size: 1.5em;
}

input[type="text"] {
  padding: 5px;
  border-radius: 8px;
  margin: 20px 0;
  width: 100%;
  outline: none;
  cursor: pointer;
}

.savedData input[type="text"]{
  font-size: 0.75em;
  padding: 5px;
  border-radius: 8px;
  width: 400px;
  margin: 20px 0;
  background: none;
  border: none;
  text-transform: capitalize;
}


.submit-button {
  margin-top: 20px;
  background-color: white;
  width: 100%;
  border: 2px #1C3144 solid;
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
