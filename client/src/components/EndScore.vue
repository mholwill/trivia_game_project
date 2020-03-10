<template lang="html">
  <div id='finalScore'>
    <h1 class="final-score">Your Score</h1>
    <h2>{{total}}/10</h2>
  <div id="button-container">
    <button class='save-button' @click="handleClick">Would you like to save your score?</button>
  </div>
  <ul  v-for="question in questionsAsked">
    <li v-html="question.question"></li>
    <li v-html="question.correct_answer">Correct Answer</li>
  </ul>
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

.final-score {
  font-size: 3em;
}

#finalScore > h2 {
  text-align: center;
  font-size: 2em;
  color: #FFBA08;
  -webkit-text-stroke: 2px black;
  font-family: 'Bowlby One SC', cursive;
}

li {
  text-decoration: none;
  list-style: none;
  text-align: center;
}

#button-container {
  display: flex;
  justify-content: center;
}

.save-button {
  width: 30%;
  padding: 10px;
  cursor: pointer;
  color: black;
  border: 2px #1C3144 solid;
  border-radius: 8px;
  font-size: 1em;
  font-family: 'Quicksand', sans-serif;
}

.save-button:hover{
  box-shadow: 0 8px 16px 0 #A2AEBB, 0 6px 20px 0 #A2AEBB
}

</style>
