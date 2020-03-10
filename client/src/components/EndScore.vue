<template lang="html">
  <div id='finalScore'>
    <h1>Your Score</h1>
    <h2>{{total}}/10</h2>
  <ul  v-for="question in questionsAsked">
    <li v-html="question.question"></li>
    <li v-html="question.correct_answer"></li>
  </ul>
  <button @click="handleClick">Would you like to save your score?</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'end-score',
  props: ['questionsAsked', 'total'],
  methods: {
    handleClick: function (payload) {
      eventBus.$emit('saveyourscore', payload)
    }
  }
}
</script>

<style lang="css" scoped>

#finalscore {
  display: flex;
  justify-content: center;
}

li {
  text-decoration: none;
  list-style: none;
  text-align: center;
}

</style>
