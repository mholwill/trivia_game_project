<template>
  <div id="app">
    <h1>TRIVIA GAME</h1>
    <start-form :categories="categories"/>
    <a-question v-if="questions.length" :questions="questions[index]" :answers="answers[index]" />
    <h2 v-if="questions.length">{{this.total}}/10</h2>
    <final-score v-if="" :total="total" :questions="questions"/>
  </div>
</template>

<script>
import StartForm from '@/components/StartForm.vue';
import {eventBus} from '@/main.js';
import { shuffle } from 'lodash';
import {decode} from 'decode-html';
import Questions from '@/components/Questions.vue';
import EndScore from '@/components/EndScore.vue'

export default {
  name: 'App',
  data(){
    return {
      categories: {},
      selectedCategory: null,
      questions: [],
      answers: [],
      index: 0,
      total: 0
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
        eventBus.$on('answer-selected', (payload) => {
           this.index += 1;
           this.total += payload;
        })

      },
    components: {
      'start-form': StartForm,
      'a-question': Questions,
      'final-score': EndScore
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
      color: black;
      margin-top: 60px;
    }
  </style>
