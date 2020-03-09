<template lang="html">
  <div>
    <h4 v-html='questions.question'></h4>
    <button v-for="(answer, index) in answers" :disabled="disabled"
    @click="handleClick($event, index)"
    :class=""
    v-html='answer'></button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import {decode} from 'decode-html';
export default {
  name:"question-asked",
  props:['questions', 'answers'],
  data(){
    return{
      disabled: false
    }
  },
  methods: {
    handleClick: function(event, index) {
      let payload = 0;
      this.disabled = true;
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
      }, 2000)
    }
  }
}
</script>

<style lang="css" scoped>

.correct {
  background-color: green;
}

.wrong {
  background-color: red;
}
</style>
