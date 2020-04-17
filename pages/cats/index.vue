<script>
import Card from '@/components/card.vue';
import mixins from '@/components/mixins.js';
import axios from 'axios'

// Image data
// The Cat API. Details and documentation here: https://thecatapi.com/
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
      axios.defaults.headers.common['x-api-key'] = "2e1a8e1f-3753-4843-b235-aaf530ab2a66"
      axios
        .get('https://api.thecatapi.com/v1/images/search', { params: { limit:9, size:"thumb" } } )
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
  <h1>These are a few of my favorite cats</h1>
  <!-- Image content goes here -->
  <p>I'm calling The Cat API for nine incredible cats!</p>
      <b-button v-if="myVal" @click="myMethod()" class="btn-success" v-b-popover.hover.top="'Make these cats go hmmm.'" title="Do it now">
      Click me to make the cats bigger
    </b-button>
  <section class="card-columns" v-if="cards">
    <card v-for="card in cards" :img="card.url" :card="card" :key="card.id">
    </card>
  </section>



</main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
width: 100%;
}
.red-border {
  border: 0.5rem solid #d9534f;
}
</style>
