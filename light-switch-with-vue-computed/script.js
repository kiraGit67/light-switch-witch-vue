"use strict";

Vue.createApp({
  data() {
    return {
      buttonText: "Light Switch",
      isDark: false,
    };
  },
  computed: {
    cssStyling() {
      const isDark = this.isDark;
      return {
        "body--dark": isDark,
      };
    },
  },
}).mount("#app");
