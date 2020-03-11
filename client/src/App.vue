<template>
  <div id="app">
    <h1>QUIZ</h1>
  <div class="menu">
    <li>Start Form</li>
    <li>Top Scores</li>
  </div>
    <component v-bind:is='component' :categories='categories' :questions="questions[index]" :answers="answers[index]" :questionsAsked="questions" :total="total"/>
  </div>
</template>

<script>
import ScoreService from './services/ScoreService.js'
import StartForm from '@/components/StartForm.vue';
import {eventBus} from '@/main.js';
import { shuffle } from 'lodash';
import Questions from '@/components/Questions.vue';
import EndScore from '@/components/EndScore.vue'
import EndScoreForm from '@/components/EndScoreForm.vue'

export default {
  name: 'App',
  data(){
    return {
      categories: {},
      selectedCategory: null,
      questions: [],
      answers: [],
      index: 0,
      total: 0,
      component: StartForm
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
      if (this.component === StartForm) {
        this.component = EndScoreForm;
      } else {
        this.component = StartForm;
      }
      })
      eventBus.$on('answer-selected', (payload) => {
         this.index += 1;
         this.total += payload;
         if( this.index === 10){
           this.component = EndScore;
         } else {
           this.component = Questions;
         }
      }),
      eventBus.$on('saveyourscore', (payload) => {
        if(this.component === EndScore) {
          this.component = EndScoreForm
        }
        else {
          this.component = EndScore
        }
      })
    },
  components: {
    StartForm,
    Questions,
    EndScore,
    EndScoreForm
  },
  methods: {
    formattedQuestions: function (questions) {
      questions.forEach((question) => {
        let newArray = [...question.incorrect_answers, question.correct_answer]

        newArray = shuffle(newArray)

        this.answers = [...this.answers, newArray]
      })
    }
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Quicksand:600&display=swap');

  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');

  #app {
    font-family: 'Quicksand', sans-serif;
    color: black;
    margin-top: 60px;
  }

  .menu{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
    text-align: center;
  }

  .menu li {
    text-decoration: none;
    list-style: none;
    padding: 0 30px;
    margin-bottom: 20px;
  }

  h1 {
    font-family: 'Bowlby One SC', cursive;
    font-size: 6em;
    line-height: 30px;
    text-align: center;
    color: #FFBA08;
    -webkit-text-stroke: 2px black;
  }
</style>
