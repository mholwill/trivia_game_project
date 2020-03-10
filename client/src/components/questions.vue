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
    <h2>{{total}}/10</h2>
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
}

button:hover{

}

.question {
  background-color: white;
  border: 1px black solid;
  padding: 20px;
  border-radius: 8px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.correct {
  background-color: green;
}

.wrong {
  background-color: red;
}
</style>
