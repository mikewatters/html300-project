<template>
  <div id="app">
    <banner>
    <div slot="slot1">Wild cats!</div>
    </banner>
  <!-- Secondary navigation -->
  <div class="row">
    <div class="col-sm-2">
    <ul class="nav flex-sm-column">
      <li class="nav-item">
        <nuxt-link to="/about" class="nav-link">About</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/cats" class="nav-link">Cats</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/dogs" class="nav-link">Dogs</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/information" class="nav-link">Information</nuxt-link>
      </li>

    </ul>
  </div>

  <!-- Main content -->
  <div class="col-sm-10">
  <nuxt />
  </div>
  </div>

<!-- Footer -->
<footer>
<div class="mew-footer">
  <p>Mike Watters | HTML300</p>
</div>
</footer>
</div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  name: 'App',
  components: {
  Banner
  }
}
</script>


<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
.logo {
font-family: Georgia, 'Times New Roman', serif;
font-size: 4rem;
font-style: italic;
}
.btn {
font-size: 1.25rem;
}
.container {
  width: 95%;
  margin: 1rem;
  padding: 1rem;
  }

.jumbotron {
  padding: 1rem 0;
  }

html {
    box-sizing: border-box;
}

*,
*:after,
*:before {
    box-sizing: inherit;
}

main {
padding: 2rem;
}

.col-sm-2 {
padding: 2rem 0rem 0rem 2rem;
}

.float-right {
  margin: 0.5rem 0rem 1rem 1rem;
}

.img-fluid {
  margin-bottom: 1rem;
  width: 100%;
}

.mew-footer {
  width: 100%;
  height: auto;
  background-color: #343a40;
  color: #fff;
  padding: 2rem 2rem 1rem;
  margin-top: 1rem;
  text-align: center;
}
</style>
