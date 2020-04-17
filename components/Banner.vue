<template>
<!-- Header -->
<div class="banner" id="banner">
<!-- Alert -->
<div>
  <b-alert show dismissible>
  <strong>{{ message | makeUppercase }}</strong>
  </b-alert>
</div>
<!-- Main navigation -->
<header>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/"><span class="logo">
        <slot name="slot1"></slot>
      </span></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Cat toys" right>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Train your cat" right>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Birds to eat" right>
          <b-dropdown-item href="#">All</b-dropdown-item>
          <b-dropdown-item href="#">The</b-dropdown-item>
          <b-dropdown-item href="#">Birds</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </header>
</div>
</template>

<script>
// Data and filter
export default {
  name: 'banner',
  data() {
    return {
      message: 'This only displays in an adorable cat emergency!',
    }
  },
  filters: {
    makeUppercase: function(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
.alert {
  margin: 0rem;
}
</style>
