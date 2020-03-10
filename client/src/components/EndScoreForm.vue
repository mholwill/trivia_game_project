<template lang="html">
  <div class="container">
    <form id="endscoreform" v-on:submit="handleSubmit">
      <div class="formWrap">
        <label for="name">Your name: </label>
        <input type="text" id="name" v-model="name" required/>
      </div>
      <div class="formWrap">
        Category: {{}}
      </div>

      <div class="formWrap">
        Total points:
        <input type="text" id="score" v-model="score"/>
      </div>
      <div class="formWrap">
        <label for="difficulty">Difficulty: </label>
        <input type="text" id="difficulty" v-model="difficulty" value="questionsAsked.difficulty"/>

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
      name: '',
      category: '',
      score: '',
      difficulty: ''

    }
  },
  methods: {
    handleSubmit(evt){
      evt.preventDefault();
      const payload = {
        name: this.name,
        total: this.score,
        difficulty: this.difficulty,
        category: this.category
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
