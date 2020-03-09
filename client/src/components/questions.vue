<template lang="html">
<div>
  <h4 >
    {{questions.question}}</h4>

  <button @click="handleClick(index)" v-for="(answer, index) in answers">{{answer}}</button>

</div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name:"question-asked",
  data(){
    return{
      selectedAnswer: ""
    }
  },
  props:['questions', 'answers'],
  methods: {

    handleClick: function(index) {
      let payload = 0;
      if (this.questions.correct_answer === this.answers[index]) {
        payload += 1
      }
      console.log(this.questions.correct_answer, this.answers[index]);
      eventBus.$emit('answer-selected', payload);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
