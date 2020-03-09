<template lang="html">
  <div id='finalScore'>
    <h1>Your Score</h1>
    <h2>{{total}}</h2>
  <ul  v-for="question in questions">
    <li v-html="question.question"></li>
    <li v-html="question.correct_answer"></li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'end-score',
  props: ['questions', 'total']
}
</script>

<style lang="css" scoped>
  
</style>
