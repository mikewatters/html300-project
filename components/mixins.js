export default {
  created: function() {
  },
  data() {
    return {
      isHidden: false,
      myVal: true
    }
  },
  methods: {
    toggleShowHide() {
      this.isHidden = !this.isHidden;
    },
// Make the cats and dogs glow
    glowMethod() {
      var element = document.querySelectorAll(".box");
      console.log(element)
      element.forEach(function(e) {
        e.classList.toggle("box-effect");
      })
    },
// Reload the page for more cats and dogs
    reloadMethod() {
      console.log('this is loading')
      location.reload();
    }

  }
}
