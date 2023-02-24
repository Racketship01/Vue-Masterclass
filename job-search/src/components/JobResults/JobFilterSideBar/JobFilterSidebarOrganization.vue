<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              :data-test="organization"
              @change="selectOrganization"
            />
            <label :for="organization" data-test="organization">{{
              organization
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { ref } from "vue";
import { useUniqueOrganizations } from "@/store/composables";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { mapGetters, mapMutations } from "vuex";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFilterSidebarOrganization",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "JobResults" });
    };

    return { selectedOrganizations, uniqueOrganizations, selectOrganization };
  },

  /*
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]), // top-level property --**this.UNIQUE_ORGANIATIONS

    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),

    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      // NOTE: whenever this method runs, our array is already going to store the updated collection of organization strings. Then take this updated array of string at the vuex
      // as soon as this change occurs, the vuex needs to get the data and then run its filter logic to filter its 100 jobs to only the ones that are going to have the organizations listed here

      this.$router.push({ name: "JobResults" });
    },
  },
  */
};
</script>
