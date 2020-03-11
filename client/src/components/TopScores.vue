<template lang="html">
  <div id="topScore-container">
    <h1>TOP SCORES</h1>
    <table id="table-container">
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Difficulty</th>
        <th>Score</th>
      </tr>

      <tr class="top-three" v-for="scores in filterScores">
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
      return this.topScores.sort(compare).slice(0, 10)
    }
  }
}
</script>

<style lang="css" scoped>

#topScore-container h1{
  text-align: center;
  font-size: 3em;
  margin-top: 60px;
  margin-bottom: 40px;
}

#table-container {
  display: table;
  text-align: center;
  width: 65%;
  margin: 0 auto;
  border: 1px solid black;
  border-collapse: collapse;
}

th {
  padding: 7px 10px;
  text-align: left;
  font-weight: bolder;
  border: 2px solid black;
  font-size: 1em;
  background-color: #0d71c5;
  color: white;
}

td {
  padding: 7px 10px;
  text-align: left;
  border: 1px solid black;
  text-transform: capitalize;
}

.top-three:nth-last-of-type(1n+8) {
  background-color: #fbd980;
}

</style>
