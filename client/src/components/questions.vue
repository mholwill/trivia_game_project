<template lang="html">
  <div>
    <div class="question">
      <h4 v-if="questions" v-html='questions.question'></h4>
    </div>
    <div id="buttons">
      <button v-for="(answer, index) in answers" :disabled="disabled"
      @click="handleClick($event, index)"
      :class=""
      v-html='answer'></button>
    </div>
    <div class="score">
      <h2>{{total}}/10</h2>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import {decode} from 'decode-html';
export default {
  name:"question-asked",
  props:['questions', 'answers', 'total'],
  data(){
    return{
      disabled: false
    }
  },
  methods: {
    handleClick: function(event, index) {
      let payload = 0;
      this.disabled = true;
      // if (this.questions.correct_answer){
      //   event.target.classList.add('correct')
      // }
      if (this.questions.correct_answer === this.answers[index]) {
        payload += 1
        event.target.classList.add('correct')
      } else {
        event.target.classList.add('wrong')
      }
      setTimeout(() => {
        event.target.classList.remove('correct')
        event.target.classList.remove('wrong')
        this.disabled = false;
        eventBus.$emit('answer-selected', payload);
      }, 1000)
    }
  }
}
</script>

<style lang="css" scoped>

#buttons {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

button {
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

button:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)
}

.question {
  background-color: white;
  border: 1px black solid;
  padding: 20px;
  border-radius: 8px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.score {
  display: flex;
  justify-content: flex-end;
}

.score {
  font-size: 3em;
}

.correct {
  background-color: green;
}

.wrong {
  background-color: red;
}
</style>
