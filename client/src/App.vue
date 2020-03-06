<template>
  <div id="app">
    <start-form :categories="categories"/>
  </div>
</template>

<script>
import StartForm from '@/components/StartForm';
import {eventBus} from '@/main.js'

export default {
  name: 'App',
  data(){
    return {
      categories: {},
      selectedCategory: null,
      questions: {}
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
    .then(questions => this.questions = questions.results)
    })
  },
  components: {
    'start-form': StartForm
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
