<script>
import Card from '~/components/card.vue';
import mixins from '~/components/mixins.js';
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
    },
// Metadata
head () {
      return {
        title: 'dog pics',
        meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'Best dog pics around', name: 'Dog images', content: 'Dog pics for days' }
      ]
    }
    }
  }
</script>

<template>
<main>
  <p v-if="errorMessage">{{errorMessage}}</p>
  <h1>Favorite dogs</h1>
  <!-- Image content goes here -->
  <h4>Calling The Dog API for nine dogs!</h4>
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
.card img {
width: 100%;
}

</style>