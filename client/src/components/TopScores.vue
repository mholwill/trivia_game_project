<template lang="html">
  <div>
    <h1>TOP SCORES</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Difficulty</th>
        <th>Score</th>
      </tr>

      <tr v-for="scores in filterScores">
        <td>{{scores.Name}}</td>
        <td>{{scores.Category}}</td>
        <td>{{scores.Difficulty}}</td>
        <td>{{scores.Score}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'top-scores',
  props: ['topScores'],
  computed: {
    filterScores: function (){
      function compare(a, b) {
        if (a.Score < b.Score)
        return 1;
        if (a.Score > b.Score)
        return -1;
        return 0;
      }
      return this.topScores.sort(compare)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
