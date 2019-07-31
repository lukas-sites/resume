import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faMobileAlt, faMapMarkerAlt, faLinkedinIn, faGithub);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
