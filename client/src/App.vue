<template>
  <div id="app">
    <start-form :categories="categories"/>
  </div>
</template>

<script>
import StartForm from '@/components/StartForm';
import {eventBus} from '@/main.js';
import { shuffle } from 'lodash';

export default {
  name: 'App',
  data(){
    return {
      categories: {},
      selectedCategory: null,
      questions: {},
      answers: []
    }
  },
  mounted(){
    fetch('https://opentdb.com/api_category.php')
    .then(res => res.json())
    .then(categories => this.categories = categories.trivia_categories)

    eventBus.$on('category-selected', (payload) => {
      this.selectedCategory = payload;

    fetch(`https://opentdb.com/api.php?amount=10&category=${this.selectedCategory.id}&difficulty=${this.selectedCategory.difficulty}&type=multiple`)
    .then(res => res.json())
    .then((questions) => {
      this.questions = questions.results;
      this.formattedQuestions(questions.results);
    })
  })
  },


  components: {
    'start-form': StartForm
  },
  methods: {
    formattedQuestions: function (questions) {
      questions.forEach((question) => {
       let newArray = []
       newArray.push(question.correct_answer)
       newArray.push(question.incorrect_answers[0])
       newArray.push(question.incorrect_answers[1])
       newArray.push(question.incorrect_answers[2])
       newArray = shuffle(newArray)
       this.answers.push(newArray)
     })
   },

   // randomiseAnswers: function(answers) {
   //   let currentIndex = answers.length, temporaryValue, randomIndex;
   //   while (0!==currentIndex){
   //     randomIndex = Math.floor(Math.random() * currentIndex);
   //     currentIndex -= 1;
   //
   //     temporaryValue = answers[currentIndex];
   //     answers[currentIndex] = answers[randomIndex];
   //     answers[randomIndex] = temporaryValue;
   //   }
   //   return answers;
   //   console.log(randomiseAnswers(this.answers));
   // }

    shuffle: function(array) {
      let counter = array.length, temp, index;
  // While there are elements in the array
      while (counter > 0) {
  // Pick a random index
          index = Math.floor(Math.random() * counter);
  // Decrease counter by 1
          counter--;
  // And swap the last element with it
          temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }
      return array;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
