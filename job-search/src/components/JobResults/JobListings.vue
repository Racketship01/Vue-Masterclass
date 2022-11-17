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
      return this.jobs.slice(0, 10);
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>
