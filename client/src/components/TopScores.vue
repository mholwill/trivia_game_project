<template lang="html">
  <div>
    <h1>TOP SCORES</h1>
    <ul v-for="scores in topScores">
      <li>Name: {{scores.Name}}<br>
        Difficulty: {{scores.Difficulty}}<br>
        Score: {{scores.Score}}<br>
        Category: {{scores.Category}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'top-scores',
  props: ['topScores']

}
</script>

<style lang="css" scoped>
</style>

Name: "John Harper",
Score: 6,
Difficulty: "medium",
Category: "Animals"
