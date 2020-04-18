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
<div class="card">
<b-card-img-lazy :src="card.url"></b-card-img-lazy>
</div>

</template>

<style>
.red-border {
    border: 3px solid #6c757d;
    box-shadow: 3px 3px 6px #6c757d;

}
</style>