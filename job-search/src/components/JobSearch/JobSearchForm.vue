<template>
  <!-- this component will be rendered at hero component under headline component -->
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input
          v-model="role"
          placeholder="Software engineer"
          data-test="role-input"
        />
        <!-- <text-input
          placeholder="Software engineer"
          :valueProp="role"
          @handle-input="role = $event"
        /> -->
        <!-- :value here is the prop that will be passed in text input child component -->
      </div>

      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <text-input
          v-model="location"
          placeholder="Los Angeles"
          data-test="location-input"
        />
      </div>
    </div>

    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
      data-test="form-submit-button"
    />
  </form>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { ref, defineComponent } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default defineComponent({
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  setup() {
    const router = useRouter(); // returns vue router object

    const role = ref("");
    const location = ref("");

    const searchForJobs = () => {
      router.push({
        name: "JobResults",
        query: {
          role: role.value,
          location: location.value,
        }, // queryParams --?role=Developer&location=Los&Angeles
      });
    };

    return { role, location, searchForJobs };
  },

  /*
-------OPTION API--------------
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
*/

  // methods: {
  //   updateRole(payload) {
  //     this.role = payload;
  //   }, // whenever child(textInput component) emits the handleInput event, we're going to react to it by invoking the updateRole method then it will receive a payload argument. And that represents the second argument we provided in emit method at child, which is just going to be the string with the actual text input.
  //   updateLocation(payload) {
  //     this.location = payload;
  //   },
  // },
});
</script>
