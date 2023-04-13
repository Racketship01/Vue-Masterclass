import { createRouter, createWebHashHistory } from "vue-router"; // importing 2 functions from vue router npm library

/*
import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import JobView from "@/views/JobView.vue";
*/

const HomeView = () => import("@/views/HomeView.vue"); //lazy loading --function that uses the import function to load a component in
const JobResultsView = () =>
  import(/* webpackChunkName: 'jobs' */ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/* webpackChunkName: 'jobs' */ "@/views/JobView.vue");

const TeamsView = () => import("@/views/TeamsView.vue");

const routes = [
  {
    path: "/", // url which component should render --slash is the indication of root route --root page is the kind of standard starting route
    name: "Home", // unique identifier for this root route
    component: HomeView, // after the path of the root route (/), provide component we want to render
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  //localhost:8080/jobs/results
  {
    path: "/jobs/results/:id", // :id --colon followed by identifier (id) router will recognize it as dynamic variable (for a specific section)
    name: "JobListing",
    component: JobView,
  },
  {
    path: "/teams",
    name: "TeamsView",
    component: TeamsView,
  },
];
// routes --JS obj that specify the URL and then the component to render when the user has navigated to that path/URL --each object represents one single route --one mapping between a URL and corresponding vue component to render --components are the ones inside view folder that represent top level page component

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  }, // specifies how the router is going to behave in regards to scrolling whenever there is a change in route
});
// createRouter --takes an options argument which is a plain JS obj that configures the settings for how the router works
// history --keep track of what routes the user has been on
//NOTE: in ES6 whenever you have the same property name and value, you can write it only once.

export default router;
