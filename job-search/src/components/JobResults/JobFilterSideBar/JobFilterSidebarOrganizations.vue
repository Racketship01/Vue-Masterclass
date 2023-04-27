<template>
  <job-filter-sidebar-checkbox-group
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    data-test="filter-degrees"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "JobFilterSidebarOrganizations",
  components: { JobFilterSidebarCheckboxGroup },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations();

    return {
      uniqueOrganizations,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
});
</script>
