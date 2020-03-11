<template lang="html">
  <div>
    <div class="question">
      <!-- <h4>{{questionNumber(question.id)}}</h4> -->
      <h4>Question: {{count}} of 10</h4>
      <h4 v-if="questions" v-html='questions.question'> </h4>
    </div>
    <div id="content-container">
      <div id="buttons">
        <button class="button-style bouncer" v-for="(answer, index) in answers" :disabled="disabled"
        @click="handleClick($event, index)"
        v-html='answer' ref="button"></button>
        <audio ref='audioCorrect' src='../../public/sounds/Mario-coin-sound.mp3'></audio>
        <audio ref='audioWrong' src='../../public/sounds/Wrong-answer-sound-effect.mp3'></audio>
      </div>
      <div class="score">
        <h2>{{total}}/10</h2>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name:"question-asked",
  props:['questions', 'answers', 'total', 'muted'],
  data(){
    return{
      disabled: false,
      count: 1
    }
  },
  methods: {
    handleClick: function(event, index) {
      this.$refs.button.forEach(button => {
        button.classList.remove('bouncer')
      })

      let payload = 0;
      this.disabled = true;

      if (this.questions.correct_answer === this.answers[index]) {
        payload += 1
        event.target.classList.add('correct')
        if (!this.muted)this.$refs.audioCorrect.play();
      } else {
        event.target.classList.add('wrong')
        if (!this.muted)this.$refs.audioWrong.play();
      }
      setTimeout(() => {
        this.$refs.button.forEach(button => {
          button.classList.add('bouncer')
        })
        event.target.classList.remove('correct')
        event.target.classList.remove('wrong')
        this.disabled = false;
        this.incrementCount();
        eventBus.$emit('answer-selected', payload);
      }, 1000)
    },
    incrementCount: function(){
      this.count += 1
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

.button-style {
  margin-top: 20px;
  border: 2px #1C3144 solid;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  cursor: pointer;
  color: black;
  border-radius: 8px;
  font-size: 1em;
  font-family: 'Quicksand', sans-serif;
  outline: none;
}

.button-style:hover{
  box-shadow: 0 8px 16px 0 #A2AEBB, 0 6px 20px 0 #A2AEBB
}

@keyframes bounce {
  0% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(-1deg);
  }
}

.bouncer {
  animation-name: bounce;
  animation-iteration-count: 5;
  animation-timing-function: linear;
  animation-delay: 5s;
  animation-duration: 0.2s;
  display: inline-block;
  animation-play-state: running;
}

.bouncer:nth-of-type(odd) {
  animation-direction: alternate;
}

.bouncer:nth-of-type(even) {
  animation-direction: alternate-reverse;
}

.question {
  background-color: white;
  border: 2px #1C3144 solid;
  padding: 15px;
  border-radius: 8px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.score {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  font-size: 4em;
  color: #FFBA08;
  -webkit-text-stroke: 2px black;
}

.score h2 {
  margin: 0;
}

.correct {
  background-color: lightgreen;
}

.wrong {
  background-color: salmon;
}
</style>
