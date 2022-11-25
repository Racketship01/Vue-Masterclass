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
import axios from "axios";

import JobList from "@/components/JobResults/JobList.vue";

export default {
  name: "JobListings",
  components: {
    JobList,
  },
  data() {
    return {
      jobs: [], // store jobs(endpoint) array being fetch in backend
    };
  },
  computed: {
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
      const maxPage = Math.ceil(this.jobs.length / 10); // 100 / 10 = 10
      return nextPage <= maxPage ? nextPage : undefined; //nextPage
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10; // 1 - 1 = 0 and so on
      const lastJobIndex = pageNumber * 10; // 1 * 10 = 10(1st page last index) page 1 -> 10
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    /*
      THREE ENVIRONMENTS:
        - development --localhost:3000/jobs
        - production --api.mycompany.com/jobs --can customize URL 
        - test 
    */

    const baseURL = process.env.VUE_APP_API_URL; // process --automaticaly available whenever running a node app, no need to import --env.variable name --access whatever environment variable defined at .env file that loaded in
    const response = await axios.get(`${baseURL}/jobs`); //using template string to access baseURL
    this.jobs = response.data;
  },
};
</script>
