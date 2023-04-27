<template>
  <job-filter-sidebar-checkbox-group
    :unique-values="uniqueJobTypes"
    :mutation="ADD_SELECTED_JOB_TYPES"
    data-test="filter-degrees"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "JobFilterSidebarJobTypes",
  components: { JobFilterSidebarCheckboxGroup },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return {
      uniqueJobTypes,
      ADD_SELECTED_JOB_TYPES,
    };
  },
});
</script>
