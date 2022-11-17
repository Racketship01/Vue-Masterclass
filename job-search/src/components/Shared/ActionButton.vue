<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
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
      validator(value) {
        return ["primary", "secondary"].includes(value);
      }, //used a validation logic anytime parent component renders an action button and give a type prop --(value) represents the actual prop value declared at parent component and passed in as an argument. Then confirm if the value is valid thru setting conditions in the body
    },
  },
  //["text", "type"],
  // data() {
  //   return {
  //     primary: this.isPrimary,
  //   };
  // },
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
};
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
