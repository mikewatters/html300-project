<template>

    <!-- Featured content -->
    <main class="main">


        <div v-for="feature in features">
  <b-card
    overlay
    :img-src="feature.image"
    :alt="feature.alt"
    text-variant="white"
    :title="feature.title">
    <b-card-text>
      {{ feature.intro }}
    </b-card-text>
    <b-button pill variant="danger">
      More
    </b-button>
  </b-card>
</div>
 
    </main>

</template>

<script>
const image1 = require('../assets/storyblocks-flowers-in-a-garden-against-blue-sky.jpg');
const image2 = require('../assets/cats8.jpg');

export default {
data () {
  return {
    features: [
    { title: 'Yes, meow', intro: 'Kittens are fun', image: image1, alt: 'three adorable gray tabby kittens'},
    { title: 'Hello, sir', intro: 'Tuxedos are for lovers', image: image2, alt: 'a fine looking tuxedo cat'},
    ]
    }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
