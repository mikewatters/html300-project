<template>
<!-- Featured content -->
<main class="main">
  <!-- Grids -->
        <h1>All the cat breeds</h1>
<section v-for="breed in breeds">
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{breed.name}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p>{{ breed.description }}</p>
          <p><strong>Lifespan:</strong> {{ breed.life_span }} years</p>
        <p><strong>Temperament:</strong> {{breed.temperament}}</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</section>
</main>
</template>

<script>
import axios from 'axios'

// Image data
// The Cat API. Details and documentation here: https://thecatapi.com/
export default {
  data(){
      return {
        breeds: [],
        errorMessage: undefined
      }
    },
    mounted(){
      axios.defaults.headers.common['x-api-key'] = "2e1a8e1f-3753-4843-b235-aaf530ab2a66"
      axios
        .get('https://api.thecatapi.com/v1/breeds')
        .then(response => {
          this.breeds = response.data
          console.log(response.data)
        })
        .catch(err=>{
          console.error('oops an error: ', err)
          this.errorMessage = "Oops, an error occurred!"
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
