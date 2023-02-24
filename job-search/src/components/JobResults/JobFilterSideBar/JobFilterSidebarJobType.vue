<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectedJobType"
            />
            <!-- :id -- binding id attribute --specify a unique id for a HTML element -->
            <label :for="jobype" data-test="job-Type">{{ jobType }}</label>
            <!-- :for --binding the for attribute --specify the type of input element a label is bound to-->
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

//import { mapMutations } from "vuex";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

import Accordion from "@/components/Shared/Accordion.vue";

import { useUniqueJobTypes } from "@/store/composables";

export default {
  name: "JobFilterSidebarJobType",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    const selectedJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResults" });
    };
    return { selectedJobTypes, uniqueJobTypes, selectedJobType };
  },
  /*
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  */
  /*
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]), // this.$store.commit([ADD_SELECTED_JOB_TYPES])
    selectedJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResults" });
    },
  },
  */
};
</script>
