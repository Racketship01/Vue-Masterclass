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
    displayedJobs() {
      const pageString = this.$route.query.page || "1"; // page in query params
      const pageNumber = Number.parseInt(pageString); // 1
      const firstJobIndex = (pageNumber - 1) * 10; // 1 - 1 = 0 and so on
      const lastJobIndex = pageNumber * 10; // 1 * 10 = 10(1st page last index) page 1 -> 10
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>
