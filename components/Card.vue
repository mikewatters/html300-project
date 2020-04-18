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
<!-- Image cards -->
    <div class="box" :id="'box'+card.id">
       <b-img-lazy :src="card.url" :title="card.id"></b-img-lazy>
    </div>
</template>

<style>
.box {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 0;
  margin-bottom: 1rem;
}
.box img {
  object-fit: cover;
  width: 100%
}
.box-effect {
  -webkit-filter: saturate(8);
  filter: saturate(8);
}
</style>