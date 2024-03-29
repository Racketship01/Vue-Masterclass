<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { computed, toRefs, defineComponent } from "vue";

export default defineComponent({
  name: "ActionButton",
  props: {
    text: {
      type: String, // data type
      required: true, // whether that property is requred from the parent component

      //NOTE: whenever a parent component renders action button anywhere in the app, the parent component must give a text prop. And if it doesn't do that, then Vue is going to output a warning in our chrome console.
    },
    type: {
      type: String,
      required: false, //if not requires, give fallback value or default value just in case parent component doesnt declare a type prop
      default: "primary",
      validator(value: string) {
        return ["primary", "secondary"].includes(value);
      }, //used a validation logic anytime parent component renders an action button and give a type prop --(value) represents the actual prop value declared at parent component and passed in as an argument. Then confirm if the value is valid thru setting conditions in the body
    },
  },
  setup(props: any) {
    //const { type } = props; // type will be a regular string not a reactive because destructuring reactive object(props) individual property(type) will lose its reactivity. Solution? use toRefs() function
    const { type } = toRefs(props); // type is no longer a string, its a reactive object with a value property and its changes over time (type.value)

    const buttonClass = computed(() => {
      return {
        [type.value]: true,
      };
    });
    // props --reactive object with the props that the parent passes in to this action component --(props) is the props object that setup method has an access

    return { buttonClass };
  },

  //["text", "type"],
  // data() {
  //   return {
  //     primary: this.isPrimary,
  //   };
  // },
  /*
  computed: {
    buttonClass() {
      return {
        //refractor: using destructuring an array in props (type)
        [this.type]: true,

        // primary: this.type === "primary",
        // secondary: this.type === "secondary",

        // primary: this.primary, //not a boolean but an object that is dependent on the this.primary piece of data --whenever value of this.primary changes, this return object to be re-evaluated and replace value in the class attribute and render a different button
        // secondary: !this.primary,
      };
    },
    
  },
  */
});
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue rounded;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
