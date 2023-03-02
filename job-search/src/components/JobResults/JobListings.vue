<!-- serves as a parent component that renders when we go to /jobs/results || ultimate intenyt is to render a job lists component for every job we get from the back end-->
<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-list
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listings"
      />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous
          </router-link>

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
          >
            Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
/*
import { useStore } from "vuex";
// import { useRoute } from "vue-router";
// import { mapActions, mapGetters } from "vuex";
import { FETCH_JOBS } from "@/store/constants";

*/
import JobList from "@/components/JobResults/JobList.vue";

import { computed, onMounted } from "vue";
import { useFilterJobs, useFetchJobsDispatch } from "@/store/composables";

import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

export default {
  name: "JobListings",
  components: {
    JobList,
  },
  setup() {
    /*
    const store = useStore();
    const route = useRoute();

    const fetchJobs = async () => store.dispatch(FETCH_JOBS);
    
    const currentPage = computed(() =>
    Number.parseInt(route.query.page || "1")
    );
    */

    onMounted(useFetchJobsDispatch);
    const filteredJobs = useFilterJobs();
    const currentPage = useCurrentPage();
    const maxPage = Math.ceil(filteredJobs.value.length / 10);

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    /*
    const previousPage = computed(() => {
      const previousPage = currentPage.value - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    });
    const nextPage = computed(() => {
      const nextPage = currentPage.value + 1;
      const maxPage = Math.ceil(filteredJobs.value.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    });
    */

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });
    return { filteredJobs, currentPage, previousPage, nextPage, displayedJobs };
  },

  /*
  // data() {
  //   return {
  //     jobs: [], // store jobs(endpoint) array being fetch in backend
  //   };
  // },
  computed: {
    // ...mapState(["jobs"]), // vuex store state
    ...mapGetters([FILTERED_JOBS]),
    currentPage() {
      const pageString = this.$route.query.page || "1"; // page in query params
      // const pageNumber = Number.parseInt(pageString); // 1
      return Number.parseInt(pageString); // 1
    },
    previousPage() {
      const previousPage = this.currentPage - 1; // 1 - 1 = 0
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined; // undefined (not rendering previous page link at 1st page)
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10); // 100 / 10 = 10
      return nextPage <= maxPage ? nextPage : undefined; //nextPage
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10; // 1 - 1 = 0 and so on
      const lastJobIndex = pageNumber * 10; // 1 * 10 = 10(1st page last index) page 1 -> 10
      return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    // const baseURL = process.env.VUE_APP_API_URL;
    // const response = await axios.get(`${baseURL}/jobs`);
    // this.jobs = response.data;

    // this.$store.dispatch(FETCH_JOBS); // API call from action at vuex store

    this.FETCH_JOBS(); //dispatch action to the store
  },
  methods: {
    ...mapActions([FETCH_JOBS]), // provide action names and creates methods with same names on our action store which will then invoke dispatch method in action store
  },
  */
};
</script>
