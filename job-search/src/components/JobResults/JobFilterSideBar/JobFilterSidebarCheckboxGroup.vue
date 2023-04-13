<template>
  <accordion :header="header">
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
  </accordion>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from "vue";
//import { useUniqueOrganizations } from "@/store/composables";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "@/store";
// import { mapGetters, mapMutations } from "vuex";
// import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import Accordion from "@/components/Shared/Accordion.vue";

export default defineComponent({
  name: "JobFilterSidebarCheckboxGroup",
  components: {
    Accordion,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    uniqueValues: {
      type: Set as PropType<{ [value: string]: any }>,
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

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };

    return { selectedValues, selectValue, props };
  },
});
</script>
