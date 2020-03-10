<template lang="html">
  <div id='finalScore'>
    <h1>Your Score</h1>
    <h2>{{total}}/10</h2>
  <ul  v-for="question in questionsAsked">
    <li v-html="question.question"></li>
    <li v-html="question.correct_answer"></li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'end-score',
  props: ['questionsAsked', 'total']
}
</script>

<style lang="css" scoped>

</style>
