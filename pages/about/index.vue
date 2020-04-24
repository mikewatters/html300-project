<template>
<!-- Featured content -->
<main class="main">
  <!-- Accordion for the cat breeds -->
        <h1>All the cat breeds</h1>
<section v-for="breed in breeds" :key="breed.id">
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="'accordion-'+breed.id" variant="light">{{breed.name}} <span class="transparently">😺</span></b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+breed.id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><h5>{{ breed.description }}</h5></b-card-text>
          <b-button class="info-button" pill variant="dark">&nbsp;{{ breed.life_span }} years&nbsp;</b-button>
          <b-button pill class="info-button" variant="info">&nbsp;{{breed.temperament}}&nbsp;</b-button>
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
    },
// Metadata
    head () {
      return {
        title: 'Cat breeds',
        meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
       { hid: 'About', name: 'Cat breeds', content: 'Check out this listing of all the cat breeds' }
      ]
    }
    }
}
</script>

<style scoped>

.info-button {
  margin: .25rem;
}

.transparently {
  opacity: 0.25;
  float: left;
}

</style>