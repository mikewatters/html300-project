<script>
import Card from '../../components/Card.vue';
import mixins from '../../components/mixins.js';
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
    },
// Metadata
  head () {
      return {
        title: 'Cat pics',
        meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'Best cat pics around', name: 'Cat images', content: 'Cat pics for days' }
      ]
    }
    }
  }
</script>

<template>
<main>
  <p v-if="errorMessage">{{errorMessage}}</p>
  <h1>Favorite cats</h1>
  <!-- Image content goes here -->
  <h4>Calling The Cat API for nine cats!</h4>
  <b-button v-if="myVal" @click="glowMethod()" pill variant="warning">
      Glow&nbsp;
    </b-button>
    <b-button v-if="myVal" @click="reloadMethod()" pill variant="danger">
      Reload&nbsp;
    </b-button>
    <p>&nbsp;</p>
  <section v-if="cards">
    <div class="card-columns">

    <card v-for="card in cards" :img="card.url" :card="card" :key="card.id">
    </card>
    </div>
  </section>



</main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>