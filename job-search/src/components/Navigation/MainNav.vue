<template>
  <header :class="['w-full', 'text-small', hearderHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Bobo Careers</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-set="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
          <!-- <action-button v-if="!isLoggedIn" /> -->
        </div>
      </div>

      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script lang="ts">
import { mapMutations, mapState } from "vuex";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

import { LOGIN_USER } from "@/store/constants";

import { defineComponent } from "vue";

export default defineComponent({
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Bobo", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    hearderHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },

    // reading vuex store state
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn; //false --starting state value
    // },

    // mapState --connect vuex store state properties to component computed properties
    ...mapState(["isLoggedIn"]), // use both has same name properties
  },
  methods: {
    // writing store state from component
    // LOGIN_USER() {
    //   this.$store.commit(LOGIN_USER); //LOGIN_USER method will run and mutate the store state at vuex store then re run the isLoggedIn computed property with updated mutation value (false -> true) then re-render the template
    // },

    ...mapMutations([LOGIN_USER]), // sytactical shortcut for invoking commit method --use this syntax if component method name has same name at the mutations method name
  },
}); // this JS object is the configuration object for this component --how component work
</script>
