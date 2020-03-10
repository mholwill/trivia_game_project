<template lang="html">
  <div class="container">
    <form id="endscoreform" v-on:submit="handleSubmit">
      <div class="formWrap">
        <label for="name">Your name:</label>
        <input type="text" id="name" v-model="name" required/>
      </div>
      <div class="formWrap">
        {{questionsAsked.category}}
      </div>
      <div class="formWrap">
        {{total}}
      </div>
      <div class="formWrap">
        {{questionsAsked.difficulty}}
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
        name: this.name,
        score: this.total,
        dificulty: this.questionsAsked.difficulty,
        category: this.questionsAsked.category
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
