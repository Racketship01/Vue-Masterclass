<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchInput"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Computer programming, Financial degree, Project Management"
      data-test="skills-search-input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import { ADD_INPUT_SKILLS } from "@/store/constants";

export default defineComponent({
  name: "JobFilterSidebarSkills",
  setup() {
    const store = useStore(key);
    const skillsSearchInput = computed({
      get() {
        return store.state.skillsSearch;

        // create connection from vuex store to v-model -- get access to the store state
      },
      set(value) {
        store.commit(ADD_INPUT_SKILLS, value);

        // create connection from local data thru v-model to vuex store state by commiting a mutation --value represents most latest up to date value from user typing
      },
    });

    return { skillsSearchInput };
  },
});
</script>
