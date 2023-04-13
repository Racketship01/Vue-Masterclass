<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClasses"> {{ action }} </span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo Corp.</h2>
  </section>
</template>

<script lang="ts">
import nextElementList from "@/utils/nextElementList";

import { defineComponent } from "vue";

interface ActionClasses {
  [x: string]: true;
}

interface Data {
  action: string;
  interval?: number;
}

export default defineComponent({
  name: "Headline",
  data(): Data {
    return {
      action: "Build",
      interval: undefined,
    };
  },
  computed: {
    actionClasses(): ActionClasses {
      return {
        [this.action.toLowerCase()]: true,
        // build: this.action === "Build",
        // create: this.action === "Create",
        // design: this.action === "Design",
        // code: this.action === "Code",
      };
    },
  },
  created() {
    this.changeTitle(); // whenever the component is created, vue lifecycle hook automatically register and trigger --then this created method will run this changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementList(actions, this.action);
      }, 3000);
    },
  },
});
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
