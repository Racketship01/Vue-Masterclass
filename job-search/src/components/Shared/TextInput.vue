<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
  <!-- :value is an semantic attribute for input element binded with value prop -->
  <!-- need to add handler whenever user types a value that need to manually sync the data property or the props and template -->
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  // data() {
  //   return {
  //     value: "",
  //   };
  // },
  emits: ["update:modelValue"], // component can emit many different events and use it in emit method //emits of array is sort of like the ultimate source of true, its a declaration that says this array is the only event that permitting a child component to emit
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value); // 1st:emit  2nd: data
      // emitting a handle input event with the current value from the event generated from the browser whenever the user types letter in
    },
  },
};
</script>
