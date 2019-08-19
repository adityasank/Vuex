<template>
  <div class="stats">
    <h1>demo</h1>
    <p>small demo {{ countLinks }} links</p>
    <button v-on:click="removeAllLinks">Remove all links</button>
    <p>{{ msg }}</p>
   
  </div>
</template>

<script>
import { mapGetters,mapActions, mapMutations } from "vuex";
export default {
  name: "Stats",
  data(){
    return{
      msg:''
    }
  },
  
  computed: {
    ...mapGetters([
      "countLinks"
      ]),
  },
   methods: {
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions(['removeAll']),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = 'They have been removed'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}
</style>
