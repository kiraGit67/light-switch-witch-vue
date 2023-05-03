"use strict";

Vue.createApp({
  data() {
    return {
      lightOn: true,
      buttonText: ["Licht An", "Licht Aus"],
      cssClasses: ["light", "dark"],
    };
  },
  computed: {
    currentButtonText() {
      if (this.lightOn) {
        return this.buttonText[1];
      } else {
        return this.buttonText[0];
      }
    },
    currentStyle() {
      if (this.lightOn) {
        return this.cssClasses[0];
      } else {
        return this.cssClasses[1];
      }
    },
  },
  methods: {
    changeState() {
      this.lightOn = !this.lightOn;
    },
  },
}).mount("#app");
