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
import { useFilterJobs } from "@/store/composables";
//import { computed } from "vue";
//import { useStore } from "vuex";

import useConfirmRoute from "@/composables/useConfirmRoute";
// import { useRoute } from "vue-router";

// import { mapGetters } from "vuex";
// import { FILTERED_JOBS } from "@/store/constants";

export default {
  name: "Subnav",
  setup() {
    const FILTERED_JOBS = useFilterJobs();
    // const store = useStore();
    // const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

    const onJobResultsPage = useConfirmRoute("JobResults");
    // const route = useRoute();
    // const onJobResultsPage = computed(() => route.name === "JobResults");

    return { onJobResultsPage, FILTERED_JOBS };
  },

  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   onJobResultsPage() {
  //     return this.$route.name === "JobResults";
  //   },
  // },
};
</script>
