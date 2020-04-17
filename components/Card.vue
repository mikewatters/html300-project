<script>
//Prop validation for component
export default {
  name: 'card',
  props: {
    card: Object,
    default: function() {
      return {}
    }
  }
}

</script>

<template>
<!-- Cat image cards -->
<!-- Cat image cards -->
<div class="card bg-light text-white">
  <img :src="card.url" class="card-img" :alt="card.alt">
</div>
<p> {{ card.id }}</p>
</template>

<style scoped>

</style>
