<template lang="html">
  <div class="container">
    <form id="endscoreform" v-on:submit="handleSubmit">
      <div class="formWrap">
        <label for="name">Your name: </label>
        <input type="text" id="name" v-model="name" required/>
      </div>
      <div class="formWrap">
        <label for="category">Category: </label>
        <input type="text" id="category" :value="questionsAsked[0].category"/>
      </div>
      <div class="formWrap">
        <label for="score">Total Score: </label>
        <input type="text" id="score" :value="total"/>
      </div>
      <div class="formWrap">
        <label for="difficulty">Difficulty: </label>
        <input type="text" id="difficulty" :value="questionsAsked[0].difficulty"/>
      </div>
      <input type="submit" value="Save" id="save"/>
    </form>
  </div>
</template>

<script>
import ScoreService from '../services/ScoreService.js'
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
        Name: this.name,
        Score: this.total,
        Difficulty: this.questionsAsked[0].difficulty,
        Category: this.questionsAsked[0].category
      };
      ScoreService.postScores(payload)
      .then(scores => {
        eventBus.$emit('score-added', scores);
      })
    }
  },
  props: ['questionsAsked', 'total']
}
</script>

<style lang="css" scoped>
</style>
