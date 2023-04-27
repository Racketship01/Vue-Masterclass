<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
            @click="clearUserJobFilterSelections"
          />
        </div>
      </div>

      <accordion header="Degrees">
        <job-filter-sidebar-degrees />
      </accordion>

      <accordion header="Job Types">
        <job-filter-sidebar-job-types />
      </accordion>

      <accordion header="Organizations">
        <job-filter-sidebar-organizations />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import Accordion from "@/components/Shared/Accordion.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFilterSidebarDegrees from "./JobFilterSidebarDegrees.vue";
import JobFilterSidebarOrganizations from "./JobFilterSidebarOrganizations.vue";
import JobFilterSidebarJobTypes from "./JobFilterSidebarJobTypes.vue";

import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

export default defineComponent({
  name: "JobFilterSidebar",
  components: {
    Accordion,
    ActionButton,
    JobFilterSidebarDegrees,
    JobFilterSidebarOrganizations,
    JobFilterSidebarJobTypes,
  },
  setup() {
    const store = useStore(key);

    const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };

    return {
      clearUserJobFilterSelections,
    };
  },
});
</script>
