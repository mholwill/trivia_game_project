<template lang="html">
  <div id='finalScore'>
    <h1 class="final-score">Your Score</h1>
    <h2>{{total}}/10</h2>
  <div id="button-container">
    <button class='save-button' @click="handleClick">Would you like to save your score?</button>
  </div>
  <!-- <ul  v-for="question in questionsAsked">
    <p v-html="question.question"></p>
    <p>Correct Answer: </p><p v-html="question.correct_answer"></p>
  </ul> -->
  <div class="tableDiv">
  <table id="table-container">
    <tr>
      <th>Question</th>
      <th>Correct Answer</th>
    </tr>

    <tr v-for="question in questionsAsked">
      <td v-html="question.question"></td>
      <td class="correct-column" v-html="question.correct_answer"></td>
    </tr>
  </table>
  </div>
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
  margin-top: 1em;
}

#finalScore > h2 {
  text-align: center;
  font-size: 2em;
  color: #FFBA08;
  -webkit-text-stroke: 2px black;
  font-family: 'Bowlby One SC', cursive;
}

#button-container {
  display: flex;
  justify-content: center;
}

.tableDiv {
  overflow-y: scroll;
  height: 300px;
}

#table-container {
  display: table;
  text-align: center;
  width: 65%;
  margin: 40px auto;
  border: 1px solid black;
  border-collapse: collapse;
}

th {
  padding: 7px 10px;
  text-align: left;
  font-weight: bolder;
  border: 2px solid black;
  font-size: 1em;
  background-color: #0d71c5;
  color: white;
}

td {
  padding: 7px 10px;
  text-align: left;
  border: 1px solid black;
  text-transform: capitalize;
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
  margin-bottom: 10px;
}

.save-button:hover{
  box-shadow: 0 8px 16px 0 #A2AEBB, 0 6px 20px 0 #A2AEBB
}

.correct-column {
  background-color: lightgreen;
}

</style>
