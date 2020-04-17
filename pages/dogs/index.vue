<script>
import Card from '@/components/card.vue';
import mixins from '@/components/mixins.js';
import axios from 'axios'

// Image data
// The Dog API. Details and documentation here: https://thedogapi.com/
export default {
    components: {
    Card
  },
  mixins: [mixins],
  data(){
      return {
        cards: [],
        errorMessage: undefined
      }
    },
    mounted(){
      axios.defaults.headers.common['x-api-key'] = "151c477d-020a-437e-9f7b-b7d06c7eff38"
      axios
        .get('https://api.thedogapi.com/v1/images/search', { params: { limit:9, size:"thumb" } } )
        .then(response => {
          this.cards = response.data
        })
        .catch(err=>{
          console.error('oops an error: ', err)
          this.errorMessage = "Oops, an error occurred!"
        })
    }
  }
</script>

<template>
<main>
  <p v-if="errorMessage">{{errorMessage}}</p>
  <h1>These are a few of my favorite dogs</h1>
  <!-- Image content goes here -->
  <p>I'm calling The Dog API for nine incredible dogs!</p>

  <section class="card-columns" v-if="cards">
    <card v-for="card in cards" :img="card.url" :card="card" :key="card.id">
    </card>
  </section>

</section>
</main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card img {
width: 100%;
}

</style>
