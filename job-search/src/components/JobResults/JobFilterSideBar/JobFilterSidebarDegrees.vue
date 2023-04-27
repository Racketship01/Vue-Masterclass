<template>
  <job-filter-sidebar-checkbox-group
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
    data-test="filter-degrees"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUniqueDegrees } from "@/store/composables";
import { ADD_SELECTED_DEGREES } from "@/store/constants";

import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "JobFilterSidebarDegrees",
  components: { JobFilterSidebarCheckboxGroup },
  setup() {
    const uniqueDegrees = useUniqueDegrees();

    return {
      uniqueDegrees,
      ADD_SELECTED_DEGREES,
    };
  },
});
</script>
