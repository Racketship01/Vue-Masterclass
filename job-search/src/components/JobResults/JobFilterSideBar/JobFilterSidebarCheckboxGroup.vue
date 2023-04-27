<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
          <input
            :id="value"
            v-model="selectedValues"
            :value="value"
            type="checkbox"
            class="mr-3"
            :data-test="value"
            @change="selectValue"
          />
          <label :v-for="value" data-test="value">{{ value }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from "vue";
//import { useUniqueOrganizations } from "@/store/composables";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "@/store";
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

// import { mapGetters, mapMutations } from "vuex";
// import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

export default defineComponent({
  name: "JobFilterSidebarCheckboxGroup",
  components: {},
  props: {
    uniqueValues: {
      type: [Array, Set] as PropType<string[] | Set<string>>,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore(key);
    const router = useRouter();

    const selectedValues = ref<string[]>([]);
    // const uniqueOrganizations = useUniqueOrganizations();

    store.subscribe((mutation) => {
      if (mutation.type === CLEAR_USER_JOB_FILTER_SELECTIONS) {
        selectedValues.value = [];
      }
    }); // everytime we commit a mutation, this function will automatically run and listen to the changes in the vuex store state --NOTE: this function will run every single time a mutation runs, we dont want this logic, we only want this function to be run whenever the mutation has given type (mutation.type)

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };

    return { selectedValues, selectValue };
  },
});
</script>
