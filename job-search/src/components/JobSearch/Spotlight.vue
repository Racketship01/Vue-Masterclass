<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <!-- <slot :spotlight="spotlight"></slot> -->
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "Spotlight",
  setup() {
    const spotlights = ref([]);

    const getSpotlights = async () => {
      const baseURL = process.env.VUE_APP_API_URL;
      const url = `${baseURL}/spotlights`;
      const response = await axios.get(url);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights); // no need to invoked function because it will produce the return value, just provide the function name then no need to invoke // knows to run whenever the component mount, no need to return at the setup(), similarly to the other component lifecycle it will run at the specific moments in the components lifecycle

    return { spotlights };
  },

  /*
  ------- OPTION API -----------
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const baseURL = process.env.VUE_APP_API_URL;
    const url = `${baseURL}/spotlights`;
    const response = await axios.get(url);
    // console.log(response.data);

    this.spotlights = response.data;
  },
*/
};

// no need to invoked function because it will produce the return value, just provide the function name then no need to invoke // knows to run whenever the component mount, no need to return at the setup(), similarly to the other component lifecycle it will run at the specific moments in the components lifecycle
</script>
