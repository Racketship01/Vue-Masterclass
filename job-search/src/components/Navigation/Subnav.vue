<template>
  <div class="w-full h-16 bg-white border-b border-solid border-x-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <!-- global component --parent component of subnav rendering a child component --used a props called icon(docu for vue implementation of fontawesom) to customize details how child renders  -->
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <!-- icon is a automatic prop in fontawesome package --2 array of strings: 1st fas short for fontawesome 2nd actual fontawesome icon -->
        <span>
          <span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { FILTERED_JOBS } from "@/store/constants";

export default {
  name: "Subnav",
  computed: {
    ...mapGetters([FILTERED_JOBS]),
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
