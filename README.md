# Vue Masterclass

## Section 1: Introduction

### Course Overview

- Course Prerequisite
  - HTML
  - CSS
  - JS(ES6)
  - Terminal
- Course Features
  - Vuex --state management plan (managing global state)
  - View router --navigating from page to page in app
    ![](./images/CourseVue2.png)
- What is Vue.js?
  ![](./images/front-end.png)

  - is JS front end framework (open source project) for building reactive interfaces (reactive --vue enables web page to react to change --change comes in many forms such as user events liks button clicks or typing values, and may come automatically from a user interaction or it can happen when the websites receives new data from an API).
    ![](./images/front-end1.png)
    ![](./images/CourseVue.png)
  - Vue makes is easy for web pages to seamlessly re render itself when changes happen without forcing a page refresh

    ![](./images/CourseVue1.png)

### Introduction to Course Project

- Project

  - a job sites or a career site and inspired by the official Google Careers (careers.google.com)
    ![](./images/careers.png)

- Vue2 vs Vue3

  - In Vue2, use to write code was called Options API
  - In Vue3 it is called Compositions API to write codes, but this one does not replace the options API rather it lives alongside it
  - Gonna learn both Vue2 and Vue3 in course
    ![](./images/vueVer.png)
    ![](./images/vueVer1.png)

### Vue vs React vs Angular

![](./images/vueVer2.png)

- Evan You said that Vue falls between react and angular
- **Angular** is opinionated

  - means that we have beliefs on how things should work
  - angular has a certain set of conventions or rules or standards to use the framework effectively e.g auto ships with a library to make HTTP reqs to make API reqs to get data from some server.
  - Also requires to write code in TypeScript.
  - Advantage of opinionated is that have a consistent code from code base to code base.
  - Disadvantage? standardized and enforded is less fun due to less likely to choose which tech want to work with

- **React** is unopinionated

  - react is just a view library and responsible for rendering things in browser
  - means has no opinions on how you should make API reqs, what API reqs library should use, what testing library you use.
  - React doesnt have an opinion on routing(navigate page).
  - React doesnt have an opionion on whether should not use TS (you can but dont have to).
  - React can mix and match a whole bunch of different libraries whether it be testing of API reqs
  - the core react code has surrounding ecosystem that is not have the same level of consistency as it would be in opinionated(angular)
  - advantages and disadvantages with with the and opinionated react, you get more flexibility, you get more fun

- **Vue** middle between opinionated and unopinionated
  - has a very extensive ecosystem --means theres a bunch of addtional tools that are complementary to view built by the Vue Core team that same team that develops Vue.
  - Vue has a solution for routing called Vue Router
  - also has a state management plan called Vuex which is storing data that is global above your app that is developed by the Vue Team
  - If you want to test Vue components or the vue code that we're going to be writing, Vue has a recommended test library that it develops called Vue Test Utils, again developed by the View Core Team.
  - Difference between Vue and Angular? vue doesnt require to use tools in ecosystem but those ecosystem tools are built with Vue for working with Vue
  - You have the core Vue library, which is just like react pretty and opinionated (angular). But then when you want to add more features and functionality to your app, you can also add.
  - Slide deck by Evan You (entire review ecosystem)
    ![](./images/vueVer3.png)
    - red and bright red will be the core view library and other colors are the additonal features that are commonly needed in modern front end web apps
    - the angular approach will is giving all of these features as a standard
    - in react, gonna give the spread circles(red) and its up to you to figure out how you want to handles other features(other colors). React doesn't have the comfort because the core React library is developed by Facebook, but all of its additional supplemental libraries in its ecosystem are developed by a whole bunch of different teams some open source, some from other companies.
    - in Vue, gonna give the core library view(red circles) and if your interested in these other features were going build them and were going to make them optional. Not required to add them all like angular does.

## Section 2: Intro to Vue

- Installing Vue CLI
  ![](./images/vueCLI.png)

  - global NPM dependecy --global means, is its not isolated to a specific project or specific project folder `npm install -g @vue/cli`
  - also help us adding plugins to Vue adding additional NPM pagkages like Vuex and Vue Router
  - advantages of Vue CLI over NPM is not only does it download and fetch those packages from NPM but also created starter files and basic boilerplate code
  - NOTE: Vue CLI can create some starter files for us with some small configuration so it takes care of a little bit more of the boilerplate code and spares us the need to write some of that extra stuff.
    ![](./images/vueCommand.png)

- The Vue Create Command

  - `vue create <project name>` --create a brand new vue applicaition. After launching to prompt, able to configure some of the settings e.g allow us to pick a preset (preset is a combination of existing tools) default
    ![](./images/vueCreate.png)
    - Choosing manually select features can walk through all of the configuration settings and the select the actual technologies we want to choose
    - **Linter**(identifying errors and optimazation) --a program that going to analyze code and look for errors or violations and make a recommendations on how to fix them
    - **Formatter**(aesthetic) --how code looks like and going to look through code and reformat file so it will look standardized and has conventional format
    - Where we want to sace our config file? Instructor chose "**In dedicated config files**" --create separate config files for all of different technologies and libraries

- Starting the Vue App

  - `npm run serve` --command to run Vue app in our browser
    - 1st: navigate into directory vue project created
    - 2nd: launch `npm run serve`

- Hot Reloading

  - means we can make changes in our code editor and Vue CLI will automatically recognize some changes, it will interpret them and will transpire them --using this will not restart our server

- Configuring the App: VSCode

  - Settings (ctrl + shft + p)

    - Preference: Workspace settings

      > User --refers to global user settings (apply to any proj)

      > Workspace --apply only to the current project open in VSCode

  - settings.json
    - `"eslint.validate": ["javascript", "vue"]` --an array on what types of files we want to lint
    - address a bug in beautification (both in JS and Vue file) and add a litte bit of more custom precise setting `"[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode", }`

- Configuring the App: Jest

  - This jest.config.js file configures the options for the Jest test library that Vue CLI installed for us.

  - 1. This going to be a new test match property. this property sets is the file extensions that jest is going to look for when it's trying to determine the test files in our project. E.g in test directory has example.specs.js --by default the vue configures jest so that it only looks for test files with .specs.js extension. (but another common in JS code bases is test files that end with .test. --no big deal its just a personal preferences)

    ```js
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)",
    ];

    // an array of regex --short for regular expressions(search patter for text)
    ```

  - 2. Alternatively, you can copy the code below and replace all the contents of jest.config.js with it. This is the final configuration object we should have inside the file.

    ```js
    module.exports = {
      preset: "@vue/cli-plugin-unit-jest",
      testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
      ],
    };
    ```

- Configure App: ESLint

  - ESLint --It's a piece of software that's going to look at our code, both the JavaScript code and the view code, and it's going to look for violations. And violations could mean anything from errors or even things like not following best practices when it comes to efficient code, optimal code, etc.. So to summarize, yes, lint is going to make our code better by identifying areas of improvement in our existing code
    - In ESLint config: extends has an array of plugins
      - plug ins is a collection of rules and various rules depending on the technologies we working with.
      - in this extends array that we specify which combinations of rules we want s lint to be following when it analyzes our code.
      - `"plugin:vue/vue3-recommended"` --setting from essential to recommended is more stricter and going to look not just for the essential vue violations,(essential which means the things that are most likely to be errors) but it also going to look for things that are optimazation or best practices in the vue community
    - In Override:
      - `files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],` --going to tell the ESLint what our test files look like that can have either .jest or .test. (ESLint going to look for violations not just in our src code, implementation code but also in our test files)

- Project Structure

  ![](./images/fileStruc.png)

  - **.vscode>settings.json** --project specific settings and mostly configuration for our text editor

  - **node_modules** --have all of our dependencies --all of the NPM packages that are specified in packages on JSON that are installed as well as some dependencies. NOTE: should not include this in git commits because this is supplementary external code, should only commit own code and when somebody
  - downloads our repository they can simply run NPM install to create their own node_modules folder automatically. Also DO NOT EDIT any content

  - **public**

    - the only folder were interested in is the index.html -
    - JS and Vue handle all the actual updated we see on the screen -
    - addition of new elements and removal of existing elements and swapping, changing styles are being handled by JS
    - Vue application(App.vue) tracks all of those changes and simply plugs into the HTML and JS takes over fully
    - index file is very small because it's just the bare infrastructure that is needed to load the JavaScript and have it inject the vue application in here.
    - single page application dont needed to keep refreshing the page, rather JS bundle includes all the logic that it needs to know to navigate user across different pages, how to remove and add certain things, it will takes care of it automatically

  - **src** --writing 95% of the code and have all vue related code and JS code.

  - **test** --writing our test files and those are going to validate the implementation files in src. --some ppl put their test alongside their direct implementation in the src directory

  - **.browserlistrc** --kind of requirement file for the transpiler so that it knows what versions of browsers it has to support --this is the file that sort of tells the transporter what it can work with and that allows it to both include and exclude certain browsers that it needs to have.

  - **.eslintrc.js** --configures files for ESLint

  - .**gitignore** --can specify any files or folders that like to ignore permanently --it will never be committed to source control e.g node_modules

  - **babel.config.js** --configure some things that needs inorder to transpile our vue code

  - **jest.config.js** --configuration for our jest runner

  - **jsconfig.json** --sets up some basic JS logic basicallu communicating some of the logic of the type of version in ES5, establishing src directory as the kind of the home or root directory --compiler options for transplation

  - **package.json**

    - have all of the project dependencies -
    - have devDependencies are packages that we dont need for the end user in the browser
    - dependencies --actual NPM packages Vue needs in order to run in the browser
    - devDependencies --are strictly for developers
    - NPM ecosystem --have the script section that works by running the command NPM run followed by the keyword (left side)

  - **vue.config.js** --general configuration file --there are some configuration options available depending on how you would like to transpile the vue app

- Mounting the Vue App

  - by the default, html in index.html isnt really rendering anything significant to the screen. How are we able to see the vue in our browser? that happens in the src directory in the main.js file, how?
    - create the vue application(a complex JS config) in the main.js file then connects the index.html file `<div>` so that it renders or mounts by
      - **1st:** importing a function from the Vue library called Create App that is a named export `import {createApp} from vue` --this function will create Vue application. NOTE: when calling createApp function, need to invoke that function and provide it with root component (--component is just a slice of a user interface or section of a web page).
      - **2nd**: Importing the Vue component (in App.vue) `import App from "./App.vue"`.This component will be passed as the root component (starting basis of rendering other smaller components) to render on the screen. NOTE: Vue component is going to render itself and in that vue component we might have other components being rendered as well (same idea with structuring HTML elements). --- Vue components will be in files with .vue extension
      - **3rd**: The root component(App) will be pass in as the argument to createApp function `createApp(App)` this will create a Vue app and rendering this App component purely in JS not in the HTML. To connect,plug in the HTML and inject the div component id to the Vue app using mount method `createApp(App).mount(#app)` NOTE: in order to run the app function, it needs at least some components use as the basis to kick everything off which is the root component (like html tag that is the root element in html file) that is going to start renderingh all other smaller components from the hierarchy of what we see on the page
    - SUMMARIZE: The index HTML file loads the web page and the barebones HTML, then it loads in the JavaScript file containing the vue (Vue file). Vue App (createdApp) kicks everything off by launching the app component, and then it looks for where to inject itself into the HTML page and for that point, the Vue App takes over and JavaScript is completely in control. The JavaScript bundle determines how to put up elements on the screen, how to tear down elements, how to replace elements, how to replace elements as we navigate from one page to another.
    - NOTE: main.js --the bootstrapping of our application. This is everything kicks off as far as the launching of the Vue App

- The @ symbol in Top Directory

  - shortcut or alias for src directory and it is automatically config by CLI in jsconfig.js in path object
  - in this course, we will be using absolute imports `"@/App.vue"` meaning from the top of codebase rather than relative imports `"../../src"` to the file

- Parts of Vue File

  - Vue component -- is just some chunk of HTML, CSS and JavaScript, and then you can use those components in combination with each other to form the web page. Or you can have a component render its own smaller components within itself.
    - **Template section**--combination of HTML and other components. Write either Vanilla HTML or render additional components (why do we use components? so we can split up puzzle pieces into more lightweight, single responsibility pieces of the user interface)
    - **Script Section** --valid JS code that defome the interactivity of the specific component. Always connect to the HTML Logic in the template section that enable interactivity
    - Style Section --styling specifically for (current) component
    - NOTE: idea here, of course, that the best strategy is to have lots of small different components that are each responsible for one small thing in your user interface.

- More on Component

  - The primary benefit of components is reusability by being able to pack away a chunk of HTML, JavaScript and CSS into a separate file, we create almost like a reusable puzzle piece that we can reuse.
  - The way we render components in template section is exact same way that render in HTML element by start by opening bracket then the component name and provide any potential arguments the close bracket `<HelloWorld msg="I'm Learning Vue!" />` and this is called **self-closing component tag** --means were able to render component with a single tag

- Install Vue Dev Tools

  - installing a special plug in or extension for chrome called Vue DevTools --this till are gonna be helpful in debugging or understand vue application.
  - We can not just see our components here, but we can also see things like the timeline, which is basically the sequence of events. As your app starts up, which component is rendered first, what it renders are user clicks, user events,
  - Inspector --basically going to be the tree like structure of components that are being rendered in your app.
  - remember, our app kicks everything off with the app component. That is what we are rendering in main.js and our app component is itself rendering what we call a child component, a component within itself.

- NOTE:
  - Whether it is Vue or React or Angular, we basically load a very simple HTML page, then we get a big JavaScript file and then that respective library or framework takes care of rendering everything else on the screen.
  - we create our vue app by mounting and mounting simply means to put up. We mount a root component inside the div.
  - Vue takes care of all future DOM updates --means Vue takes care of all the changes that we see visually on our screen

## Section 3: Intro to CSS in Vue

- Targeting by HTML Element or CSS Class

  - whenever we declare styles in our components, even in the style section, by default they are going to be global thats why defining a class in HTML element will also not be the solution as class is also a global and applied to every sungle component in the app. Solution? declare specific selector (scoped attribute).

- The Scoped Attribute

  - adding scoped keyword after opening style tag
    - is going to limit the styles from escaping the current component that you are in.
    - what it does is takes all the CSS declaration (either element or tag || class || ID ) and limit the scope or bounderies to which CSS styles are applied to only in the component(vue file) that style section is attach
    - NOTE: remember, just because we have scopes in a component style doesnt mean that another component styles cant affect into it. Style being scoped to a particular vue file are only scoped to that file and those declarations cannot escape to another file, however, another component styles can still make their way into our current component

- A little housekeeping

  - consist of deleting a lot of the files that Vue CLI generated that no need for the project

- NOTE:
  ![](./images/cssReview.png)

## Section 4: Intro to Tailwind CSS

- Introduction

  - Tailwind --css library or css framework that give access to whole bunch of css classes and styles and it also gives us access to some default fonts
  - Bootstrap --a css library that gives pre-configured for component style --focused on kind of user facing components that an app might need like button, nav-bar, alert, icon and so on.
  - Tailwind is not exactly like bootstrap.
  - Tailwind doesnt give pre-built aesthetic styles rather it will give a css utility classes that we need to style our elements
  - Advantage? dont need to write a lot of custom css classes --dont have to worry about things like nesting or sass or any of those kind of complexities

- Adding Tailwind CSS in Job Search Project

  - add dependency to our project using vue CLI --in comparison to just a plain NPM install is this will not only download and fetch the dependency but also create some basic set of files, some basic boilerplate code to get started. Command: `vue add tailwind`
  - while installing tailwind using CLI, set Generate tailwind.config.js to minimal

- Add Open Sans Font from Google Fonts

  - the Google Careers website uses a font called Google Sans, which is proprietary. That means that it's owned and copyrighted, and we can't actually use it outright unless we ask for permission or pay some kind of fee.
  - So instead of using Google Sans, we're going to use a popular alternative which is very similar and look and feel called open sans.

    - go to Google fonts then search **Open Sans** font then select the style (light 300, regular 400 and semi-bold 600 & bold 700)
    - after selecting, copy the link provided and attach the code link to the html file
    - after injecting, also need to configure with tailwind

      - need to import the default theme from tailwind --a huge JS configuration object that is a whole bunch of default starting values for various tailwind values such as font
      - then configure to the module.exports object the open sans font

      ```js
      theme: {
      extend: {
        fontFamily: {
          sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        },
      },
      }
      ```

    - NOTE: official tailwind documentation: `tailwindcss.com` --available classes

  - Install Tailwind CSS Intellisense Extension
  - installing helpful VScode extension to enable intellisense for tailwind css classes --able to see all the availble tailwind styles in line

  - NOTE:
    ![](./images/tailwind.png)

## Section 5: Rendering Data to View

- User Story

  - important to keep the user in mind as were building a software that going to work for someone and need to quantify the value of what it is that we're building
    ![](./images/userStory.png)

- Creating MainNav Component

  ```html
  //MainNav.vue
  <template>
    <header class="w-full text-sm">Main Nav</header>
  </template>

  <script>
    export default {
      name: "MainNav",
    }; // this JS object is the configuration object for this component --how component work
  </script>
  ```

- Rendering Child Component with the component property

  - Steps

    - 1st: import child component(MainNav.vue) to main component(App.vue) in the script section
    - 2nd: configure app component to be able to render main nav onto the screen. NOTE: configuration for any kind of vue component is exporting the default export object.
    - 3rd: calling registered child component in template section

    ```html
    // App.vue
    <template>
      <MainNav></MainNav> //calling registered child component that will be
      rendered in the html
    </template>

    <script>
      import MainNav from "@/components/MainNav.vue";

      export default {
        name: "App",
        components: {
          MainNav: MainNav, //registering MainNav is this app component can render main nav component somewhere in its HTML(template section)
        },
      };
    </script>
    ```

- Different ways to Render Vue Component

  ```html
  <template>
    <MainNav></MainNav>
    <MainNav />
    <main-nav></main-nav>
    <main-nav />
  </template>
  //NOTE: we cant just choose whatever name we want but still dependent on what
  we define in our components object (script section)
  ```

  - Pascal Case --first letter is capital, also the next word
  - Kabon Case -- turn entiew word lowercase and then between evry two subsequent words put dash or hypen

- Update Tailwind Styles

  - to be more specific(customize) in style for e.g color, in extend object at tailwind.config.js file, create a new property(object) for colors that are available to use in tailwind css (NOTE: going to append to its built in styles classes e.g `text-brand-gray-1` )

  ```js
  extend: {
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
      },
    },
  ```

- CSS: Styling MainNav Component
  ```html
  <template>
    <header class="w-full text-sm">
      <div class="fixed top-0 left-0 w-full h-16 bg-white"></div>
    </header>
  </template>
  ```
- CSS: Styling Company Name
  ```html
  <div
    class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
  >
    <a href="/" class="flex items-center h-full text-xl"> Bobo Careers </a>
  </div>
  ```
- Rendering Data to Vue I

  - when data changes, vue automatically update the corresponding html
  - data (method)--is a vue requirement and this method name is not us that provide

    - the object being return to this data will be available to be added or injected to reference(propertie key) within our html template

  - how can we connect configuration object (script sec) and our HTML?

    - use a special syntax vue consists of two curly braces before and after what we want to inject in HTML

      ```html
      <template>
        <a href="/" class="flex items-center h-full text-xl">{{ company }}</a>
        <h2 class="flex items-center h-full ml-8">
          Developed by {{ author.firstName }} {{ author.lastName }}
        </h2>
      </template>

      <script>
        data() {
        return {
          company: "Bobo Careers",
          author: {
          firstName: "racketShip01",
          lastName: "MagandaTeam",
        },
        };
        }
      </script>
      ```

    - every single property that have been returned to a data method will be available to HTML
    - whenever you try to access a property on an object in JavaScript and it's not available, it doesn't exist, JavaScript returns undefined and the way that Vue interprets undefined is blank space.

- NOTES:
  ![](./images/sec5.png)

  ![](./images/sec5-1.png)

## Section 6: Intro to Jest

- Why do we test?

  - Jest
    - advantage of this is that we will be able to write tests for our vue components outside of our browser environment.

  ![](./images/unitTest.png)

  - Unit Test

    - a unit is just a small, testable piece of functionality in our program.
    - to mock or to stub something out means to replace a dependecy with the substitute or replacement that pretends to be that thing
      - e.g imagine that you have a vue component and it reaches out to some kind of API, gets a JSON response and renders that to the screen. To mock is to set up a fake API for JSON response and we dont actually make any kind of async reqs(just pretend we did). With this tests again are lightweight, they're focused and they should run fast because they're not dependent on all of these additional factors or variables or dependencies hovering around our core unit.
      - NOTE: coupling --means more fault points, more places where something can break and thus the entire app could break down

    ![](./images/testPy.png)

    - The majority of your tests in your app should be **unit tests**. They should be small, lightweight, fast, independent tests that focus on small bits of functionality.

    - **Integration Test:**

      - instead of just testing one vue component by itself, might render a whole bunch of them in order to see how the entire ecosystem of them works, how the integration or the connections between the pieces of my program are interacting. So integration is kind of one level higher just to incorporate multiple units interacting with each other.
      - They're generally going to run slower because they have to deal with more moving pieces and bringing them up so that we can test them.

    - **End-to-End Test**

      - User Interface Testing: the most complex and slowest and most couple of tests there are
      - e.g rendering a full vue app in an actual simulated browser like and then having a computer click through ur app and walk through
      - the most critical parts of your app, such as a checkout experience, where it is imperative that everything work correctly and you really want that extra layer of testing and security to make sure things are working proper.
      - NOTE: Cant cover entire app and E2E test as a lot of potential for them break and failed. You need as possible as can keep them small. And the number of entities small and focused on the most critical parts of your app, while the smaller tests, like the unit tests, focus on the individual elements, the view components, the classes, the functions, etc..

    - **Manual Test**: test that we run ourselves by going into the browser and plugging into our app and making sure everything works correctly.

    ![](./images/testTools.png)

    - Jest Test Library --developed by facebook and can also be use in Vue
    - Vue Test Utils --allow us to do is to set up our components within our testing files. We're going to mount our components, which means we're going to basically render them just like our browser does. But in a non browser environment, in a node environment where we can simulate the component as if it exists and then test it without actually having to open up a browser page and see the resulting HTML.
    - NOTE: test descriptions should describe the user value and or technical purpose of a piece of code w/o specifying the implementation or getting too much into the nitty gritty details of how it is going to be built

- The Basic of Jest Syntax

  - When run jest, it will automatically import functions that are available within the library that were going to code at the jest file
  - dont manually import anything from jest npm module. Jest make the functions we are about to write available
  - basically what a test file looks like we have a described, which means a top level category or a top level name, and then we have multiple tests inside that describe that fit that description.
  - Each test begins with an IT function. It describes what it is that it's testing. And then in the body of that function, we write one or more assertions or expectations. (description() -> it() -> expect())
  - To run test: `npm run test:unit`
    - green flag means: PASS
    - test suites means files
      ![](./images/jest.png)
    - red flag: FAILED
      ![](./images/jest1.png)
  - NOTE: generally aim to have one expect function per test. tend to prefer is lots of small tests that each test one isolated.

  ```js
  /*
  2 extension configure for Jest testing --plain file with .js extension is not enough, need to prefix this test or spec when we run
  
  .test.js
  .spec.js
  */

  describe("basic math", () => {
    it("adds two number", () => {
      expect(1 + 1).toBe(2); // any valid JS code (evaluation or expression) that jest will be executed then will return an object that can invoke method [assertion(matches) types] then compare it with the expected result (--toBe is a matcher method for strict equality (for any kinds of primitives in JS) as we literally want to compare 1 + 1 to be the expected result of 2 then it is a method that need to invoke And then the argument we provide it is the expected result.)

      // expect(received).toBe(expected)

      it("subtracts two number", () => {
        expect(5 - 3).toBe(2);
        expect(10 - 7).toBe(3);
      });
    }); // it() --test begins with the function called IT --the 1st argument will be str and the 2nd argument will be function called assertion or expectation
  }); // this function use it to provide a organizational header or categorization. It allows us to create a description for the thing we are about to test
  ```

- Multiple Describe Block

  ```js
  import { evenOrOdd } from "@/playground.js";

  describe("basic math", () => {
    it("adds two number", () => {
      expect(1 + 1).toBe(2);
    });

    it("subtracts two number", () => {
      expect(5 - 3).toBe(2);
      expect(10 - 5).toBe(5);
    });

    describe("evenOrOdd", () => {
      describe("when the number is even", () => {
        it("indicates the number is even", () => {
          expect(evenOrOdd(4)).toBe("Even");
        });
      });

      describe("when the number is odd", () => {
        it("indicates the number is odd", () => {
          expect(evenOrOdd(3)).toBe("Odd");
        });
      });
    });
  });
  ```

- Intro: Test-Driven Development

  - Basic Gist of TDD

    - write actual test before write the implementation code
    - The idea behind TDD is our tests allow us to more easily figure out what do we want our program to do or what do we want our class to do and write it down? Almost like making a plan.
    - NOTE: goal is not just to write a test and then make it pass. Your goal is you can only write code if it makes a test pass.
    - As soon as we introduce a test that has a new feature, we add the corresponding implementation and that ensures that all the new code we write is going to be covered by some test, because we wrote the test that's going to run that code first

    ![](./images/TTD.png)

    - Red Phase **(failing test)**: write test --describes what a specific piece of our program should do --like stoplight means stop. Red means our test are going to be failing and predictably going to be failing because the assertions that were going to make them cannot possibly succeed or pass as we have no actual code yet
    - Green Phase **(make it pass)**: write the implementation code that makes the tests pass --actually fulfilling what the tests expect the code to do. It ensures that we're not going to write any additional code or any extra code or not needed code. We're just going to write whatever is the bare minimum amount of code.
    - Refractor Phase **(make code better)**: means to improve code without changing its underlying purpose. if we can come up with a slightly better implementation or a more efficient solution to the problem in our JavaScript, we can do that and then again run the tests over and over to confirm that we are still delivering on the tests expectation and the code is doing what it's supposed to do

- Adding the Watch and Coverage Flags

  - Flag: config setting or an option that we can enable for the test run or before it runs our files

    - watch mode --going to do is watch files for changes. And whenever we make changes to those files, either the test files or the files that they're targeting just is going to observe those changes and trigger a fresh test run. `"test:watch": "vue-cli-service test:unit --watch"`
    - coverage --enable test coverage on what percentage of our code is properly being tested or what percentage of our code our tests are running through as they're executing all of their internals. `"test:unit": "vue-cli-service test:unit --coverage"`
      ![](./images/test-cover.png)
      - statements: files
      - branches: separate splitting logic --e.g basically, if statements somewhere in your code where there is a logic or a piece of logic that may or may not be executed depending on a path in this case. And if statement creates a branch of logic.
      - uncovered line: which line numbers have not been covered by your tests

  - playground.test.js

  ```js
  import { evenOrOdd, multiply } from "@/playground.js";
  /*
    2 extension configure for Jest testing --plain file with .js extension is not enough, need to prefix this test or spec when we run
  
    .test.js
    .spec.js
  */

  describe("basic math", () => {
    it("adds two number", () => {
      expect(1 + 1).toBe(2); //any valid JS code (evaluation or expression) that jest will be executed then will return an object that can invoke method [assertion(matches) types] then compare it with the expected result (--toBe is a matcher method for strict equality (for any kinds of primitives in JS) as we literally want to compare 1 + 1 to be the expected result of 2 then it is a method that need to invoke And then the argument we provide it is the expected result.)

      // expect(received).toBe(expected)
    }); // it() --test begins with the function called IT --the 1st argument will be str and the 2nd argument will be function called assertion or expectation

    it("subtracts two number", () => {
      expect(5 - 3).toBe(2);
      expect(10 - 5).toBe(5);
    });

    describe("evenOrOdd", () => {
      describe("when the number is even", () => {
        it("indicates the number is even", () => {
          expect(evenOrOdd(4)).toBe("Even");
        });
      });

      describe("when the number is odd", () => {
        it("indicates the number is odd", () => {
          expect(evenOrOdd(3)).toBe("Odd");
        });
      });
    });

    describe("multiply", () => {
      it("multiplies two numbers together", () => {
        expect(multiply(2, 3)).toBe(6);
      });
    });
  }); // this function use it to provide a organizational header or categorization. It allows us to create a description for the thing we are about to tests
  ```

- NOTES:
  ![](./images/sec6.png)
  ![](./images/sec6-1.png)

## Section 7: First Vue Tests

- Intro to Vue Test Utils

  - import extra method from a library called Vue Test Utils
  - Vue Test Utils --provides several utility functions for testing Vue components --its methods allow us to mount and interact with vue components outside the browser

    - mount --get it up and running (executing)
    - mount a vue component --simulate that component as if it exists in real world except were going to be able to interact with it outside of the browser --render vue component outside browser(chrome)

  - First Vue Test

  ```js
  //MainNav.test.js

  import { mount } from "@vue/test-utils"; //allow us to bring up components outside of the browser environment
  // mount or shallowMount --we're sort of simulating a browser like environment where we can bring up a component, but it's not actually a real visual environment(DOM), it's sort of a sandbox for us to plan.

  import MainNav from "@/components/MainNav.vue";

  describe("MainNav", () => {
    it("displays company name", () => {
      const wrapper = mount(MainNav); //mounts returns an object (that is a wrapper) around the vue component (MainNav) --wrap the MainNav with a bunch of extra funcitonality that Vue test utils library gives to utilize --component with some expanded functionality
      // console.log(wrapper.text());

      expect(wrapper.text()).toMatch("Bobo Careers"); //to Match --checks for string or regular expression in wrapper vue component
    }); //describing the value of this component to the user
  });
  ```

  - The Second Argument to Mount Function

    - The optional second argument can be a vue configuration object then accepts all the same properties as a regular vue config object have.
    - NOTE: data and props should have the same properties name declared in the data object in actual component. But can still have a different value in actual component and test.js then the assertion(expect) have the same value in the test.js to the test to be passed

      - advantage: new developer will can sort of make a connection that data methods company property is what being rendered on the screen
      - disadvantage: not an ideal test as this test is coupled to our implementation code (knows specific details of the internals of the components data). This test knows a lot about what the component needs in order to work, and the reason that's bad is because if our component changes our implementation, for example, in our actual component, if we were to write a hard code Bobo careers in line instead of making it interpolate at the company property, this test would fail.
      - NOTE: Our tests are brittle, they are flaky, they are not stable and reliable. And the reason is because our tests are closely coupled to the actual implementation.

      ```js
      describe("MainNav", () => {
        it("displays company name", () => {
          const wrapper = mount(MainNav, {
            data() {
              return {
                company: "Bobo Careers",
              };
            }, // optional second argument
          });

          expect(wrapper.text()).toMatch("Bobo Careers");
        });
      });
      ```

  - The setData Method

    - one way to change data in vue component in a test is to set the data of our component after it has already been mounted
    - **setData()**

      - asynchronous test and operations
      - invoke set data and represents the new data object e.g can use any properties that exist in regular main nav component
      - e.g The wrapper needs to go inside the vue component, change a certain property, perhaps re render the internals of that component in order to reflect those changes. And that operation takes some amount of time. So what actually happens here is when we call set data, the test doesn't wait for that to complete before it continues running. The operation does not block the next line of code from executing.
        - Solution: tell our test to wait until the method completed by making the function async in the second argument of it function then await the setData method
      - Disadvantage: artificially triggering a change in the data of the actual component. So why is this a problem? It's because we're not using the component in the way that the user of our site would actually use it. This is functionality that doesn't actually exist in our main NAV component.

      ```js
      describe("MainNav", () => {
        it("displays company name", async () => {
          const wrapper = mount(MainNav);
          await wrapper.setData({
            company: "Super Corp",
          });

          expect(wrapper.text()).toMatch("Super Corp");
        });
      });
      ```

- NOTE:
  ![](./images/sec7.png)
  ![](./images/sec7-1.png)

## Section 8: Directives I

- The v-bind Directives I
  - directive is a special vue command --can almost think of it like a command or a function in line in html template and vue knows is supposed to do something special
  - v-bind --allow us to bind or connect a data value from our vue config object to a html attribute --we can bind whatever HTML attribute we want on any element
  ```html
  <a v-bind:href="url" class="flex items-center h-full text-xl">
    {{ company, }}
  </a>
  ```
  - Directives Shortcut
    - remove the v-bind word and keep the colon
    - whenever we see a colon before an attribute in view, what that means is we are binding that value of that attribute dynamically to something on our data
    ```html
    <a :href="url" class="flex items-center h-full text-xl"> {{ company, }} </a>
    ```
- CSS: Styling Navigation Items

  ```html
  <nav class="h-full ml-12">
    <ul class="flex h-full p-0 m-0 list-none">
      <li class="h-full">
        <a href="" class="flex items-center h-full py-2.5"> Teams </a>
      </li>

      <li class="h-full ml-9">
        <a href="" class="flex items-center h-full py-2.5"> Locations </a>
      </li>

      <li class="h-full ml-9">
        <a href="" class="flex items-center h-full py-2.5"> Benefits </a>
      </li>

      <li class="h-full ml-9">
        <a href="" class="flex items-center h-full py-2.5"> Jobs </a>
      </li>

      <li class="h-full ml-9">
        <a href="" class="flex items-center h-full py-2.5"> Student </a>
      </li>

      <li class="h-full ml-9">
        <a href="" class="flex items-center h-full py-2.5">
          Life at BoBo Corps
        </a>
      </li>
    </ul>
  </nav>
  ```

- The v-for Directives
  - v-for allows us to iterate over some kind of iterable --meaning an array or an object or anything that has multiple elements and each one of those elements were telling vue to create HTML element
  ```html
  <li class="h-full ml-9" v-for="menuItem in menuItems"></li>
  ```
- The :key Attribute
  - key prop is a convention provide for v-for directives that is some kind of unique identifier that can use internally to track and distinguish all of those dynamic changes to each elements
  - were going to use the v-bind directive that allows us to bind some kind of dynamic value to an html attribute
  - :key --is a unique identidier thats going to be unique for all of the iterations. NOTE: ideally, what that unique identifier is is something simple like a string or a number or some kind of simple ID -- avoid complex objects, like JavaScript objects or arrays or custom objects as unique identifiers. --dynamically injected and it's going to be something different on every single iteration
  ```html
  <li v-for="menuItem in menuItems" :key="menuItem" class="h-full ml-9">
    <a href="" class="flex items-center h-full py-2.5">{{ menuItem }}</a>
  </li>
  ```
- Using Tailwind's First Child Utility Class

  - CSS actually has this logic built into it where we can apply a class, but only to the first element or the first child element within a group.

  ```js
  // tailwind config:
  variant: {
    extend: {
      margin: ["first"], //enable to apply a different margin class to the first element in iteration
    },
  },

  // MainNav Component
  <li
    v-for="menuItem in menuItems"
    :key="menuItem"
    class="h-full ml-9 first:ml-0"
  >
    <a href="" class="flex items-center h-full py-2.5">{{ menuItem }}</a>
  </li>
  ```

- Testing v-for Directives

  - toEqual() --used when to check that two objects have the same value, same principle but not literally the same object --use to compare JS object or arrays

  ```js
  it("display menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("li");
    const navigationMenuText = navigationMenuItems.map((item) => {
      return item.text();
    });

    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
    console.log(navigationMenuText);
  });
  ```

- Using data-test to Identify Element

  - data-set --exist purely for testing
  - attribute on element that was dedicated entirely for testing --It's going to be a no op, which means it's not going to do anything to the actual element in the browser. It's just kind of an irrelevant key value pair that we're going to add to our time element.

  ```js
  it("display menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuText = navigationMenuItems.map((item) => {
      return item.text();
    });

    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
    console.log(navigationMenuText);
  });
  ```

  -not binding or anything like v-bind:key, so I'm literally hard coding an attribute of data test and I'm giving it the value of main nav list item on all of our iterations.

- NOTE:
  ![](./images/sec8.png)
  ![](./images/sec8-1.png)
  ![](./images/sec8-2.png)
  ![](./images/sec8-3.png)

## Section 9: Directives II

- User Story
  ![](./images/userStory1.png)

- Creating Action Button Component

  ```html
  // ActionButton.vue
  <template>
  <button
    class="px-5 py-3 font-medium text-white border-0 rounded bg-brand-blue-1 hover:shadow-blue"
  >
    Sign in
  </button>
  </template>

  <script>
  export default {
    name: "ActionButton",
  };
  </>

  //then render this component to MainNav.vue component

  ```

- Creating Profile Image Component

  ```html
  // ProfileImage.vue component
  <template>
    <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
  </template>

  <script>
    export default {
      name: "ProfileImage",
      data() {
        return {
          imageLink:
            "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
        };
      },
    };
  </script>

  //then render this component to MainNav.vue component
  ```

- Conditional Rendering with v-if Directives

  - v-if --allow us to conditionally render a chunk of html (like if statement in JS but applied to template) but only if a certain condition met and only if some condition is true
  - as our data changes, we can dynamically introduce new chunks of each html into our existing component and can

  ```html
  // MainNav.vue
  <template>
    <div class="flex items-center h-full ml-auto">
      <action-button v-if="!isLoggedIn" />
    </div>
  </template>

  <script>
    import ActionButton from "@/components/ActionButton.vue";

    export default {
      name: "MainNav",
      components: {
        ActionButton,
      },
      data() {
        return {
          isLoggedIn: false,
        };
      },
    };
  </script>
  ```

- The v-else directive

  - v-else --works as exactly like an if else statement in JS
  - if something is true, render one bit of html. else or otherwise will be rendering a totally different chunk of html
  - true --render one component
  - false --render another component

  ```html
  // MainNav.vue
  <template>
    <div class="flex items-center h-full ml-auto">
      <profile-image v-if="isLoggedIn" />
      <action-button v-else />
    </div>
  </template>

  <script>
    import ActionButton from "@/components/ActionButton.vue";

    export default {
      name: "MainNav",
      components: {
        ActionButton,
      },
      data() {
        return {
          isLoggedIn: false,
        };
      },
    };
  </script>
  ```

  - If this condition is true, if isLogged in, returns true, it's going to render the profile image component and it's not going to render the action button component as this component belongs to v-else
  - Conversely, if our if statement evaluates to false, so if is logged in is equal to false, Vue will not render the profile image component and since it automatically will go into the else statement just like it would in regular JavaScript, the statement evaluates the true and we're going to render an action button instead.
  - NOTE: So we're only ever going to render one of these two components, either profile image or action button, depending on the status of is logged in.

- Testing v-else directives I

  ```js
  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });
      const loginButton = wrapper.findComponent({ name: "ActionButton" });
      const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      expect(loginButton.exists()).toBe(true); //gives a boolean(either true or false) that determines whether or not that component exists in the template --expect login button exist if user is logged out
      expect(profileImage.exists()).toBe(false); //expecting profileImage doesnt exist if user is logged out
    });
  });

  describe("when user logs in", () => {
    it("displays user profile picture", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const loginButton = wrapper.findComponent({ name: "ActionButton" });
      const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
  ```

- Testing v-else directives II

  ```js
  <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button v-else data-test="login-button" />
          <!-- <action-button v-if="!isLoggedIn" /> -->
  </div>

  describe("when user logs in", () => {
    it("displays user profile picture", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });

  ```

- Adding Methods to Vue object
  - NOTE: dont use arrow function in methods object as it will prevents vue from correctly binding ever it needs for a component --use ES6 syntax
  - need to invoke those method to run just like in basic JS
  - how to run a method? use v-on directives
  ```js
  <script>
  export default {
    name: "ActionButton",
    methods: {
      handleClick() {
        console.log("Ive been click");
      },
    },
  };
  </script>
  ```
- The v-on directives: HTML

  - v-on --specify an action to take on some kind of an event --react to an event
  - event --something that happens such as user interaction --any kind of interactive thing that occurs is called an event

  ```html
  <template>
    <button
      class="px-5 py-3 font-medium text-white border-0 rounded bg-brand-blue-1 hover:shadow-blue"
      v-on:click="handleClick"
    >
      Sign in
    </button>
  </template>
  //NOTE: v-on:[type of event]="[method]" --not invoking the method by calling
  it as is in JS
  ```

  - v-on shortcut: `@click="handleClick"`
  - **NOTE:** we can add the v-on directive either in a vue component or html element. --works in long and short form

- The Event Object

  - whenever vue invokes any method to the v-on directive, it will automatically pass in an event object as the very first argument to that method
  - event object --JS object that has a lot of information about what will happened to an event --also have different characteristics and properties

  ```js
  <script>
  export default {
  name: "ActionButton",
  methods: {
    handleClick(event) {
      console.log(event);
      //event --vue representation of a click
    },
  },
  };
  </script>
  ```

- Overwriting Data in a Method

  - this keyword will can change or vary depending on the context in which its used (either traditional or class instance)
  - in traditional --regular JS setup this keyword not work as we will not be able to access an arbitrary is logged in property that is coincidentally existing on the returned object from another method but will work on vue
  - The reason it works in vue is because Vue takes a look at everything that we've wired up within our data method mean the properties configured in data method makes them available at the top level of the vue configuration object.

  ```js
  <template>
    <div class="flex items-center h-full ml-auto">
      <profile-image v-if="isLoggedIn" data-test="profile-image" />
      <action-button v-else data-test="login-button" @click="loginUser" />
      <!-- <action-button v-if="!isLoggedIn" /> -->
    </div>
  </template>

  <script>
  export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Bobo Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
  };
  </script>
  ```

- Updating MainNav Test

  - testing the component as it will be used by the user
  - not changing the data properly --not changing technical view details. Rather,interacting with mounted main nav component as a user would be simulating a click on an action button.
  - testing click by simulating a click --means trigger a click in our tests (as if were user) --is not technically a real click as we are not in operating browser environment when testing. NOTE: The way it actually works behind the scenes is we're going to tell you to find the action button, and when we tell it to click, it's actually going to find this v-on click directive. And since we associated that directive with log in user, it's going to say, okay, you are telling me to behave as if a click occurred.

  ```js
  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      // setting up component
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      // action or triggering some changes
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click"); // trigger() --an async function --simulate an event just like a user event which in this case is a click

      // testing the changes from an action
      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);

      //expect(loginButton.exists()).toBe(false);
    });
  });
  ```

  - NOTE: trigger method is an async means it will takes some time resulting to failed test, solution is to pause the execution and wait until the vue component is done re rendering everything and has completed the process of the trigger and everything that resulted from it, before we do any further assertions by making it() an asynchronous function and await the trigger().

- NOTES:
  ![](./images/sec9.png)
  ![](./images/sec9-1.png)
  ![](./images/sec9-2.png)
  ![](./images/sec9-3.png)
  ![](./images/sec9-4.png)

## Section 10: Passing Props

- User Story: Multiple Buttons
  ![](./images/userStory-10.png)
  ![](./images/userStory-10.1.png)
  ![](./images/userStory-10.2.png)

- Independent Component

  - each view component is independent. That means it tracks its own data, its own state, independent of what other components are doing.
  - even if rerendering component multiple times inside another component, still the component works independent and isolated to each other even they are the same component
    ![](./images/indieComponent.png)

- Intro to Props

  - data is the data lives inside the component while the props is the data that is flowing in from the parent component to child component
  - allows a parent component to feed in custom data to a child component
  - unidirectional binding --flows in one direction from parents to its child. Whenever the parent property updates, e.g feeding dynamic value as a prop to the child, whenever the value changes in the parent, that changes will flow downwards to the child component.
  - when we pass a prop, it becomes availabe as a property that we can render in the template of our child component

  ```js
  // parent component
  <template>
    <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            data-test="login-button"
            @click="loginUser"
          />
          <action-button text="Different value"/>

        </div>
  </template>

  // child component
  <template>
  <button
    class="px-5 py-3 font-medium text-white border-0 rounded bg-brand-blue-1 hover:shadow-blue"
  >
    {{ text }}
  </button>
  </template>

  <script>
  export default {
    name: "ActionButton",
    props: ["text"], //props is going to be an array of inputs that child component will received from its parent
  };
  </script>
  ```

  ![](./images/props.png)

- The Tailwind @apply Directives

  - tailwind has its own directices for similar purpose on vue directives. --tailwind library gives us special syntax to transform css utility class to traditional css syntax
  - @apply --use to apply inline any existing utility classes into your own custom --can write any tailwind classes inline and they will automatically be applied to the css selector

  ```css
  <style scoped>
  button {
  @apply px-5 py-3 font-medium rounded;
  }

  .primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
  }
  </style>

  ```

- Fixing CSS violations
  - CSS checker doesnt understand tailwind css utility classes --easiest way is to turn off the css checker in .vscode folder -> settings.json
  ```js
  //settings.json
  {
  "css.validate": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "eslint.validate": ["javascript", "vue"],
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "html.autoClosingTags": true
  }
  ```
- Adding v-bind to class attribute

  - same as in binding config data to template, this also is connecting styles selector to class attribute in template

  ```js
  <template>
  // <button v-bind:class="{primary: true}">
  <button :class="{ primary: true }">
    {{ text }} //provide a plain js object at class attributed binded in the style section then provide a key pair where the key represent the css selector at style section and the value will be a boolean that reflects that class should be applied or not
  </button>
  </template>

  <style scoped>
  button {
    @apply px-5 py-3 font-medium rounded;
  }

  .primary {
    @apply text-white bg-brand-blue-1 hover:shadow-blue;
  }
  </style>
  ```

- Adding Slice of Data for Dynamic Class

  - advantage: connecting a data property to template makes the dynamic and ability for vue to react to changes

  ```js
  <template>
  <button :class="{ primary: primary }">
    {{ text }}
  </button>
  </template>

  <script>
  export default {
  data() {
    return {
      primary: true,
    };
  },
  };
  </script>
  ```

- Intro to Computed Properties

  - their function is pretty similarly to how our data properties work but they are reserved for a specific use case in vue
  - computed properties is where we want to put any pieces of information that are dependent on other pieces of data that change, but only change as other pieces of data change around them that are derived, or in other words, that come from **calculations based on other pieces of information**
  - Computed property --re-evaluated by vue based on some kind of dependency or some kind of other piece of information changing(property). They are derived data because they are dependent on properties that is changing.
  - also use a computed property to generate JS object to provide for css classes and that object was dependent on an existing piece of data that come literally from the components data property and can be also come from a props that we pass in

    - works exacts the same way as our methods object and define methods(functions) inside.
    - using a curly brace syntax in our template as interpolation syntax for computed property same as which we've used previously for data properties.
    - can use it to bind to a attribute using directives like the bind
    - We can also use it the exact same way as we use data, but the difference is when we use it, we use computed when the data is not independent, when it is derived from something else.

    ```js
    <template>
    <button :class="{ primary: primary }" @click="doubleHeight">
    {{ area }}
    </button>
    </template>

    <script>
    export default {
      name: "ActionButton",
      props: ["text"],
      data() {
        return {
          primary: true,
          width: 10,
          height: 5,
        };
      },
      computed: {
        area() {
          return this.width * this.height;
        },
      },
      methods: {
        doubleHeight() {
          this.height = this.height * 2;
        },
      },
    };
    </script>

    ```

- Computed Properties for Class Object

  - there are two distinct pieces of information here in the sample code
    - 1st: one is an actual primary property in data property which is independet, which is keeping the track of whether ot not the primary class should or should not be applied
    - while the in the buttonClass method being return is an object that is dependent on the primary piece of data. This JavaScript object is something that is derived so that whenever the value of this data property changes, for example, to false, we want this object to be reevaluated, which in turn will replace what we have in template --in class and render a different button on the screen.

  ```js
  <template>
  <button :class="buttonClass">
    {{ text }}
  </button>
  </template>

  <script>
  export default {
    name: "ActionButton",
    props: ["text"],
    data() {
      return {
        primary: true,
      };
    },
    computed: {
      buttonClass() {
        return {
          primary: this.primary, //not a boolean but an object that is dependent on the this.primary piece of data --whenever value of this.primary changes, this return object to be reevaluated and replace value in the class attribute and render a different button
        };
      },
    },
  };
  </script>
  ```

- Adding New Blue Color to Tailwind Config

  ```js
  extend: {
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
      },
    },
  ```

- Adding Secondary Button Style

  ```js
  <script>
  export default {
  name: "ActionButton",
  props: ["text"],
  data() {
    return {
      primary: true,
    };
  },
  computed: {
    buttonClass() {
      return {
        primary: this.primary,
        secondary: !this.primary, //false --reverse of the primary --only one true will apply as per user choose by clicking btn
      };
    },
  },
  };
  </script>

  <style scoped>
  button {
    @apply px-5 py-3 font-medium rounded;
  }

  .primary {
    @apply text-white bg-brand-blue-1 hover:shadow-blue;
  }

  .secondary {
    @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
  }
  </style>

  ```

- Passing in Props for Style

  - prop can be pass from parent to the child that will inform what it should be render and we can use that prop to determine our data and our computed property
  - **NOTE:** by default, props is going to interpret its value as a string, for other type of value such as boolean is use the v-bind directive similar idea as binding a html attribute. shortcut for v-bind also application in other primitives or JS object

  ```html
  // parent component
  <template>
    <action-button
      v-else
      text="Sign in"
      :is-primary="true"
      data-test="login-button"
      @click="loginUser"
    />
  </template>

  // child component
  <script>
    export default {
      name: "ActionButton",
      props: ["text", "isPrimary"],
      data() {
        return {
          primary: this.isPrimary, //true || false
        };
      },
      computed: {
        buttonClass() {
          return {
            primary: this.primary, // true(applied)|| false
            secondary: !this.primary, //false || true(applied)
          };
        },
      },
    };
  </script>
  ```

  - behind the scene, vue can still both interpret upper camel case and kebab case --still can access camel case at the child component (ActionButton) even though using kebab case at parent component (MainNav)
  - we can actually have reference to every prop within our data object as well as within our computed properties. And we reference our props on the this keyword.
  - Props are totally independent so they can flow into the component and able to reference in our data returned object and also in the computed property
  - We can also use props to customize the mechanics of how the component works

- Dynamically using Props

  - wish driven development --writing out the code that we wish we had
    -can also use prop to computed property object
    - value in props can convert from one type to another type(string to boolean) from making logic operation such as arithmetic(comparison)
    - Whenever you need to pass that kind of data or information from the parent to the child, usually to customize how the child works, either looks or works or what it renders for those types of use cases, we use props.

  ```html
  // parent component
  <template>
    <action-button
      v-else
      text="Sign in"
      type="primary"
      data-test="login-button"
      @click="loginUser"
    />
  </template>

  // child component
  <script>
    export default {
      name: "ActionButton",
      props: ["text", "isPrimary"],
      computed: {
        buttonClass() {
          return {
            primary: this.type === "primary", //true(applied)
            secondary: this.type === "secondary", //false(applied)
          };
        },
      },
    };
  </script>
  ```

- ES6 Review: Dynamic Object Properties
  const favoriteFood = "sushi";

```js
const goodFood = {
  [favoriteFood]: true,
  //square bracket[] --is a special syntax in JS to wrap the key in sq bracket --this syntax tells JS look in a name of favoriteFood and then find its corresponding value then substitute the value as a property in an object--output: {sushi: true}
  //dynamic object properties --result of some other thing in our program or it can vary and it can be set from another source--e.g we could get data from the user(or in API) and then assign it to a variable and then set that as the object property.
};
console.log(goodFood);
```

- Refracturing the Type Prop

  ```html
  // parent component
  <template>
    <action-button
      v-else
      text="Sign in"
      type="primary"
      data-test="login-button"
      @click="loginUser"
    />
  </template>

  // child component
  <script>
    export default {
      name: "ActionButton",
      props: ["text", "isPrimary"],
      computed: {
        buttonClass() {
          return {
            //refractor: using destructuring an array in props (type)
            [this.type]: true,
          };
        },
      },
    };
  </script>
  ```

- Testing CSS Classes

  - simulate passing props in a test even no parent component rendering button by declaring a configuration object (2nd argument to the mount function) then provide a key of props
  - NOTE: data and props should have the same properties name declared in the data object in actual component. But can still have a different value in actual component and test.js then the assertion(expect) have the same value in the test.js to the test to be passed

  ```js
  import { mount } from "@vue/test-utils";
  import ActionButton from "@/components/ActionButton.vue";

  //rendering text to generic btn
  describe("ActipnButton", () => {
    it("renders text", () => {
      const wrapper = mount(ActionButton, {
        props: {
          text: "Im so clickable", //str is something output of the btn
          type: "primary",
        }, //it's okay because this is how our action is designed to work in the real world. A parent component will pass in these two pieces of information and the action, but needs them in order to work. --providing this component what it needs in order to operate even before we build the action button component as we follow TDD it would be a fair assumption to make that if we're going to have a generic button, that we're going to need some kind of text to give it in order to render.
      });
      expect(wrapper.text()).toMatch("Im so clickable");
    });

    //applying the right css class --type of primary is going to apply to the btn
    it("applies one of several styles to button", () => {
      const wrapper = mount(ActionButton, {
        props: {
          type: "primary",
        },
      });
      const button = wrapper.find("button");
      expect(button.classes("primary")).toBe(true); //classes method --provide a string of a class that expect to find // true --if primary class exists among the buttons class
      //toBe --for strict equality and totally okay to use with a boolean
      //Find that button view test utils. Check the kind of css classes that it has applied to it and make sure that primary is in that list of classes
      // NOTE: In props: even you change the value of type in the actual component e.g (from parent to child) when run test here result is still passed coz in the config obj of mount function props type value is same in the assertions(expect)
    });
  });
  ```

- Updating Prop Validation in ActionButton

  - better way to declare props

    - instead of array, declaring props in object --works as properties or keys are going to be the props that allow us to set up all of that additional configuration for props and it can alert you of certain violations in your app.
    - the value of each props is going to be its own object (add another nested object) and think of this as the configuration object or the validation object for the

      - the properties name is have to be written exactly as vue expects them to be

    - using this validation warns us if were using the wrong data types in props

    ```html
    <script>
      export default {
        name: "ActionButton",
        props: {
          text: {
            type: String, //data type
            required: true, //whether that property is requred from the parent component

            //NOTE: whenever a parent component renders action button anywhere in the app, the parent component must give a text prop. And if it doesn't do that, then Vue is going to output a warning in our chrome console.
          },
          type: {
            type: String,
            required: false, //if not requires, give fallback value or default value just in case parent component doesnt declare a type prop
            default: "primary",
          },
        },
      };
    </script>
    ```

- Fixing Test warning

  - required also make warning in test that why also need to include in testing props with required property
  - NOTE: whenever you make mistakes, your tests are going to catch it in addition to the browser. That's why it pays to have a really good test suite.

- Custom Prop Validation with validator Function
  - improve some validation logic for our props in our action button component
  - The validator method must return a boolean **true** to indicate that something should pass and **false** to indicate that something should not pass, that it is not valid.
  ```html
  <script>
    export default {
      name: "ActionButton",
      props: {
        text: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: false,
          default: "primary",
          validator(value) {
            return ["primary", "secondary"].includes(value);
          }, //used a validation logic anytime parent component renders an action button and give a type prop --(value) represents the actual prop value declared at parent component and passed in as an argument. Then confirm if the value is valid thru setting conditions in the body
        },
      },
    };
  </script>
  ```
- NOTES
  - instantiate --render a component from a parent
    ![](./images/sec10.png)
    ![](./images/sec10-1.png)
    ![](./images/sec10-2.png)
    ![](./images/sec10-3.png)
    ![](./images/sec10-4.png)
    ![](./images/sec10-5.png)
    ![](./images/sec10-6.png)

## Section 11: Creating Subnav

- User Story: Subnav
  ![](./images/sec11-User.png)

- Create Subnav

  - secondary menu that will appear below our primary menu

  ```html
  //Subnav component
  <template>
    <div>This is a subnav</div>
  </template>

  <script>
    export default {
      name: "Subnav",
    };
  </script>

  // then render this child component to the parent component
  ```

- CSS: Styling Subnav Component
  ```html
  <template>
    <div
      class="w-full h-16 bg-white border-b border-solid border-x-brand-gray-1"
    >
      <div class="flex items-center h-full px-8">This is a subnav</div>
    </div>
  </template>
  ```
- Install FontAwesome

  - installing in vue cli both the core font awesome library as well as the vue implementation
  - `npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome@prerelease`
    - fortawesome --is the organization
    - @prerelease --specific version to make sure all these dependencies will work together
    - add the SVG core --fontawesome-svg-core ---install the core package which includes all the utilities to make the icons work
    - add Icon packages --install the icons you want to use - you can choose Free or Pro icons, and select any of our styles.
    - add the vue component --install the Font Awesome Vue component

- Register Global Components

  - fontawesome being installed will be registered as global components
  - **local components** --rendering child component to the parent component using component key in export default class --registering child will only be used within the local scope of parent in other words cannot use child outside of the parent --if we want to use to other component we also need to import the child
  - global component --register a component at the top level of the vue app (where we setting up the whole vue app) and were going to be able to use that component in any other vue component --able to use in template in any vue component and reuse the global component
    - disadvantage --may not know where that global component coming from --it may be coming from one library or another
    - advantage --spare us from writing a whole bunch of code
  - Why don't we just make any component reusable in any other component? Well, because that's actually going to bloat or increase the size of your view bundle. The more that you limit the scope of where things are used, the more the builder knows how to optimize where certain imports are needed and where they're not.
  - NOTE: main.js --the bootstrapping of our application. This is everything kicks off --as far as the launching of the Vue App
    - importing the create app function from vue `import { createApp } from "vue";`
    - and then were importing our most top level component `import App from "@/App.vue";`, the parent of all parents, the top of the hierarchy, the top of the pyramid, our app component.
    - We're creating a Vue App starting from that App component `createApp(App).mount("#app");`, and then we're mounting it into a div in the HTML page that has an ID of app.
  - We want our font awesome icons to be globally available so were going to register them in main.js

  ```js
  // main.js

  import { createApp } from "vue"; //importing a function from the Vue library called Create App that is a named export

  //Global component --from installed fontawesome package
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // font-awesome vue component --FontAwesomeIcon is the magic that renders icons in our Vue projects.
  import { library } from "@fortawesome/fontawesome-svg-core"; // importing a collection of available icons then register any icon we want to use in this library
  import { faSearch } from "@fortawesome/free-solid-svg-icons"; //import actual icon that want to make globally available

  // App Component
  import App from "@/App.vue"; //importing the root component from vue file
  import "@/assets/tailwind.css"; //importing tailwind package

  library.add(faSearch); //adding/ registering icon to the library but not yet connected to the vue
  createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app"); //connect library to actual vue app by adding component method (register a global component within the whole vue app) before mount method then invoke it. And then call mount method on the return value --NOTE: special design pattern in vue --the methods that are available on this vue object will always return the same object itself. And the benefit of that design is that we can invoke as many methods in a row and we're can rest assured that we're always getting the same vue app object back which allows to call mount on it same as before
  ```

- component method --takes two arguments and it functions very similarly to the way our components key works in any typical vue file so far where we have registered local components

  - the first argument is going to be a string that represents what you want the name of the component to be whenever we are using it in the HTML template (kebab case)
  - The second argument, of course, is the actual component (name of the component) that's going to render when we use that syntax throughout the app.

- Use FontAwesome Icon in Subnav
  - vue going to take our class styles and going to apply them to the first actual element with the fontawesome component --however the developers built the font awesome icon component, whatever its most top level HTML element, whatever they configured, we're going to apply this class to that.
  ```html
  <template>
    <div
      class="w-full h-16 bg-white border-b border-solid border-x-brand-gray-1"
    >
      <div class="flex items-center h-full px-8">
        <div>
          <!-- global component --parent component of subnav rendering a child component --used a props called icon(docu for vue implementation of fontawesom) to customize details how child renders  -->
          <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
          <!-- icon is a automatic prop in fontawesome package --2 array of strings: 1st fas short for fontawesome 2nd actual fontawesome icon -->
          <span>
            <span class="text-brand-green-1">1653</span> jobs matched</span
          >
        </div>
      </div>
    </div>
  </template>
  ```
- Conditionally Render Subnav

  - only render subnav if user is logged in

  ```html
  <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            data-test="login-button"
            @click="loginUser"
          />
          <!-- <action-button v-if="!isLoggedIn" /> -->
        </div>
      </div>

      <subnav v-if="isLoggedIn" />
    </div>
  ```

- Using TDD for v-if directive for Job Page

  - only displaying the number of jobs matches subnav if the user is specifically on the job page
  - find method --if not be able to find a corresponding element the test will not fail, rather will return an object that is sort of like an undefined
  - get method --same as find method but the onlu difference is if not able to find, the test will fail --never get to the next line at all
  - NOTE: by this moment, not yet know what is router that's why we are manually declaring data property at the 2nd argument of mount to test if the user is in the job page to render the number of job matched

  ```js
  import { mount } from "@vue/test-utils";

  import Subnav from "@/components/Subnav.vue";

  describe("Subnav", () => {
    describe("when user is on the job page", () => {
      it("display job count", () => {
        const wrapper = mount(Subnav, {
          data() {
            return {
              onJobResultsPage: true,
            };
          },
        });
        const jobCount = wrapper.find("[data-set='job-count']");
        expect(jobCount.exists()).toBe(true);
      });
    });

    describe("when user is on the job page", () => {
      it("does NOT display the job count", () => {
        const wrapper = mount(Subnav, {
          data() {
            return {
              onJobResultsPage: false,
            };
          },
        });
        const jobCount = wrapper.find("[data-set='job-count']");
        expect(jobCount.exists()).toBe(false);
      });
    });
  });
  ```

- Updating Subnav implementation to Pass Tests

  - declared a data property to the config object of subnav component as same as in the TDD, then declare a v-if and data-set to the html template

  ```html
  <template>
    <div v-if="onJobResultsPage" data-set="job-count">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span><span class="text-brand-green-1">1653</span> jobs matched</span>
    </div>
  </template>

  <script>
    export default {
      name: "Subnav",
      data() {
        return {
          onJobResultsPage: true,
        };
      },
    };
  </script>
  ```

  - NOTE: as we only mounting(rendering outside of the browser) component in testing, the test ecosystem have no clue about global component(fontawesome icon)

- Fixing Test Warnings in Subnav

  - globally registered font Awesome Icon component is not available when we mount the sub nav component in isolation in our tests.
  - Stubs --use as a replacement or stand in for an existing component,as test does not know anything about global component(not being render the global cmpnt to the component being tested) e.g a stunt man in action movie --replacement in real actor
    - What we can do with a stub is tell Vue and the vue test utils that whenever it sees a font awesome icon(global component), we want it to replace it with something else. --vue test utils is going to replace this font awesome icon component,it's going to replace it with some kind of valid code or valid HTML. And thus whenever the component mounts, we're no longer going to be referencing the original global component --And thus because Vue and Vue test utils will know what that stub is, it's going to be something local to the test rather than the separate global component from a totally different library.

  ```js
  describe("when user is on the job page", () => {
    it("display job count", () => {
      const wrapper = mount(Subnav, {
        // global settings of the component --STUBS--
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }, // keys or properties in stub object represents the components that we want to stub out to replace whenever test utils mounts a sub component then provide a value since stub is an object and set to true --boolean set up if we have multiple different components being rendered or replace
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-set='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  ```

- Fixing Test Warnings in MainNav
  - having test warning at MainNav test even though were there no global component being rendered at the MainNav component. Answer? because of the mounting function.
    - there's two options availabe from vue test utils on how we can mount a component:
      - 1st: **mount function** `mount()`--renders a component or mounts a component but it also goes ahead and mounts all of its children. And if the children has children, it's going to mount all of those as well. --simulates the component the way its supposed to used in the real world(browser) --mount function is rendering the entire component hierarchy, the entire component tree. Can we use stub? yes And I would argue it would, and we need to dig more to the child being rendered at parent. Solution: use shallow mount function
      - 2nd: **shallow mount function** `shallowMount()` --vue test utils will automatically stubs out all of the child component. So if we use the shallow mount function and we mount a main nav(parent), it's going to go through this code and it's going to say, Oh, you have another component being used here, sub nav (child), I'm going to automatically replace it with something fake (same as how many child cmpnt being rendered)
        - advantage: decouple or separate the parent component from all of its children which means mistakes or errors or warning happen in the children will not bubble up to parent. We can test parent in a more unit test perspective.
        - disadvantage: testing a component in a way thats not reflective of the real world. e.g The main NAV component is going to render the sub nav component for the user and now we are replacing sub nav with something fake stub, a not real version of that thing. So it could be that our tests are testing something that isn't reflective of the real world and our tests may pass, but in the real world, that thing, that functionality, that feature may still be breaking because we're not testing all of these pieces as they work in combination in tandem with one another.
- Adding test for ProfileImage
  ![](./images/profileImageErr.png)

  - changing mount() to shallowMount() in previous lesson did affect our code coverage.
  - our main nav component also has child component. So when we switched our tests to shallow mounts, vue stubbed out these child components. And as a result the tests never fully rendered those child component. To make coverage 100% --make a separate test for those child component even if it is a static component with no much business logic

  ```js
  import { shallowMount } from "@vue/test-utils";

  import ProfileImage from "@/components/ProfileImage.vue";

  describe("ProfileImage", () => {
    it("render component", () => {
      const wrapper = shallowMount(ProfileImage);
      expect(wrapper.exists()).toBe(true);
    });
  });
  ```

- Adding Test for Subnav in MainNav

  ```js
  describe("when user logs in", () => {
    it("display subnavigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test = 'subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test = 'login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test = subnav]");
      expect(subnav.exists()).toBe(true);
    });
  });
  ```

- NOTES
  ![](./images/sec11.png)
  ![](./images/sec11-1.png)
  ![](./images/sec11-2.png)
  ![](./images/sec11-3.png)
  ![](./images/sec11-4.png)

## Section 12: Creating Headline Component

- User Story
  ![](./images/sec12-UserStory.png)

- Create Hero.vue Component

  - `<main>` --used to identify, especially for things like search engines and search engine optimization. It's used to identify the main section or the main focus of the page (main content core funcitonality)
    - `<section>` -- very similar to a div identical basically when it comes to the technical implementation, it's just a box on the screen.(distinct pieces of organization or logic.)

  ```html
  //Hero.vue
  <template>
    <main>
      <section>I can be your hero baby</section>
    </main>
  </template>

  <script>
    export default {
      name: "Hero",
    };
  </script>

  //App.vue
  <template>
    <div>
      <main-nav />
      <hero />
    </div>
  </template>

  <script>
    import MainNav from "@/components/MainNav.vue";
    import Hero from "@/components/Hero.vue";

    export default {
      name: "App",
      components: {
        MainNav,
        Hero,
      },
    };
  </script>
  ```

- NOTE: Generally, it's considered best practice to not have multiple what they call root elements(child component) in the App.vue(main vue component) render in template which means we don't just want to put <hero> side by side <main-nav> because there's multiple top level elements or multiple top level components. The general best practice is to only have one most top level element(component) in any given template. Solution? wrap those root element (component) inside a larger div as one top level parent element that is kicking everything off.

- Dynamically Adjust Height of Header

  - 1st solution:

    - we can apply in order to push this main element down, which is the hero component, is we can apply a fixed height to our header element (mainNav)
    - conditional logic same as profileImage and subNav by declaring computed property to MainNav config object
    - also use bind to add computed class in the class attribute `:class="['w-full', 'text-small', hearderHeightClass]"` by this approach we can also provide the name of any computed property(JS object) together with a string

    ```html
    <template>
      <header :class="['w-full', 'text-small', hearderHeightClass]"></header>
    </template>

    <script>
      computed: {
      hearderHeightClass() {
        return {
          "h-16": !this.isLoggedIn,
          "h-32": this.isLoggedIn,
        };
      },
      },
    </script>
    ```

- CSS: Style Hero Component
  ```html
  <template>
    <main>
      <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
        I can be your hero baby
      </section>
    </main>
  </template>
  ```
- CSS Grid

  - two dimensional layout
  - Grid, is a very great layout tool, but it has a one directional flow
  - Use `Grid Garden` to practice CSS Grid

- Apply Css Grid at Hero Component

  ```HTML
  <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 column
        </div>

        <div class="col-start-2 col-span-5 border border-blue-700">
          5 columns
        </div>

        <div class="col-start-7 col-span-5 border border-blue-700">
          5 columns
        </div>

        <div class="col-start-12 col-span-1 border border-blue-700">
          1 column
        </div>
      </div>

      <!-- NOTE: both 1 column represent padding in this component -->
  ```

- Introduction to Vue Lifecycle Hooks
  - Component goes through a life cycle --represents a series of events that component goes through its existence --we can hook into those events and execute some extra code in that given moment in time in that event
    - collection of events is called Life Cycle
      - ![](./images/lifeCycle1.png)
      - ![](./images/lifeCycle2.png)
    - life cycle hook --moment we can sort of interject and write some code or step in at any point during these hook processes --different moments during the components existence.
      - ![](./images/lifeCycleHook.png)
      - ![](./images/lifeCycleHook1.png)
      - beforeCreate() --before component gets all of its reactive features, vue will run this method theb we can step into this method in your life component and run an extra logic (e.g API request)
      - created() -- run automatically by vue whenever component gets its initial reactivity function such as data and computed and other functionality
      - beforeMount() --before vue adds the component into page and its HTML
      - mounted() --runs actually in the browser. Vue has mounted component in browser, its in the DOM, it actually exists in the HTML
- ES6 REVIEW: The setTimeout, setInterval and clearInterval

  - this 3 are the core JS Function
    - setTimeout() --Set time out waits a certain amount of time, a given duration before it runs the logic of your function that you provide as the first argument. So the second argument represents how long to wait in milliseconds, and as a reminder, 1000 milliseconds is equal to 1/2.
    - setInterval() -- accepts the exact same arguments as set timeout. It accepts a function and a duration in milliseconds. But the way that interval works is it runs the function every time. It doesn't stop, it runs it at a consistent interval
      - NOTE: set timeout will only run the function once, while set interval will set an interval of time, at which point to run the function consecutively consistently.
        ![](./images/setInterval.png)
      - why do we see timeout object first? And the answer is because JavaScript does not stop the execution of the remainder of the file just because theres an interval variable (same logic as async --non-blocking)
    - clearInterval() --accepts an interval object and it knows how to shut down that interval object or in other words, make it stop running. So where do we get that interval object from? We actually get it as the return value of the set interval function set to a variable. `clearInterval([variable name set to setInterval])`
      - NOTE: whenever you use set interval, you want to also implement the logic to tear down that interval, to shut it down, to clear it, to tell JavaScript in the browser, stop this consecutive running execution.
        ![](./images/setInterval1.png) - while it's still waiting for the first 2 seconds, we get to line number five and we immediately clear that interval so there's nothing left to run.
        ![](./images/setInterval2.png)

- Using the Created Lifecycle Hook
  - in our Lifecycle hook we can actually reference our data properties --are going to exist during certain Lifecycle hooks
  ```html
  <script>
    export default {
      name: "Headline",
      data() {
        return {
          sample: "Hello",
        };
      },
      created() {
        console.log("Hey!", this.sample);
      },
    };
  </script>
  ```
- Changing the Action Verb in Headline
  ```html
  <script>
    export default {
      name: "Headline",
      data() {
        return {
          action: "Build",
          interval: null,
        };
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
            const currentActionIndex = actions.indexOf(this.action); // 3
            const nextActionIndex = (currentActionIndex + 1) % 4; // 4 % 4 = 0 ( 2 % 4 --when left hand operand is smaller than the right hand operand, the remainder when two is divided by 4 is actually 2 (remainder will always be the small left operand). **John Johnson says 4 goes into 0 the remainder is going to be 2 --As divisor is 4, remainder will range from 0 to 3
            const nextAction = actions[nextActionIndex];
            this.action = nextAction;
          }, 3000);
        },
      },
    };
  </script>
  ```
- CSS: Style Action Verb

  ```html
  <span :class="actionClasses">{{ action }}</span>

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
  ```

- CSS: Fix Styles of Header
  - primary
    ` <h1 class="font-bold tracking-tighter text-8xl mb-14" />`
  - secondary ` <h2 class="text-3xl font-light">Find your next job at Bobo Corp.</h2>`
- Refactor Font Color Class Selection

  ```js
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,

      };
    },
  },
  ```

- Moving Interval Function Logic Out of Component

  - if logic doesnt need to live in the component, then we can definitely extract it out
  - we can use TDD to test unit being move out
  - Edge Cases --refer to situations that are less likely to encounter but are still potential possible, they exist on the edge of something

  ```js
  // nextElementList.js
  const nextElementList = (list, value) => {
    const currentActionIndex = list.indexOf(value);
    const nextValueIndex = (currentActionIndex + 1) % list.length;
    const nextValue = list[nextValueIndex];
    return nextValue;

    // const nextValueIndex = (currentActionIndex + 1) % 4; // 4 % 4 = 0 ( 2 % 4 --Whenever you have a situation like this where the left hand operand is smaller than the right hand operand, the remainder when two is divided by 4 is actually 2 (remainder will always be the small left operand). **John Johnson says 4 goes into 0 the remainder is going to be 2 --As divisor is 4, remainder will range from 0 to 3
  };

  export default nextElementList;
  ```

- Adding Function to Headline Component
  ```js
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementList(actions, this.action);
      }, 3000);
    },
  },
  ```
- Intro to jest.fn() Function

  - jest mock function --allow to mock out or replace JS funcitonality within our components -- jest functions basically stub out or mock out or replace JS functions(e.g setInterval and clearInterval built by other developer) the exact same way that we stubbed out global components.
  - as jest renders a component and it runs into a use of clear interval or set interval, imagine we tell, just don't worry about the complexity of that function, but whenever you see it, just replace it(the behaviour of functionionality) with a much simpler function that we have control of and that we can manipulate and test.
  - going to be using mock functions a lot to replace real funcitonality in many different parts in our vue app
  - jest mock fn can track interaction with itself, whenever we invoke this function, the jest function can keep track that it has been invoked:
    - it can keep track of how many times it has been invoked or called.
    - it can keep track of what arguments it was past each time it was been in and has been invoked.
    - it keeps a state inside of it that knows how many times our program has interacted with that function
  - works just like a regular JavaScript function

  ```js
  // jest mock function
  describe("Headline", () => {
    describe("Jest Playground", () => {
      it("tracks whether it has been called", () => {
        const mockFunction = jest.fn(); // referencing top level jest library --available in this file as a global constant
        // console.log(mockFunction()); // undefined
        // mockFunction();
        // expect(mockFunction).toHaveBeenCalled(); // assertions on jest mock fn --track if mock fn have been called

        mockFunction(1, 2, 3);
        expect(mockFunction).toHaveBeenCalledWith(1, 2, 3); // assertions on jest mock fn --track if mock fn have been called with an argument
      });
    });
  });
  ```

  - NOTE:
    - jest.useFakeTimers();
    - There have been some small updates to Jest since the video was recorded. To achieve the same result as the video, you'll have to modify the method to accept an argument of "legacy".
    - Thus, your code should look like this:
      `jest.useFakeTimers("legacy");`

- Tests for Headline Component

  - test pollution -- one test accidentally affect another test

    - imagine there's another developer somewhere that actually is mounting a component and not mocking out clear interval. Our code sets this kind of global jest setting that says to mock out or stub out those JavaScript timer functions and that could accidentally cascade or pollute another test and how it runs. Solution? at the very end of the test that you return everything back to its original implementation. `jest.useRealTimers()` --reset and gets things back to original implementation.

    ```js
    describe("Jest Playground", () => {
      it("tracks whether it has been called", () => {
        jest.useFakeTimers("legacy"); // --same as jest mock fn --anything has to do with the passage of time or timing operations --automatically find any of time operations and replace them with jest mock fn

        console.log(clearInterval); // replacing clear interval anywhere its being using in our test with a mock fn

        // prevent test pollution
        jest.useRealTimers(); // reset and gets things back to original implementation
        console.log(clearInterval);
      });
    });
    ```

  ```js
  describe("Headline", () => {
    it("displays introductory action verb", () => {
      jest.useFakeTimers("legacy");
      const wrapper = mount(Headline);
      const actionPhrase = wrapper.find("[data-test='action-phrase']");
      expect(actionPhrase.text()).toBe("Build for everyone");
      jest.useRealTimers();
    });
  });
  ```

- More Tests for Headline Component

  - vm --vue model refers to what a component is, vue model basically means that you have some kind of model or some kind of logic or data that manages how the vue works
  - nextTick --is async fn --a refresh --sort of the next moment in a component existence --use it immediately after you've changed some data to wait for the DOM to update.

  ```js
  // interaction between headline component and setInterval fn
  it("changes action verb at a consistent interval", () => {
    jest.useFakeTimers("legacy");
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it("swaps action verb after 1st interval", async () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers(); //runOnlyPendingTimers() --after mounting, need to simulate the idea of that interval(setInterval) after being replaced by mock fn --it runs the timer and simulate same ideas as an actual setInterval fn

    // accessing action data property to see current value using vm
    console.log(wrapper.vm.action); // vm --can access to the actual nested component that the wrapper is wrapping around

    // after simulates setInterval fn(runOnlyPendingTimers) --there's a mismatch between the data that component is storing internally versus what is being rendered at the template, as the template has actually not been refreshed from test perspective(disconnect between jest test runner and the vue library(2 seperate software)). Solution? triggers component to refresh as there is no DOM(actual browser) in jest test by importing a vue function of nextTick() from vue library

    await nextTick(); // triggers refresh --(nextTick is async fn --as vue html takes time to render dynamic data from data property) --when we run the next tick function, what that does is it moves forward too, after Vue has successfully updated the HTML, the DOM equivalent of the component.

    const actionPhrase = wrapper.find("[data-test='action-phrase']");

    expect(actionPhrase.text()).toBe("Create for everyone");
    jest.useRealTimers();
  });
  ```

- Even More Tests for Headline Component
  ```js
  it("removes interval when component disappears", () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
  ```
- beforeEach and afterEach

  - this two is a jest helper functions which can help to dry code
  - built into Jest and run a bit of logic for us before each test and after each test. --we're not obligated to use both. We can use either one or have both
  - beforeEach() --run once every test in "it" block (e.g --setting up faketimer to mock up timer functions).
  - afterEach() --run once after every test in "it" block --way you can look at it is beforeEach is for test setup or for configuring the elements that are common or shared between "it" tests and afterEach is for tearing those setup things down. (e.g --we want to make sure we return back to using real timers).

  ```js
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  ```

- NOTE:
  ![](./images/sec12.png)
  ![](./images/sec12-1.png)
  ![](./images/sec12-2.png)
  ![](./images/sec12-3.png)
  ![](./images/sec12-4.png)
  ![](./images/sec12-5.png)

## Section 13: Creating Job Search Form

- User Story
  ![](./images/sec13-UserStory.png)

- Add New Colors to tailwind.config.js
  ```js
  colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
      },
  ```
- Create JobSearchForm Component

  ```html
  <template>
    <!-- this component will be rendered at hero component under headline component -->
    <form>I will be in better form eventually</form>
  </template>

  <script>
    export default {
      name: "JobSearchForm",
    };
  </script>
  ```

- Add bottom margin in headline

  ```html
  <template>
    <!-- this component will be rendered at hero component under headline component -->
    <form>I will be in better form eventually</form>
  </template>

  <script>
    export default {
      name: "JobSearchForm",
    };
  </script>
  ```

- CSS: Styling JobSearchForm

  - Part 1:
    ```html
    <form
      class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    >
      <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    </form>
    ```
  - Part II

    ```html
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <input
          type="text"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>

      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <input
          type="text"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>

    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
    ```

    - Margin is applied to the outside of your element hence affecting how far your element is away from other elements.

    - Padding is applied to the inside of your element hence affecting how far your element's content is away from the border.

- Binding Component Data to Form Input

  - value attribute --not specifically tied to vue but as a general that exists on every input element
  - how to bind component data to template value attribute? use v-bind directives
  - bind component data to template value attribute are only in **one direction** -- means we can only change our data and see that change in our template but not the otherwise(cannot change template and see that change reflected in data to do so use bidirectional directives).

  ```html
  <template>
    <input
      type="text"
      :value="role"
      placeholder="Software engineer"
      class="w-full text-lg font-normal focus:outline-none"
    />
  </template>

  <script>
    data() {
      return {
        role: "",
        location: "",
      };
  </script>
  ```

- Binding Form Input to Component Data

  - input --whenever the user types a single character into an input field it automatically emits an event called input. This **event** help to have a **bidirectional** --two ways as it flows both direction (changing template reflected to data property and vice versa)
  - aside from passing an event object into a method vue config object --can also give us access to it right in line tag. (using $ sign plus the event) `@input="location = $event.target.value"`
    - difference between this and our methods down below is in our methods vue will automatically pass the event object to the method and define whatever parameter name we want to pass in (e.g event or e)
    - but in inline the name is not up to us, we have to write dollar sign event in order for other developer to distinguish it is a special variable

  ```html
  <template>
    <input
      type="text"
      :value="role"
      placeholder="Software engineer"
      class="w-full text-lg font-normal focus:outline-none"
      @input="updateRole"
    />
  </template>

  <script>
    methods: {
      updateRole($event) {
        this.role = $event.target.value;
      },
      updateLocation($event) {
        this.location = $event.target.value;
      },
    },
  </>
  ```

  - NOTE: what you might see in some code base is because developers would like consistency between the inline option and the method option, they will call the parameter with dollar sign event just to remind themselves that is coming from vue. Again, when it comes to us defining our parameter names, we can call this whatever we want, but it's going to be kind of common to see it actually called Dollar Sign event.

- Two-Way Data Binding with v-model Directive

  - v-model --creates a two way binding on a form input element to a component data (on data property) --valid way to establish 2 way data binding as modern way --connecting data to our template and keeping the two in sync with two way data binding.
  - no shortcut unlike other v-directives

  ```html
  <template>
    <input
      v-model="role"
      type="text"
      placeholder="Software engineer"
      class="w-full text-lg font-normal focus:outline-none"
    />
  </template>

  <script>
    data() {
      return {
        role: "",
        location: "",
      };
    },
  </>

  //as the data changes, the input will update. As the input updates, the data will change.
  ```

- Add Vue Image in Grid

```html
<div class="col-start-7 col-span-5 self-center justify-self-center">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
    class="w-80 h-80 object-contain"
  />
</div>
```

- Refactor

  - Part 1: Isolating Navigation Components

    - organizing the components within our components folder. TIP: organizing components by the feature within the app
    - vetur --automatically update the imports and going to add the navigation directory in every import.
      ![](./images/refactor.png)
      ![](./images/refactor1.png)
      ![](./images/refactor2.png)

    - NOTE: whatever refactor you made in the src code should also have the same with tests as we had also tested every component

  - Part 2: Isolating JobSearch Components
    ![](./images/refactor3.png)
    ![](./images/refactor4.png)

  - Part 3: Isolating Shared Components
    ![](./images/refactor5.png)
    ![](./images/refactor6.png)

- NOTE:
  ![](./images/sec13Review.png)

## Section 14: Emitting Events

- Creating Reusable TextInput Component

  - Events
  - vue features called events
  - allow a child component to send out a message that is intercepted by its parent (the vice versa of a parent component can pass data down to a child using props)
  - How can a child inform a parent component of some kind of change? in vue is using a special feature called Events.
  - TIPS: many developers like to create reusable components for common element such as button and input
  - NOTES: the advantages of using this more manual verbose approach compared to the model is that we have a lot more customization.

  ```html
  <template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
  <!-- need to add handler whenever user types a value that need to manually sync the data property and template -->
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
    },
    data() {
      return {
        value: "",
      };
    },
    methods: {
      handleInput($event) {
        this.value = $event.target.value;
      },
    },
  };
  </>

  ```

- Using TextInput in JobSearchForm

```html
<template>
  <text-input
    placeholder="Software engineer"
    class="w-full text-lg font-normal focus:outline-none"
  />
</template>

//import the textinput component in parent component
```

- NOTE:

  - because we've delegated the entire bidirectional functionality to child component text input components, its not relaying the message that change in event to the parent
  - Solution: we need to find a way to get the data upwards from the child text input component upwards to the job search form parent component (emitting events to parent)

- Emitting an Event from a Child Component

  - $emit() --allow child component to send out data to parents component --available on every single component automatically from vue --use to customize an event --we can provide up to two or more arguments to emit
    - 1st argument: mandatory --represents events(message name) then that event is going to be send to parent, that the parent can be able to react to --can give any strings that we want to
    - 2nd argument: optional --represents the data that we want to associate with event --data we want to pass to parent component --can give whatever name we want

  ```js
  methods: {
    handleInput($event) {
      this.value = $event.target.value;
      this.$emit("handleInput", this.value); // --send a message up to the parent. And the name of that message is handle input. And the supplementary data or payload that is going to attach with that message is going to be the second argument, and that is going to be the current value that is typed into the field.
    },
  },
  ```

  - on this keyword we have access to a special method called Emit, and that method begins with a dollar sign. ($ --totally valid character to use anywhere in variable or method names.)
    - The Vue developers like to begin a lot of their vue specific methods that they give to you with a dollar sign, because it's a visual indicator that this is something special, this is something that is exclusive to vues. This is something that the View Library gives us out of the box and that allows them to differentiate their code from ours.

- Listen to Emitted Messages

  - The syntax to handle the event we customize to the TextInput component is same as we use the v-on directives.

    - the difference is we are not reacting to a native browser event like a user click. We are reacting to our own custom event that we have called handle input.

  - Overwriting Parent Data from Emits

    - overwriting the child data to parent data being emitted by an event
    - taking the payload from that emitted event from the child and we are overwriting the raw property on the parent.

    ```html
    <template>
      <text-input
        placeholder="Software engineer"
        class="w-full text-lg font-normal focus:outline-none"
        @handleInput="updateRole"
      />
    </template>

    <script>
        methods: {
      updateRole(payload) {
        this.role = payload;
      }, // whenever child emits the handleInput event, we're going to react to it by invoking the updateRole method then it will receive a payload argument. And that represents the second argument we provided in emit method at child, (which is just going to be the string with the actual text input).
      updateLocation(payload) {
        this.location = payload;
      },
      },
    </>
    ```

- Inline Overwriting
  - shortcut to overwrite data property within template
  ```html
  <text-input placeholder="Software engineer" @handle-input="role = $event" />/>
  <!-- $event is going to represent this.value from the text input component, which is the text that the user has entered up until that point. --any argument that we pass to the dollar sign emit method at child component. -->
  ```
- Improving our design

  - 1st problem: DUPLICATION OF DATA --duplicating data across both job search form component and text input (as text input component keeps track of the changes through its own data property and then it emits that handle input event to the parent where the parent updates)

    - SOLUTION: instead of creating separate data on each text input component --feed in data via a prop. (allows us to remove any local data storage from text input and also solve the data duplication problem. There is only one place where we are storing that data and that is in our job search form.)

      ```js
      props: {
        placeholder: {
          type: String,
          required: false,
          default: "",
        },
        value: {
          type: String,
          required: true,
        },
      },

      methods: {
        handleInput($event) {

          this.$emit("handleInput", $event.target.value); // emitting a handle input event with the current value from the event generated from the browser whenever the user types letter in
        },
      },
      ```

      - NOTE: should never affect the parents prop that flows in because that is data that you do not control --do not overwrite props to child component e.g this.(propname) = (overwrite propname) because we dont want a data mismatch between parent and the child. Make a copy instead and modify the copy

  - Pass in the value prop in JobSearchForm

    - text input component is not storing data locally. It just sends a message up, the parent updates, the parent gets some new values, passes it down, and we immediately see that change render in text input.
    - first thing happens in text input then flow up event to parent then updates thru props and flows back down to text input and this rule applies everytime user type a character

    ```html
    <!-- parent -->
    <template>
      <text-input
        placeholder="Software engineer"
        :valueProp="role"
        @handle-input="role = $event"
      />
      <!-- :valueProp here is the prop that will be passed in text input child component -->
    </template>

    <!-- child -->
    <template>
      <input
        type="text"
        class="w-full text-lg font-normal focus:outline-none"
        :placeholder="placeholder"
        @input="handleInput"
        :value="valueProp"
      />
      <!-- :value is an semantic attribute for input element binded with value prop -->
      <!-- need to add handler whenever user types a value that need to manually sync the data property or the props and template -->
    </template>

    <script>
      props: {
        placeholder: {
          type: String,
          required: false,
          default: "",
        },
        valueProp: {
          type: String,
          required: true,
        },
      },

      methods: {
        handleInput($event) {

          this.$emit("handleInput", $event.target.value); // emitting a handle input event with the current value from the event generated from the browser whenever the user types letter in
        },
      },
    </script>
    ```

  - The v-model Directive on Component

    - 2nd problem: IMPERATIVE APPROACH --current input handleInput event in parent is a imperative not declarative (a bit more verbose, specific of how it should be happen rather than what will happen)

      - Solution:
        - aside from html element, it can also apply v-model directive in our own custom component
        - in order to be able to use v-model at custom component, need to have an exact prop name `modelValue` and exact emit event name `update:modelValue` at the custom component local config, by this will allow us to implement v-model on the parent component
        - v-model create a prop called model value that will be also use and it will also know emission of the event `update:modelValue` means update the value overall. Binding between parent and child takes care by vue behind the scene

      ```html
      <!-- parent -->
      <template>
        <text-input placeholder="Los Angeles" v-model="location" />
      </template>

      <!-- child -->
      <script>
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

        methods: {
          handleInput($event) {
            this.$emit("update:modelValue", $event.target.value);
          },
        },
      </script>
      ```

  - 3rd: NO CUSTOMIZE STARTING VALUE --text input component has no to customize value data property as declared as an empty str thus the input is going to render with no text in it.
    - solution: able to render a text input that starts out with some pre-figured value e.g if user is updating a form and you want to pre-fill some of those form fields out

- The Emits key

  - has eslint violation, to solve create a validator (emits property at config obj)

  ```js
  emits: ["update:modelValue"], // component can emit many different events and use it in emit method //emits of array is sort of like the ultimate source of true, its a declaration that says this array is the only event that permitting a child component to emit
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value); // emitting a handle input event with the current value from the event generated from the browser whenever the user types letter in
    },
  },
  ```

- Testing Event Emission

  - TIP: in testing a child component, if one of the methods rendering in parent but parent not being mount at test suite, use the optional 2nd argument at mount function e.g we expect text input to be instantiated by a parent and be provided a modelValue prop
  - vue test utils has a method called emitted --will return an object that shows every event that component or that element has emitted
  - to emitted the input event, need to simulates the user entering a character into input element at the text input component
    - if we have an input element available, we can actually call a helper method on it called setValue().
      - internal array represents one emission (argument we passed in setValue method)
      - external atrray represents entire collection of emissions (all of the argument we passed to emit method)

  ```js
  import { mount } from "@vue/test-utils";
  import TextInput from "@/components/Shared/TextInput";

  describe("TextInput", () => {
    it("communicates that user has entered character", () => {
      const wrapper = mount(TextInput, {
        props: {
          modelValue: "",
        },
      });
      const input = wrapper.find("input");
      input.setValue("N");
      input.setValue("NY");
      input.setValue("NYC");
      const message = wrapper.emitted()["update:modelValue"]; // square brackey --normal syntax for JS to access property that has unique because of colon
      expect(message).toEqual([["N"], ["NY"], ["NYC"]]); // compare emitted event from component is equal to emitted array from emitted method --toEqual compare
    });
  });
  ```

- NOTE:
  ![](./images/sec14.png)
  ![](./images/sec14-1.png)
  ![](./images/sec14-2.png)
  ![](./images/sec14-3.png)
  ![](./images/sec14-4.png)

## Section 15: Vue Router

- User Story
  ![](./images/sec15-User.png)

  - separate route --not part of the core vue library (vue library --concerned with the layer in browser)
  - Routing is a totally separate feature and these are built to work with each other not not obligated to use them if you dont want to
  - NOTE:
    - Vue library for single page apps, which means when the page loads, when the vue app loads, the page never refreshes --vue app simply stays on the screen and it replaces and adds elements as needed in order to give the user different view
    - apply the exact principles when the user going to navigate from page to page, where there not really going to be navigating from page to page but were going to instruct vue how to tear down certain components and then how to build up other components

- Install Vue Router
  - add new dependency to our project called Vue Router
  - at first we only need Vue to build the view, layer the components and now we need to add a new library in order to enable routing
  - vue router
    - totally separate NPM library
    - has are two distinct libraries that are not obligated to use routing in an app --it is an add on and extension pack as vue give the core library and allow us to choose which parts of the ecosystem we want to add
  - installing
    ![](./images/vueRouter.png)
    - use vue CLI to install package
    - `vue add router` --upon installing this dependency might our app compilation will break (npm run serve)
    - Vue CLI automatically set up some bits of the router for us e.g
      - 1.) generate router folder and create index.js file
        - NOTE: how Node and JS work, if we provide a folder to import? what node is going to do is look for a file called index.js in that folder --which allow us to specify a folder that is relative path to the router folder without a specific index such as file name. `import router from '@/router'` --the implicit fallback behaviour of node to look for a file called index.js
      - 2.) importing router at the main.js where our vue app kicks of everything.
    - to connect it in our vue app --invoke a method called use on the the vue app then passing the router object `createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");`
- Vue Router in Action

  - Its possiblle that Vue app will no longer be compiling after adding the Vue router dependency
  - after installing router, brand new directory of views folder and automatically have two new vue component files --this new component are regular vue component but the key difference is, what a view is supposed to represent, is a page like a specific page at a given route.
    - ![](./images/viewFolder.png)
    - e.g in our app, we consider a view to be the job resulting view then we can almost think of it like the top of hierarchy and its the very first component that we want vue to render when we reach a certain route and then that top level view is going to render all of the resulting child components that the page needs. Then on a different page, as our Home page were going to have a different vue component
    - NOTE: Views is a plain vue component that represents a top level component, the top of the hierarchy at a given route. Every vue in view folder corresponds to a route in router index file
  - the reason why we call it View and the reason we put it in a separate views directory is because it supposed to represent the beginning of the page, the top level pryramid component, the top of the hierarchy of components at a given router that going to begin that cascading effect of rendering all of the children and grandchildren and so forth
    - NOTE: the reason we are having issues in compiling the vue app is the Vue CLI tries to add this HelloWorld component (component generated as we first create the vue app) solution: Delete this inline
    - ![](./images/homeView.png)
    - ![](./images/vueRouter1.png)

- Rewriting the Router File from Scratch

  ```js
  //router --index.js
  import { createRouter, createWebHashHistory } from "vue-router"; //importing 2 functions from vue router npm library

  import HomeView from "@/views/HomeView.vue";
  import JobResultsView from "@/views/JobResultsView.vue";

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
  ];
  // routes --JS obj that specify the URL and then the component to render when the user has navigated to that path/URL --each object represents one single route --one mapping between a URL and corresponding vue component to render --components are the ones inside view folder that represent top level page component

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  // createRouter --takes an options argument which is a plain JS obj that configures the settings for how the router works
  // history --keep track of what routes the user has been on
  //NOTE: in ES6 whenever you have the same property name and value, you can write it only once.

  export default router;
  ```

- The router-view Component

  - `createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");`
    - use(router) --vue router library gives us some component (e.g `<router-view />` component at App.vue file) and it registers it globally same way as we manually registered the font awesome icon component
  - **router-view component**
    - doesnt actually render anything visually on the screen but this component is responsible for watching the URL and then swapping the dynamic content on the screen based on what is in the router file (index.js).
    - component that is tracking routes configured at index.js
    - this component specifies the part of the page where we actually want to render that dynamic piece of content that is based on the route.
    - advantage of this component is we can put it whenever in the page we actually want that dynamic content to render

  ```html
  //App.vue
  <template>
    <!--router-view is a global component -->
    <router-view />
  </template>

  <script>
    export default {
      name: "App",
    };
  </script>
  ```

- The Router Link Component
  - another global component from vue router library
  - this component allows to create a fake hyperlink to navigate to a different path. It handles the actual concept of not refreshing the page and simply allowing the router view to dynamically inject the correct component based on that path
  - `<router-link />` --does is it actually allows us to navigate to that path while `<router-view />` --swaps the component being navigated at the router-link then renders on the screen
  - How can we tell router-link component where to take the user when the user clicks on it? Can do using special prop `to=''` --where user want to go to (navigate just like hyperlink) then the router view component tracks changes at the URL and renders the dynamic component
  ```html
  <template>
    <!--router-view and rounter-link are both global component -->
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="jobs/results">Job Results</router-link>
    </div>
    <router-view />
  </template>
  ```
  - NOTE: we dont need to use v-bind syntax to a prop `:to=""` if its not dynamic or it is not an array or an object or connected to the computed data or computed properties e.g **`to=""`** props at the router-link as this component is not changing as will be serve as a navigation
- Keep MainNav Constant, Dynamically Render Component

  ```html
  <template>
    <!--router-view and router-link are both global component -->
    <div>
      <main-nav />
      <router-view />
    </div>
  </template>

  <script>
    import MainNav from "@/components/Navigation/MainNav.vue";

    export default {
      name: "App",
      components: {
        MainNav,
      },
    };
  </script>
  ```

- Adding Content to Home Page

  ```html
  // HomeView.vue
  <template>
    <hero />
  </template>

  <script>
    import Hero from "@/components/JobSearch/Hero.vue";

    export default {
      name: "HomeView",
      components: {
        Hero,
      },
    };
  </script>
  ```

- Accessing this.$route
  - $route and $router
    - two properties that vue router will automatically add to every vue component in our app and going to be available on each component via this keyword
    - allow each component to figure out which route is currently on and also navigate the user elsewhere to another path or to another route
    - $route --keep track of information metadata about the route e.g name and path configured at the router file --we now have access to this metadata information in every component and we dont need to do any additional configuration from any component
      - ![](./images/route1.png)
      - ![](./images/route.png)
    - these two properties will also begin with a dollar sign
    - this two will be under in computed property and the reason because were going to use the route to derive some kind of data based on the route we are currently on
- Accessing this.$router
  - $router --is the object exported from router index.js file
    - ![](./images/router1.png)
    - ![](./images/router.png)
  - the reason why vue makes it available in every component is to spare us of having to always import the router everytime we need to use it
  - what is the difference between $route and $router?
    - $route stores information about where you are, what page are you on, what are the query params, what is the name of that route --meant to be used like a read only object that supposed to get information from it in order to do something in component
    - $router is the actual tool that allows us to navigate user elsewhere in the app --take some kind of action with route --we can invoke methods in order to navigate the user as $router is an object with a bunch of methods e.g if component renders a button, can add a v-on directive and when the user clicks that button will invoke a method on the $router object to force a navigation to another route that will trigger a corresponding component to render
- Navigating with router.push

  - push method --navigates the user to a new route and usually we want to do this based on some kind of user action e.g click button
  - push actually takes a variety of different arguments.
    - And the first and the simplest one is a string that specifies where to go to `this.$router.push("/");`
    - or an config object specifiying the **(path/route)** `this.$router.push({ path: "/" });`
    - lastly, the name we provided at the router file `this.$router.push({ name: "Home"});`

- Adding a `<router-link>` Item to MainNav

  - channge anchor tag to router link as we no longer want to have a hyperlinks as we dont want to force a page refresh or an actual browser navigation instead we want to simulate that navigation thru router link

  ```html
  <router-link to="/" class="flex items-center h-full text-xl"
    >Bobo Careers</router-link
  >
  --------------------
  <router-link to="{name: 'Home'}" class="flex items-center h-full text-xl"
    >Bobo Careers</router-link
  >
  ```

  - NOTE: we can also interpolate the config object as we did at the push to the "to" prop

- Fixing Failing Test with the RouterLinkStub Component

  - as we use router-link to our MainNav.vue file, some warnings appeared at the test suite. Same goes warning when we used fontAwesome component as the router-link are also global component, solution? we can provide a configuration object as the second argument to our mount or shallow mount function and configure which of our child components we want to stub out some or all of them.

    - default stub --the problem is when the router-link (global) renders a text of strings and needs to render, and the user going to click on when navigating but in our testing dont know how to preserve the logic of naviagtion of the text, stub only knows to replace child component with something else but doesnt have any internal text with 'Bobo Careers' resulting of failing test.
      - to solve? instead of replacing it with the default (stub), the vue test utils will specify that we want to replace it with other component called RouterLinkStub
      - RouterLinkStub --serve as a perfect replacement for a real life router link component from vue router that can more effectively play the role of a router link and support for example, all of its props and all of its functionality like the rendering of the text that is inside it.--basically a vue component, but a very lightweight version of the real world router link.

    ```js
    import { shallowMount, RouterLinkStub } from "@vue/test-utils";

    const wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    ```

- Refactoring the Test Suite: beforeEach()

  - beforeEach() --allows us to run some kind of function beforeEach test
  - NOTE: need a way to preserve the return value of wrapper so that we can reference it in every test as this is only constant var exist as long as beforeEach function is done running but not afterwards. Solution? declare a let variable in an outer scope

  ```js
  describe("MainNav", () => {
    let wrapper; //variable still the same but the reference that its storing stays different fot every test

    beforeEach(() => {
      wrapper = shallowMount(MainNav, {
        global: {
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
      }); // variable that is declared let whose value is being assigned in the before each function that is running once before each test executes.
    });

    it("displays company name", () => {
      expect(wrapper.text()).toMatch("Bobo Careers");
    });
  });
  ```

- Refactoring Test Suite with Factory Function

  - another way to solve duplications instead of using beforeEach(), we can write our own function to generate a function that will have a return value of a wrapper
  - use a function instead of a regular object is because the function guarantees that were always getting a new object which prevents accidental mutation from one test to the other
  - NOTE: () => ({}) --this syntax automatically returning a value in an arrow function

  ```js
  // factory function
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("MainNav", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    it("displays company name", () => {
      expect(wrapper.text()).toMatch("Bobo Careers");
    });
  });
  ```

- **NOTE:**
  - ![](./images/sec15.png)
  - ![](./images/sec15-1.png)
  - ![](./images/sec15-2.png)
  - ![](./images/sec15-3.png)
  - ![](./images/sec15-4.png)
  - ![](./images/sec15-5.png)

## Section 16: Vue Router II

- User Story

  - ![](./images/sec16-UserStory.png)

- Adding `<router-link>` to Main Menu

  - menuItem --current Value of an object being iterated
  - menuItem.text --key (unique identifier) --dynamic reference to the text that is the text property of the current object being iterating over
  - menuItems --arrays (being loop)
  - menuItem.url --dynamic reference to the URL

  ```html
  <template>
    <li
      v-for="menuItem in menuItems"
      :key="menuItem.text"
      class="h-full ml-9 first:ml-0"
      data-set="main-nav-list-item"
    >
      <router-link :to="menuItem.url" class="flex items-center h-full py-2.5"
        >{{ menuItem.text }}</router-link
      >
    </li>
  </template>

  <script>
      data() {
      return {
        menuItems: [
          { text: "Teams", url: "/" },
          { text: "Locations", url: "/" },
          { text: "Life at Bobo", url: "/" },
          { text: "How we hire", url: "/" },
          { text: "Students", url: "/" },
          { text: "Jobs", url: "/jobs/results" },
        ],
        isLoggedIn: false,
      };
    },
  </script>
  ```

- The Mocks Property for Vue Test Utils Mount Config

  - From a TDD perspective, do we need to add vue router to our test in order to test the functionality of $route property? No we dont need.
    - It's the exact same principle as what we do when we shallow mount a component and we replace the child components with something lighter.
    - we dont need a real route object, we just need an object that has the properties we need e.g name and can play the role of a round object and allow us to separate our test from the exact vue router implementation
  - Mocks --replace with a substitute --works exact same way as stubs work except stubs are focused on child component while mock are focused on global injections/properties
    - global injections --properties that the component is going to have access to that are going to be defined on it from some kind of global implementation e.g add vue router globally to our app and that automatically adds a $route and $router

  ```js
  // subnav.test.js
  const $route = {
    name: "JobsResults",
  }; // defined an object that wull substitute for this.$router in real world

  //optional 2nd argument for mount method
  {
    global: {
      mocks: {
        $route,
      }
    }
  }

  //subnav.vue
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobsResults";
    },
  },
  ```

- Using Factory Function at Subnav Test

  ```js
  describe("Subnav", () => {
    const createConfig = (routeName) => ({
      // global settings of the component
      global: {
        mocks: {
          $route: {
            name: routeName,
          },
        },
        stubs: {
          FontAwesomeIcon: true,
        }, // keys or properties in stub object represents the components that we want to stub out to replace whenever test utils mounts a sub component then provide a value since stub is an object and set to true --boolean set up if we have multiple different components being rendered or replace
      },
    });

    describe("when user is on the job page", () => {
      it("display job count", () => {
        const wrapper = mount(Subnav, createConfig("JobsResults"));
        const jobCount = wrapper.find("[data-set='job-count']");
        expect(jobCount.exists()).toBe(true);
      });
    });
  });
  ```

- Creating Page For Individual Jobs

  - create wild cards in our routes in vue router
  - logic: get the information for a specific job by making an API request and get the job with the id specified in the route and fetch a piece of information. Then can request another API request with a different id (dynamic data in the URL)
  - ![](./images/JobView.png)
  - ![](./images/JobView1.png)

- Lazy Loading File Imports

  - Developer Tools
    - Network Tab
      - ![](./images/lazy.png)
      - Preview tab --web pack creates for us, whenever it takes our vue code. When Webpack takes that code and converts it into HTML, CSS and JavaScript that the browser can understand looks like file at preview tab
        - Advantage: user gets everything at once,
        - Disadvantage: but the file size can make the file much larger and the user maybe much slower to receive it esp if they are on a mobile or slow internet connection
      - Solution: only load JS that the user needed for a given page called lazy loading --waiting until the very last moment to load the required imports
      - ![](./images/lazy1.png)
        - JS file that holds the logic for all the components that this vue needs to render
    ```js
    // index.js
    const HomeView = () => import("@/views/HomeView.vue"); //lazy loading --function that uses the import function to load a component in
    const JobResultsView = () => import("@/views/JobResultsView.vue");
    const JobView = () => import("@/views/JobView.vue");
    ```

- Grouping Lazy Loaded Component in the same chunk

  - chunk --just a JS file
  - we can consolidate multiple imports and multiple vues and lazy loads into a single JS file to break\
  - inside import function provide a comment --webpack uses to identify the separation of the chuncks(JS files)

  ```js
  const HomeView = () => import("@/views/HomeView.vue"); //lazy loading --function that uses the import function to load a component in
  const JobResultsView = () =>
    import(/* webpackChunkName: 'jobs' */ "@/views/JobResultsView.vue");
  const JobView = () =>
    import(/* webpackChunkName: 'jobs' */ "@/views/JobView.vue");
  ```

  - ![](./images/chunk.png)

- Bonus: Query Params

  - allow us to attach additional information at the end of a URL through the use of key value pairs
  - question mark(?) --required symbol to indicate to start of a query string and then a collection of key value pairs
  - ampersand(&) --separate subsequent query
  - 20% and plus sign(+) --special symbol that use in query params to indicate a space
  - q --query
  - ![](./images/queryParams.png)

- Navigating to Job Results Page when submitting form

  - `@submit.prevent=""` --special syntax to prevent the browser to refresh as the submit is an event that automatically refresh page
  - how to attach query params to the route/url? vue do it automatically but we need to provide a key of query to the object we've created as a method to the submit event.

  ```html
  <template>
    <form @submit.prevent="searchForJobs"></form>
  </template>

  <script>
      methods: {
      searchForJobs() {
        this.$router.push({
          name: "JobResults",
          query: {
            role: this.role,
            loacation: this.location,
          },
        });
      },
    },
  </script>
  ```

  - ![](./images/queryJob.png)

- Testing JobSearchForm Form Submission II

  - Best Practice:
    - if have an expression that begins with the word "when" is describe a scenario or a circumstance and in order to not to store too much information in "it" function, capture that scenario info in its own describe function
  - NOTE:
    - in textInput test, we do not async the setValue method as we aren't particularly concerned with the component taking time to react to changes and affect its internal data and effect template because we only want it to interact with the emitted object and double check that we sent in our input was being emitted
  - How can we simulate the component having a $router property ? mock it out.

  ```js
  // JobSearchForm test
  import { mount } from "@vue/test-utils";

  import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

  describe("JobSearchForm", () => {
    describe("when user submits form", () => {
      it("directs user to job results page with users search parameters", async () => {
        const push = jest.fn(); // mock function for this.$router.push()
        const $router = { push }; // router set to plain JS object with push method (mock function)

        const wrapper = mount(JobSearchForm, {
          attachTo: document.body,
          global: {
            mocks: {
              $router,
            },
            stubs: {
              FontAwesomeIcon: true,
            },
          },
        });
        const roleInput = wrapper.find("[data-test='role-input']");
        await roleInput.setValue("Vue Developer");

        const locationInput = wrapper.find("[data-test='location-input']");
        await locationInput.setValue("Dallas");

        const submitButton = wrapper.find("[data-test='form-submit-button']");
        await submitButton.trigger("click");

        // able to test component interaction with vue router w/o actually involving a vue router and by walking through the component in a way that a typical will user interact
        expect(push).toBeCalledWith({
          name: "JobResults",
          query: {
            role: "Vue Developer",
            location: "Dallas",
          },
        }); //asserting if the push method has been invoked with an object
      });
    });
  });
  ```

  - NOTE:
    - ![](./images/formProb.png)
    - form submission has something to do with rendering in the actual vue component, as we in the test util we mount component in isolation outside of the browser and vue test does not attach DOM nodes to the document by default
    - Solution
      - attachTo --hint: force the test to simulate the mounting of it to an actual element in a simulated document and simulated browser environment --hint: attaching mounted component to a simulated browser document

- REVIEW:
  - ![](./images/sec16.png)
  - ![](./images/sec16-1.png)
  - ![](./images/sec16-2.png)
  - ![](./images/sec16-3.png)

## Section 17: Building Job Results

- User Story

  - ![](./images/sec17-UserStory.png)

- Create JobFiltersSidebar and JobListings Component

  ```html
  <!-- JobFilterSidebar -->
  <template>
    <div>Job Filters Sidebar</div>
  </template>

  <script>
    export default {
      name: "JobFilterSidebar",
    };
  </script>

  <!-- Joblistings -->
  <template>
    <main>Job Listings Component</main>
  </template>

  <script>
    export default {
      name: "JobListings",
    };
  </script>

  // then both render to JobResultsView
  ```

- CSS: Styling JobFilterSidebar and JobListings

  ```html
  //JobResultsView
  <template>
    <div class="flex flex-row flex-nowrap w-full">
      <job-filter-sidebar />
      <job-listings />
    </div>
  </template>

  // JobFilterSidebar
  <template>
    <div
      class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
    >
      Job Filter Sidebar
    </div>
  </template>

  // JobListing
  <template>
    <main class="flex-auto p-8 bg-brand-gray-2">Job Listings Component</main
  </template>
  ```

- Extend Tailwind with New Boxshadow Option

  ```js
  //tailwind.config.ts
  boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        gray: "0 1px 3px 0 rgba(60, 64, 67, .3)",
      },
  ```

- CSS: Adding Job Title, Job Qualification and Location to a JobListing

  ```html
  <template>
    <main class="flex-auto p-8 bg-brand-gray-2">
      <ol>
        <li class="mb-7">
          <router-link
            to="/jobs/results/1"
            class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
          >
            <div
              class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2"
            >
              <h2 class="mb-2 text-2xl">
                Technical Program Manager, Perception, Augmented Reality
              </h2>

              <div class="flex flex-row align-middle">
                <div class="mr-5">
                  <span>Bobo Corp</span>
                </div>

                <div>
                  <span>San Francisco, CA, USA</span>
                </div>
                <div class="mt-2 text-center">
                  <router-link to="/jobs/results/1" class="text-brand-blue-1"
                    >Expand</router-link
                  >
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ol>
    </main>
  </template>
  ```

  - NOTE: Extracting JobListing to Separate Component
    - make a new component for `<li>` element at the JobListings above code to make it reuseable component

- Render Multiple Job List in JobListings.vue

  ```html
  <template>
    <main class="flex-auto p-8 bg-brand-gray-2">
      <ol>
        <job-list />
        <job-list />
        <job-list />
      </ol>
    </main>
  </template>

  <script>
    import JobList from "@/components/JobResults/JobList.vue";

    export default {
      name: "JobListings",
      components: {
        JobList,
      },
    };
  </script>
  ```

- Section Review
  - ![](./images/sec17-rev.png)

## Section 18: Creating Mock Backend

- Install JSON Server

  - allows us to create fake backend
  - install a package that is going to make a very simple to simulate a backend without building a real one called **"JSON Server"**
    - after we installed JSON server, we need to create a JSON file(db.json file from boris) in our project directory and JSON is just a file storage format
    - `npm install --include=dev json-server` -- this dependency should be under dev dependency for developer not for a user
    - ![](./images/JSONserver.png)

- Creates Job Data

  - JSON Server --serve as our data for mock backend and define a fictional endpoint(can have as may endpoint as we want) [e.g an array of object ("jobs")] on a server and then have our app hit that endpoint and just get back data in the form of JSON --going to run in our terminal on a separate port

    - next is to set up JSON server in our package.json and a script to launch JSON server --remember it is a separate library that is totally different ecosystem from Vue

      ```js
      // package.json
      script {
        "backend": "json-server --watch db.json"
      }
      // --watch (as we update dp.json file this will automatically update as well so that server relaunches and we get the most updated data, we dont have to go back and relaunch json server from terminal eerytime we make a change)
      ```

    - ![](./images/dbJson.png)

- Making Job Request in Browser
  - download JSONVue in your browser extension
    - makes it easier to read and decipher JSON
    - format JSON response to look like an actual JS object
    - can access an endpoint that returns JSON and going to see JSON response nicely formatted
  - ![](./images/dbJson-1.png)
    - resources --port to acces the endpoint that we defined (which is the jobs at db.json file) --here, we are now able to accss its endpoint
    - ![](./images/dbJson-2.png)
- Install Axios NPM Package

  - NPM library for making HTTP requests
  - `npm install --save axios`
  - ![](./images/axios.png)
  - importing this library in old import syntax **[const varName = require(path/packageName)]**, for outside of the browser environment as new import syntax is not guaranteed to be supported in JS file or in node version. But it is supported in our vue app because webpack is transpiling in a plain JS file that going to run with Node

  ```js
  //Axios Package --HTTP Request
  const axios = require("axios"); // importing axios in old importing syntax

  const url = "http://127.0.0.1:3000/jobs"; // axios to hit endpoint

  axios.get(url).then((response) => {
    console.log(response.data);
  }); // get method --use to make axios a request to a given url --return a promise as this is an async operation
  // then method --handles the response object and the response object(represents the entire HTTP response) does is store our data that we got from our endpoint and other info such as response status and all additional details about how the request actually went --represents what to do when the promise resolves or when the request completes
  // data property --get the actual response from the server e.g the actual array of jobs --on the response object there is a data property
  ```

  - Additonal notes:
    - ![](./images/fetch.png)
    - host file: `C:\Windows\System32\drivers\etc/hosts>`

- Making Axios Request for Jobs in Joblistings Component

  - In vue app, importing in a modern way supported as the webpack and vue CLI do transpire vue component
  - where are we going to make the API request to get data in the backend? in the `mounted()` hook at Vue lifecycle hook and that represents a moment in time in the component existence --Vue has mounted component in browser, its in the DOM, it actually exists in the HTML
    - mounted()
      - run after the component has initially been mounted in the browser or added in the DOM. When the component is in the browser DOM, were not going to see any job list for a brief second while we wait for that API reqs to complete but the component will still be loaded
      - whenever API reqs complete, well update the UI to show the user those jobs
      - NOTE: when in comes to async operation --its ideal to use the `mounted()` hook to have a component that can exist in browser and then respond dynamically when its get the data

  ```js
  // JobListings.vue
  <script>
  import axios from "axios";

  import JobList from "@/components/JobResults/JobList.vue";

  export default {
    name: "JobListings",
    components: {
      JobList,
    },
    data() {
      return {
        jobs: [], // store jobs(endpoint) array being fetch in backend
      };
    },
    mounted() {
      axios.get("http://localhost:3000/jobs").then((response) => {
        this.jobs = response.data;
      });
    },
  };
  </script>
  ```

- BONUS: ES6 Review Async and Await Syntax

  - What is an asynchronous operation? It is an operation that will take some amount of time that we cannot predict in advance. E.g request to a server as we dont know how much time it will take for a response, when process is completes, run the additonal piece of logic
  - promise-based then syntax (using get or fetch method)
    - allow us to execute some bit of JS code such as a console.log when the request is done running
  - async/await syntax
    - called syntactic sugar which basically means that it is not offering any new functionality but rather a shortcut or a simpler way to utilize an existing functionality
    - we use async/await if the function is going to do something that is going to take some amount of time
    - if we have an async operation/function that will return a promise, we use await keyword
    - NOTE: async/await syntax is only available in the more modern versions of node.js

  ```js
  // ES6 Review Async and Await Syntax
  const axios = require("axios"); // importing axios in old importing syntax

  const url = "http://127.0.0.1:3000/jobs"; // axios to hit endpoint

  // Promise-Based then syntax
  const fetchJobVer1 = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  };
  fetchJobVer1();

  // Async/Await Syntax
  const fetchJobVer2 = async () => {
    const response = await axios.get(url);
    console.log(response.data);
  };
  fetchJobVer2();
  ```

- Use async/await syntax to fetch jobs
  ```js
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
  ```
- Render JobListing in JobResults
  ```js
  <job-list v-for="job in jobs" :key="job.id" :job="job" />
  ```
- Compute Dynamic Job Page
  ```js
  // JobList.vue
  <script>
  export default {
    name: "JobList",
    props: {
      job: {
        type: Object,
        required: true,
      },
    },
    computed: {
      jobPageLink() {
        return `/jobs/results/${this.job.id}`;
      },
    },
  };
  </script>
  ```
- Update JobList to Render Job's Data

  ```html
  // JobList.vue
  <template>
    <li class="mb-7">
      <router-link
        :to="jobPageLink"
        class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
      >
        <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
          <h2 class="mb-2 text-2xl">{{ job.title }}</h2>

          <div class="flex flex-row align-middle">
            <div class="mr-5">
              <span>{{ job.organization }}</span>
            </div>

            <div>
              <ul>
                <li
                  v-for="location in job.locations"
                  :key="location"
                  class="inline-block mr-5"
                >
                  {{ location }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="px-8 py-4">
          <div class="mt-1 mb-2">
            <h3>Qualifications:</h3>
            <div>
              <ul class="pl-8 list-disc">
                <li
                  v-for="qualification in job.minimumQualifications"
                  :key="qualification"
                >
                  {{ qualification }}
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-2 text-center">
            <router-link :to="jobPageLink" class="text-brand-blue-1"
              >Expand</router-link
            >
          </div>
        </div>
      </router-link>
    </li>
  </template>
  ```

- Testing the JobList Component and Refractoring

  ```js
  // JobList.test.js
  import { mount, RouterLinkStub } from "@vue/test-utils";

  import JobList from "@/components/JobResults/JobList.vue";

  describe("JobList", () => {
    // refractoring config
    const createJobProps = (jobProps = {}) => ({
      title: "Vue Developer",
      organization: "Bobo Corp",
      locations: ["Vancouver"],
      minimumQualifications: ["Code", "Develop"],
      ...jobProps, // when passes different argument value for e.g in title or in organization or any additional properties, by using destructuring --going to overwrite the value of the existing propertie/s (allow each test to pass in which properties they care about to substitute)
    });

    const createConfig = (jobProps) => ({
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          ...jobProps,
        },
      },
    });
    it("renders job title", () => {
      const props = createJobProps({ title: "Vue Programmer" });

      const wrapper = mount(JobList, createConfig(props));
      expect(wrapper.text()).toMatch("Vue Programmer");
    });

    it("renders job oganization", () => {
      const props = createJobProps({ title: "Vue Developer" });
      const wrapper = mount(JobList, createConfig(props));
      expect(wrapper.text()).toMatch("Bobo Corp");
    });

    it("renders job locations", () => {
      const props = createJobProps({ locations: ["Orlando", "Ohio"] });
      const wrapper = mount(JobList, createConfig(props));
      expect(wrapper.text()).toMatch("Orlando");
      expect(wrapper.text()).toMatch("Ohio");
    });

    // More test for JobList component
    it("renders job qualifications", () => {
      const props = createJobProps({
        minimumQualifications: ["Code", "Develop"],
      });
      const wrapper = mount(JobList, createConfig(props));
      expect(wrapper.text()).toMatch("Code");
      expect(wrapper.text()).toMatch("Develop");
    });

    // Adding Test for Router Link
    it("links to individual page", () => {
      const props = createJobProps({ id: 15 });
      const wrapper = mount(JobList, createConfig(props));
      const jobPageLink = wrapper.findComponent(RouterLinkStub);
      // NOTE: data-test implementation doesnt work as find method returns a native HTML DOM element(close to the final HTML  that we are going to see in our browser), its not actually identifying the concept of a component. We need to tell our test to find a specific component, solution? instead of using data-test, use a method that is available directly on any wrapper and that is the findComponent() then pass the component were looking for as an argument. And because that is a component, "to" props at props() method will now be available

      const toProp = jobPageLink.props("to"); // props() --give us access to component props including the "to" props
      expect(toProp).toBe("/jobs/results/15");
    });
  });
  ```

- Mocking a module with Jest
  - the responsibility of the JobListings component is to issue an API request , in testing we can fake the actual API request so that our test acts as if it made a full API request, but we dont want to atually test the axios library, only its interaction
    - How can we simulate the Axios environment within a test?
      - `jest.mock('axios')` automatically mock out all available functionality of axios object. The no longer the original axios library, it is now mocked out version of axios library with fake mock functions attacked in place of the original methods
    ```js
    import axios from "axios";
    jest.mock("axios"); // loop through all of axios functionality then replaced that in its own mock function. We can now use functionality (e.g get) or invoke axios regularly here at test suite.
    ```
    - ![](./images/axiosJestMock.png)
- Create First Tests for JobListings Component

  - JobListing
    - making an API request to job endpoint
    - rendering as many joblist as there are jobs in the API response
    - when jest mocks out any live libraries methods(e.g axios.get), jest creates a mock function that returns undefined by default. Data object(response.data) being returns will be undefined, there is no data.
      - ![](./images/jobListings.png)
      - Solution: tell jest when get method is called, use a mock function that returns an object with data property --the get method is async and will returns a promise so it will return a resolved value (**axios.get.mockResolvedValue(5)** --function that returns a promise that resolves to a value of 5) --our test need to simulate as an async function that returns a promise
  - The flushPromise Function

    - ![](./images/flushPromise.png)
    - ![](./images/flushPromise1.png)
    - The component is operating and going through test and running that assertion, but the resolved value of simulated async function **axios.get.mockResolvedValue({ data: Array(15).fill({}) })** has not yet resolved --basically the test finished up before the promise resolves. Solution? use flushPromise function to resolves all outstanding(still running or still working) promises immediately
      - NOTE:
        - If theres any kind of async operation thats running in the background, even a fake one, flushPromises() will resolves all outstanding promises immediately
        - whenever you have some kind of mock or even really any kind of asynchronous operation in your code that it is not directly related to the components, asynchronous things like rendering the time or making an API request, when it's outside the scope of a component directly but doing some kind of action that takes some time, if not working at test, it could be that test dont realize that the operation is not yet completed. In this scenario we can invoke flushPromise function to flush your promise

    ```js
    // JobListings.test.js

    import { flushPromises, shallowMount } from "@vue/test-utils";
    import axios from "axios";
    jest.mock("axios"); // loop through all of axios functionality then replaced that in its own mock function. We can now use functionality (e.g get) or invoke axios regularly here at test suite.

    import JobListings from "@/components/JobResults/JobListings.vue";

    describe("JobListings", () => {
      it("fetches jobs", () => {
        axios.get.mockResolvedValue({ data: [] }); // simulation of async function that returns resolved value for response of data --we dont care of what is the response, just need some kind of async value that has a data property.

        shallowMount(JobListings);
        expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs"); // --for testing the axios.get method being called or invoke with the right argument. This will return an undefined value so we need to simulate a function that will returned a resolved value(shown above)
      });

      it("creates a job listings for each received job response", async () => {
        // axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // simulation of async function that returns resolved value for an array response of data --Array(15) will create an array of a given length --fill({}) method that will provide a sample element and JS is going to emulate or copy that sample element 15 times(iteration). Doesnt care if real object or not pass as an argument, all care if the 15 items elements specified are being rendered to test the v-for functionality

        // The flushPromise function
        axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // --request to an API outside of the scope of vue component --Vue test suite isnt registering the return resolve value of this axios.get, we simulated this API reqs and response of 15 objects but not registering/ updating with component as promise not fully completed --nextTick will not work as Vue doesnt know unresolved promise, Solution? use flush Promise fn to resolve promise immediately

        const wrapper = shallowMount(JobListings);
        await flushPromises(); // resolves all outstanding promises immediately --shoot off that promise after we mounted our component as the axios reqs going to run in the mounted hook lifecycle --after finish up all resolve promises, then the component will be updated, we now have 15 job listings because we have a jobs array of 15 elements.

        const jobListings = wrapper.findAll("[data-test='job-listings'"); // findAll occurences of 15 arrays(declared at Array(15)) items being rendered

        // assertion to validate an array length --use .length()method or .toHaveLength() assertion matcher
        expect(jobListings).toHaveLength(15);

        //
      });
    });
    ```

- Review
  - ![](./images/sec18.png)
  - ![](./images/sec18-1.png)
  - ![](./images/sec18-2.png)
  - ![](./images/sec18-3.png)
  - ![](./images/sec18-4.png)
  - ![](./images/sec18-5.png)
    - Extra Note:
      - for proxy
        - git config --global --get-regexp http.\*
        - git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
        - git config --global https.proxy https://proxyuser:proxypwd@proxy.server.com:8080

## Section 19: Dynamic Pagination

- ## User Story
  - ![](./images/sec19-UserStory.png)
- Bonus Reviow: Slice Method Array

  - slice method --returns a copy of an original, but can limit the elements in the original array based on our specified index positions.

    - when no argument, you will get a copy of original array
    - when there is an argument, we specify boundaries from where wed like to extract certain values from the original array
      - one(1) argument -- specify lower bound --lower bound is the index from which we want to pull values from up to the end
      - two(1,2) argument --provide the lower bound or starting index and the upper bound which is the ending index
        - lower bound --is inclusive, JS will include the value at that index position the exact same way in 1 argument
        - upper bound --is exclusive, value there is not going to be included. Were going to go up from that index to the lower bound

    ```js
    // Slice Method
    const sushi = [
      "Tuna",
      "Salmon",
      "Yellowtail",
      "Eel",
      "Shrimp",
      "Octupos",
      "Uni",
    ];

    console.log(sushi.slice(2)); // [ 'Yellowtail', 'Eel', 'Shrimp', 'Octupos', 'Uni' ] --1 argument
    console.log(sushi.slice(2, 4)); // [ 'Yellowtail', 'Eel' ] --2 argument
    ```

- Display Only First 10 Jobs

  - NOTE: use slice method not on the mounted() method as we going to lose all the original data we receive from the API, instead we do the slice at computed property

  ```html
  // JobListings.vue
  <template>
    <job-list
      v-for="job in displayedJobs"
      :key="job.id"
      :job="job"
      data-test="job-listings"
    />
  </template>

  <script>
      computed: {
      displayedJobs() {
        return this.jobs.slice(0, 10);
      },
    },
  </script>
  ```

- Dynamic Pagination
  - were going to enable paginayion using query params
  ```js
  // JobListings.vue
  computed: {
    displayedJobs() {
      const pageString = this.$route.query.page || "1"; // page in query params
      const pageNumber = Number.parseInt(pageString); // 1
      const firstJobIndex = (pageNumber - 1) * 10; // 1 - 1 = 0 and so on
      const lastJobIndex = pageNumber * 10; // 1 * 10 = 10(1st page last index) page 1 -> 10
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  ```
- Fixing Failing JobListings Component Tests

  - NOTE:

    - this.$route property does not exist at test suite resulting the test to fail
    - SOLUTION: replace $route property with a mock object

    ```js
    // JobListing.test.js
    const $route = {
      query: {
        page: "5",
      },
    };

    shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    ```

- Refractoring JobListings Test Suite

  ```js
  describe("JobListings", () => {
    const createRoute = (queryParams = {}) => ({
      query: {
        page: "5",
        ...queryParams,
      },
    });

    const createConfig = ($route) => ({
      global: {
        mocks: {
          $route,
        },
      },
    });

    it("fetches jobs", () => {
      axios.get.mockResolvedValue({ data: [] });
      const $route = createRoute();

      shallowMount(JobListings, createConfig($route)); // for the purpose of the test, we dont care some kind of $route, we just need it to exist here to avoid failure in the terminal

      expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
    });

    it("creates a job listings for a maximum of 10 jobs", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });

      const queryParams = {
        page: 1,
      };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route)); // page property will be needed in this "it" test as the page will specify what to   render the max of 10 jobs
      await flushPromises();

      const jobListings = wrapper.findAll("[data-test='job-listings'");

      expect(jobListings).toHaveLength(10);
    });
  });
  ```

- Displaying Page Number at JobListings

  ```html
  //JobListings.vue
  <template>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
      </div>
    </div>
  </template>

  <script>
      computed: {
      currentPage() {
        const pageString = this.$route.query.page || "1"; // page in query params
        // const pageNumber = Number.parseInt(pageString); // 1
        return Number.parseInt(pageString); // 1
      },
      displayedJobs() {
        const pageNumber = this.currentPage;
        const firstJobIndex = (pageNumber - 1) * 10; // 1 - 1 = 0 and so on
        const lastJobIndex = pageNumber * 10; // 1 * 10 = 10(1st page last index) page 1 -> 10
        return this.jobs.slice(firstJobIndex, lastJobIndex);
      },
    },
  </script>
  ```

- Wiring up computed properties for Next and Previous
  ```js
  computed: {
    previousPage() {
      const previousPage = this.currentPage - 1; // 1 - 1 = 0
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined; // undefined (not rendering previous page link at 1st page)
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = this.jobs.length / 10; // 100 / 10 = 10
      return nextPage <= maxPage ? nextPage : undefined; // nextPage
    },
  }
  ```
- Rendering Previous and Next Page

```html
<div class="mt-8 mx-auto">
  <div class="flex flex-row flex-nowrap">
    <p class="text-sm flex-grow">Page {{ currentPage }}</p>

    <div class="flex items-center justify-center">
      <router-link
        v-if="previousPage"
        :to="{ name: 'JobResults', query: { page: previousPage } }"
        class="mx-3 text-sm font-semibold text-brand-blue-1"
        >Previous
      </router-link>

      <router-link
        v-if="nextPage"
        :to="{ name: 'JobResults', query: { page: nextPage } }"
        class="mx-3 text-sm font-semibold text-brand-blue-1"
      >
        Next</router-link
      >
    </div>
  </div>
</div>
```

- Scrolling to Top on Params Change
  ```js
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
      return { top: 0, left: 0, behavior: "smooth" };
    }, // specifies how the router is going to behave in regards to scrolling whenever there is a change in route
  });
  ```
- Adding test for page number

  - NOTE: we nest our describe function whenever we want to provide additional specific context or set up a scenario or situation under which we want to make an assertion

  ```js
  // JobListings.test.js
  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const queryParams = { page: undefined }; //falsy value that will fall to 1 (this.$route.query.page || "1")

      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params include page number", () => {
    it("displays page numbers", () => {
      const queryParams = { page: "3" };

      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });
  ```

- Fixing Test Pollution

  - fit --allow to run one test in the file isolation. Instead of running entire joblisting file, can focus on only one test -- f means focus on 'it' function
    - advantage:
      - one test will run quicker than the entire test suite
      - can run one test in isolation
    - disadvnatage:
      - can create test pollution
  - what is test pollution? means that something left over from a previous test is affecting the result in the next test
    - the reason we weren't seeing a warning when we were running the test suite as a whole is because some previous test was changing some kind of setting that was allowing a test to run without warning.
    - tests are not independent. They're dependent on some kind of additional setup that is coming from a previous test. And this can become very hard to debug when running a test in isolation (isolating from previous set up causing test to have a warning)
  - ![](./images/testPollution.png)
  - NOTE: axios.get mock in test suite are the one polluting the test --its still continuing after its done running in a single test resulting for a warning when running other test in isolation --In mounted lifecycle hook the jest test suite for axios.get will return its default implementation of axios.get mock instead of our own custumize data ({ data: Array(10).fill({}) }) that causing a warning that our test says `I cant read the property data of undefined`
    - Solution:
      - copy the custom jest mock up for axios.get in every single test
        - use the beforeEach() method
      - cleaning up after every test (make axios.get the default mock and return it back to jest default implementation resolved value which is undefined { data: [] })
        - use the afterEach() method --allow us to run something after each test that will allow us to clean up any customize axios.get mocks that we have set up in any of our individual tests
      - NOTE: Setting this beforeEach() and afterEach() method made the test independent to each other avoiding any test pollution

  ```js
  // JobListings test
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  });

  afterEach(() => {
    axios.get.mockReset(); // return mock in its default implementation (not mean to its real axios.get function implementation but in its jest mock) --clearing our custom implementation we specified in every test of what the get method will resolve or return whenever it is invoked in our test suite component.
  });
  ```

- More test for JobListings

  ```js
  describe("when user is on first page", () => {
    it("does not show link to previous page", () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      const previousPage = wrapper.find("[data-test = 'previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("show link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test = 'next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  //NOTE: theres still a bug in the 'show link to next page' test, thought using flushPromise will solve but cant
  ```

- Fixing Bug

  - first make 'show link to next page' test to fit as this test is the only one that has a bug. We dont need to run other when debugging as this slows down the feedback loop and eliminate the possibility of test pollution
  - Problem: floating division is not rounding up to the next integer to the next whole number if the this.jobs.length is odd number divided by 10.
    - ![](./images/bugs.png)
  - Solution: take the floating point number and round up to the next whole number
    - ![](./images/bugs1.png)

- Adding more Test for JobListing Component

  ```js
  describe("when user is on the last page", () => {
    it("does not show link to next page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test = 'next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });

    it("show link to previous page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const previousPage = wrapper.find("[data-test = 'previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
  ```

- Environment Variable

  - environment variables help us whenever there is variation in our app that is due to the environment in which we are running.
  - mode of execution in which we are running our vue app.
  - THREE ENVIRONMENTS: --each environments is optimized for a specific use case
    - Development --specifically suited for the developer writing additional code
      - e.g Hot Reload --whenever makes changes in code, Vue CLI understands those changes and automatically reloads the page as see results --features only exist in development mode
    - Production --bundling vue app
      - e.g running `npm run build` and we get all of our code inside a single JS file and then we go to some server on the internet and we deploy the code
    - Test --whenever running a test suite, we tell the vue cli to use specific configuration settings, specific optimizations that make the test suite run faster.
  - where do we bundle up these kinds of configuration settings?
    - We do this in plain text files(create 3 files on the top level of codebase, each file represents settings or configuration) and all these files are is really just a collection of key value pairs.
    - have a text file for each environment (dev, deploy and test)
      - `.env` --extension for environment and it will apply to every single environement weve running
      - `.env.development` --more specific setting to certain environment --if we save our file in .env.development it will be save to our source control (e.g git)
      - `.env.development.local` --file not gonna be save in git, not added to git or to source code
      - NOTE:
        - you should know that in your .env file that you commit to source control, you should not have any private information. e.g API key or some kind of pw or something that enabling to get access to sensitive information
    - then the vue cli will look for a corresponding file of key value pairs based on the environment were running in, load that file and those key value pairs
    - We can now allow that config file to store custom info pertainning to that environment such as custom URL
  - Setting up
    - ![](./images/environment.png)
    - VUE_APP --any environment variable to be available in vue app must start with this prefix
      - followed by actual varible name that will be serves as a constant and be available in our vue app
      - which ever file is loaded is the const that vue is going to load and make available in code
    - NOTE: depending on which environment vue loads, its going to be a different string value sets in .env file

  ```js
  // JobListings.vue
  async mounted() {
    /*
      THREE ENVIRONMENTS:
        - development --localhost:3000/jobs
        - production --api.mycompany.com/jobs --can customize URL
        - test
    */

    const baseURL = process.env.VUE_APP_API_URL; // process --global node object --automaticaly available whenever running a node app, no need to import --env.variable name --access whatever environment variable defined at .env file that loaded in
    const response = await axios.get(`${baseURL}/jobs`); //using template string to access baseURL
    this.jobs = response.data;
  },

  // JobListings.test.js
  expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  ```

- REVIEW:
  - ![](./images/sec19.png)
  - ![](./images/sec19-1.png)
  - ![](./images/sec19-2.png)

## Section 20: Vuex I: State and Mutations

- What is Vuex?
  - ![](./images/vuex.png)
  - ![](./images/vuex1.png)
  - library for managing global state.
  - separate NPM library (dont be confused with the core vue library but still part of the larger vue ecosystem
    - ![](./images/vuex2.png)
    - responsible for storing higher level state or data (global)
    - serves as centralized store of global state
      - whenever have a data that is more higher level or global that has the ability to impact multiple components, we can extract at the vuex then connect it to components needed that data
      - NOTE: not every component has to connect to vuex
    - extracted global data to another separate entity in vue app then put into constraints(variables) and how we can change the data (define possible operation for mutation) within the vuex store
      - allows us to have predictable changes so that components can know that there is a subset of actions (delete or add) that can happen that can update components to ensure no errors encountered by accidentally
  - Benefits:
  - ![](./images/vuex3.png)
    - separation of data manipulation to vue
      - can move to vuex store and the components will simply receive final data and do something with it.
      - component are called dumb component, dont really care where there getting the data from or how its calculated, they just know how to render it visually in the HTML
  - ![](./images/vuex4.png)
- Add Vuex Store to App
  - ![](./images/addVuex.png)
  - in terminal, run the command `vue add vuex` to idd the vuex store
    - vue --global installation of Vue CLI and npm
    - add -- commands to allows adding a package
    - vuex --library
  - ![](./images/addVuex1.png)
  - ![](./images/addVuex2.png)
- Creating Vuex Store

  ```js
  // index.js --store folder
  import { createStore } from "vuex"; // createStore --references for global collection of data that Vuex storing for us

  const store = createStore({
    state() {
      return {
        isLoggedin: false,
      };
    }, // data property in a component that changes overtime --has same syntax to data method within a component
    /*
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
    */
  });

  export default store;

  //NOTE: cant modify the state store
  ```

  - Add First Mutation

    - mutation
      - limit the possiblle ways that can change the store state to predefined limited set of operations.
      - mutation is the only place and the only way that we are allowed to modify a view store.
      - mutate means to change
      - methods that modify the vuex store state and instruct store how to update (like methods property at a component)
      - a component can only update store state by calling a specific set or a specific mutation
      - mutations names are all UPPER_CASE to represents constant nature of this operation
      - every single mutation defined is going to receive the store state as the first argument
      - NOTE:
        - mutation should be synchronous not an async
        - cannot do things like make an API call or read a file from a file system
        - Any asynchronous operation, anything that takes some amount of time, you have to do it in a separate place in the View Store
        - for good practice, do not create or delete any new properties in mutations.
        - Should have the default starting state store and if you dont have an initial value provided for a property, just provide undefined or null or empty string. Always start off with a base state and then modify its value through mutations

    ```js
    const store = createStore({
      mutations: {
        LOGIN_USER(state) {
          state.isLoggedin = true;
        },
      }, // same as method property within a  component

      strict: process.env.NODE_ENV !== "production", // a lot more strict for making sure dont have any place where accidentally modifying the store state outside of mutation. --using this makes helpful during developement mode but not in production as this will slow down the app and consume more storage
      // NOTE: process -> global node object || env. -> receive environment variable defined on .env file || NODE_ENV --> predefined environment variable on env object defined by node or vue team --the variable name (with a string value) of the development environment we are running
    });
    ```

  - The Commit Method for Mutations
    - commit
      - method to invoke store object to run a mutation
      - takes one argument representing the mutation to run as a string
      - commit is really the way that you should be modifying the store state.
      - never be reaching into state and manually adjusting a property.Instead use a mutation to the store in order to get it to change its internal state.
    ```js
    console.log(store.state.isLoggedin); // false
    store.commit("LOGIN_USER"); // use to invoke mutation
    console.log(store.state.isLoggedin); // true after commit invoke mutation
    ```
  - Refractoring Exports from Store File

    ```js
    import { createStore } from "vuex";

    export const state = () => {
      return {
        isLoggedin: false,
      };
    };

    export const mutations = {
      LOGIN_USER(state) {
        state.isLoggedin = true;
      },
    };

    const store = createStore({
      state,
      mutations,
      strict: process.env.NODE_ENV !== "production",
    });

    export default store;
    ```

- Adding Tests for Vuex State and Mutations

  ```js
  import { state, mutations } from "@/store";

  // dont need to incorporate all of the vuex store complexity inorder to test the state function and mutations object

  // one describe test per property of vuex store
  describe("state", () => {
    it("keeps track of whether user is logged in", () => {
      const startingState = state();
      expect(startingState.isLoggedin).toBe(false);
    });
  });

  describe("mutations", () => {
    // one describe test for each mutations
    describe("LOGIN_USER", () => {
      it("logs the user in", () => {
        const state = { isLoggedin: false };
        mutations.LOGIN_USER(state); // no need to import a real life store (state) as we only testing a basic JS method

        expect(state).toEqual({ isLoggedin: true });
        //NOTE: cannot use toBe matcher when using JS object
      });
    });
  });
  ```

- Reading from Vuex Store in Components

  - similarly in the $route and $router, any component has an access to vuex store and have access to all methods and properties at store object
  - it gives every single component in vue app access to a property called $store.
  - BAD PRACTICE: import directly store into component
  - as soon as we commit a mutation and change the value property value property of the state, will alert any component that is reading the store that its state has changed
  - we can use the store state in order to render something to the screem or we can use it for some kind of conditional logic such as v-if and for iteration using v-for

  - store object ![](./images/readStore.png)

- Writing to Vuex Store from Component

  - writing --updating the store
    - how do we update a store state? use a mutation
    - how can we issue mutation? via commit method on the store state

  ```html
  <!-- MainNav.vue -->
  <script>
    computed: {
      // reading vuex store state
      isLoggedIn() {
      return this.$store.state.isLoggedIn; //false --starting state value
    },

     methods: {
    // writing/updating store state from component
    loginUser() {
      this.$store.commit("LOGIN_USER"); //LOGIN_USER method will run and mutate the store state at vuex store then re run the isLoggedIn computed property with updated mutation value (false -> true) then re-render the template
      },
    },

    // NOTE: vuex store state can still interpolate at template in v-if and v-for directives
    }
  </script>
  ```

  - Interacting with Vuex Store in DevTools
    - tracks how the vuex store state changes in vue devtools in chrome as this will allow us to debug mutations as they flow through the app
    - timeline --visual representation of graphic of time. Vue is keeping track of everythhing that is happening in our app
    - Vue DevTools in Chrome ![](./images/vuexChrome.png)
    - ![](./images/vuexChrome1.png)

- Fixing Failing MainNav Test

  - 1st approach: test component using a real world vuex store by importing createStore function not mocking it
  - benefit of this approach even we are coupling with a real implementation, can fit a small version of the store and still follow many of the same principles

  ```js
  import { createStore } from "vuex"; // importing real life vuex store - createStore function

  // factory function
  const createConfig = (store) => ({
    global: {
      plugins: [store], // this extension from library can store a real life library like vuex store
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    // no need to configure store as this test will only display company name
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      // needed to configure store as displaying profile picture depends on conditional of isLoggedIn state at vuex store
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
  ```

  - Testing Button Click at MainNav.vue

    - add test for LoginUser method if sending right message to the store object
    - replace commit method with a mock jest function

    ```js
    describe("when user is logged out", () => {
      it("issues a call to Vuex to login user", async () => {
        const store = createStore();
        const commit = jest.fn();
        store.commit = commit; //mock commit function
        const wrapper = shallowMount(MainNav, createConfig(store));
        const loginButton = wrapper.find("[data-test='login-button']");

        await loginButton.trigger("click");

        expect(commit).toHaveBeenCalledWith("LOGIN_USER");
      });
    });
    ```

  - A second Testing Approach for Vuex Store

    - use a mock for more lightweight test
    - refractor test at MainNav test suite

    ```js
    describe("MainNav", () => {
      const createConfig = ($store) => ({
        global: {
          mocks: {
            $store,
          },
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
      });

      it("issues a call to Vuex to login user", async () => {
        const commit = jest.fn();
        const $store = {
          state: {
            isLoggedIn: false,
          },
          commit,
        };
        // store.commit = commit; //mock commit function
        const wrapper = shallowMount(MainNav, createConfig($store));
        const loginButton = wrapper.find("[data-test='login-button']");

        await loginButton.trigger("click");

        expect(commit).toHaveBeenCalledWith[LOGIN_USER]("LOGIN_USER");
      });
    });
    ```

- Creating Constant for Mutations

  ```js
  // index.js /store
  export const LOGIN_USER = "LOGIN_USER"; // dynamically referencing to mutation method name whenever we are committing these mutations to the vuex store to ensure that we have no chance of typos in multiple components

  export const mutations = {
    [LOGIN_USER](state) {
      state.isLoggedIn = true;
    },
  };

  // MainNav.vue
  import { LOGIN_USER } from "@/store";

  methods: {
    // writing store state from component
    loginUser() {
      this.$store.commit(LOGIN_USER);
    },
  },
  ```

- The mapState Helper Function

  - mapState

    - helper function from Vuex Library, this function help us do is map or connect vuex store state properties to component computed properties
    - gonna return a JS object that have essentially going to computed methods
    - NOTE: whenever we invoke mapState, we need to destructure the return object properties to computed object properties so they become top level computed properties
    - can take a variety of inputs such as JS object, and that object can provide a property representing the computed property that we want to have in our MainNav (typically same name we want to connect to store state property)
    - Advantage:
      - can easily defined a properties
      - short syntax

    ```js
    import { mapState } from "vuex";

    computed: {
      // reading vuex store state
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn; //false --starting state value
    // },

    // mapState --connect vuex store state properties to component computed properties
      ...mapState({
      // isLoggedIn: (state) => state.isLoggedIn,

      isLoggedIn : 'isLoggedIn', //reference a top level property on vuex store state without using arrow function
    }),

    ...mapState(['isLoggedIn']), // use this syntax if computed properties has a same name property of vuex store state
    }
    ```

- The mapMutations Helper Function

  - helps to connect mutations to vuex store to methods in a component

  ```js
    import { mapMutations } from "vuex";

    methods: {

    ...mapMutations([LOGIN_USER]), // sytactical shortcut for invoking commit method --use this syntax if component method name has same name at the mutations method name
    }
  ```

  - Fixing MainNav Test (mapMutations)
    - external error(internal implementation detail of how map works) that the test read the array of strings at the mapMutations being mounted at MainNav but followed a correspondent error
    - Error: ![](./images/mapMutationsErr.png)
    - solution: manually invoking a method at the template boilerplate ` @click="LOGIN_USER()"`

- REVIEW
  - ![](./images/sec20.png)
  - ![](./images/sec20-1.png)
  - ![](./images/sec20-2.png)
  - ![](./images/sec20-3.png)
  - ![](./images/sec20-4.png)
  - ![](./images/sec20-5.png)
  - ![](./images/sec20-6.png)
  - ![](./images/sec20-7.png)
  - ![](./images/sec20-8.png)

## Section 21: Vuex II: Actions

- Intro to Section

  - action is a different construct that allow us to deal with asynchronous operations. Once the data has been fetched by an action from an API call, we can now commit a mutations
  - ![](./images/sec21.png)
  - ![](./images/sec21-1.png)
  - ![](./images/sec21-2.png)

- Review jest.mock and Building out API Call
  ```js
  import axios from "axios";
  jest.mock("axios"); //mocking out all property and methods of axios
  console.log(axios);
  ```
- TDD Adding Test for Jobs API Call

  ```js
  // getJobs.test.js
  import axios from "axios";
  jest.mock("axios");

  import getJobs from "@/api/getJob";

  describe("getJob", () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({
        data: [
          {
            id: 1,
            title: "Java Engineer",
          },
        ],
      });
    });

    it("fetches jobs that candidates can apply to", async () => {
      await getJobs();
      expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
    });

    it("extracts jobs data from response", async () => {
      const data = await getJobs();
      expect(data).toEqual([
        {
          id: 1,
          title: "Java Engineer",
        },
      ]);
    });
  });

  // getJobs.js
  import axios from "axios";

  const getJob = async () => {
    const baseURL = process.env.VUE_APP_API_URL;
    const response = await axios.get(`${baseURL}/jobs`);
    return response.data;
  };

  export default getJob;
  ```

- TDD Adding Test for Jobs State

  ```js
  //index.test.js

  import { state, mutations, actions } from "@/store";
  // dont need to incorporate all of the vuex store complexity inorder to test the state function and mutations object
  describe("state", () => {
    it("stores job listings", () => {
      const startingState = state();
      expect(startingState.jobs).toEqual([]);
    });
  });

  // store/index.js
  export const state = () => {
    return {
      jobs: [],
    };
  };
  ```

- TDD Adding Test for RECEIVE_JOBS Mutations

  - NOTE: In test, whenever we invoke mutations, 1st argument must be always the state and the additional argument will be our own customize data that will be pass in, in order to overwrite a property in state.

  ```js
  // index.test.js
  import { state, mutations, actions } from "@/store";

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["Jobs 1", "Job 2"]); // 2nd argument --array of jobs that will be overwrite the jobs state(validating the receive_jobs mutations is correctly overwriting jobs state property )
      expect(state).toEqual({ jobs: ["Job 1", "Job 2"] });
    });
  });

  // index.js /store
  export const RECEIVE_JOBS = "RECEIVE_JOBS";

  export const state = () => {
    return {
      jobs: [],
    };
  };

  export const mutations = {
    [RECEIVE_JOBS](state, jobs) {
      state.jobs = jobs;
    }, // 1st parameter: state || 2nd parameter: data to be pass in that will overwrite a state property (new array of jobs that will overwrite empty jobs array in state)
  };
  ```

- Writing First Action

  - the difference between action and mutation is that an action is allowed to be asynchronous (API call)
  - whenever we run an action, will automatically provide the context object as a parameter same as we invoke mutation will always provide the current state of the vuex store.
    - context object
      - basically similar to a store and has the exact same API
      - in vuex store object, we can call a commit method to run a mutations. In action, context object(API) are the one invoking commit method to run a mutations
      - NOTE:
        - any subsequent arguments we provide to the commit method will flow in as the second and third and so on in the subsequent parameter we provide at the mutations method after state.
        - commit need to know which mutation method (1st argument) will be running and what will the overwrite data be (2nd argument). [e.g ` context.commit(RECEIVE_JOBS, jobListings);`]

  ```js
  // store/index.js
  import getJobs from "@/api/getJob";

  export const FETCH_JOBS = "FETCH_JOBS";

  export const actions = {
    [FETCH_JOBS]: async (context) => {
      const jobListings = await getJobs();
      context.commit(RECEIVE_JOBS, jobListings); // RECEIVE_JOBS(state, jobListings) --run an existing mutations to pass jobListings data fetch in API
    },
  };

  const store = createStore({
    state,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== "production",
  });
  ```

- Testing Vuex Actions

  - NOTE:
    - 1: similar to mutations, do not test actions method with actual vuex store.
      - We do not need to spin up a vuex store in our tests in order to unit test FETCH_JOBS functionality, because all of this functionality by itself is regular JavaScript.
    - 2: We can import axios library at the test to mock out but to make it more better, when we test action method, we will only mock out getJobs functions (simply test if its invoking correctly)

  ```js
  import { state, mutations, actions } from "@/store";

  import getJobs from "@/api/getJob";
  jest.mock("@/api/getJob");

  describe("actions", () => {
    describe("FETCH_JOBS", () => {
      beforeEach(() => {
        getJobs.mockResolvedValue([
          {
            id: 1,
            title: "Software Developer",
          },
        ]);
      });

      it("makes request to  fetches job", async () => {
        const context = { commit: jest.fn() };
        await actions.FETCH_JOBS(context);
        expect(getJobs).toHaveBeenCalled();
      });
    });
  });
  ```

- The Vuex Store's Dispatch Method

  - dispatch method
    - use to invoke actions from vuex store
    - accepts name of an action as a string
    - exactly works same as commit method does except commit is for mutations and dispatches for asynchronous actions

  ```js
  // jobListings.vue
  import { mapState } from "vuex";
  import { FETCH_JOBS } from "@/store";

  computed: {
    ...mapstate(['jobs']); // vuex store state
  },
  async mounted() {
    // const baseURL = process.env.VUE_APP_API_URL;
    // const response = await axios.get(`${baseURL}/jobs`);
    // this.jobs = response.data;

    this.$store.dispatch(FETCH_JOBS); // API call from action at vuex store
  },
  ```

  - ![](./images/dispatchMethod.png)

- Fixing JobListings test Error

  ```js
  //JobListings.test.js

  const createStore = (store = {}) => ({
    state: {
      jobs: Array(15).fill({}), // mocking store state of jobs with 15 object iteration
    },
    dispatch: jest.fn(), // jest mocking dispatch method in the store object imvoking at the mounted lifecyle
    ...store,
  });

  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("when component mounts", () => {
    it("makes call to fetch jobs from API", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      shallowMount(JobListings, createConfig($route, $store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  it("creates a job listings for a maximum of 10 jobs", async () => {
    const queryParams = {
      page: 1,
    };
    const $route = createRoute(queryParams);
    const numberOfJobsInStore = 15;
    const $store = createStore({
      state: {
        jobs: Array(numberOfJobsInStore).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));

    await flushPromises();

    const jobListings = wrapper.findAll("[data-test='job-listings'");
    expect(jobListings).toHaveLength(10);
  });
  ```

- The mapActions Helper Functions

  - ...mapActions
    - helper function that helps us with translating/connecting the vuex store actions to the methods on our component

  ```js
  //JobListings.vue
  import {mapActions} from vuex;

  async mounted() {

    // this.$store.dispatch(FETCH_JOBS); // API call from action at vuex store

    this.FETCH_JOBS(); //dispatch action to the store
  },
  methods: {
    ...mapActions([FETCH_JOBS]), // provide action names and creates methods with same names on our action store which will then invoke dispatch method in action store
  },
  ```

- Review
  - ![](./images/sec21Rev.png)
  - ![](./images/sec21Rev-1.png)
  - ![](./images/sec21Rev-2.png)
  - ![](./images/sec21Rev-3.png)

## Section 22: Slots I: Intro to Slots

- Intro to Slots

  - ![](./images/sec22User.png)
  - ![](./images/sec22User-1.png)

- CSS Adding Initial Styles for JobFilterSidebar Component

  ```html
  <template>
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
    </section>
  </template>

  <script>
    import ActionButton from "@/components/Shared/ActionButton.vue";

    export default {
      name: "JobFilterSidebar",
      components: {
        ActionButton,
      },
    };
  </script>
  ```

- Update FontAwesome Icon

  - adding faAngleUp and faAngleDown in fontAwesome component

  ```js
  //Main.js
  import {
    faAngleDown,
    faAngleUp,
    faSearch,
  } from "@fortawesome/free-solid-svg-icons"; //import actual icon that want to make globally available then add to library

  library.add(faAngleDown);
  library.add(faAngleUp);
  library.add(faSearch); // adding/registering icon to the library but not yet connected to the vue
  ```

- Create Accordion Component (CSS Styling)

  ```html
  // Accordion.vue
  <template>
    <div class="py-5 border-b border-solid border-brand-gray-2">
      <div
        class="flex flex-wrap items-center justify-between cursor-pointer"
        @click="open"
      >
        <h3 class="text-base font-semibold">Organizations</h3>
        <font-awesome-icon :icon="caretIcon" />
      </div>

      <div v-if="isOpen" class="w-full mt-5">Child</div>
    </div>
  </template>

  <script>
    export default {
      name: "Accordion",
      data() {
        return {
          isOpen: false,
        };
      },
      computed: {
        caretIcon() {
          return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
        },
      },
      methods: {
        open() {
          this.isOpen = !this.isOpen;
        },
      },
    };
  </script>

  <!-- then import to this component to the JobFilterSidebar.vue -->
  ```

- Introduction to Slots

  - slots

    - global component that allow us to do is to have a parent component specify a dynamic injectable slice of html that can be rendered inside a components
      - e.g whenever a parent component renders an accordion that has an availble slot, it can provide a child vue tag inside accordion component and that child vue will be the slot(dynamic) content

    ```html
    <!-- Accordion.vue -->
    <template>
      <div v-if="isOpen" class="w-full mt-5">
        <!-- SLOTS in Vue --dynamic content -->
        <slot></slot>
      </div>
    </template>

    <!-- JobFilterSidebar.vue (parent component that renders accordion with slot content) -->
    <template>
      <accordion>
        <h3>Hello, slot content</h3>
      </accordion>
    </template>
    ```

    - optimal when we need to inject different content in between consistent other contents
    - it is a place in our component where we can customize the content that we want to provide or inject the slot into the component

- Renders Slot Content
  ```html
  <!-- JobFilterSidebar -->
  <accordion>
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">Vuetube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Between Vue and Me" type="checkbox" class="mr-3" />
            <label for="Between Vue and Me">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
            <label for="Vue and a Half Men">Vue and a Half Men</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
  ```
- Slots and Props

  - Difference between props and slots?
    - kind of similar in a sense that parent component can provide some kind of info down to child component. For props info being passed is not a HTML but a data type. For slots it pass down a whole chunk of HTML

  ```html
  <!-- JobFilterSidebar -->
  <accordion header="Organizations"> </accordion>

  <!-- Accordion -->
  <template>
    <h3 class="text-base font-semibold">{{ header }}</h3>
  </template>

  <script>
    props: {
      header: {
        type: String,
        required: true,
      },
    },
  </script>
  ```

- Writing Tests for Slots

  - How to specify slot content in configuration object ?
    - there is an available slots property in config object set to an object
    - slot object properties represents the slot name and value represents the html injected into the slot
  - NOTE: we can have a multiple slot in a component by giving slot its own custom name. If we didnt provide a slot name, vue automaticaly gives a slot name of default

  ```js
  import { mount } from "@vue/test-utils";

  import Accordion from "@/components/Shared/Accordion.vue";

  describe("Accordion", () => {
    const createConfig = (config = {}) => ({
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Test Header",
      },
      slots: {
        ...config,
      },
    });

    it("renders child", async () => {
      const slots = { default: "<h3>My nested child</h3>" };
      const wrapper = mount(Accordion, createConfig(slots));

      expect(wrapper.text()).not.toMatch("My nested child");

      const clickableArea = wrapper.find("[data-test='clikable-area']");
      await clickableArea.trigger("click");

      expect(wrapper.text()).toMatch("My nested child");
    });
  });
  ```

- Fallback Content for Slots
  - if parent component not giving any html injection (custom slot content), it will fallback to defaul slot content
  ```js
   <div v-if="isOpen" class="w-full mt-5">
      <!-- SLOTS in Vue --dynamic content -->
      <slot>
        <!-- default fallback -->
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  ```
- Adding Tests for Fallback Slot Content

  - to test, we dont need a slot obj at config object as we all need to try to test the text for default slot content

  ```js
  describe("when dont provide custom child content", () => {
    it("renders default content", async () => {
      const slots = {};
      const wrapper = mount(Accordion, createConfig(slots));

      const clickableArea = wrapper.find("[data-test='clikable-area']");
      await clickableArea.trigger("click");

      expect(wrapper.text()).toMatch("Whoops, somebody forgot to populate me!");
    });
  });
  ```

- Extracting Organizations Dropdown to New Component

  - Vue Style Guide --set of recommendations or best practices from Vue dev team
    - one of the recommendations:
      - when have child components that are closely coupled to the parent, e.g accordion (organization) to jobfilter component, reccommends to include the parents component name as a prefix in the childs component name. (job-filter-sidebar-organization)

  ```html
  <!-- JobFilterSidebarOrganization.vue -->
  <template>
    <accordion header="Organizations">
      <div class="mt-5">
        <fieldset>
          <ul class="flex flex-row flex-wrap">
            <li class="w-1/2 h-8">
              <input id="VueTube" type="checkbox" class="mr-3" />
              <label for="VueTube">Vuetube</label>
            </li>
            <li class="w-1/2 h-8">
              <input id="Between Vue and Me" type="checkbox" class="mr-3" />
              <label for="Between Vue and Me">Between Vue</label>
            </li>
            <li class="w-1/2 h-8">
              <input id="Et Vue Brute" type="checkbox" class="mr-3" />
              <label for="Et Vue Brute">Et Vue Brute</label>
            </li>
            <li class="w-1/2 h-8">
              <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
              <label for="Vue and a Half Men">Vue and a Half Men</label>
            </li>
          </ul>
        </fieldset>
      </div>
    </accordion>
  </template>

  <script>
    import Accordion from "@/components/Shared/Accordion.vue";

    export default {
      name: "JobFilterSidebarOrganization",
      components: {
        Accordion,
      },
    };
  </script>

  NOTE: then renders this component to the parent component
  (JobFilterSidebar.vue)
  ```

- REVIEW:
  - ![](./images/sec22Rev.png)
  - ![](./images/sec22Rev-1.png)
  - ![](./images/sec22Rev-2.png)

## Section 23: Slots II: Named Slots

- User Story: Building Reusable Header

  - Named Slot --assigning a name as a unique identifier --advantage? to have a multiple slots within a single child component

- Named Slots I

  ```html
  <template>
    <div class="w-full border-b border-solid border-brand-gray-1">
      <div class="mx-auto my-16 text-center">
        <slot name="Title">Sample Title</slot>
        <slot name="Subtitle">Sample Subtitle</slot>
      </div>
    </div>
  </template>

  <script>
    export default {
      name: "HeaderContainer",
    };
  </script>
  ```

- Creating TeamsPageView

  ```html
  <template>
    <header-container />
  </template>

  <script>
    import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

    export default {
      name: "TeamsView",
      components: {
        HeaderContainer,
      },
    };
  </script>

  <!-- add this view component as a route to router index.js  -->
  <!-- update path link to MainNav component Teams -->
  ```

- Name Slot II

  - If have a multiple slot in child compnent, to specify which slot name need to inject custom content by using `v-slot:<slot name>` directives in parent component
  - NOTE:
    - use `<template />` to inject html element with a specific slot name
    - Named Slots Shorthand: `#<slot name>`

  ```html
  <!--TeamsView.vue -->
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        It's awesome working here. Why don't you come join us?
      </h2>
    </template>
  </header-container>
  ```

- Default Slots

  - vue automatically name slot a default if named slot not defined
  - NOTE: can only have one slot without a name in multiple named slot
  - ![](./images/defaultSlot.png)

- Testing Name Slot

  ```js
  import { mount } from "@vue/test-utils";

  import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

  describe("HeadContainer", () => {
    it("allows parent component to provide title content", () => {
      const wrapper = mount(HeaderContainer, {
        slots: {
          title: "<h2>Some title</h2>",
        },
      });
      expect(wrapper.text()).toMatch("Some title");
    });

    it("allows parent component to provide subtitle content", () => {
      const wrapper = mount(HeaderContainer, {
        slots: {
          title: "<h3>Some subtitle</h3>",
        },
      });
      expect(wrapper.text()).toMatch("Some subtitle");
    });
  });
  ```

- REVIEW:
  - ![](./images/sec23Rev.png)
  - ![](./images/sec23Rev-1.png)
  - ![](./images/sec23Rev-2.png)

## Section 24: Slots III: Advanced Slots

- User Story

  - ![](./images/sec24-UserStory.png)

- Adding Spotlight Endpoint to db.json
  ```js
  "spotlights": [
  {
    "id": 1,
    "img": "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
    "title": "Cloud Engineering",
    "description": "Build fun stuff in the cloud. It's a lot of fun, we promise!"
  },
  {
    "id": 2,
    "img": "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    "title": "Executive Leadership",
    "description": "Be a leader for everyone. Leadership builds character."
  }
  ]
  ```
- Create Spotlights Component

  - ![](./images/slotProps.png)
  - how can we provide an information from a v-for array(e.g spotlight.title) child component to the parent component rendering a slot component ? use a **SLOT PROPS**
    - SLOT PROPS --the parent component thats going to render the component with slots have an access to whatever props defined at slot element by using v-bind directives to give a dynamic reference to object we are iterating (e.g `<slot :spotlight='spotlight'></slot>`)

  ```html
  <template>
    <ul>
      <li v-for="spotlight in spotlights" :key="spotlight.id">
        <slot :spotlight="spotlight"></slot>
      </li>
    </ul>
  </template>

  <script>
    import axios from "axios";
    export default {
      name: "Spotlight",
      data() {
        return {
          spotlights: [],
        };
      },
      async mounted() {
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}/spotlights`;
        const response = await axios.get(url);
        this.spotlights = response.data;
      },
    };
  </script>
  ```

- Rendering Spotlight Component

  - we can access the piece of data that we passed up via slot props to parent component by using `v-slot:default="slotProps"` directive into template (`v-slot:<name of slot>="<object name(--bundled up in JS object with all of the slot props we provided in child slot component --reference this object to use data in the template custom HTML we provide in parent component to inject into the slot component)>"`)
  - **NOTE:**
    - in every iteration, template were going to inject into every slot
    - for eslint correction, use shortcut for vslot to #hashtag

  ```html
  <!-- Hero.vue -->
  <spotlight class="flex flex-row justify-center pb-16">
    <template #default="slotProps">
      <!-- slotProps = {spotlight property name: {spotlight object in iteration}} -->

      <router-link
        to="/jobs/results"
        class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
      >
        <img :src="slotProps.spotlight.img" class="object-contain" />

        <div class="h-48 px-6 py-4 mt-3">
          <h3 class="text-lg font-medium">{{ slotProps.spotlight.title }}</h3>

          <p class="mt-3 text-sm">{{ slotProps.spotlight.description }}</p>
        </div>

        <router-link
          to="/jobs/results"
          class="px-4 pb-4 text-sm text-brand-blue-1"
          >See jobs</router-link
        >
      </router-link>
    </template>
  </spotlight>
  ```

- Alternate Render Data

  - create a totally different looking card object by switching up the HTML into CSS style while still relying on slot props
  - ![](./images/altSlot.png)
  - ![](./images/altSlot-1.png)

- Passing Multiple Props from Scoped Slot

  ```html
  <!-- Spotlight.vue -->
  <slot
    :img="spotlight.img"
    :title="spotlight.title"
    :description="spotlight.description"
  ></slot>

  <!-- Hero.vue -->
  <spotlight class="flex flex-row justify-center pb-16">
    <template #default="slotProps">
      <!-- multiple scoped slot --slotProps object = {img: spotlight.img, title="spotlight.title", description="spotlight.description" } -->

      <router-link
        to="/jobs/results"
        class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
      >
        <img :src="slotProps.img" class="object-contain" />

        <div class="h-48 px-6 py-4 mt-3">
          <h3 class="text-lg font-medium">{{ slotProps.title }}</h3>

          <p class="mt-3 text-sm">{{ slotProps.description }}</p>
        </div>

        <router-link
          to="/jobs/results"
          class="px-4 pb-4 text-sm text-brand-blue-1"
          >See jobs</router-link
        >
      </router-link>
    </template>
  </spotlight>
  ```

- Object Destructuring with Scoped Slots
- NOTE: for optimization, we can destructure slotProps object same as how we destruct JS object

  ```html
  <!-- Spotlight.vue -->
  <slot
    :img="spotlight.img"
    :title="spotlight.title"
    :description="spotlight.description"
  ></slot>

  <!-- Hero.vue -->
  <spotlight class="flex flex-row justify-center pb-16">
    <template #default="{ img, title, description }">
      <router-link
        to="/jobs/results"
        class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
      >
        <img :src="img" class="object-contain" />

        <div class="h-48 px-6 py-4 mt-3">
          <h3 class="text-lg font-medium">{{ title }}</h3>

          <p class="mt-3 text-sm">{{ description }}</p>
        </div>

        <router-link
          to="/jobs/results"
          class="px-4 pb-4 text-sm text-brand-blue-1"
          >See jobs</router-link
        >
      </router-link>
    </template>
  </spotlight>
  ```

- Testing Scoped Slots

  - NOTE: whenever we async reqs inside a test, need to use `flushPromises()` to make sure it completes and resolves request and that our component updates the changes. Because otherwise its possible that request still be running while we mount component at test suite and thus not going to register the changes

  ```js
  import { flushPromises, mount } from "@vue/test-utils";
  import axios from "axios";
  jest.mock("axios");

  import Spotlight from "@/components/JobSearch/Spotlight.vue";

  describe("Spotlight", () => {
    const mockResponseData = (data = {}) => {
      axios.get.mockResolvedValue({
        data: [
          {
            img: "Some image",
            title: "Some title",
            description: "Some description",
            ...data,
          },
        ],
      });
    };

    it("provides img attribute to parent component", async () => {
      const data = { img: "Some image" };
      mockResponseData({ data });
      const wrapper = mount(Spotlight, {
        slots: {
          default: ` <template #default="slotProps"> 
            <h2>{{slotProps.img}}</h2>
          </template>`,
        },
      });
      await flushPromises();
      expect(wrapper.text()).toMatch("Some image");
    });

    it("provides title attribute to parent component", async () => {
      const data = { title: "Some title" };
      mockResponseData({ data });
      const wrapper = mount(Spotlight, {
        slots: {
          default: ` <template #default="slotProps"> 
            <h2>{{slotProps.title}}</h2>
          </template>`,
        },
      });
      await flushPromises();
      expect(wrapper.text()).toMatch("Some title");
    });

    it("provides description attribute to parent component", async () => {
      const data = { description: "Some description" };
      mockResponseData({ data });
      const wrapper = mount(Spotlight, {
        slots: {
          default: ` <template #default="slotProps"> 
            <h2>{{slotProps.description}}</h2>
          </template>`,
        },
      });
      await flushPromises();
      expect(wrapper.text()).toMatch("Some description");
    });
  });
  ```

- REVIEW:
  - ![](./images/sec24-Rev.png)
  - ![](./images/sec24-Rev1.png)
  - ![](./images/sec24-Rev2.png)
  - ![](./images/sec24-Rev3.png)

## Section 25: Vuex III: Getters

- User Story

  - ![](./images/sec25User.png)
  - ![](./images/sec25User1.png)

- ES6 REVIEW: Sets

  - ![](./images/sets.png)

- Intro to Getter
  - Getter
    - in getter, never modify store state, never add properties or delete properties
    - all you can do in a getter is use the existing store state properties to give something new
    - getter will consist a bunch of methods
    - just like a mutation, each getter is going to receive the current store state in its 1st parameter called (state).
      - whenever state changes, vuex automatically rerun the getter
  - Why do we use getters in vuex?
    - to rerun automatically a computed logic whenever a piece of original store state changes
    - we use getters to define derived piece of logic from our store state. It could be whatever we want as long as its not original data

```js
// index.js --store
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
};

const store = createStore({
  state,
  getters,
});
```

- Testing Getters

  - NOTE: to test getters, we simply invoke it as a plain JS method, no need to invoke vuex store, we can simply test it as a regular bit of JS functionality

  ```js
  // index.test.js
  import { getters } from "@/store";

  describe("getters", () => {
    describe("UNIQUE_ORGANIZATION", () => {
      it("finds unique organizations from list of jobs", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Amazon" },
            { organization: "Google" },
          ],
        };
        const result = getters.UNIQUE_ORGANIZATIONS(state);
        expect(result).toEqual(new Set(["Google", "Amazon"]));
      });
    });
  });
  ```

  Wire Up UNIQUE_ORGANIZATIONS Getter and Rendering v-for

  - :key in iteraing Set will be each element as Set are unique

  ```html
  // JobFilterSidebarOrganization
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input :id="organization" type="checkbox" class="mr-3" />
            <!-- :id -- binding id attribute --specify a unique id for a HTML element -->
            <label :for="organization">{{ organization }}</label>
            <!-- :for --binding the for attribute --specify the type of input element a label is bound to-->
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>

  <script>
    computed: {
      UNIQUE_ORGANIZATIONS() {
        return this.$store.getters.UNIQUE_ORGANIZATIONS;
      },
    },
  </script>
  ```

- Testing Getters in JobFilterSidebarOrganization

```js
import { mount } from "@vue/test-utils"; // // --not using a shallowMount(stubbing out child component) as accordion (child component) need to test its child elements (dynamic slot content)

import JobFilterSidebarOrganization from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarOrganization.vue";

describe("JobFilterSidebarOrganization", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        FontAwesomeIcon: true, // need to stub font awesome icon component being rendered at accordion component
      },
    },
  });
  it("renders unique list of organization for filtering jobs", async () => {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
    };
    const wrapper = mount(JobFilterSidebarOrganization, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']"); // need to test user action --accordion is a collapsable component that will renders if trigger a click action
    await clickableArea.trigger("click");

    const organizationLabels = wrapper.findAll("[data-test='organization'"); // find and findAll method will return an array of nodes that stores all the matches element found at the implementation
    const organizations = organizationLabels.map((node) => node.text()); // return a new array of two strings --give actual text that is rendering to the DOM to the browser

    expect(organizations).toEqual(["Google", "Amazon"]);
  });
});
```

- NOTE:

  - the problem will be at the test perspective, accordion(component that will be using a slot) is a child component and if we will use shallowMount, child element under accordion will be stub out. In order to keep all the functionality of the slotted content in accordion, we'll be using mount
  - The component is just testing the interaction (invoke) with the store and its nested properties (`this.$store`) and its nested getters (`this.$store.getters.UNIQUE_ORGANIZATIONS`) and not the complexity of how vuex store getter method will be executed and pass state. All we want to test our code, our component and how its accessing properties.

- The mapGetters Helper Function

  - another helper function available in vuex
  - mapGetters --allows us to have a shorthand syntax for connecting getter method from vuex store to being a regular component method (in computed properties)
  - NOTE: map helper function such as mapState, mapMutations, mapActions and mapGetters take some part of the vuex and make it available as some part of the component, usually as a local property or a local method

  ```js
  // JobFilterSidebarOrganization
  import { mapGetters } from "vuex";
  import { UNIQUE_ORGANIZATIONS } from "@/store";

  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]), // top-level property --**this.UNIQUE_ORGANIATIONS

    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },
  },
  ```

- Add v-model to checkbox for organizations

  ```html
  <!-- jobfiltersidebarorganization -->
  <template>
    <ul class="flex flex-row flex-wrap">
      <li
        v-for="organization in UNIQUE_ORGANIZATIONS"
        :key="organization"
        class="w-1/2 h-8"
      >
        <input
          :id="organization"
          v-model="selectedOrganizations"
          :value="organization"
          type="checkbox"
          class="mr-3"
        />
        <label :for="organization" data-test="organization"
          >{{ organization }}</label
        >
      </li>
    </ul>
  </template>

  <script>
    data() {
      return {
        selectedOrganizations: [],
      };
    },
  </script>
  ```

- The v-on: change Handler

  - NOTE:

    - can manually set up the logic of v-model, as v-model abstracts away the complexity of capturing the browsers event and then saving it to a local data then also making a bidirectional way(data -> template and vice versa), and as a reminder browser emits a change event whenever the user interacts with input element.
    - v-on event handler: a method that we can use to connects the updated data from local data to vuex store (e.g as the user interacts with a checkbox, also updates vuex)
      - `v-on:change="<name of method>"`
      - change event is an event that occurs whenever user interacts with an input element(e.g checking checkbox)
      - shorthand for v-on: `@`sign
    - Proxy object
      - an array under the hood but its wrapped in a special helper object around it that adds extra functionality
      - an implementation detail vue needed to take and wrap it with additional functionality to enable the reactivity to connect it to our template and automatically update the template. In order to build the logic that watches for change, it needs to wrap our core data structure in this case, an array in proxy object

    ```html
    <!-- jobfiltersidebarorganization -->
    <template>
      <input
        :id="organization"
        v-model="selectedOrganizations"
        :value="organization"
        type="checkbox"
        class="mr-3"
        @change="selectOrganization"
      />
    </template>

    <script>
        data() {
          return {
            selectedOrganizations: [],
          };
        },
        methods: {
        selectOrganization() {


          // NOTE: whenever this method runs, our array is already going to store the updated collection of organization strings. Then take this updated array of string at the vuex
          // as soon as this change occurs, the vuex needs to get the data and then run its filter logic to filter its 100 jobs to only the ones that are going to have the organizations listed here
        },
      },
    </script>
    ```

- TDD: Add selectedOrganizations Property to Vuex Store State and Create ADD_SELECTED_ORGANIZATION in store mutation

  ```js
  // index.test.js --store
  describe("state", () => {
    it("stores organizations that the user would like to filter jobs by", () => {
      const startingState = state();
      expect(startingState.selectedOrganizations).toEqual([]);
    });
  });

  describe("mutations", () => {
    describe("ADD_SELECTED_ORGANIZATIONS", () => {
      it("updates organizations that the user has chose to filter jobs by", () => {
        const state = { selectedOrganizations: [] };
        mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);
        expect(state).toEqual({ selectedOrganizations: ["Org1", "Org2"] });
      });
    });
  });

  //index.js --store
  export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";

  export const state = () => {
    return {
      selectedOrganizations: [],
    };
  };

  export const mutations = {
    [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
      state.selectedOrganizations = organizations;
    },
  };
  ```

- Commit Mutation to Receive Organizations from JobFiltersSidebarOrganizations Component

  ```js
  // JobFiltersSidebarOrganizations
  import { mapMutations } from "vuex";
  import { ADD_SELECTED_ORGANIZATIONS } from "@/store";

  data() {
    return {
      selectedOrganizations: [],
    };
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),

    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      // NOTE: whenever this method runs, our array is already going to store the updated collection of organization strings. Then take this updated array of string at the vuex
      // as soon as this change occurs, the vuex needs to get the data and then run its filter logic to filter its 100 jobs to only the ones that are going to have the organizations listed here
    },
  },
  ```

  - ![](./images/localDataToVuex.png)

- REVIEW: filter method on Array

  - ![](./images/filterArr.png)

- TDD: Adding Getter to Filter Jobs by Organization

  ```js
  // index.test.js
  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated with the given organizations", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Microsoft" },
        ],
        selectedOrganizations: ["Google", "Microsoft"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "Google" },
        { organization: "Microsoft" },
      ]);
    });
  });

  // index.js --store
  export const FILTERED_JOBS_BY_ORGANIZATIONS =
    "FILTERED_JOBS_BY_ORGANIZATIONS";

  export const getters = {
    [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
      if (state.selectedOrganizations.length === 0) {
        return state.jobs;
      }
      // else {
      //   return state.jobs.filter((job) =>
      //     state.selectedOrganizations.includes(job.organization)
      //   );
      // }
      return state.jobs.filter((job) =>
        state.selectedOrganizations.includes(job.organization)
      );
    },
  };
  ```

- Rendering Filtered Organization Jobs in JobListings Component

  ```js
  import { mapGetters } from "vuex";
  import { FILTERED_JOBS_BY_ORGANIZATIONS } from "@/store";

  computed: {
    ...mapGetters([FILTERED_JOBS_BY_ORGANIZATIONS]),
    currentPage() {
      const pageString = this.$route.query.page || "1"; // page in query params
      // const pageNumber = Number.parseInt(pageString); // 1
      return Number.parseInt(pageString); // 1
    },
    previousPage() {
      const previousPage = this.currentPage - 1; // 1 - 1 = 0
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined; // undefined (not rendering previous page link at 1st page)
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(
        this.FILTERED_JOBS_BY_ORGANIZATIONS.length / 10
      ); // 100 / 10 = 10
      return nextPage <= maxPage ? nextPage : undefined; //nextPage
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10; // 1 - 1 = 0 and so on
      const lastJobIndex = pageNumber * 10; // 1 * 10 = 10(1st page last index) page 1 -> 10
      return this.FILTERED_JOBS_BY_ORGANIZATIONS.slice(
        firstJobIndex,
        lastJobIndex
      );
    },
  }
  ```

- Fixing Failing JobListings Test

  ```js
  const createStore = (store = {}) => ({
    /*
    state: {
      jobs: Array(15).fill({}), // mocking store state of jobs with 15 object iteration
    },
    */
    getters: {
      FILTERED_JOBS_BY_ORGANIZATIONS: [],
    },
    dispatch: jest.fn(), // jest mocking dispatch method in the store object invoking at the mounted lifecyle

    ...store,
  });

  it("creates a job listings for a maximum of 10 jobs", async () => {
    const queryParams = {
      page: 1,
    };

    const $route = createRoute(queryParams);
    const numberOfJobsInStore = 15;
    const $store = createStore({
      getters: {
        FILTERED_JOBS_BY_ORGANIZATIONS: Array(numberOfJobsInStore).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));

    await flushPromises();

    const jobListings = wrapper.findAll("[data-test='job-listings'");
    expect(jobListings).toHaveLength(10);
  });

  it("show link to next page", async () => {
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    const numberOfJobsInStore = 15;
    const $store = createStore({
      getters: {
        FILTERED_JOBS_BY_ORGANIZATIONS: Array(numberOfJobsInStore).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();
    const nextPage = wrapper.find("[data-test = 'next-page-link']");
    expect(nextPage.exists()).toBe(true);
  });
  ```

- Adding Tests for JobFiltersSidebarOrganizations

```html
// component
<template>
  <input
    :id="organization"
    v-model="selectedOrganizations"
    :value="organization"
    type="checkbox"
    class="mr-3"
    :data-test="organization"
    @change="selectOrganization"
  />
</template>

// test suite
<script>
  it("communicates that user has selected checkbox for organization", async () => {
    const commit = jest.fn();
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
      commit,
    };
    const wrapper = mount(JobFilterSidebarOrganization, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const googleInput = wrapper.find("[data-test='Google']"); // referencing dynamic data-test at the elemnt in component -- :data-test=""
    await googleInput.setChecked(); // setChecked() --simulate a checkbox

    expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
      "Google",
    ]);
  });
</script>
```

- Displaying Accurate Number of Filtered Jobs

  ```html
  <!-- Subnav.vue -->
  <template>
    <div v-if="onJobResultsPage" data-test="job-count">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span>
        <span class="text-brand-green-1"
          >{{ FILTERED_JOBS_BY_ORGANIZATIONS.length }}</span
        >
        jobs matched</span
      >
    </div>
  </template>

  <script>
    import { mapGetters } from "vuex";

    import { FILTERED_JOBS_BY_ORGANIZATIONS } from "@/store";

    export default {
      name: "Subnav",
      computed: {
        ...mapGetters([FILTERED_JOBS_BY_ORGANIZATIONS]),
        onJobResultsPage() {
          return this.$route.name === "JobResults";
        },
      },
    };
  </script>
  ```

  ```js
  // subnav test
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user is on the job page", () => {
    it("display job count", () => {
      const $store = {
        getters: {
          FILTERED_JOBS_BY_ORGANIZATIONS: [{ id: 1 }, { id: 2 }],
        },
      };
      const wrapper = mount(Subnav, createConfig("JobResults", $store));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toEqual("2 jobs matched");
    });
  });
  ```

- Refactor our Vuex Store by Splitting it up Across Files

  - ![](./images/refactorVuex.png)
  - NOTE:

    - Name Export --exporting a variable
      - `export const {variable/function name}`
    - Name Import

      - `import {variable/function name} from 'file path';`

    - Default Export --can give any name of a function when importing
      - `export default variableName`
      - `import variableName from 'filepath'`

- Refactor our Vuex Test Suite
  ![](./images/refactorVuexTest.png)
- Refactoring our Components
  ![](./images/refactorComponent.png)
- REVIEW:
  - ![](./images/sec25Rev.png)
  - ![](./images/sec25Rev1.png)
  - ![](./images/sec25Rev2.png)
  - ![](./images/sec25Rev3.png)
  - ![](./images/sec25Rev4.png)

## Section 26: Vuex IV: More Practice

- User Story
  - ![](./images/sec26UserStory.png)
- TDD: Adding State for Job Types

  ```js
  // state.test.js
  it("stores job types that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedJobTypes).toEqual([]);
  });

  // state.js
  const state = () => {
    return {
      isLoggedIn: false,
      jobs: [],
      selectedJobTypes: [],
      selectedOrganizations: [],
    };
  };

  export default state;
  ```

- TDD: Adding Mutations for SeletedJobTypes

```js
// mutations test
describe("ADD_SELECTED_JOB_TYPES", () => {
  it("updates jobs types that the user has chose to filter jobs by", () => {
    const state = { selectedJobTypes: [] };
    mutations.ADD_SELECTED_JOB_TYPES(state, ["Full-time", "Part-time"]);
    expect(state).toEqual({
      selectedJobTypes: ["Full-time", "Part-time"],
    });
  });
});

// constants.js
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";

// mutations.js
[ADD_SELECTED_JOB_TYPES](state, jobTypes) {
    state.selectedJobTypes = jobTypes;
  },
```

- TDD: Adding Getter for Unique Job Types

  ```js
  // getters test
  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job type from list of jobs", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Full-time" },
          { jobType: "Intern" },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Intern", "Full-time"]));
    });
  });

  // constants.js
  export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";

  // getters.js
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  ```

- TDD: Adding Getter for Filtered Jobs for Job Types

  ```js
  // getter test
  describe("FILTERED_JOBS_BY_JOB_TYPES", () => {
    it("identifies jobs that are associated with the given job types", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Part-time" },
          { jobType: "Intern" },
        ],
        selectedJobTypes: ["Full-time", "Intern"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
      expect(filteredJobs).toEqual([
        { jobType: "Full-time" },
        { jobType: "Intern" },
      ]);
    });

    describe("when the user has not selected any organizations", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            { jobType: "Full-time" },
            { jobType: "Part-time" },
            { jobType: "Intern" },
          ],
          selectedJobTypes: [],
        };

        const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
        expect(filteredJobs).toEqual([
          { jobType: "Full-time" },
          { jobType: "Part-time" },
          { jobType: "Intern" },
        ]);
      });
    });
  });


  // constants.js
  export const FILTERED_JOBS_BY_JOB_TYPES = "FILTERED_JOBS_BY_JOB_TYPES"


  // getters.js
  [FILTERED_JOBS_BY_JOB_TYPES](state) {
    if (state.selectedJobTypes.length === 0) {
      return state.jobs;
    }

    return state.jobs.filter((job) =>
      state.selectedJobTypes.includes(job.jobType)
    );
  },
  ```

- TDD: New JobFiltersSidebarJobTypes Component

  - Create JobFilterSidebarJobType.test.js file at the test folder
    - identical to the JobFilterSidebarOrganization.test, the only difference is to change the appropriate word from organization to job types, accordingly
  - Create JobFilterSidebarJobType.vue component at the '@/components/JobResults/JobSidebar'
    - identical to the implementation of JobFilterSidebarOrganization component, the only difference is to change the appropriate word from organization to job types, accordingly to what being defined in vuex or in local data of JobFilterSidebarJobTypes

- Wire up Job Type Filters in Sidebar

  ```html
  <!-- JobFilterSidebar.vue component -->
  <template>
    <div
      class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
    >
      <section class="pb-5">
        <div class="flex flex-row justify-between">
          <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
          <div class="flex items-center text-sm">
            <action-button text="Clear Filters" type="secondary" />
          </div>
        </div>

        <accordion header="Degree"></accordion>

        <job-filter-sidebar-job-type />

        <job-filter-sidebar-organization />
      </section>
    </div>
  </template>

  <script>
    import JobFilterSidebarJobType from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarJobType.vue";

    export default {
      name: "JobFilterSidebar",
      components: {
        JobFilterSidebarJobType,
      },
    };
  </script>
  ```

- Filter for Job Types in Job Listings

  - ![](./images/jobListingJobTypes.png)
  - ![](./images/JFS-JobType.png)

- Allow User to Apply Multiple Filters

  - ![](./images/multiplerFilter.png)

  ```js
  // constants.js
  export const FILTERED_JOBS = "FILTERED_JOBS";

  // getters.js
  import { FILTERED_JOBS } from "@/store/constants.js";

  [FILTERED_JOBS](state) {
    const noSelectedOrganization = state.selectedOrganizations.length === 0;
    const noSelectedJobTypes = state.selectedJobTypes.length === 0;

    if (noSelectedOrganization && noSelectedJobTypes) return state.jobs;

    return state.jobs
      .filter((job) => state.selectedOrganizations.includes(job.organization))
      .filter((job) => state.selectedJobTypes.includes(job.jobType));
  },
  ```

- Use New Getter in JobListings Component

  - ![](./images/filteredJobBug.png)

  ```js
  // getters.js
  [FILTERED_JOBS](state) {
    const noSelectedOrganization = state.selectedOrganizations.length === 0;
    const noSelectedJobTypes = state.selectedJobTypes.length === 0;

    if (noSelectedOrganization && noSelectedJobTypes) return state.jobs;

    return state.jobs
      .filter((job) => {
        if (noSelectedOrganization) return true; // if the user has not selected an organization for this filter, I do always want to pass in this filter function all the job iterating over. Always going to return true, So all of our jobs will pass the filter test.

        return state.selectedOrganizations.includes(job.organization); // otherwise, if the user selected org, then well check whether they include the current jobs organization
      })
      .filter((job) => {
        if (noSelectedJobTypes) return true;
        return state.selectedJobTypes.includes(job.jobType);
      });

    // NOTE:
    // 1st filter: if have selected an org, return filtered org array 2nd filter: if have no selected job types, return filtered org array at first filtered operation

    // 1st filter: if have no selected org, return all jobs will pass then pass to next filter operation 2nd filter: if have selected job types, return filtered job types array

    // 1st filter: if have selected org, return filtered org array then pass to next filter operation 2nd filter: if have selected job types, return filtered job types array from filtered org array
  },
  ```

- Getters with Arguments

  - NOTE:
    - getter method in vuex can invoke or call other getter methods
    - can also pass arguments to getters by returning a function
    - image below is a sample of getters with arguments:
    - ![](./images/getterArguments.png)
    - getTodoById is a getter method whose return value is a function that accepts an ID parameter. (The body of the return function is not the body of the getter method) **NOTE:** --when invoking getTodoById function, we do not need to pass state because vuex does it automatically, instead what we pass as the argument will be the parameter needed to the returned function of the getter method which is e.g the (id).
      - due to the JS feature called closures, in the nested function body, have access to the state parameter from original getter method
      - Closures
        - gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughtout time
        - also includes the argumens because they are really just a local variable
        - will execute local variable inside a function first, then when no local variable declared in function, closure will execute varibable in the global scope

  ```js
  // constants.js
  export const INCLUDE_JOB_BY_ORGANIZATION = "INCLUDE_JOB_BY_ORGANIZATION";
  export const INCLUDE_JOB_BY_JOB_TYPE = "INCLUDE_JOB_BY_JOB_TYPE";

  // getters.js
  [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
    if (state.selectedOrganizations === 0) return true; // if user has not selected any organization, job must be included, so im going to return true

    return state.selectedOrganizations.includes(job.organization); // in the individual single job and look for its organization property then see if it will be found within the state selected organization if found, job must be included

    // This getter will return  a true or false value, and thats the entire responsibility of this getter
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state) => (job) => {
    if (state.selectedJobTypes === 0) return true;

    return state.selectedJobTypes.includes(job.jobType);
  },
  ```

- Test for Getters with Arguments

  ```js
  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organization", () => {
      it("includes job", () => {
        const state = {
          selectedOrganizations: [],
        };
        const job = {
          organization: "Google",
        };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job); // INCLUDE_BY_ORGANIZATION getter method automatically pass state as first argument and returns a function that accepts a job parameter. We can directly invoke in line by passing a pair of parenthesis the exact same way that we invoke any other function in JS (closures)
        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated woth given organizations", () => {
        const state = {
          selectedOrganizations: ["Google", "Microsoft"],
        };
        const job = {
          organization: "Google",
        };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });
  ```

- Applying our Changes to FILTERED_JOBS

  - NOTE:

    - In getters, whenever we need a getter that accepts **custom argument**, we need to define a **getter that returns a function** thats accepts an argument e.g `[Getter method]: (state) => (custom argument) => {return function body}`
    - In comparison in the original getter method, if we provide a second argument after the state, that second argument vuex will always provide the complete object of getters e.g `[Getter method](state, getters){method body}`
      - can actually receive a reference to every available getter as the second argument to a getter method. `[getter method](state, getter){}`
      - the 2nd argument in a getter method is an object that has all of the getters(entire getters object) on it.

  ```js
    // getters.js
    [FILTERED_JOBS](state, getters) {
    return state.jobs
      .filter(
        (job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job)
        // invoking INCLUDE_JOB_BY_ORGANIZATION, vuex will automatically pass the state, then returning function in will now have access to the job(current job in iteration) being pass as the argument.
      )
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job));
  }
  ```

- Fixing JobListings & Subnav Tests

  - replace FILTERED_JOBS_BY_ORGANIZATIONS to FILTERED_JOBS
  - ![](./images/JobListingsFixedTest.png)
  - ![](./images/JobListingsFixedTest1.png)

- Delete Old Two Getters

  - remove FILTERED_JOBS_BY_ORGANIZATIONS & FILTERED_JOBS_BY_JOB_TYPES at getters.js

  - remove FILTERED_JOBS_BY_ORGANIZATIONS & FILTERED_JOBS_BY_JOB_TYPES at getters.test.js

- Adding Test for FILTERED_JOBS Getter

  ```js
  // getter.test
  describe("FILTERED_JOBS", () => {
    it("filter jobs by organization and job type", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      // jest.fn() just mock the fn and return a value of undefined, thats not going to work with filter as filter needs a true or false. Solution? invoking mock return value and passing in the return value we want (mockResolvedValue() ---for async) (mockReturnValue() ----sync)

      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
      };

      const job = { id: 1, title: "Best Job Ever" };
      const state = {
        jobs: [job],
      };

      const result = getters.FILTERED_JOBS(state, mockGetters); // from the filter job getter perspective, all it need is a method called include job organization thats going to return a boolean. Why boolean? because the filter method depends on having a function that returns a true or false
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
    });
  });
  ```

- Fixing Bug

  ```js
  // JobFilterSidebarJobType.vue
  methods: {

    selectedJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResults" });
    },
  },

  // Test
  describe("when user clicks checkbox", () => {
    it("navigates user to job results page to see fresh batch of filters", async () => {
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
        },
        commit: jest.fn(),
      };
      const push = jest.fn();
      const $router = {
        push,
      };
      const wrapper = mount(
        JobFilterSidebarJobType,
        createConfig($store, $router)
      );

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });

  // same logi applies at JobFilterSidebarOrganization
  ```

- REVIEW:
  - if we want to feed in any supplemental data to a getter, so that it can use it to derive some piece of new state, we can pass that in as the parametrs to the function that we return from the vuex getter method e.g `[Getter method]: (state) => (custom argument) => {return function body (---supplemental data)}`
  - dont confude the parameter list for the getter method `(state, getters)` ---its always going to be state first, then the getters object that can invoke other getters \*\*vs parameter list for returned function `(state) => (job) => {}`
  - ![](./images/sec26Rev.png)
  - ![](./images/sec26Rev1.png)
  - ![](./images/sec26Rev2.png)

## Section 27: Reactivity

- What is Reactivity?

  ```js
  let a = 1;
  let b = 2;
  let c = a + b;
  console.log(c); // output: 3 ---JS works is it evaluate the right side of the equal sign first (1 + 2).

  // JS does not establish a connection with variable C in terms of saying C is going to be equal to whatever A and B is. A and B are just placeholders for actual number.

  a = 8; // --if value of A change to 8, the value of c is not going to change to 10 to reflect the value of 8 + value of 3.

  console.log(c); // output: 3 ---- The new value of A + existing value of B is not going to update, instead the value of C is going to be its original value at the time C was assigned which is 3.

  // **THEREFORE: c is not reactive --it is not reacting to the changes in A and B because this syntax in JS(vanilla) does not mean connect C to whatever value A + whatever value B. It just simply does a one time SUM of the present value A + the present value of B at the time C was assigned
  ```

  - reactivity as they pertain the composition API introduced in Vue 3
    - reactivity word means recalculated or reacted to a change/event
    - ![](./images/reactivity.png)
  - Composition API
    - gives us a bunch of helper functions from Vue Library that allow us to emulate the same reactivity ideas but do so outside the confines of a specific component

- Vues ref() function

  - goal: emulate the reactivity behavior in google sheet within a JS file
    - reactivity is not working on plain JS(vanilla), but can be abto to by importing some helper vue functions
    - we can use the helper vue function outside the confines of a specific component
    - computed properties has a similar reactivity ideas as computed properties re evaluated when data changes, but thats an example of a property that is connected to a vue configuration object ties to a component
    - before, there is no way to take the reactivity logic and take it out of the component so it can be used independently but now with the available helper function in Vue 3.0 and the composition API, we can utilize the reactivity without even needing a component attached

  ```js
  //------- REF Function
  const { ref } = require("vue"); // older way of importing exporting from another file as we are working with a plain JS file and depending on the version of Node, we may not necessarily have the import syntax available here because we dont have webPack running through this file

  // ref() ----returns a reactive object (plain JS object)that is able to deal with reactivity and hides the value that we passed in under its value property
  let a = ref(1);
  let b = ref(2);
  // {value: 1, otherMethods} --value property gives us the original value that we pass in
  console.log(a.value); // 1
  console.log(b.value); // 2 --verify that we can access data

  /*
  let c = a.value + b.value;
  console.log(c); // 1 + 2 = 3
  
  a.value = 10;
  console.log(c); // 3 --original value is non-reactive, we can acces it and reuse it but does not add reactivity behavior
  */

  let c = ref(a.value + b.value); // ref(3) --this syntax will  be differ from above as the c will now going to return a reactive object not the sum of a.value and b.value
  console.log(c.value); // 3

  a.value = 10;
  console.log(c.value); // 3 --original value is non reactive even tho we change the value of a to 10
  ```

- Vue Computed() Function

  - computed function allows us to tie/connect the dynamic computation of value to some kind of other reactive value
  - similar to the idea of computed properties in a component, whenever data changes, the computed property reevaluated, this computed function basically does the exact same thing and gives us same reactivity but outside the scope of a specific component
  - `computed(() => {})` --invoking computed function expects an argument is a function (expects an arrow function). Anything we use here in the body of arrow function, computed function is going to track those values then re-run if those values changes
  - NOTE:
    - the ref function specifies a value thats going to change throughtout the code
    - the computed function allows us to calculate a derived value based on the reactive value(ref function) thats going to change
    - this is how the data and computed properties work in our vue composition API
      - ref as base data --the core independent data that is changing by itself the base state --to set up the thing up that is being tracked
      - computed as computed property --a derived piece of data, calculated piece of data, a dependent piece of data that knows the change whenever the thing that's tracking is changing. --set up the calculation that is going to monitor those reactive objects

  ```js
  //--------Vue Computed Function from Vue Library

  const { ref, computed } = require("vue");

  let a = ref(1);
  let b = ref(2);

  // **computed() --keeping track of changes and re-evaluating whenever see a changes then rerun the computed function
  let c = computed(() => a.value + b.value); // computed function returns a reactive object, exact kinds of object in A and B which is going to be a JS object with a value property set to the computation.
  console.log(c); // reactive object
  console.log(c.value); // 3

  a.value = 10; //--tie the computation of C based on the reactivity of A and B as those values changes, then update C (similar idea to the computed property in a component)
  console.log(c.value); // 12

  b.value = 15;
  console.log(c.value); // 25
  ```

- One More Example with Another Primitive (string) and Object

  - STRING
  - NOTE:
    - using computed function, no need to use let for assigning variable, we can now use constant as the value now will be reassigning not the variable
    - We can also pass in ref function array and object

  ```js
  //----------One More Example with Another Primitive (String)
  const { ref, computed } = require("vue");

  const name = ref("Boris");
  console.log(name.value); // Boris

  const title = computed(() => name.value + " the Great!");
  console.log(title.value); // Boris the Great!

  name.value = "Peter";
  console.log(title.value); // Peter the Great!
  ```

  - OBJECT
    - the value property will have the value of the whole object(original non reactive object)that being passed in

  ```js
  // ------------(Object)
  const person = ref({
    name: "Boris",
    other: (this.name = "Peter"),
  });

  console.log(person); // reactivity object that ref function being returned

  console.log(person.value); // { name: 'Boris', other: (this.name = "Peter") } --returned a JS object as the value property under person object

  const title = computed(() => person.value.name + " the Great!");
  console.log(title.value); // Boris the Great!

  person.value.name = "Peter";
  console.log(title.value); // Peter the Great!

  /*
  let title1 = person.name + " the Great!";
  console.log(title1); // Boris the Great!
  
  person.name = "Peter";
  console.log(title1); // Boris the Great!
  
  title1 = person.other + " the Great!";
  console.log(title1); // Peter the Great!
  */
  ```

- Cleaning up the Code with reactive() Function

  - reactive function works similarly to ref function, but it is built and optimized specifically for objects
  - can only use the reactive function with objects, we cannot with primitive values like strings or number
  - he reactive function, it only accepts an object as its argument and once you provide it that you can still access your original properties normally.

  ```js
  // -------Reactive Function
  const { reactive, computed } = require("vue");

  const person1 = reactive({
    name: "Boris",
    other: (this.name = "Peter"),
  });

  const title1 = computed(() => person.name + " the Great!");
  console.log(title1); // reactive object
  console.log(title1.value); // Boris the Great!

  person1.name = "Peter";
  console.log(title1.value); // Peter the Great!

  /*
  5      -- Primitive data type (integer)
  "hello" --Primitive data type(string)
  "hello".toUpperCase() --refers to separate string object that creates an object that is available in JS that is totally different idea from string primitive
  
  **ref function 
  ref({
    value: 'Hello',
    methodForReactivity: () => {},
    anotherMethod: () => {}
  }) -- object being pass to ref function in order to track value changing by accessing object by (nameObject.value.propertyName)
  
  **reactive function
  reactive({
    value: 'Hello',
    reactiveMethods: () => {},
    
  }) --rather than wrapping this whole obj in a value property --vue dev add all the reactive functions and methods inside of the object --advantage spares the need to use the value property in accessing properties inside of an object (nameObject.propertyName)
  */
  ```

- Multiple Properties on Reactive Object

  ```js
  //----------Multiple Properties in Reactive Object
  const { reactive, computed } = require("vue");

  const person2 = reactive({
    firstName: "Boris",
    lastName: "Martin",
  });

  const title2 = computed(
    () => `${person2.firstName} ${person2.lastName} the Great!`
  );
  console.log(title1.value); // Boris Martin the Great!

  person2.firstName = "Peter";
  console.log(title2.value); // Peter Martin the Great!

  person2.lastName = "Ford";
  console.log(title2.value); // Peter Ford the Great!
  ```

- Multiple Level of Reactivity

  - computed functions that depend on objects returned by computed functions
  - allows us to do is to have a domino effect, a change in one reactive object triggers another update to another reactive object
  - whole chain of reactivity that the beginning change trigger all subsequent changes to other

  ```js
  //---------Multiple Level of Reactivity
  const { reactive, computed } = require("vue");

  const person3 = reactive({
    firstName: "Boris",
    lastName: "Martin",
  });

  const title3 = computed(
    () => `${person3.firstName} ${person3.lastName} the Great!`
  );
  const titleLength3 = computed(() => title.value.length);
  console.log(title3.value); // Boris Martin the Great!
  console.log(titleLength3.value); // 25

  person3.firstName = "Petersss";
  console.log(title3.value); // Petersss Martin the Great!
  console.log(titleLength3.value); // 28 --triggers change whenever theres a changes in reactivity object(person3) being run at the title3 computed function

  person3.lastName = "Ford";
  console.log(title3.value); // Peter Ford the Great!
  ```

- Destructuring Problems

  - when destructuring properties in a reactive object, we do not get reactive properties. We lose the reactivity of reactive function as we go from object to a primitive
  - NOTE:
    - when desrtructuring properties in reactive object, doesnt mean that its individual properties are reactive
    - vue doesnt automatically apply reactivity to that individual property that bein accessing off the object

  ```js
  //--------Destructuring Problems
  const { reactive, computed } = require("vue");

  const person4 = reactive({
    firstName: "Boris",
    lastName: "Martin",
  });

  const { firstName, lastName } = person; // when destructuring from an object, vue is going to give us the original values --we lose the reactivity of the whole person object --we go from an object to a primitive and reactive function is not for primitive data type --therefore whenever we change a property in an reactive object it will not rerun because it does not have a reference or a link to the original reactive object

  const title4 = computed(() => `${firstName} ${lastName} the Great!`);

  console.log(title4.value); // Boris Martin the Great!

  person4.firstName = "Petersss";
  console.log(title4.value); // Boris Martin the Great!

  person4.lastName = "Ford";
  console.log(title4.value); // Boris Martin the Great!
  ```

- The toRef() Function

  - use to destructure a single property to make a reactive property from a reactive object.
  - returns a regular vue reactive object that also has a reference of value property ` reactiveObject --({value: propertyOriginalValue})`
  - creates a similar a reactive object, but its whole purpose is exactly for the solution to the destructiong problem of reactive object
  - unfortunately we can not use the regular destructuring syntax but we can emulate the same behaviour by using toRef function

  ```js
  // -------toRef Function
  const { reactive, computed, toRef } = require("vue");

  const person5 = reactive({
    firstName1: "Boris",
    lastName1: "Martin",
  });

  const firstName1 = toRef(person5, "firstName1"); // firstName1 --{value: 'Boris'} --1st argument: existing reactive object --2nd argument: string representing property that we want to make a reactive property
  const lastName1 = toRef(person5, "lastName1"); // {value: 'Martin'} ----returns its own reactive object that can be able to get references to reactive object properties and make them reactive

  const title5 = computed(
    () => `${firstName1.value} ${lastName1.value} the Great!`
  );

  console.log(title5.value); // Boris Martin the Great!

  person5.firstName = "Petersss";
  console.log(title5.value); // Petersss Martin the Great!

  person5.lastName = "Ford";
  console.log(title5.value); // Petersss Ford the Great!
  ```

- The toRefs() Function

  - use to destructure a multiple properties to make a reactive properties from a reactive object.
  - similar to toRef(), the toRefs() also accepts a reactive object and going to return an object where every individual property is going to be reactive, and with this we can destructure properties from this returned objects.
    - behind the scenes is it takes the entire object we passed in and it basically goes through every single property in the object, wraps it in its own reactive object, then returns a new object

  ```js
  // -------toRefs Function

  const person6 = reactive({
    firstName2: "Boris",
    lastName2: "Martin",
  });

  const { firstName2, lastName2 } = toRefs(person6); //accepts a reactive object and going to return another reactive object where every individual property is going to be reactive with value property as reference
  // firstName2 -- {value: 'Boris'}
  // lastName2 -- {value: 'Boris'}

  const title6 = computed(
    () => `${firstName2.value} ${lastName2.value} the Great!`
  );

  console.log(title6.value); // Boris Martin the Great!

  person6.firstName = "Petersss";
  console.log(title6.value); // Petersss Martin the Great!

  person6.lastName = "Ford";
  console.log(title6.value); // Petersss Ford the Great!

  // other example
  const refPerson = toRefs(person6);

  console.log(person6.firstName2); // "Boris "--simply take the firstName2 from person reactive object as a regular old reference to the string

  console.log(refPerson.firstName2); // returns a another reactive object that wraps a value that is dynamically changing
  ```

  - ![](./images/toRefs.png)

- Clatification on toRefs() Function
  - only accepts a reactive object as its argument so that the toRefs() function can iterate over its properties, take each individual one and its respective value and make all of them reacive and returns a brande new object for each individual property
  - it cannot accept a plain JS object
  - ![](./images/toRefs1.png)
  - ![](./images/toRefs2.png)
- REVIEW:

  - Composition API
    - concept of reactivity in a plain JS file by importing various functions from vue
    - reactivity?
      - reacting to a change or an event
    - can decouple or separate the dependencies between a component, Vue CLI in browser and the reactive logic that encode how it changes
  - ref() function
    - receives an argument
    - wraps argument in a reactive object
      - what is reactive object?
        - an object thats able to keep track of changes to itself and also inform any dependencies whenever changes occured
        - can access the original value via value property
        - can overwrite the reactive object's value property
    - can think of return value of ref function as data in a component. its a piece of data that is mutable
  - computed() function
    - can referenced values from reactive objects and rerun its piece of logic whenever any of those reactive object values change
    - accepts function as an argument
    - can think of a computed properties in a component
  - reactive() function

    - similar to ref() function, but only dealing with an object data type not primitive data type(string, number, boolean)

  - ![](./images/sec27Review.png)
  - ![](./images/sec27Review1.png)
  - ![](./images/sec27Review2.png)
  - ![](./images/sec27Review3.png)

## Section 28: Composition API I

- Introduction to Composition API

  - ![](./images/compositionAPI.png)
  - ![](./images/compositionAPI1.png)
  - ![](./images/compositionAPI2.png)
  - ![](./images/compositionAPI3.png)

- The setup() Method

  - use to place all of the configuration logic of a component
  - vue is going to execute setup method only once. It's going to run before the create, created and mounted lifecycle hook but after deals with props
  - Vue is going to run setup method once before everything in the component kind of initialize and appears in browser
  - this keyword will no longer be use /access in setup method, for technical reason, because this keyword usually refers to the current object in JS but when in setup method is running, the current component doesnt fully exist yet so we cant reference it
  - In our setup method, we must return an object and in this object were going to define the properties that we want to make available throughout the HTML template --think of almost similar to the data and computed properties in Options API
  - NOTE: in composition API, we must always define a setup method in the script section in our component configuration object

- The ref() funtion in setup() method

  - NOTE: whenever we use a reactive object to interpolate at template section, vue will automatically look for its value property, no need to reference its value e.g `{{header.value}}` instead `{{header}}`

  ```js
  import { ref } from "vue";

  export default {
    name: "Accordion",
    setup() {
      const header = ref("Cool Title");

      const open = () => {
        header.value = "Amazing Title";
      };

      return { header, open };
    },
  };
  ```

- More Practice of ref() Function

  - NOTE: whenever we use a reactive object to reference at template section, vue will automatically look for its value property, no need to reference its value e.g `v-if="isOpen.value` instead `v-if="isOpen`

  ```js
  import { ref } from "vue";

  export default {
    name: "Accordion",
    setup() {
      const header = ref("Cool Title");
      const isOpen = ref(false);

      const open = () => {
        isOpen.value = !isOpen.value;
      };

      return { header, open, isOpen };
    },
  };
  ```

- The computed() Function

  - NOTE:
    - behind the scenes, vues knows to pass the value of the reactive object not the whole reactive object itself.
    - the icon prop of the font awesome icon library expects an array. Don't worry, it's still going to get an array even though it returns a reactive object. Vue understands that it wants to get the inherent value and provide it the same way that it does for header.

  ```js
  import { computed, ref } from "vue";

  export default {
    name: "Accordion",
    setup() {
      const header = ref("Cool Title");
      const isOpen = ref(false);

      const open = () => {
        isOpen.value = !isOpen.value;
      };

      const caretIcon = computed(() =>
        isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
      ); // caretIcon is a reactive object that doesnt start out with an initial value property like header and isOpen, rather starts with a value that is dynamically computed based on the value of another reactive object --return an array as value

      return { header, open, isOpen, caretIcon };
    },
  };
  ```

- Accepting Props in Component

  - same in Option API, it will be set above setUp() method in component configuration object

  ```js
  export default {
    name: "Accordion",
    props: {
      header: {
        type: String,
        required: true,
      },
    },
    setup() {
      const isOpen = ref(false);

      const open = () => {
        isOpen.value = !isOpen.value;
      };

      const caretIcon = computed(() =>
        isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
      );

      return { open, isOpen, caretIcon };
    },
  };
  ```

- Checking in on Test Suite

  - because of our good test suite as well as how Composition API and Options API are relatively similar to each other, the test suite is still going to pass just like before, our core test logic remains the same. None of our refactor in accordion broke our test

- Accepting Props in setup() Method in ActionButton.vue

  - how do we get access to props in the body of setup() method?
    - vue is going to provide props as the very first argument to the setup method
    - if you dont need props, no need to define props as argument

  ```js
  import { computed } from "vue";

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
    setup(props) {
      const buttonClass = computed(() => {
        return {
          [props.type]: true,
        };
      });
      // props --reactive object with the props that the parent passes in to this action component --(props) is the props object that setup method has an access

      return { buttonClass };
    },
  };
  ```

  - ![](./images/propsInSetup.png)

- Using toRefs() on Props

  - can we do ES6 destructure in setup method? `const {type} = props`
    - no, because getting a value from props in the root scope of setup will cause the value to lose reactivity
    - ![](./images/toRefsInProp.png)
    - NOTE:
      - just because we have reactive object does not mean that any individual property we destructure is reactive itself
      - if you ever wanted to destructure props or any reactive object, use toRefs() function
  - Solution? use toRefs() function to make all individual properties reactive

  ```js
  setup(props) {
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
  ```

- REVIEW:
  - ![](./images/sec28Rev.png)
  - ![](./images/sec28Rev1.png)
  - ![](./images/sec28Rev2.png)
  - ![](./images/sec28Rev3.png)
  - ![](./images/sec28Rev4.png)

## Section 29: Compositon API II

- Composition API with v-model

  - How do we create a piece of data that is going to change over time in setup method? use ref() function

  ```js
  //JobSearchForm.vue
  import { ref } from "vue";

  setup() {
    const role = ref("");
    const location = ref("");

    return { role, location };
  },
  ```

- Composition API with Vue Router

  - NOTE:
    - `$router` can be accessing thru `this.$router` but setup() method has no acces to this keyword and $router
    - Solution: use helper functions from vue router libraries to give us access to $router `import {useRouter} from 'vue-router'`
    - **useRouter**
      - specifically related to vue router on how we navigate around the app
      - these helper function is called composable
      - allow us to get access to important piece of information within our setup() method
      - invoking this function returns the vue router object

  ```js
  // JobSearchForm
  import {useRouter} from 'vue-router';

  setup() {
    const router = useRouter(); // returns vue router object

    const role = ref("");
    const location = ref("");

    const searchForJobs = () => {
      router.push({
        name: "JobResults",
        query: {
          role: role.value,
          location: location.value,
        }, // queryParams --?role=Developer&location=Los&Angeles
      });
    };

    return { role, location, searchForJobs };
  },
  ```

- Fixing Failing JobSearchForm Test

  - failing as the $router is no more using at the new Composition API as we relying at the useRouter at setup() method
  - Solution: mock out useRouter but will be going to be a little bit different
    - import the useRouter at the Test Suite then mock it out so the mock out will return a value such as an object with a push method

  ```js
  import { useRouter } from "vue-router";
  jest.mock("vue-router"); // same as axios, mock out everything in vue router library --includes useRouter then replace with a jest mock

  it("directs user to job results page with users search parameters", async () => {
    // const $router = { push }; // router set to plain JS object with push method (mock function)

    const push = jest.fn(); // mock function for this.$router.push()
    useRouter.mockReturnValue({ push }); //NOTE: invoking mock function will return undefined, we need mockReturnValue to return a push method then mock it

    const wrapper = mount(JobSearchForm, {
      attachTo: document.body,
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    const roleInput = wrapper.find("[data-test='role-input']");
    await roleInput.setValue("Vue Developer");

    const locationInput = wrapper.find("[data-test='location-input']");
    await locationInput.setValue("Ohio");

    const submitButton = wrapper.find("[data-test='form-submit-button']");
    await submitButton.trigger("click");

    // able to test component interaction with vue router w/o actually involving a vue router and by walking through the component in a way that a typical will user interact
    expect(push).toBeCalledWith({
      name: "JobResults",
      query: {
        role: "Vue Developer",
        location: "Ohio",
      },
    }); //asserting if the push method has been invoked with an object
  });
  ```

- Composition API with Vue Router Route

  - useRoute() function
    - works exactly as useRouter
    - gives us access to the route within a given setup() method

  ```js
  // Subnav
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  setup() {
    const route = useRoute();

    const onJobResultsPage = computed(() => route.name === "JobResults");

    return { onJobResultsPage };
  },
  ```

- Composition API with Vuex Getters

  - remember that mapGetters is also a helper function and we have access on every component to this.$store.getters.FILTERED_JOBS in vuex but on setup method we dont have access to this
  - Solution? use a helper function of **useStore** from vuex library
  - NOTE: the helper function were importing such as useStore, useRouter, useRoute are called composables --technical name for a helper function that returns some bit of reactive state/object in the vue ecosystem

  ```js
  // Subnav
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";

  setup() {
    const store = useStore();
    const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

    const route = useRoute();
    const onJobResultsPage = computed(() => route.name === "JobResults");

    return { onJobResultsPage, FILTERED_JOBS };
  },
  ```

- Fixing Failing Test for Subnav

  - same when testing useRouter
  - mock the useRoute and useStore

  ```js
  // Subnav test
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";
  jest.mock("vue-router");
  jest.mock("vuex");

  describe('Subnav', {
    const createConfig = () => ({
    // global settings of the component
    global: {
      stubs: {
        FontAwesomeIcon: true,
      }, // keys or properties in stub object represents the components that we want to stub out to replace whenever test utils mounts a sub component then provide a value since stub is an object and set to true --boolean set up if we have multiple different components being rendered or replace
    },
  });
    describe("when user is on the job page", () => {
    it("display job count", () => {

      useRoute.mockReturnValue({ name: "JobResults" });
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });

      const wrapper = mount(Subnav, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toEqual("2 jobs matched");
    });
  });
  describe("when user is not on the job page", () => {
    it("does NOT display the job count", () => {
      useRoute.mockReturnValue({ name: "Home" });
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [],
        },
      });

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
  })
  ```

- Building Composables

  - Composable
    - a composable function is a plain JS function that uses the reactivity aspects that Vue gives us
    - allow us to use reactive ideas whether it be the reactive store from vue, the reactive route or router or even our own reactive object
    - can use these pieces of functionality outside of any given component and reuse that logic in many component
    -

  ```js
  // useConfirmRoute.js
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  const useConfirmRoute = (routeName) => {
    const route = useRoute();
    return computed(() => route.name === routeName);
  };

  export default useConfirmRoute;

  // Subnav.vue
  import useConfirmRoute from "@/composables/useConfirmRoute";

  setup() {
    const onJobResultsPage = useConfirmRoute("JobResults");
    // const route = useRoute();
    // const onJobResultsPage = computed(() => route.name === "JobResults");

    return { onJobResultsPage};
  },
  ```

- Testing useConfirmRoute Composable

  ```js
  // useConfirmRoute test
  import { useRoute } from "vue-router";
  jest.mock("vue-router");

  import useConfirmRoute from "@/composables/useConfirmRoute";

  describe("useConfirmRoute", () => {
    it("determines if page route matches specified route", () => {
      useRoute.mockReturnValue({ name: "JobResults" });
      const routeName = "JobResults";
      const route = useConfirmRoute(routeName);
      expect(route.value).toBe(true); // accessing the value property of useConfirmRoute
    });
  });
  ```

- Simplify Subnav Test

  - mock out composable function of useConfirmRoute

  ```js
  import { ref } from "vue";
  import useConfirmRoute from "@/composables/useConfirmRoute";
  jest.mock("@/composables/useConfirmRoute"); //instead of passing vu-router, link to the composables should be

  describe("when user is on the job page", () => {
    it("display job count", () => {
      useConfirmRoute.mockReturnValue(ref(true)); // one way to have a reactive object that stores an internal value of a boolean is to use ref() function

      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });

      const wrapper = mount(Subnav, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toEqual("2 jobs matched");
    });
  });
  ```

- Writing Composables for Getters

  - simple composable function that gets vuex store and knows how to talk to a getter and return a reactive object, holding that piece of information that any component is welcome to use

  ```js
  // useFilterJobs.js composables
  import { computed } from "vue";
  import { useStore } from "vuex";

  import { FILTERED_JOBS } from "@/store/constants";

  export const useFilterJobs = () => {
    const store = useStore();
    return computed(() => store.getters[FILTERED_JOBS]);
  };

  // composables.test.js --useFilterJobs
  import { useStore } from "vuex";
  jest.mock("vuex");

  import { useFilterJobs } from "@/store/composables/useFilterJobs";

  describe("Composables", () => {
    describe("useFilterJobs", () => {
      it("retrieves filtered jobs from store", () => {
        useStore.mockReturnValue({
          getters: {
            FILTERED_JOBS: [{ id: 1 }],
          },
        });
        const result = useFilterJobs();
        expect(result.value).toEqual([{ id: 1 }]);
      });
    });
  });

  // Subnav component
  import { useFilterJobs } from "@/store/composables/useFilterJobs";

  setup() {
    const FILTERED_JOBS = useFilterJobs()
    // const store = useStore();
    // const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

    return {FILTERED_JOBS}
  }
  ```

- Updating Subnav Test

  ```js
  // import { useStore } from "vuex";
  // jest.mock("vuex");
  import { useFilterJobs } from "@/store/composables/useFilterJobs";
  jest.mock("@/store/composables/useFilterJobs");

  describe("when user is on the job page", () => {
    it("display job count", () => {
      useConfirmRoute.mockReturnValue(ref(true)); // one way to have a reactive object that stores an internal value of a boolean is to use ref() function

      useFilterJobs.mockReturnValue(ref([{ id: 1 }, { id: 2 }]));

      const wrapper = mount(Subnav, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toEqual("2 jobs matched");
    });
  });
  ```

- Adding more Composables for Getters

  - TDD

  ```js
  // composables test
  import {
    useUniqueJobTypes,
    useUniqueOrganizations,
  } from "@/store/composables";

  describe("useUniqueJobTypes", () => {
    it("retrieves unique job types from store", () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time"]),
        },
      });
      const result = useUniqueJobTypes();
      expect(result).toEqual(["Full-time"]);
    });
  });

  describe("useUniqueOrganizations", () => {
    it("retrieves unique job types from store", () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Apple"]),
        },
      });
      const result = useUniqueOrganizations();
      expect(result).toEqual(["Apple"]);
    });
  });

  // composables.js
  import { UNIQUE_JOB_TYPES, UNIQUE_ORGANIZATIONS } from "@/store/constants";

  export const useUniqueJobTypes = () => {
    const store = useStore();
    return computed(() => store.getters[UNIQUE_JOB_TYPES]);
  };

  export const useUniqueOrganizations = () => {
    const store = useStore();
    return computed(() => store.getters[UNIQUE_ORGANIZATIONS]);
  };
  ```

- Refractoring JobFilterSidebarJobTypes

  ```js
  import { ref } from "vue";
  import { useUniqueJobTypes } from "@/store/composables";

  export default {
    name: "JobFilterSidebarJobType",
    components: {
      Accordion,
    },
    setup() {
      const selectedJobTypes = ref([]);
      const uniqueJobTypes = useUniqueJobTypes();
      return { selectedJobTypes, uniqueJobTypes };
    },
    /*
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  */
  };
  ```

- Replacing mapMutations Functions

  ```js
  // JobFilterSidebarJobType
  import { ref } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    const selectedJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES(selectedJobTypes));
      router.push({ name: "JobResults" });
    };
    return { selectedJobTypes, uniqueJobTypes, selectedJobType };
  },

  /*
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]), // this.$store.commit([ADD_SELECTED_JOB_TYPES])
    selectedJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResults" });
    },
  },
  */
  ```

- Fixing Failing JobFilterSibebarJobType Test

  ```js
  import { useUniqueJobTypes } from "@/store/composables";
  jest.mock("@/store/composables");
  import { useStore } from "vuex";
  jest.mock("vuex");
  import { useRouter } from "vue-router";
  jest.mock("vue-router");

  describe("JobFilterSidebarJobType", () => {
    /*
  const createConfig = ($store, $router) => ({
    global: {
      mocks: {
        $store,
        $router,
      },
    },
    stubs: {
      FontAwesomeIcon: true,
    },
  });
  */

    const createConfig = () => ({
      stubs: {
        FontAwesomeIcon: true,
      },
    });

    describe("when user clicks checkbox", () => {
      it("communicates that user has selected checkbox for job types", async () => {
        useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));
        const commit = jest.fn();
        useStore.mockReturnValue({ commit });
        useRouter.mockReturnValue({ push: jest.fn() });
        /*
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
        },
        commit,
      };
      const $router = {
        push: jest.fn(),
      };
      */
        const wrapper = mount(JobFilterSidebarJobType, createConfig());

        const clickableArea = wrapper.find("[data-test='clickable-area']");
        await clickableArea.trigger("click");

        const fullTimeInput = wrapper.find("[data-test='Full-time']"); // referencing dynamic data-test at the element in component -- :data-test=""
        await fullTimeInput.setChecked(); // setChecked() --simulate a checkbox

        expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", [
          "Full-time",
        ]); // commit method will run and pass the name of the mutation as the first argument then afterwards pass any argument [here passing an array]
      });
    });
  });
  ```

- Refractoring JobFilterSidebarOrganization

  ```js
  import { ref } from "vue";
  import { useUniqueOrganizations } from "@/store/composables";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

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
      this.$router.push({ name: "JobResults" });
    },
  },
  */
  ```

- Fixing Failing JobFilterSidebarOrganization Test

  ```js
  import { useUniqueOrganizations } from "@/store/composables";
  jest.mock("@/store/composables");
  import { useStore } from "vuex";
  jest.mock("vuex");
  import { useRouter } from "vue-router";
  jest.mock("vue-router");

  describe("JobFilterSidebarOrganization", () => {
    const createConfig = () => ({
      global: {
        stubs: {
          FontAwesomeIcon: true, // need to stub font awesome icon component being rendered at accordion component
        },
      },
    });

    describe("when user clicks checkbox", () => {
      it("communicates that user has selected checkbox for organization", async () => {
        useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
        const commit = jest.fn();
        useStore.mockReturnValue({ commit });
        useRouter.mockReturnValue({ push: jest.fn() });

        const wrapper = mount(JobFilterSidebarOrganization, createConfig());

        const clickableArea = wrapper.find("[data-test='clickable-area']");
        await clickableArea.trigger("click");

        const googleInput = wrapper.find("[data-test='Google']"); // referencing dynamic data-test at the elemnt in component -- :data-test=""
        await googleInput.setChecked(); // setChecked() --simulate a checkbox

        expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
          "Google",
        ]); // commit method will run tand pass the name of the mutation as the first argument then afterwards pass any argument [here passing an array]
      });
    });
  });
  ```

- Creating Reusable JobFiltersSidebarCheckboxGroup Component

  ```js
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
            <label :for="value" data-test="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
  </template>

  <script>
  import { ref } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";


  import Accordion from "@/components/Shared/Accordion.vue";

  export default {
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
        type: Set,
        required: true,
      },
      mutation: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const store = useStore();
      const router = useRouter();

      const selectedValues = ref([]);


      const selectValue = () => {
        store.commit(props.mutation, selectedValues.value);
        router.push({ name: "JobResults" });
      };

      return { selectedValues, selectValue };
    },
  };
  </script>

  ```

- Reuse JobFiltersSidebarCheckboxGroup

  ```html
  <template>
    <section>
      <job-filter-sidebar-checkbox-group
        header="Job Types"
        :unique-values="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
      />
      <job-filter-sidebar-checkbox-group
        header="Organization"
        :unique-values="uniqueOrganizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </template>

  <script>
    import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

    import {
      useUniqueOrganizations,
      useUniqueJobTypes,
    } from "@/store/composables";

    import {
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
    } from "@/store/constants";

    export default {
      name: "JobFilterSidebar",
      components: {
        JobFilterSidebarCheckboxGroup,
      },
      setup() {
        const uniqueOrganizations = useUniqueOrganizations();
        const uniqueJobTypes = useUniqueJobTypes();
        return {
          uniqueOrganizations,
          uniqueJobTypes,
          ADD_SELECTED_JOB_TYPES,
          ADD_SELECTED_ORGANIZATIONS,
        };
      },
    };
  </script>
  ```

- Adding Tests for JobFiltersSidebarCheckboxGroup

  ```js
  import { mount } from "@vue/test-utils";

  import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarCheckboxGroup.vue";

  jest.mock("@/store/composables");
  import { useStore } from "vuex";
  jest.mock("vuex");
  import { useRouter } from "vue-router";
  jest.mock("vue-router");

  describe("JobFilterSidebarCheckboxGroup", () => {
    const createConfig = (props = {}) => ({
      stubs: {
        FontAwesomeIcon: true,
      },
      props: {
        header: "Some Header",
        uniqueValues: new Set(["Value A", "Value B"]),
        mutation: "SOME_MUTATION",
        ...props,
      },
    });

    it("renders unique list of job types for filtering jobs ", async () => {
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });

      const props = { uniqueValues: new Set(["Value A", "Value B"]) };
      const wrapper = mount(JobFilterSidebarCheckboxGroup, createConfig(props));

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const checkboxLabels = wrapper.findAll("[data-test='value']");

      const checkbox = checkboxLabels.map((node) => node.text());
      expect(checkbox).toEqual(["Value A", "Value B"]);
    });

    describe("when user clicks checkbox", () => {
      it("communicates that user has selected checkbox for job types", async () => {
        const commit = jest.fn();
        useStore.mockReturnValue({ commit });
        useRouter.mockReturnValue({ push: jest.fn() });

        const props = {
          uniqueValues: new Set(["Value A"]),
          mutation: "SOME_MUTATION",
        };
        const wrapper = mount(
          JobFilterSidebarCheckboxGroup,
          createConfig(props)
        );

        const clickableArea = wrapper.find("[data-test='clickable-area']");
        await clickableArea.trigger("click");

        const checkboxInput = wrapper.find("[data-test='Value A']"); // referencing dynamic data-test at the element in component -- :data-test=""
        await checkboxInput.setChecked(); // setChecked() --simulate a checkbox

        expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Value A"]); // commit method will run and pass the name of the mutation as the first argument then afterwards pass any argument [here passing an array]
      });

      it("navigates user to job results page to see fresh batch of filters", async () => {
        useStore.mockReturnValue({ commit: jest.fn() });

        const push = jest.fn();
        useRouter.mockReturnValue({ name: "JobResults", push });

        const props = {
          uniqueValues: new Set(["Value A"]),
        };
        const wrapper = mount(
          JobFilterSidebarCheckboxGroup,
          createConfig(props)
        );

        const clickableArea = wrapper.find("[data-test='clickable-area']");
        await clickableArea.trigger("click");

        const checkboxInput = wrapper.find("[data-test='Value A']");
        await checkboxInput.setChecked();

        expect(push).toHaveBeenCalledWith({ name: "JobResults" });
      });
    });
  });
  ```

- REVIEW:
  - ![](./images/sec29Rev.png)
  - ![](./images/sec29Rev1.png)
  - ![](./images/sec29Rev2.png)
  - ![](./images/sec29Rev3.png)

## Section 30: Composition API III

- The onMounted() Function

  - refactoring options API mounted lifecycle hook in composition API
    - NOTE: mounted() hook is automatically run by vue whenever it mounts the component
  - for every lifecyck that exist in options API, there is a complementary function that we can import from vue that we can utilize within our setup() method that basically do the same thing
  - onMounted()
    - is the complementary for mounted() lifecycle hook at setup() method. It is giving us the opportunity to run some kind of oppurtunity to run some kind of logic on component mount
    - expects function as an argument, it takes a function as an argument and its going to run that function based on when the component mounts
    - someways comparable to the computed function that expects function as an argument but the key difference is when it comes to the computed function reevaluates every changes, while in onMounted() will only run once the component mounts

  ```js
  <script>
  import { ref, onMounted } from "vue";
  import axios from "axios";

  export default {
    name: "Spotlight",
    setup() {
      const spotlights = ref([]);

      const getSpotlights = async () => {
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}/spotlights`;
        const response = await axios.get(url);
        spotlights.value = response.data;
      };
      onMounted(getSpotlights); // no need to invoked function because it will produce the return value, just provide the function name then no need to invoke // knows to run whenever the component mount, no need to return at the setup(), similarly to the other component lifecycle it will run at the specific moments in the components lifecycle

      return { spotlights };
    },

    /*
    ------- OPTION API -----------
    data() {
      return {
        spotlights: [],
      };
    },
    async mounted() {
      const baseURL = process.env.VUE_APP_API_URL;
      const url = `${baseURL}/spotlights`;
      const response = await axios.get(url);
      // console.log(response.data);

      this.spotlights = response.data;
    },
  */
  };


  </script>

  ```

- Refactoring JobListings Component to Use Composition API

  ```js
  import { useStore } from "vuex";
  import { FETCH_JOBS } from "@/store/constants";
  import JobList from "@/components/JobResults/JobList.vue";
  import { onMounted } from "vue";
  import { useFilterJobs } from "@/store/composables";

  setup() {
    const store = useStore();
    const fetchJobs = async () => {
      store.dispatch(FETCH_JOBS);
    };
    onMounted(fetchJobs);

    const filteredJobs = useFilterJobs();

    const currentPage = computed(() =>
      Number.parseInt(route.query.page || "1")
    );
    const previousPage = computed(() => {
      const previousPage = currentPage.value - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    });
    const nextPage = computed(() => {
      const nextPage = currentPage.value + 1;
      const maxPage = Math.ceil(filteredJobs.value.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    });

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });
    return { filteredJobs, currentPage, previousPage, nextPage, displayedJobs };
  },
  },
  /*
  // data() {
  //   return {
  //     jobs: [], // store jobs(endpoint) array being fetch in backend
  //   };
  // },
  computed: {
    // ...mapState(["jobs"]), // vuex store state
    ...mapGetters([FILTERED_JOBS]),
    currentPage() {
      const pageString = this.$route.query.page || "1"; // page in query params
      // const pageNumber = Number.parseInt(pageString); // 1
      return Number.parseInt(pageString); // 1
    },
    previousPage() {
      const previousPage = this.currentPage - 1; // 1 - 1 = 0
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined; // undefined (not rendering previous page link at 1st page)
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10); // 100 / 10 = 10
      return nextPage <= maxPage ? nextPage : undefined; //nextPage
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10; // 1 - 1 = 0 and so on
      const lastJobIndex = pageNumber * 10; // 1 * 10 = 10(1st page last index) page 1 -> 10
      return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    // const baseURL = process.env.VUE_APP_API_URL;
    // const response = await axios.get(`${baseURL}/jobs`);
    // this.jobs = response.data;

    // this.$store.dispatch(FETCH_JOBS); // API call from action at vuex store

    this.FETCH_JOBS(); //dispatch action to the store
  },
  methods: {
    ...mapActions([FETCH_JOBS]), // provide action names and creates methods with same names on our action store which will then invoke dispatch method in action store
  },
  */
  ```

- Extracting Composables from JobListings I: useCurrentPage

  ```js
  // useCurrentPage js file
  import { useRoute } from "vue-router";
  import { computed } from "vue";

  const useCurrentPage = () => {
    const route = useRoute();
    return computed(() => Number.parseInt(route.query.page || "1"));
  };

  export default useCurrentPage;

  // useCurrentPage Test
  import useCurrentPage from "@/composables/useCurrentPage";

  import { useRoute } from "vue-router";
  jest.mock("vue-router");

  describe("useCurrentPage", () => {
    describe("when page include query params", () => {
      it("returns page number", () => {
        useRoute.mockReturnValue({ query: { page: "5" } });
        const result = useCurrentPage();
        expect(result.value).toBe(5);
      });
    });

    describe("when page exclude query params", () => {
      it("default to page number 1", () => {
        useRoute.mockReturnValue({ query: {} });
        const result = useCurrentPage();
        expect(result.value).toBe(1);
      });
    });
  });

  // Invoke useCurrentPage at the JobListings component setup method
  ```

- Extracting Previous and Next Page Logic to Composable Function

  - NOTE: when we invoke reactive object as an argument in a reactive function, no need to put ".value"

  ```js
  // usePreviousAndNextPages.js
  import { computed } from "vue";

  const usePreviousAndNextPages = (currentPage, maxPage) => {
    const previousPage = computed(() => {
      const previousPage = currentPage.value - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    });

    const nextPage = computed(() => {
      const nextPage = currentPage.value + 1;

      return nextPage <= maxPage.value ? nextPage : undefined;
    });

    return { previousPage, nextPage };
  };

  export default usePreviousAndNextPages;

  // JobListings.vue
  import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

  setup() {
    const currentPage = useCurrentPage();

    const maxPage = Math.ceil(filteredJobs.value.length / 10);

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );
  }
  ```

- Adding Test for usePreviousAndNextPages

  ```js
  import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

  describe("usePreviousAndNextPages", () => {
    it("calculates page before current one", () => {
      const currentPage = { value: 8 };
      const maxPage = { value: 10 };
      const { previousePage } = usePreviousAndNextPages(currentPage, maxPage);
      expect(previousePage.value).toBe(7);
    });

    describe("when current page is the first page", () => {
      it("does not provide previous page", () => {
        const currentPage = { value: 1 };
        const maxPage = { value: 1 };
        const { previousePage } = usePreviousAndNextPages(currentPage, maxPage);
        expect(previousePage.value).toBeUndefined(); // use to match with undefined values
      });
    });

    it("calculates page after current one", () => {
      const currentPage = { value: 7 };
      const maxPage = { value: 10 };
      const { nextPage } = usePreviousAndNextPages(currentPage, maxPage);
      usePreviousAndNextPages(currentPage, maxPage);
      expect(nextPage.value).toBe(8);
    });

    describe("when current page is in the last page", () => {
      it("does not provide next page", () => {
        const currentPage = { value: 10 };
        const maxPage = { value: 10 };
        const { nextPage } = usePreviousAndNextPages(currentPage, maxPage);
        expect(nextPage.value).toBeUndefined(); // use to match with undefined values
      });
    });
  });
  ```

- Move Dispatch out in JobListings Component

  ```js
  // composables.js
  /*  ACTIONS */
  export const useFetchJobsDispatch = async () => {
    const store = useStore();
    store.dispatch(FETCH_JOBS);
  };

  // composables test
  describe("useFetchJobDispatch", () => {
    it("calls fetch job at action API", () => {
      const dispatch = jest.fn();
      useStore.mockReturnValue({
        dispatch,
      });
      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });
  ```

- Fixing Failing Tests for JobListing

  ```js
  // JobListings test
  import { ref } from "vue";
  import { useFilterJobs, useFetchJobsDispatch } from "@/store/composables";
  jest.mock("@/store/composables");

  import useCurrentPage from "@/composables/useCurrentPage";
  jest.mock("@/composables/useCurrentPage");

  import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
  jest.mock("@/composables/usePreviousAndNextPages");

  describe("when component mounts", () => {
    it("makes call to fetch jobs from API", () => {
      useFilterJobs.mockReturnValue({ value: [] });
      useCurrentPage.mockReturnValue({ value: 2 });
      usePreviousAndNextPages.mockReturnValue({ previousPage: 1, nextPage: 3 });
      shallowMount(JobListings, createConfig());
      expect(useFetchJobsDispatch).toHaveBeenCalled();
    });
  });

  it("creates a job listings for a maximum of 10 jobs", async () => {
    useFilterJobs.mockReturnValue({ value: Array(15).fill({}) });
    useCurrentPage.mockReturnValue({ value: 1 });
    usePreviousAndNextPages.mockReturnValue({
      previousPage: undefined,
      nextPage: 2,
    });

    const wrapper = shallowMount(JobListings, createConfig());

    await flushPromises();

    useFilterJobs();
    const jobListings = wrapper.findAll("[data-test='job-listings'");

    expect(jobListings).toHaveLength(10);
  });

  it("displays page number ", () => {
    useFilterJobs.mockReturnValue({ value: [] });
    useCurrentPage.mockReturnValue(ref(1)); // when testing DOM/HTML template interaction, plain value object will not be a reactive object(displayedJobs function needed a reactive currentPage value to render at template), we are not able to mock out the original reactive useCurrentPage. Solution? make it a reactive object using ref() function

    usePreviousAndNextPages.mockReturnValue({
      previousPage: undefined,
      nextPage: 2,
    });
    const wrapper = shallowMount(JobListings, createConfig());
    expect(wrapper.text()).toMatch("Page 1");
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", () => {
      // const queryParams = { page: "1" };
      useFilterJobs.mockReturnValue({ value: [] });
      useCurrentPage.mockReturnValue(ref(1));
      usePreviousAndNextPages.mockReturnValue({
        previousPage: undefined,
        nextPage: 2,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      const previousPage = wrapper.find("[data-test = 'previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("show link to next page", async () => {
      // const queryParams = { page: "1" };
      useFilterJobs.mockReturnValue({ value: [] });
      useCurrentPage.mockReturnValue(ref(1));
      usePreviousAndNextPages.mockReturnValue({
        previousPage: undefined,
        nextPage: 2,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      await flushPromises();
      const nextPage = wrapper.find("[data-test = 'next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });
  ```

- Updating JobList Component

  ```js
  import { computed } from "vue";

  export default {
    name: "JobList",
    props: {
      job: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);

      return { jobPageLink };
    },
  };
  ```

- REVIEW:
  - ![](./images/sec30Rev.png)
  - ![](./images/sec30Rev1.png)

## Section 31: Intro TypeScript

- Welcome to TypeScript
  - TypeScript
    - ![](./images/sec31.png)
    - ![](./images/sec31-1.png)
    - is JS with syntax for types
    - is almost like an extension of JS.
    - its like an enhanced version of JS
    - not a brand new language with different syntax
    - its really the core JS language but with some extra syntax related to types
  - Advantage of using TypeScript
    - If we assign a certain variable to any kind of data type, JS doesnt know that it is string, number, boolean etc.
    - TS help us figure out a whole bunch of errors
      - e.g (shown image below)
      - ![](./images/sec31-2.png)
      - TS can recognize that this object properties (user) have certain types in each properties, and regular JS does not.
      - TS will warn as shown in the example the error if the developer accidentallu forget that name properties does not exist on the type of object (user)
    - TS is also going to allow us to perform a certain operations and prohibit other operatoins
      - e.g if it knows we're working with a string, it's going to allow us to use a string method like two uppercase in comparison. If it knows it, we have a number. It's going to say you can't execute a method like two uppercase on a number because that's not a valid method
      - In JavaScript, again, these errors will pop up, but they're only going to pop up when we run the program.
      - In comparison in TypeScript, we're going to be able to identify them earlier as we're actually coding in our editor.
  - Disadvantages
    - ![](./images/sec31-3.png)
    - ![](./images/sec31-4.png)
    - TS does not run in web browser. We only use the language in our code editor for development. Solution? use a compiler --use to convert TS code into plain vanilla JS
- Primitive Types

  - ![](./images/TS-primitiveData.png)
  - NOTE:
    - null and undefined are both unique because both an actual value in JavaScript and it's type in TypeScript is undefined and null as well.

- Type Inference

  - special typeScript feature
  - "infer" means to deduce or to figure out from evidence
  - TS can figure out a type if we give it some data
  - General Best Practive (hearsay)

    - if TS is able to figure out type correctly by simple hovering to the variable, theres no reason to explicitly annotate a type, in comparison
    - if TS is unable to figure out or if it gets it incorrect, then that the good idea to annotate the type

  - NOTE:
    - if we dont give an initial value to a boolean then we remove the annotation, TS will not figure out if its a boolean, instead if we hover the mouse, it thinks that the type is a special type called any
      - ![](./images/typeInference.png)
    - same with both undefined and null, if annotaion removed, it will assume the any type --because undefined is another kind of value that are designed to indicate the absence of something or lack of something being present in program, and that lack of something can be replaced with a concrete value like number or string
      - ![](./images/typeInference1.png)

- The any type

  - ![](./images/anyType.png)
  - allows for any kind of types
  - considered as bad idea in TS because it defeats the entire purpose of TS
  - when using any type, basically turning TS into JS
    - if bad, why TS allows it? it be needed some kind of escape path, as sometimes you will be needed running code before want to go back and add types later or sometimes TS will not compile at all

- The unknown type and type guard

  - unknown --is itself a type, sort of means we dont know. A little less flexibe than any type.
    - ![](./images/unknownType.png)
    - similarity between any and unknown can totally reassign to any other values
    - difference is unknown can use type guard while any cannot
  - type guard --basic if statement to check the type in our program --guarding against certain operations --protecting us from doing something else unless we validate the correct type
    - ![](./images/typeGuard.png)

- Array type Declarations

  - NOTE: annotation will be type of data followed by array bracket e.g `const arr: string[] = ['Hi']`
  - ![](./images/arrayType.png)
  - ![](./images/arrayType1.png)
  - ![](./images/arrayType2.png)
  - ![](./images/arrayType3.png)

- Object type Declarations

  - how do we assign a type to an object? exact same way we assign a type to any type in TS

    - but there is a general object type annotation `const objName: object = {...properties}` but is not recommended because it is not as specific. And when we are not specific, we lose many benefits of TS
    - ![](./images/objectType.png)

  - not just a generic object of key value pairs, but rather a specific annotation of three key value pairs
    - ![](./images/objectType1.png)
    - ![](./images/objectType2.png)

- Type Literals

  - a type literal is a type that represents a single value and nothing else

    - ![](./images/typeLiterals3.png)

    - declaring variable using let keyword `let isSmart = true` --type inefernce will be boolean. let keyword means that the variables value can change
      - ![](./images/typeLiterals.png)
    - declaring varibale using const `const isHandsome =  true` --type inference will be true. True in this case is both the value and the type because const keyword are permanently assigning a name to whatever value we assigned on right hand side. Its type is more specific than a just a general boolean.
      - ![](./images/typeLiterals1.png)
      - ![](./images/typeLiterals2.png)

- Type Literals and Objects

  - applying the idea of type literals to object
    - ![](./images/typeLiteralsObject.png)
    - even though the const plumber cannot be reassign, however that does not change the fact that our plumber object is mutable. The properties we have on plumber object they can be change.
      - the reason is because the plumber constant must reference the same object but the internals properties can still change
      - ![](./images/typeLiteralsObject1.png)
    - NOTE: giving annotation of true instead of a boolean declared at a const variable, as the programs run, never be allowed to change it.
    - ![](./images/typeLiteralsObject2.png)
    - ![](./images/typeLiteralsObject3.png)
    - ![](./images/typeLiteralsObject4.png)

- Optional Properties

  - optional properties on object type
    - it a property that is optional that is not required
    - ? --optional property assignment --not required but if the object provides it then must be the data type declared e.g boolean. Type interfence will be boolean or undefined --undefined is because is the default value for property that does not exist on a given object
      - ![](./images/optionalProperty.png)
      - ![](./images/optionalProperty1.png)
      - ![](./images/optionalProperty2.png)
      - ![](./images/optionalProperty3.png)
      - ![](./images/optionalProperty4.png)

- Interfaces and Types

  - two constructs that are very similar to each other, they are interchangeable with one another
  - what problem do interfaces and types solve for us? They allow us to have a reusable literal object type

  - interface --a blueprint that describing a specific type of object not providing an implementation or literal object or a value syntax: `interface nameOfInterface {}` NOTE: it will be the exact literal object definition in object annotation that will be re-usable

    - ![](./images/interference.png)
    - ![](./images/interference1.png)
    - ![](./images/interference2.png)

  - type --similar to interface but the only difference is the syntax syntax: `type nameOfType = {}`
    - ![](./images/type.png)

- Declaring Types for Functions

  - declaring types for both traditional and arrow functions
    - Traditional Function
      - NOTE: TS is unable to infer what types of values in parameters if annotation did not defined
      - ![](./images/typeFunctions.png)
      - first is declaring types for the **parameters** of the function
      - ![](./images/typeFunctions1.png)
        - syntax is similar in declaring type for variables or constants `function nameOfFunction(a: number, b: number) {fn body}`
      - second is declaring the type of the functions **return value**
      - ![](./images/typeFunctions2.png)
        - NOTE:
          - if type was being annotated at the parameter, the return value will be automaticall same as being annoted
          - if want to explicitly declare that the return value of a function, we simply provide a colon after the parameter list and then declare the type of the return value `function nameOfFunction(a: number, b: number):number {fn body}`
    - Arrow Function
      - similar at the traditional function, the only difference is the syntax
        - ![](./images/typeFunctions3.png)
        - ![](./images/typeFunctions4.png)
        - ![](./images/typeFunctions5.png)
        - ![](./images/typeFunctions6.png)
        - ![](./images/typeFunctions7.png)

- Interfaces for Functions

  - problem being solved by interfaces for function? duplication of type definition in parameter and return value of functions
    - same in interfaces for objects `interface functionName { (paarameter: type): returnValue type }`
    - ![](./images/interfaceFunc.png)
    - ![](./images/interfaceFunc1.png)
    - ![](./images/interfaceFunc2.png)
    - ![](./images/interfaceFunc3.png)

- Intro to Generics

  - configure the tsx in TS config to NONE at the TS playground site.
    - ![](./images/genericType.png)
  - prob #1: write a function that accepts an array as an argument and then return a copy of that array
    - ![](./images/genericType1.png)
  - prob #2: same as prob 1 but the array type would be number. Both problem has a approach that is not scalable
    - ![](./images/genericType2.png)
  - Solution? use generics
    - Generics --a non-specific type --and allows us to define a function that going to accept a generic type --allow to write more reusable functions by providing generic type parameters
      - generic type --a non specific type that cannot predict in advance, only to find when invoking function
      - in order to specify function that will accept a generic type as an argument. Before parameter list, provide a pair of brackets then define parameters for the expected generic types `const function name = <T>(array: T[]): T[]=> [...array]`
      - for general convention: `<T>` generic type for something that will be the specific type later upon invoking function
        - ![](./images/genericType3.png)
      - for invoking: `functionName<type>([arr1, arr2])`
        - ![](./images/genericType4.png)
        - ![](./images/genericType5.png)
        - ![](./images/genericType6.png)

- REVIEW:
  - ![](./images/sec31Rev.png)
  - ![](./images/sec31Rev1.png)
  - ![](./images/sec31Rev2.png)
  - ![](./images/sec31Rev3.png)
  - ![](./images/sec31Rev4.png)
  - ![](./images/sec31Rev5.png)

## Section 32: TypeScript and Vuex

- Install TS for Vue

  - incorporate TS in a vue project

    - terminal: `vue add typescript`
      - ![](./images/installingTS.png)
      - ![](./images/installingTS1.png)
    - NOTE: HomeView.vue will be injected extra code upon installing TS. To restore the old code shown below, run this on terminal `git restore src/views/HomeView.vue`

      - ![](./images/installingTS2.png)
      - ![](./images/installingTS3.png)

      - ![](./images/installingTS4.png) --removed the extra extends property on the upper part
      - ![](./images/installingTS5.png)
      - ![](./images/installingTS6.png)
      - ![](./images/installingTS7.png)

    - `shims-vue.d.ts` --TS specific file that enables TS to recognize different aspects and components in vue. required to integrate vue with TS
      - ![](./images/installingTS8.png)
      - NOTE: TypeScript is a separate language, it doesn't have to be used with view. It can be used in general to build JavaScript programs. It can be used with other frontend frameworks like React for Angular.
    - `tsconfig.json` --set of options for TS, specific config for how TS works
      - ![](./images/installingTS9.png)

  - after installing, run the vue app `npm run serve` to check if TS successfully installed
    - ![](./images/installingTS10.png)
    - ![](./images/installingTS11.png)

- Create Job Interface

  ```js
  // types.ts --API
  export interface Job {
    id: number;
    title: string;
    organization: string;
    degree: string;
    jobType: string;
    locations: string[];
    minimumQualifications: string[];
    preferredQualifications: string[];
    description: string[];
    dateAdded: string;
  }
  ```

- Define GlobalState Interface

  - rename the state.js into state.ts
  - add a file types.ts for globalState interface at the store folder

  ```ts
  // state.ts
  import { GlobalState } from "@/store/types";

  const state = (): GlobalState => {
    return {
      isLoggedIn: false,
      jobs: [],
      selectedJobTypes: [],
      selectedOrganizations: [],
    };
  };

  export default state;

  // types.ts --store
  import { Job } from "@/api/types"; // interface for Job in API

  export interface GlobalState {
    isLoggedIn: boolean;
    jobs: Job[];
    selectedJobTypes: string[];
    selectedOrganizations: string[];
  }
  ```

- Update State test file to TypeScript

  - rename the file from state.test.js into state.test.ts
    - NOTE: adding the TS to the vue project is still going to allow to recognize test files that are written in TS
    - ![](./images/stateTestTS.png)
      - the creation of TS file gives us a lot of benefits in our test eg. here in state test, TS file knows that the state function returns object that fulfill the globeState interface
      - ![](./images/stateTestTS1.png)
      - ![](./images/stateTestTS2.png)

- Update Constant file to TS

  - rename constant.js to constant.ts
  - ![](./images/constantTS.png)
    - TS recognizes that its not just a string but a constant string set to fixed value
    - ![](./images/constantTS1.png)

- Provide Types for all Mutations

  - rename mutations.js to mutations.ts
    - ![](./images/mutationsTS.png)
    - ![](./images/mutationsTS1.png)
    - ![](./images/mutationsTS2.png)
    - ![](./images/mutationsTS3.png)

- Updating Mutations Test File I: First Solution

  - rename mutations test from js to ts
  - ![](./images/mutationsTestTS.png)
  - ![](./images/mutationsTestTS1.png)
    - "as" keyword --treat state object same as GlobalState

- Updating Mutations Test File II: Second Solution

  - 2nd possible approach will be importing the state.ts to the mutations test, instead of using the as keyword

  ```js
  // mutations test ts
  import state from "@/store/state";

  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      // const state = { isLoggedIn: false } as GlobalState; // "as" --treat state object same as GlobalState
      const startingState = state();
      mutations.LOGIN_USER(startingState);
      expect(startingState.isLoggedIn).toEqual(true);
    });
  });
  ```

  - the advantage of this approach is using something that is closer to the real world, contradict to mock the complex object, but in this case this globalstate is our object

  - but as for other developer better approach, "as keyword" approach are much better that this importing state

- TypeScript Partial Type

  - a special type in TS that does accepts an interface and it makes all the properties of that interface optional when declaring a type
  - ![](./images/partialType.png)
  - ![](./images/partialType1.png)
  - ![](./images/partialType2.png)
  - ![](./images/partialType3.png)
  - ![](./images/partialType4.png)
  - special keyword "partial" is a built into TS, no need to import `const variableName: Partial<interface> = {}` --partial does is takes the given interface we provide and makes all of its properties optional when it comes to its type

  ```js
  // Partial Type
  import { GlobalState } from "@/store/types";

  const state: GlobalState = {
    isLoggedIn: true,
    jobs: [],
    selectedJobTypes: [],
    selectedOrganizations: [],
  };

  const state1: Partial<GlobalState> = {};

  const state2: Partial<GlobalState> = {
    isLoggedIn: true,
    selectedOrganizations: [],
  };

  const test = (str: any) => {};
  ```

- Creating a Store Factory Function

  - define factory function at mutation test
    - exact same thing as if we invoked state (basically gives us an object with 4 properties in state)
    - allow parameter to accept an optional parameter config to be a partial GlobalState

  ```js
  // mutation test
  describe("mutations", () => {
    const createState = (config: Partial<GlobalState> = {}): GlobalState => {
      const initialState = state();
      return { ...initialState, ...config };

      // NOTE: partial type config will validate if have the right properties then if has argument, it will override the initialState to focus only on a given argument
    };
    describe("LOGIN_USER", () => {
      it("logs the user in", () => {
        const startingState = createState({ isLoggedIn: false });
        mutations.LOGIN_USER(startingState);
        expect(startingState.isLoggedIn).toBe(true);

        //expect(state).toEqual({ isLoggedIn: true });
      });
    });
  });
  ```

- Updating Mutations Test: Our Next Problem

  ```js
  // mutations test
  describe("mutations", () => {
    const createJob = (config: Partial<Job> = {}): Job => ({
      id: 1,
      title: "Angular Developer",
      organization: "Vue and Me",
      degree: "Master's",
      jobType: "Intern",
      locations: ["Lisbon"],
      minimumQualifications: [],
      preferredQualifications: [],
      description: [],
      dateAdded: "2021-07-04",
      ...config,
    });

    describe("RECEIVE_JOBS", () => {
      it("receives jobs from API response", () => {
        // const state = { jobs: [] };

        const startingState = createState({ jobs: [] });
        const job1 = createJob();
        const job2 = createJob();

        mutations.RECEIVE_JOBS(startingState, [job1, job2]); //2nd argument --array of jobs that will be overwrite the jobs state(validating the receive_jobs mutations is correctly overwriting jobs property )
        expect(startingState.jobs).toEqual([job1, job2]);
      });
    });
  });
  ```

- Adding Types to Getters File

  - ![](./images/gettersTS2.png)
  - ![](./images/gettersTS.png)
  - ![](./images/gettersTS1.png)
    - No need to specify Job interface at the forEach of jobs iteration as we properly annotated GlobalState interface at state parameter. TS knows that we have an array of Job at the GlobalState and understand that each array of Job has its own property of organization while
  - ![](./images/gettersTS3.png)
    - getters that has a returning funtion, TS does not know the array of Job in GlobalState, therefore we need to explicitly declare the Job interface at the job parameter for returning function
  - ![](./images/gettersTS4.png)

    ```js
    // getters TS
    import { GlobalState } from "@/store/types";
    import { Job } from "@/api/types";

    const getters = {
      [UNIQUE_ORGANIZATIONS](state: GlobalState) {
      const uniqueOrganizations = new Set<string>(); //  new Set: string[]
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations; // setting a generic type for the Set returning in this getter method
    },
    }
    ```

  - ![](./images/gettersTS5.png)

    - NOTE:
      - in `UNIQUE_ORGANIZATION` getter, we are properly annotating the state as GlobalState, but TS is assuming that the return value for uniqueOrganization is going to be a `Set`, holding unknown type. And thats because TS doesnt understand that our `Set` is holding a string for the job.organization property as we create uniqueOrganization variable at line 14, TS has no clue what values Set will contain. Solution? use the generics type
      - if TypeScript makes the incorrect inference, if it makes the incorrect assumption, and if you need to provide a little bit more clarity, feel free to add it. Otherwise, if TypeScript is making the correct inference such as it did with Job right here, there's really no reason to add that additional explicit type unless you really want to.

  ```js
  // getters ts
  import { GlobalState } from "@/store/types";
  import { Job } from "@/api/types";

  interface IncludeJobGetters {
    INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean; // this getter method accepts a single parameter called that has Job type, and the return value of this getter method is going to be a boolean type
    INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  }

  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter(
        (job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job)
        // invoking INCLUDE_JOB_BY_ORGANIZATION, vuex will automatically pass the state, then returning function in will now have access to the job(current job in iteration) being pass as the argument.
      )
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job)); // behind the scene, vue auto gives us the state and automatically invokes the getter with the state as the 1st argument. And if that getter method returns a functon, it provides the function automatically
    }
  ```

- Create Util File for Factory Functions

  - create regular TS file for utils that other test file can import

  ```js
  // utils.js
  import state from "@/store/state";
  import { GlobalState } from "@/store/types";
  import { Job } from "@/api/types";

  export const createState = (
    config: Partial<GlobalState> = {}
  ): GlobalState => {
    const initialState = state();
    return { ...initialState, ...config };

    // NOTE: partial type config will validate if have the right properties then if has argument, it will override the initialState to focus only on a given argument
  };

  export const createJob = (config: Partial<Job> = {}): Job => ({
    id: 1,
    title: "Angular Developer",
    organization: "Vue and Me",
    degree: "Master's",
    jobType: "Intern",
    locations: ["Lisbon"],
    minimumQualifications: [],
    preferredQualifications: [],
    description: [],
    dateAdded: "2021-07-04",
    ...config,
  });
  ```

- Updating Getters Test file

  - rename getter js test to getter ts test

  ```js
  import { createState, createJob } from "./utils";

  describe("getters", () => {
    describe("UNIQUE_ORGANIZATION", () => {
      it("finds unique organizations from list of jobs", () => {
        const jobs = [
          createJob({ organization: "Google" }),
          createJob({ organization: "Amazon" }),
          createJob({ organization: "Google" }),
        ];
        const state = createState({ jobs });

        const results = getters.UNIQUE_ORGANIZATIONS(state);
        expect(results).toEqual(new Set(["Google", "Amazon"]));
      });
    });

    describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
      describe("when the user has not selected any organization", () => {
        it("includes job", () => {
          const state = createState({
            selectedOrganizations: [],
          });
          const job = createJob({
            organization: "Google",
          });
          const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
          expect(includeJob).toBe(true);
        });

        it("identifies if job is associated woth given organizations", () => {
          const state = createState({
            selectedOrganizations: ["Google", "Microsoft"],
          });
          const job = createJob({
            organization: "Google",
          });
          const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
          expect(includeJob).toBe(true);
        });
      });
    });
    describe("FILTERED_JOBS", () => {
      it("filter jobs by organization and job type", () => {
        const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
        const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);

        const mockGetters = {
          INCLUDE_JOB_BY_ORGANIZATION,
          INCLUDE_JOB_BY_JOB_TYPE,
        };

        const job = createJob({ id: 1, title: "Best Job Ever" });
        const state = createState({
          jobs: [job],
        });

        const result = getters.FILTERED_JOBS(state, mockGetters);
        expect(result).toEqual([job]);
        expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
        expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      });
    });
  });
  ```

- Upadatig Vuex Actions

  - convert the file into TS
  - TS does not understand the context that the action pass as a parameter. The parameter context implicitly has an any type so we need to be more specific
    - ![](./images/actionTS.png)
  - In this action, we really need context to be an object with commit method.
    - ![](./images/actionTS1.png)
  - But in reality, the context object is a bit more complex, it has a lot more properties and method, but for the purpose of this action method, all it really cares is having the commit method be properly defined
    - ![](./images/actionTS2.png)
    - ![](./images/actionTS3.png)

  ```ts
  import { Commit } from "vuex"; // Commit --interface that is available from the Vue library
  import getJobs from "@/api/getJob";
  import { FETCH_JOBS, RECEIVE_JOBS } from "@/store/constants";

  interface Context {
    commit: Commit; // Commit --interface that define specific function that takes a specific parameters with specific types and return a specific value rather than using ActionContext interface at Vuex Library that will be useful if we have many properties and method in the context object
  } // this context object will have a commit methiod that has the Commit interface

  const actions = {
    [FETCH_JOBS]: async (context: Context) => {
      const jobListings = await getJobs();
      context.commit(RECEIVE_JOBS, jobListings); // RECEIVE_JOBS(state, jobListings) --run an existing mutations to pass jobListings data fetch in API
    },
  };

  export default actions;
  ```

- Mocking API calls with TypeScript
  - update the action JS test file into TS test file
  - ![](./images/actionTSMockingAPI.png)
    - TS does not understand `mockResolvedValue()`. As we jestMock the API getJobs file, TS does not understand that we use `jest.mock(path)` syntax to mock our original implementation. TS still thinks it has the original implementation and the original implementation does not have `mockResolvedValue()` method thats why TS is complaining.
      - Solution? communicate to TS that `jest.mock()` effectively changed the type of the `getJobs` to be a jest.mock function. Use the `as` syntax to treat `getJobs` as a jest mock function which indeed does have a mockResolvedValue() method on it. `jest.Mock()` --is an interface in the jest library. It is a type that describes a specific function.
        - ![](./images/actionTSMockingAPI1.png)
        - ![](./images/actionTSMockingAPI2.png)
        - ![](./images/actionTSMockingAPI3.png)
      - NOTE: `getJobsMock` and `getJobs` are both references to the exact function, we have not change anything in the implementation, instead we have changed is the type recognition for TS
      - here in line 22, we cant still use either getJobs or getJobsMock as they are still referencing the exact same function. All this is is a different name for the same object with a different type interpretation.
        - ![](./images/actionTSMockingAPI4.png)
- Adding Types to Vuex Composables

  - update the js file to ts file of the composables file
  - the return value of useFilteredJobs is `ComputedRef<any>` --this is kind of the parent type representing the vue computed reactive object and has the generic syntax that thinks that the internal value that the reactive object returning is kind of wrapping in any type
    - ![](./images/composablesTS.png)
  - in other word, TS doesnt understand that what we are returning here is a reactive object of an array of job objects and TS doesnt understand what is the types of that internal value. Solution? importing the Job interface and use a generic bracket syntax for the generic types

    - ![](./images/composablesTS1.png)
    - ![](./images/composablesTS2.png)
    - ![](./images/composablesTS3.png)

```js
// composables.ts
/*  GETTERS */
export const useFilterJobs = () => {
  const store = useStore();
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]); // <Job[]> --represents the array of types of the internal value of the reactive object as this return an array of filtered jobs
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]); // <Set<string>> --this generic is going to be a set consisting of string values or string types and then the computed function is going return a reactive object that is storing that set of string types
};

export const useUniqueOrganizations = () => {
  const store = useStore();
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

/*  ACTIONS */
export const useFetchJobsDispatch = async () => {
  const store = useStore();
  store.dispatch(FETCH_JOBS);
};

```

- NOTE:

  - whenever we use computed anywhere in a TS file, it accepts a generic(`<T>`) which means we can use this bracket syntax and provide the type that we want to represent. And what that type will represents is the type of the value that the reactive object will wrap
  - There is almost 3 different levels of type definition
    - 1: Highest level --the return value is computed object that is a type
      - ![](./images/composablesTS6.png)
    - 2: Specific --computed reactive object storing a set
      - ![](./images/composablesTS4.png)
    - 3: More specific --computed reactive object storing a set of string types
      - ![](./images/composablesTS5.png)

- Updating Composable Test

  - same as the above error at Mocking API calls in action, use the `as` syntax to mock the useStore `mockReturnValue()` method
    - ![](./images/composablesTSTest.png)

- Adding Types to Index File

  - update the index.js in store to index.ts
  - ![](./images/indexStoreTS.png)
  - ![](./images/indexStoreTS1.png)
    - NOTE: TS understand all of our typing throughtout various part of the code base in various files because the more type annotaion that we provide, the more TS is able to understand how all these pieces work together and is thus more likely to identify any potential errors

- REVIEW:
  - ![](./images/sec32Rev.png)
  - ![](./images/sec32Rev1.png)
  - ![](./images/sec32Rev2.png)
  - ![](./images/sec32Rev3.png)
  - ![](./images/sec32Rev4.png)

## Section 33: TypeScript and Vue

- Adding Type Annotation for ProfileImage Component

  - applying TS to actual vue component
  - NOTE:
    - were able to use Option API components or Composition API component in TS and
    - we dont need to change the file name, we only need to add a couple of lines of syntax
    - TS will not be enabled by default, need to explicitly declare `lang = "ts"` in the script tag
    - the import special function of defineComponent vue, then wrap our configuration object. defineComponent function
      - ![](./images/ProfileImageTS.png)
      - ![](./images/ProfileImageTS1.png)
        - defineComponent() function
          - does behind the scenes is it provides all those complex types and all of those either scenarios, either options API or composition API
          - it does is for communicationg TS that were working for a specific vue component object rather than a regular JS object
    - we are able to use TS syntax within the defineComponent config object in defining types
      - ![](./images/ProfileImageTS2.png)
      - ![](./images/ProfileImageTS3.png)
  - Updating corresponding test suite for ProfileImage Component
    - convert js file into ts file
      - ![](./images/ProfileImageTSTest.png)
      - ![](./images/ProfileImageTSTest1.png)

- Adding Type Annotation for MainNav Component

  - add the `lang="ts"` syntax in the script tag then import the defineComponent function
  - update the test file for mainNav component then rename file into TS

  ```ts
  // MainNav test
  import { GlobalState } from "@/store/types";

  describe("MainNav", () => {
    interface MockStore {
      state: Partial<GlobalState>;
    }
    // NOTE: no need to add the complexity of the whole store object type as the store also has properties(getters, action and mutation) and method(commit & dispatch). Use the `Partial<>` type for a much more specific test

    // factory function
    const createConfig = ($store: MockStore) => ({
      global: {
        mocks: {
          $store,
        },
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });

    it("dispalys company name", () => {
      const $store = {
        state: {
          isLoggedIn: false,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      expect(wrapper.text()).toMatch("Bobo Careers");
    });
  });
  ```

- Adding Type Annotation for Headline Component

  - whenever were going to see TS violations in a vue component, is because the TS inference didnt work exastly as it should, to fix? explicitly and manually tell TS the correct type
  - Problem 1:

    - ![](./images/HeadlineCompTS.png)
    - ![](./images/HeadlineCompTS1.png)
      - `[x: number]` is not a literal property, its just an arbitrary name that its providing
      - the syntax is trying to say TS thinks that were going to have some kind of property, it doesnt really matter what its actual value is, excepts its going to be a number. We need a string as the action data is reurning a str resulting for a violatoions
      - to solve, explicitly declaring the correct type

    ```js
    import { defineComponent } from "vue";

    interface ActionClasses {
      [x: string]: true;
    }

    export default defineComponent({
      computed: {
        actionClasses(): ActionClasses {
      return {
        [this.action.toLowerCase()]: true,
      };
      },
    });
    ```

  - Problem 2:

    - ![](./images/HeadlineCompTS2.png)
    - ![](./images/HeadlineCompTS3.png)
      - clearInterval() argument has an optional type of either number or undefined, resulting to return of void. This is because the interval state is being declared to null. The problem is the setInterval() function return a number type
      - to solve?
      - ![](./images/HeadlineCompTS4.png)
      - ![](./images/HeadlineCompTS5.png)
        - we are going to provide clearInterval with a type number when setInterval logic executes
        - clarify to TS that interval in data, can now be either a number or undefined by defining an interface to describe the return value of the data object

    ```js
    import { defineComponent } from "vue";

    interface Data {
      action: string;
      interval?: number;
    }

    export default defineComponent({
      data(): Data {
        return {
          action: "Build",
          interval: undefined,
        };
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
    ```

- Using TS with Composition API (Accordion Component)

  - ![](./images/AccordionCompTS.png)
  - ![](./images/AccordionCompTS3.png)
  - ![](./images/AccordionCompTS2.png)
  - ![](./images/AccordionCompTS4.png)

- Adding Type Annotations to ActionButton Component

  - ![](./images/ActionButtonCompTS.png)
  - ![](./images/ActionButtonCompTS1.png)
  - ![](./images/ActionButtonCompTS2.png)

    - to solve the violator in the const type, make the validator method into arrow function
    - If a validator function is present in any prop, the type inference breaks. Interestingly, if the validator is an arrow-function it it works. Reference: `https://github.com/vuejs/core/issues/2738`

  - ![](./images/ActionButtonCompTS3.png)
  - ![](./images/ActionButtonCompTS4.png)

- Annotating Event Handlers

  - NOTE:
    - the core TS lang includes built in interfaces for browser events
    - for general browser events such as clicks, such as inputs, etc., anything that we react to with the v-on directive in vue, you're going to define a method that's going to accept that browser event, and you can immediately provide it with the type of event which should be available immediately in TypeScript. And as a reminder, event is just an interface that is globally available. Its going to be available globally in any project that implements TS
      - ![](./images/TextInputCompTS.png)
      - ![](./images/TextInputCompTS1.png)
      - ![](./images/TextInputCompTS2.png)
    - event.target will going to give us an actual element from the DOM represented as a JS object. Target will always be referencing a valid HTML element but TypeScript doesn't know what it is and thus it doesn't know what properties it has. --to solve? use the `as` syntax referencing to a HTMLInputElement interface and treat as an actual element
      - ![](./images/TextInputCompTS3.png)
      - ![](./images/TextInputCompTS4.png)
      - ![](./images/TextInputCompTS5.png)
      - ![](./images/TextInputCompTS6.png)

- Adding Type Annotations to HeaderContiner Component

  - add `lang` syntax at the `<script>` tag then import defineComponent and invoke at the config object

- Adding Type Annotations to Subnav Component

  - add `lang` syntax at the `<script>` tag then import defineComponent and invoke at the config object
  - for test, use the `as` syntax fo jest.mock composable as the TS doesnt recongnize the mockReturnedValue()
    - ![](./images/subnavCompTS.png)

- Adding Types for Composables I

  - ![](./images/composablesTypes.png)
  - ![](./images/composablesTypes1.png)
  - ![](./images/composablesTypes2.png)
  - ![](./images/composablesTypes3.png)
  - ![](./images/composablesTypes4.png)
    - NOTE:
      - parseInt method expects to receive a string type as its 1st arguments
      - route.query.page could be another type of value which is this location query value array and can only take an argument of either string or an array
  - ![](./images/composablesTypes5.png)

- Adding Types for Composables II

  - currentPage and maxPage being pass as a parameter are reactive object that have a value property, and TS cant figure out what their types are.
    - ![](./images/composablesTypes6.png)
  - in our test, we use a simpler JS objects that simply had a value property rather than using a complete vue reactive object such as ref function to avoid decoupled in implementation
    - ![](./images/composablesTypes7.png)

- Annotating Axios Request (Spotlight Component)

  - TS does not interference types for an endpoint(e.g spotlight), to solve? use interface and declare an annotation of generic type to that endpoint
    - ![](./images/axiosTypes.png)
    - ![](./images/axiosTypes1.png)
    - ![](./images/axiosTypes2.png)
    - ![](./images/axiosTypes3.png)
    - ![](./images/axiosTypes4.png)
  - One more additional place where we can provie more description to TS about what its receiving in get() method.
    - ![](./images/axiosTypes5.png)
    - ![](./images/axiosTypes6.png)
    - By default, TS is only looking at your code in the editor before its actually running in the browser.
    - TS cannot make an API request and figure out what the shape of the response from endpoint going to look like. to solve? use an interface and declare an annotation of generic type similar to the response from response from endpoint gonng to look like
    - ![](./images/axiosTypes7.png)

- Annotating getJobs API Function

  - same scenario at annotation for axios request

  ```ts
  import axios from "axios";
  import { Job } from "@/api/types";

  const getJobs = async () => {
    const baseURL = process.env.VUE_APP_API_URL;
    const response = await axios.get<Job[]>(`${baseURL}/jobs`); // TS cannot make an API reqs and interfer what the shape of the response from endpoint going to look like, to solve? same as above enpoint declaring generic type annotation
    return response.data;
  };

  export default getJobs;

  // test
  import axios from "axios";
  jest.mock("axios");

  import getJobs from "@/api/getJob";

  const axiosGetMock = axios.get as jest.Mock; // not just axios but also the get() method

  describe("getJob", () => {
    beforeEach(() => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            id: 1,
            title: "Java Engineer",
          },
        ],
      });
    });
  });
  ```

- Adding Annotation Type for JobList Component

  - NOTE:
    - theres no concept of interfaces in JS, only in TS.
      - ![](./images/propType.png)
    - Thats why `type: Object` in props property, TS doesnt understand that it is going to be specifically a `props.job` so it cant validate `.id` of what idea is going to be, it assumes that job is going to be some kind of object with properties of id, if it exists, and going to add value to some kind of data type of any and if not exist, undefined
      - ![](./images/propType1.png)
    - how can we do to TS in order to understand while still using the old school vue syntax of props?
      - we will import and use special type from vue called `PropType`
        - PropType --the way its work is same as we use the `as` keyword and provide the specific object type by using generic type argument to PropType
        - `type: Object as PropType<Job>` --proptype --data type that is fundamentally a prop that implements the job interface
      - ![](./images/propType2.png)
  - Test Suite:
    - ![](./images/propType3.png)
    - ![](./images/propType4.png)
    - ![](./images/propType5.png)
    - ![](./images/propType6.png)

- Adding Annotation Type for JobListings Component

  - convert the script tag into `lang="ts"` and import defineComponent method in vue and invoke at the config object
  - update the test file for JobListings component
    - ![](./images/jobListingsType.png)
    - ![](./images/jobListingsType1.png)

- Adding Annotation Type for JobFilterSidebar Component

  - convert the script tag into `lang="ts"` and import defineComponent method in vue and invoke at the config object

- Writing test for JobFilterSidebar Component

  - NOTE: prop() --method that is going to return the complete props object where the keys and properties are going to be the props

  ```js
  import { shallowMount } from "@vue/test-utils";
  import JobFilterSidebar from "@/components/JobResults/JobFilterSideBar/JobFilterSidebar.vue";

  import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
  jest.mock("@/store/composables");

  const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
  const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

  describe("JobFilterSidebar", () => {
    it("allow user to filter jobs by organization", () => {
      useUniqueOrganizationsMock.mockReturnValue(new Set(["Google", "Amazon"]));
      useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
      const wrapper = shallowMount(JobFilterSidebar);
      const organizationFilter: any = wrapper.findComponent(
        "[data-test='filter-organizations']"
      );

      // @ts-ignore
      const { header, uniqueValues, mutation } = organizationFilter.props(); // return complete props object from the component
      expect(header).toBe("Organization");
      expect(uniqueValues).toEqual(new Set(["Google", "Amazon"]));
      expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
    });

    it("allow user to filter jobs by job types", () => {
      useUniqueOrganizationsMock.mockReturnValue(new Set(["Google", "Amazon"]));
      useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
      const wrapper = shallowMount(JobFilterSidebar);
      const jobTypeFilter: any = wrapper.findComponent(
        "[data-test='filter-jobTypes']"
      );

      // @ts-ignore
      const { header, uniqueValues, mutation } = jobTypeFilter.props(); // return complete props object from the component
      expect(header).toBe("Job Types");
      expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
      expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
    });
  });

  ```

- Adding Annotation Type for JobFilterSidebarCheckboxGroup Component

  - convert the script tag into `lang="ts"` and import defineComponent method in vue and invoke at the config object
  - ![](./images/jobFIlterSidebarCheckboxGroupTypes.png)
  - ![](./images/jobFIlterSidebarCheckboxGroupTypes1.png)
  - ![](./images/jobFIlterSidebarCheckboxGroupTypes2.png)
  - NOTE:
    - when using useStore() function from vuex in actual component, it doesnt recognize type interference.

- Annotating Store for useStore in Component

  - ![](./images/useStoreType.png)
  - ![](./images/useStoreType1.png)
    - NOTE:
      - `const key: InjectionKey<Store<State>> = Symbol()` --injection key function accepts a generic type of Store, then the generic Store also accepts an interface of State --Symbol() is a brand new primitive type in ES6 and represents basically an immutable key for a property for an object
  - ![](./images/useStoreType2.png)
  - ![](./images/useStoreType3.png)
  - ![](./images/useStoreType4.png)

  ```js
  // index.ts for store
  import { InjectionKey } from "vue";
  import { createStore, Store } from "vuex";

  export const key: InjectionKey<Store<GlobalState>> = Symbol(); // injectionkey accepts a generic type of Store as argument then Store also accepts generic type of GlobalState interface as argument

  const store =
    createStore <
    GlobalState >
    {
      state,
      mutations,
      getters,
      actions,
      strict: process.env.NODE_ENV !== "production",
    };
  export default store;

  // main.ts
  import store, { key } from "@/store";

  createApp(App)
    .use(store, key)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");

  // JobFilterSidebarCheckboxGroup component
  import { key } from "@/store";

  setup() {
    const store = useStore(key);
    const router = useRouter();

    const selectedValues = ref<string[]>([]);


    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };

    return { selectedValues, selectValue };
  }

  ```

- Updating Tests for JobFiltersSidebarCheckboxGroup Component

  - Declare type for props interpolated at the template section by using `PropType` to the option API syntax of props

  ```js
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
  ```

  - ![](./images/JobFilterCheckboxTsTest.png)
    - setChecked() error --means part of the objects private interface, which means its a method that the developers of vue test utils dont actually want to use but can technically able to use it because in JS there is no real concept of privacy. TS want it to be private
  - ![](./images/JobFilterCheckboxTsTest1.png)
    - setChecked is private means its part of the interbal implementation of the DOMWrapper class --its a method that the developers of vue test utils use in their own code buy they dont want us to be using is in our end
    - solution?
    - ![](./images/JobFilterCheckboxTsTest2.png)
    - instead of using setChecked() method, use the setvalue() method then set it to boolean of true for checkbox input

- Adding Annotation Type for JobSearchForm Component

  - convert the script tag into `lang="ts"` and import defineComponent method in vue and invoke at the config object
  - and for the test file for this component, change the file into ts file. Upon converting into TS, jest.Mock useRouter

- Adding Types for Utility Functions

  - convert the file extension into .ts
  - ![](./images/nextElementTS.png)
  - ![](./images/nextElementTS1.png)
  - ![](./images/nextElementTS2.png)

- Adding Type Annotations to Hero and App Components

  - ![](./images/Hero&AppTS.png)
  - component being shown upon searching `<script>` are the component not still turn into ts component
  - the convert the script tag into `lang="ts"` and import defineComponent method in vue and invoke at the config object

- Updating Composable to useStoreKey()

  - ![](./images/UpdateKeyAtComposables.png)

- Updating Router File

  - convert the index.js file into .ts in the router folder
    - ![](./images/updateRouterTS.png)

- REVIEW:
  - ![](./images/sec33Rev.png)
  - ![](./images/sec33Rev1.png)
  - ![](./images/sec33Rev2.png)
  - ![](./images/sec33Rev3.png)
  - ![](./images/sec33Rev4.png)

## Section 34: Building a Feauture with TypeScript

- User Story

  - ![](./images/sec34User.png)
  - ![](./images/sec34User1.png)

- Adding /degrees Endpoint

  - ![](./images/degreesEndpoint.png)

- TDD for API Call: getDegrees API Call

  ```ts
  // create interface for degree at types.ts --API
  export interface Degree {
    id: number;
    degree: string;
  }

  // create a file for getDegrees.ts
  import axios from "axios";
  import { Degree } from "@/api/types";

  const getDegrees = async () => {
    const baseURL = process.env.VUE_APP_API_URL;
    const response = await axios.get<Degree[]>(`${baseURL}/degrees`); // TS cannot make an API reqs and interfer what the shape of the response from endpoint going to look like, to solve? same as above enpoint declaring generic type annotation
    return response.data;
  };

  export default getDegrees;

  // create a test for getDegrees.ts
  import axios from "axios";
  jest.mock("axios");

  import getDegrees from "@/api/getDegrees";

  const axiosGetMock = axios.get as jest.Mock;

  describe("getDegrees", () => {
    beforeEach(() => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            id: 1,
            degree: "Master's",
          },
        ],
      });
    });

    it("fetches degrees", async () => {
      await getDegrees();
      expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/degrees");
    });

    it("extracts degrees data from response", async () => {
      const data = await getDegrees();
      expect(data).toEqual([
        {
          id: 1,
          degree: "Master's",
        },
      ]);
    });
  });
  ```

- TDD for State: Starting State for Degrees

  ```ts
  // for the test, add an it function for store degree
  import state from "@/store/state";

  describe("state", () => {
    it("stores degrees for job requirements", () => {
      const startingState = state();
      expect(startingState.degrees).toEqual([]);
    });
  });

  // at types.ts --store, add degrees property on the GlobalState interface then set to the Degree interface
  import { Job, Degree } from "@/api/types"; // interface for Job in API

  export interface GlobalState {
    isLoggedIn: boolean;
    jobs: Job[];
    degrees: Degree[];
    selectedJobTypes: string[];
    selectedOrganizations: string[];
  }

  // add degrees property on state.ts then set to empty array
  import { GlobalState } from "@/store/types";

  const state = (): GlobalState => {
    return {
      isLoggedIn: false,
      jobs: [],
      degrees: [],
      selectedJobTypes: [],
      selectedOrganizations: [],
    };
  };

  export default state;
  ```

- TDD for Mutations: RECEIVE_DEGREES

  ```ts
  // create a helper function to degree --utils.ts
  import { Degree } from "@/api/types";
  export const createDegree = (config: Partial<Degree> = {}): Degree => ({
    id: 1,
    degree: "Associate",
    ...config,
  });

  // in test, add describe funtion for RECEIVE_DEGREES
  describe("RECEIVE_DEGREES", () => {
    it("receives degrees from API response", () => {
      const startingState = createState({ degrees: [] });
      const degree1 = createDegree();
      const degree2 = createDegree();
      mutations.RECEIVE_DEGREES(startingState, [degree1, degree2]);
      expect(startingState.degrees).toEqual([degree1, degree2]);
    });
  });

  // create a constant dynamic for RECEIVE_DEGREES

  export const RECEIVE_DEGREES = "RECEIVE_DEGREES";

  // create RECEIVE_DEGREES in mutations.ts
  import { GlobalState } from "@/store/types";
  import { Degree } from "@/api/types";

  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  ```

- TDD for Actions: FETCH DEGREES

  ```ts
  // for test
  import getDegrees from "@/api/getDegrees";
  jest.mock("@/api/getDegrees");
  const getDegreesMock = getDegrees as jest.Mock;

  describe("action", () => {
    describe("FETCH_DEGRESS", () => {
      beforeEach(() => {
        getDegreesMock.mockResolvedValue([
          {
            id: 1,
            dgrees: "Master's",
          },
        ]);
      });

      it("makes request to  fetches degree", async () => {
        const context = { commit: jest.fn() };

        await actions.FETCH_DEGREES(context);
        expect(getDegrees).toHaveBeenCalled();
      });

      it("sends message to save received degree in store", async () => {
        const commit = jest.fn();
        const context = { commit };
        await actions.FETCH_DEGREES(context);
        expect(commit).toHaveBeenCalledWith("RECEIVE_DEGREES", [
          {
            id: 1,
            dgrees: "Master's",
          },
        ]);
      });
    });
  });

  // adding constant for FETCH_DEGREES
  export const FETCH_DEGREES = "FETCH_DEGREES";

  // create FETCH_DEGREES actions
  import getDegrees from "@/api/getDegrees";
  import {
    FETCH_DEGREES,
    RECEIVE_DEGREES,
  } from "@/store/constants";

  [FETCH_DEGREES]: async (context: Context) => {
    const degree = await getDegrees();
    context.commit(RECEIVE_DEGREES, degree);
  },
  ```

- TDD for Getters: UNIQUE_DEGREES

  ```ts
  // for tes, create a describe function for UNIQUE_DEGREES

  describe("UNIQUE_DEGREES", () => {
    it("extract unique degrees values ", () => {
      const degrees = [
        createDegree({ degree: "Master's" }),
        createDegree({ degree: "Bachelor's" }),
      ];
      const state = createState({
        degrees,
      });
      const result = getters.UNIQUE_DEGREES(state);
      expect(result).toEqual(["Master's", "Bachelor's"]);
    });
  });
  ```

- TDD for State: selectedDegrees

  ```ts
  // add it function in the state test for the selectedDegrees
  it("stores degrees that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedDegrees).toEqual([]);
  });

  // add selectedDegrees at the GlobalState store type
  import { Job, Degree } from "@/api/types"; // interface for Job in API

  export interface GlobalState {
    isLoggedIn: boolean;
    jobs: Job[];
    degrees: Degree[];
    selectedJobTypes: string[];
    selectedOrganizations: string[];
    selectedDegrees: string[];
  }

  // create selectedDegrees property at the store state to an empty array
  import { GlobalState } from "@/store/types";

  const state = (): GlobalState => {
    return {
      isLoggedIn: false,
      jobs: [],
      degrees: [],
      selectedJobTypes: [],
      selectedOrganizations: [],
      selectedDegrees: [],
    };
  };

  export default state;
  ```

- TDD for Getters: INCLUDE_JOB_BY_DEGREE

  ```ts
  // add describe function test for INCLUDE_JOB_BY_DEGREE
  describe("INCLUDE_JOB_BY_DEGREE", () => {
    describe("when the user has not selected any degree", () => {
      it("includes job", () => {
        const state = createState({
          selectedDegrees: [],
        });
        const job = createJob({
          degree: "Master's",
        });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated with given degrees", () => {
        const state = createState({
          selectedDegrees: ["Master's", "Bachelor's"],
        });
        const job = createJob({
          degree: "Master's",
        });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  // add dynamic constant name for INCLUDE_JOB_BY_DEGREE
  export const INCLUDE_JOB_BY_DEGREE = "INCLUDE_JOB_BY_DEGREE";

  // then create INCLUDE_JOB_BY_DEGREE getter for selectedDegrees state
  [INCLUDE_JOB_BY_DEGREE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedDegrees.length === 0) return true;

    return state.selectedDegrees.includes(job.degree);
  },
  ```

- TDD for Getters: FILTERED_JOBS

  ```ts
  // add the INCLUDE_JOB_BY_DEGREE in the describe function of FILTERED_JOBS at the getters test
  describe("FILTERED_JOBS", () => {
    it("filter jobs by organization, job type and degree", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true);

      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
      };

      const job = createJob({ id: 1, title: "Best Job Ever" });

      const state = createState({
        jobs: [job],
      });

      const result = getters.FILTERED_JOBS(state, mockGetters);

      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREE).toBeCalledWith(job);
    });
  });

  // add dynamic constant
  export const INCLUDE_JOB_BY_DEGREE = "INCLUDE_JOB_BY_DEGREE";

  // add another filter method for INCLUDE_JOB_BY_DEGREE under FILTERED_JOBS getter
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter(
        (job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job)
      )
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job));
  },
  ```

- TDD for Mutations: ADD_SELECTED_DEGREES

  ```ts
  // add describe function for ADD_SELECTED_DEGREES test
  describe("ADD_SELECTED_DEGREES", () => {
    it("keeps track of which the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedDegrees: [] });
      mutations.ADD_SELECTED_DEGREES(startingState, ["Master's", "Bachelor's"]);
      expect(startingState.selectedDegrees).toEqual(["Master's", "Bachelor's"]);
    });
  });

  // create dynamic constant varbibale for ADD_SELECTED_DEGREES then import to the mutations file
  export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";

  // then create a mutation for ADD_SELECTED_DEGREES
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  ```

- TDD for Composables: useUniqueDegrees

  ```ts
  // add describe function for useUniqueDegrees composables
  describe("useUniqueDegrees", () => {
    it("retrieves unique degrees from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_DEGREES: ["Master's"],
        },
      });
      const result = useUniqueDegrees();
      expect(result.value).toEqual(["Master's"]);
    });
  });

  //  then create useUniqueDegrees composables
  export const useUniqueDegrees = () => {
    const store = useStore(key);
    return computed<string[]>(() => store.getters[UNIQUE_DEGREES]);
  };
  ```

- TDD for Component: JobFiltersSidebar

  ```ts
  // import useUniqueDegrees from composables then mock it --add "it" function for filter jobs by degrees
  import {
    useUniqueDegrees,
  } from "@/store/composables";
  jest.mock("@/store/composables");

  const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

  it("allow user to filter jobs by degrees", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google", "Amazon"]));
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueDegreesMock.mockReturnValue(["Master's", "Bachelor's"]);

    const wrapper = shallowMount(JobFilterSidebar);
    const degreesFilter = wrapper.findComponent("[data-test='filter-degrees']");

    // @ts-ignore
    const { header, uniqueValues, mutation } = degreesFilter.props(); // props() method --return the complete props object from the component
    expect(header).toBe("Degrees");
    expect(uniqueValues).toEqual(["Master's", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });

  // create a constant for useUniqueDegrees in the setup config, then interpolate at the template of the component
  import {
  useUniqueDegrees,
  } from "@/store/composables";

  setup() {

    const uniqueDegrees = useUniqueDegrees();
    return {
      uniqueDegrees,
    };
  },

  // template
  <job-filter-sidebar-checkbox-group
        header="Degrees"
        :unique-values="uniqueDegrees"
        :mutation="ADD_SELECTED_DEGREES"
        data-test="filter-degrees"
      />
  ```

- TDD for Composable: useFetchDegreesDispatch

  ```ts
  // add describe function block for useFetchDegreesDispatch
  import { useFetchDegreesDispatch } from "@/store/composables";

  describe("useFetchDegreesDispatch", () => {
    it("calls fetch degrees at action API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchDegreesDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_DEGREES");
    });
  });

  // then create an useFetchDegreesDispatch composables
  export const useFetchDegreesDispatch = async () => {
    const store = useStore(key);
    store.dispatch(FETCH_DEGREES);
  };
  ```

- TDD for lifecycle hook: onMounted()

  ```ts
  // add "it" function for useFetchDegreesDispatch test
  import {
  useFetchDegreesDispatch,
  } from "@/store/composables";

  it("makes call to fetch degrees from API", () => {
      useFilterJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue({ value: 2 });
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 1,
        nextPage: 3,
      });
      shallowMount(JobListings, createConfig());
      expect(useFetchDegreesDispatch).toHaveBeenCalled();
    });

    // then invoked useFetchDegreesDispatch method to on on onMounted() method in JobListings component
    set() {
      onMounted(useFetchDegreesDispatch);
    }
  ```

- Trying out code in browser

  - ![](./images/TSnewFeatures.png)

- REVIEW:
  - ![](./images/sec34-Rev.png)
  - ![](./images/sec34-Rev1.png)
  - ![](./images/sec34-Rev2.png)

## Section 35: Clearing Job Filters

- User Story

  - ![](./images/sec35UserStory.png)

- TDD for CLEAR_USER_JOB_FILTER_SELECTIONS Mutation

  ```ts
  // test file for mutations
  describe("CLEAR_USER_JOB_FILTER_SELECTIONS", () => {
    it("removes all job filters", () => {
      const startingState = createState({
        selectedOrganizations: ["Google"],
        selectedJobTypes: ["Full-time"],
        selectedDegrees: ["Master's"],
      });
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(startingState);
      expect(startingState.selectedOrganizations).toEqual([]);
      expect(startingState.selectedJobTypes).toEqual([]);
      expect(startingState.selectedDegrees).toEqual([]);
    });
  });

  // constant.ts
  export const CLEAR_USER_JOB_FILTER_SELECTIONS =
    "CLEAR_USER_JOB_FILTER_SELECTIONS";

  // mutations.ts
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
  },
  ```

- Wiring up Click Handler In JobFiltersSidebar

  ```html
  <template>
    <action-button
      text="Clear Filters"
      type="secondary"
      @click="clearUserJobFilterSelections"
    />
  </template>

  <script>
    import { useStore } from "vuex";
    import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

    setup(){
      const store = useStore(key);
      const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };

    return { clearUserJobFilterSelections}
    }
  </script>
  ```

- The subscribe() Method on a Store

  - subscribe() method
    - if we want something to listen to an event elsewhere, and whenever that event elsewhere occurs, we also want to take an action where the subscribe method is being invoked. Visual e.g --subscribing in a magazine that automatically has a new issue whenever new issue releases
    - subscribe method accepts is a funtion inline, and inside the arrow function, the 1st argument is going to be the mutation object (represent an object representing the mutation that is running).
    - subscribe on what going on on vuex store, then the vue will do is everytime it commits a mutation, it will emit message and we can react to that emission in a local component that subscribe is being invoked

  ```ts
  <input
    :id="value"
    v-model="selectedValues"
    :value="value"
    type="checkbox"
    class="mr-3"
    :data-test="value"
    @change="selectValue"
  />

  import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

  setup(){
    const selectedValues = ref<string[]>([]);


    store.subscribe((mutation) => {
      if (mutation.type === CLEAR_USER_JOB_FILTER_SELECTIONS) {
        selectedValues.value = [];
      }
    }); // everytime we commit a mutation, this function will automatically run and listen to the changes in the vuex store state --NOTE: this function will run every single time a mutation runs, we dont want this logic, we only want this function to be run whenever the mutation has given type (mutation.type)
  }
  ```

- Fixing Failing Tests in JobFiltersSidebarCheckboxGroup Component

  - add the subscribe method jest mock function into useStoreMock.mockReturnValue() method

  ```ts
  // JobFilterSidebarCheckboxGroup test
  useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });

  // warning error in JobFilterSidebar test for useStore(key) method
  jest.mock("vuex"); //simply mocking our vuex including useStore with a jest mock function by default and return undefined but totally fine because the only use case of useStore is to call the commit method for clearUseJobFilterSelections method
  ```

- Refactoring Accordion Component

  - In JobFilterSidebar component, add the accordion component then use the JobFilterSidebarCheckboxGroup as the slot

  ```html
  <template>
    <accordion header="Degrees">
      <job-filter-sidebar-checkbox-group
        :unique-values="uniqueDegrees"
        :mutation="ADD_SELECTED_DEGREES"
        data-test="filter-degrees"
      />
    </accordion>
  </template>

  <script>
    import Accordion from "@/components/Shared/Accordion.vue";

    export default defineComponent({
      components: {
        Accordion,
      },
    });
  </script>
  ```

  - In JobFilterSidebarCheckboxGroup test, refactor the test suite by removing the config data for header props and the global stub for fontAwesome
  - delete clickable.trigger("click") as this one only use in accordion

  ```ts
  const createConfig = (props = {}) => ({
    // stubs: {
    //   FontAwesomeIcon: true,
    // },
    props: {
      // header: "Some Header",
      uniqueValues: new Set(["Value A", "Value B"]),
      mutation: "SOME_MUTATION",
      ...props,
    },
  });

  it(() => {
    // const clickableArea = wrapper.find("[data-test='clickable-area']");
    // await clickableArea.trigger("click");
  });
  ```

  - NOTE: using shallowMount() in test suite, child component is being stub out, therefore if the child component is being nested with another child component it is not being rendered. e.g the accordion component being rendered in the JobFilterSidebar are nested with another child component of JobFilterSidebarCheckboxGroup, meaning the test library is stubbing out the accordion component, its not using the real implementation which means were never actually getting to provide the slotted content for accordion, resulting to failure in JobFilterSidebar test

- Breaking JobFiltersSidebar Into Smaller Components

  - turn into small component the job filter for degrees, job types and organiztion. Then rendered it in the JobFilterSidebar component

  ```html
  <!-- JobFilterSidebarDegrees Component (same component for job types and organization)-->
  <template>
    <job-filter-sidebar-checkbox-group
      :unique-values="uniqueDegrees"
      :mutation="ADD_SELECTED_DEGREES"
      data-test="filter-degrees"
    />
  </template>

  <script lang="ts">
    import { defineComponent } from "vue";
    import { useUniqueDegrees } from "@/store/composables";
    import { ADD_SELECTED_DEGREES } from "@/store/constants";

    import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

    export default defineComponent({
      name: "JobFilterSidebarDegrees",
      components: { JobFilterSidebarCheckboxGroup },
      setup() {
        const uniqueDegrees = useUniqueDegrees();

        return {
          uniqueDegrees,
          ADD_SELECTED_DEGREES,
        };
      },
    });
  </script>
  ```

- Breaking up Former JobFiltersSidebar Component Tests

  ```ts
  // JobFilterSidebar test --due to breaking the component into smaller component for the job filter criteria, test become much more simple

  import { shallowMount } from "@vue/test-utils";
  import JobFilterSidebar from "@/components/JobResults/JobFilterSideBar/JobFilterSidebar.vue";

  jest.mock("vuex"); //simply mocking our vuex including useStore with a jest mock function by default and return undefined but tortally fine because the only use case of useStore is to call the commit method for clearUseJobFilterSelections method

  describe("JobFilterSidebar", () => {
    it("sets up panel for user to filter jobs by one or more criteria", () => {
      const wrapper = shallowMount(JobFilterSidebar);
      expect(wrapper.exists()).toBe(true);
    });
  });

  // JobFilterSidebarDegrees --test for each smaller component for job filter criteria

  import { shallowMount } from "@vue/test-utils";
  import JobFilterSidebarDegrees from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarDegrees.vue";

  import { useUniqueDegrees } from "@/store/composables";
  jest.mock("@/store/composables");
  const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

  describe("JobFilterSidebarDegrees", () => {
    it("allow user to filter jobs by degrees", () => {
      useUniqueDegreesMock.mockReturnValue(["Master's", "Bachelor's"]);

      const wrapper = shallowMount(JobFilterSidebarDegrees);
      const degreesFilter = wrapper.findComponent({
        name: "JobFilterSidebarCheckboxGroup",
      }); // since we are stubbing out the child component of job-filter-sidebar-checkbox-group, we can still find the component, instead of the data-test attribute to destruture the props

      // @ts-ignore
      const { uniqueValues, mutation } = degreesFilter.props(); // props() method --return the complete props object from the component

      expect(uniqueValues).toEqual(["Master's", "Bachelor's"]);
      expect(mutation).toBe("ADD_SELECTED_DEGREES");
    });
  });
  ```

- Creating JobFilterSidebarPrompt Component
  - create another small comopnent for clear filter features, then renders at the JobFilterSidebar component

```html
<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <action-button
        text="Clear Filters"
        type="secondary"
        @click="clearUserJobFilterSelections"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useStore } from "vuex";
  import { key } from "@/store";

  import ActionButton from "@/components/Shared/ActionButton.vue";

  import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

  export default defineComponent({
    name: "JobFilterSidebarPrompt",
    components: {
      ActionButton,
    },
    setup() {
      const store = useStore(key);

      const clearUserJobFilterSelections = () => {
        store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
      };

      return {
        clearUserJobFilterSelections,
      };
    },
  });
</script>
```

- Adding Tests for JobFiltersSidebarPrompt Component

  ```ts
  // JobFilterSidebarPrompt test
  import { mount } from "@vue/test-utils";

  import { useStore } from "vuex";
  jest.mock("vuex");
  const useStoreMock = useStore as jest.Mock;

  import JobFilterSidebarPrompt from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarPrompt.vue";

  describe("JobFilterSidebarPrompt", () => {
    describe("when user clicks clear filter button", () => {
      it("sends message to clear all of users job search filters", async () => {
        const commit = jest.fn();
        useStoreMock.mockReturnValue({ commit });
        const wrapper = mount(JobFilterSidebarPrompt);
        const button = wrapper.find("[data-test='clear-user-job-filters']");
        await button.trigger("click");
        expect(commit).toHaveBeenLastCalledWith(
          "CLEAR_USER_JOB_FILTER_SELECTIONS"
        );
      });
    });
  });
  ```

## Section 36: Adding Skills

- User Story
  - ![](./images/sec36UserStory.png)
- Create Component to Track Skills and Qualifications

  ```html
  <template>
    <div class="mt-5">
      <input
        class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
        placeholder="Computer programming, Financial degree, Project Management"
      />
    </div>
  </template>

  <script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
      name: "JobFilterSidebarSkills",
    });
  </script>

  // NOTE: then render to the JobFilterSidebar Component
  ```

- Add New Search Term to Vuex State

  ```ts
  // state test --add it function for skills search features
  it("stores users search term for skills and qualifications", () => {
    const startingState = state();
    expect(startingState.skillsSearch).toEqual("");
  });

  // types.ts store --add GlobalState for skillsSearch
  export interface GlobalState {
    isLoggedIn: boolean;
    jobs: Job[];
    degrees: Degree[];
    skillsSearch: string;
    selectedJobTypes: string[];
    selectedOrganizations: string[];
    selectedDegrees: string[];
  }

  // state.ts --add skillsSearch property state
  const state = (): GlobalState => {
    return {
      isLoggedIn: false,
      jobs: [],
      degrees: [],
      skillsSearch: "",
      selectedJobTypes: [],
      selectedOrganizations: [],
      selectedDegrees: [],
    };
  };
  ```

- Add Mutation to Update Skills Search Term

  ```ts
  // mutations test --add describe function for ADD_INPUT_SKILLS mutation
  describe("ADD_INPUT_SKILLS", () => {
    it("filter job by user input of skills search", () => {
      const startingState = createState({
        skillsSearch: "",
      });
      mutations.ADD_INPUT_SKILLS(startingState, "Computer Engineer");
      expect(startingState.skillsSearch).toEqual("Computer Engineer");
    });
  });

  // constant.ts --add constant for ADD_INPUT_SKILLS
  export const ADD_INPUT_SKILLS = "ADD_INPUT_SKILLS";

  // mutations.ts --add mutation for ADD_INPUT_SKILLS
  [ADD_INPUT_SKILLS](state: GlobalState, skills: string) {
    state.skillsSearch = skills;
  },
  ```

- Filtering the Jobs by skillsSearch

  ```ts
  // getters test --add describe function for INCLUDE_JOB_BY_SKILLS
  describe("INCLUDE_JOB_BY_SKILLS", () => {
    const state = createState({ skillsSearch: "Vue" });
    const job = createJob({ title: "Vue Developer" });
    const includeSkills = getters.INCLUDE_JOB_BY_SKILLS(state)(job);
    expect(includeSkills).toBe(true);
  });

  // constant.ts
  export const INCLUDE_JOB_BY_SKILLS = "INCLUDE_JOB_BY_SKILLS";

  // getters.ts
  [INCLUDE_JOB_BY_SKILLS]: (state: GlobalState) => (job: Job) => {
    return job.title.includes(state.skillsSearch);
  },
  // then filter this getter method in FILTERED_JOBS
  ```

- Two More Tests for INCLUDE_JOB_BY_SKILL

  - NOTE:
    - JS and TS cares about character casing
    - includes() method will not find a match if there is a mismatch in casing

  ```ts
  describe("INCLUDE_JOB_BY_SKILLS", () => {
    it("handles inconsistent character casing", () => {
      const state = createState({ skillsSearch: "vUe" });
      const job = createJob({ title: "Vue Developer" });
      const includeSkills = getters.INCLUDE_JOB_BY_SKILLS(state)(job);
      expect(includeSkills).toBe(true);
    });

    describe("when the user has not entered anu skill", () => {
      it("includes job", () => {
        const state = createState({ skillsSearch: "" });
        const job = createJob({ title: "Vue Developer" });
        const includeSkills = getters.INCLUDE_JOB_BY_SKILLS(state)(job);
        expect(includeSkills).toBe(true);
      });
    });
  });

  // SKILLS
  [INCLUDE_JOB_BY_SKILLS]: (state: GlobalState) => (job: Job) => {
    if (state.skillsSearch === "") return true;

    return job.title.toLowerCase().includes(state.skillsSearch.toLowerCase());
  }, // getters that return a funtion with a parameter
  ```

- Wiring up Search State in Vuex Store

  - NOTE:
    - is there a better way of communicating(two way binding) to the store when the component changes e.g (input checkbox)? the answer is yes!
      - there is an alternative syntax that can utilize with the computed() function, and it is passing an object --`computed({})`
        - the object must have two methods `computed({get(){}, set(){}})` --directly connected the computed data in a local component to the vuex store state
          - **get method**
            - means reading
            - get access to a specific property on our store
            - if store state updates, get method will rerun to get the new value
            - create a connection from vuex store to v-model
          - **set method**
            - means writing
            - create connection from local data to vuex store state by commiting mutatin to override store state
            - `set(value)` --value is the 1st parameter that represent whatever the user has typed

  ```html
  // JobFilterSidebarSkills
  <template>
    <div class="mt-5">
      <input v-model="skillsSearchInput" />
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
  ```

  - ![](./images/get&setMethod.png)

- The Lazy Input Modifier
  - input modifier (v-model.lazy)
    - allow us to modify how an input works
    - something we actually add to the v-model syntax that customizes or modifies how the input works
    - de-bouncing --means is basically delaying an operation up until a right moment or going to delay doing any of reactive updating until the typing is done
  ```html
  // JobFilterSidebarSkills
  <template>
    <div class="mt-5">
      <input v-model.lazy="skillsSearchInput" />
    </div>
  </template>
  ```
- The trim Input Modifier
  - trim input modifier
    - same logic in JS string method for trim, it removes the whitespace from both the beginning and end of a string
  ```html
  // JobFilterSidebarSkills
  <template>
    <div class="mt-5">
      <input v-model.lazy.trim="skillsSearchInput" />
    </div>
  </template>
  ```
- Adding Test for Reading to Store from Skills Search Component

  ```ts
  // JobFilterSidebarSkills
  import { shallowMount } from "@vue/test-utils";

  import { useStore } from "vuex";
  jest.mock("vuex");
  const useStoreMock = useStore as jest.Mock;

  import JobFilterSidebarSkills from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarSkills.vue";

  describe("JobFilterSidebarSkills", () => {
    it("populates search input from store", () => {
      useStoreMock.mockReturnValue({
        state: {
          skillsSearch: "Programmer",
        },
        commit: jest.fn(),
      });
      const wrapper = shallowMount(JobFilterSidebarSkills);
      const skillsSearchInput = wrapper.find(
        "[data-test='skills-search-input']"
      );
      const inputElement = skillsSearchInput.element as HTMLInputElement; // represent DOM wrapper for input element from vue test utils
      expect(inputElement.value).toBe("Programmer"); // value --represent the user input type
    });
  });
  ```

- Adding Test for Writing to Store from Skills Search Component

  ```ts
  it("tells store that the user has entered skills search ", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        skillsSearch: "",
      },
      commit,
    });

    const wrapper = shallowMount(JobFilterSidebarSkills);
    const skillsSearchInput = wrapper.find("[data-test='skills-search-input']");
    await skillsSearchInput.setValue("Vue Developer"); // setValue() method is use to populate input element with a value --it is asynchronous needed to await
    expect(commit).toHaveBeenCalledWith("ADD_INPUT_SKILLS", "Vue Developer");
  });
  ```

- Adding Test for Trimming Input

  ```ts
  it("removes whitespace from user input", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        skillsSearch: "",
      },
      commit,
    });

    const wrapper = shallowMount(JobFilterSidebarSkills);
    const skillsSearchInput = wrapper.find("[data-test='skills-search-input']");
    await skillsSearchInput.setValue("   Vue Developer   ");
    expect(commit).toHaveBeenCalledWith("ADD_INPUT_SKILLS", "Vue Developer");
  });
  ```

- Updating the FILTERED_JOBS getters

  - add the INCLUDE_JOB_BY_SKILLS getters in the FILTERED_JOBS getters

  ```ts
  // getters.ts
  interface IncludeJobGetters {
    INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
    INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
    INCLUDE_JOB_BY_DEGREE: (job: Job) => boolean;
    INCLUDE_JOB_BY_SKILLS: (job: Job) => boolean;
  }

  const getters = {
    // SKILLS
    [INCLUDE_JOB_BY_SKILLS]: (state: GlobalState) => (job: Job) => {
      if (state.skillsSearch === "") return true;

      return job.title.toLowerCase().includes(state.skillsSearch.toLowerCase());
    }, // getters that return a funtion with parameter

    // JOBS
    [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
      return state.jobs
        .filter((job) => getters.INCLUDE_JOB_BY_SKILLS(job))
        .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
        .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
        .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job));
    },
  };

  // getters test
  describe("FILTERED_JOBS", () => {
    it("filter jobs by organization, job type ,degree and skills", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_SKILLS = jest.fn().mockReturnValue(true);

      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
        INCLUDE_JOB_BY_SKILLS,
      };

      const job = createJob({ id: 1, title: "Best Job Ever" });

      const state = createState({
        jobs: [job],
      });

      const result = getters.FILTERED_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_SKILLS).toHaveBeenCalledWith(job);
    });
  });
  ```

- Clearing the Search Input when Clearing Filters

  ```ts
  // mutations.ts --override the skillsSearch state into empty string
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearch = "";
  },

  // mutations test
  describe("CLEAR_USER_JOB_FILTER_SELECTIONS", () => {
    it("removes all job filters", () => {
      const startingState = createState({
        selectedOrganizations: ["Google"],
        selectedJobTypes: ["Full-time"],
        selectedDegrees: ["Master's"],
        skillsSearch: "Vue Developer",
      });
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(startingState);
      expect(startingState.selectedOrganizations).toEqual([]);
      expect(startingState.selectedJobTypes).toEqual([]);
      expect(startingState.selectedDegrees).toEqual([]);
      expect(startingState.skillsSearch).toEqual("");
    });
  });

  ```

- Reading Search Term from Query Params

  ```ts
  // JobFilterSidebar.vue
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";
  import { key } from "@/store";

  import { ADD_INPUT_SKILLS } from "@/store/constants";

  setup() {
    const parseSkillsSearch = () => {
      const route = useRoute();
      const role = route.query.role || ""; //check if there is are any query params present at the JobResults component

      const store = useStore(key);
      store.commit(ADD_INPUT_SKILLS, role);
    };

    onMounted(parseSkillsSearch);

  },
  ```

- Fixing Failing Tests for JobFiltersSidebar Component

  ```ts
  // JobFilterSidebar test --add it function for query param and ADD_INPUT_SKILLS mutations
  it("reads query params to filter initial job skills", () => {
    useRouteMock.mockReturnValue({
      query: {
        role: "Vue Developer",
      },
    });

    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      commit,
    });
    shallowMount(JobFilterSidebar);
    expect(commit).toHaveBeenCalledWith("ADD_INPUT_SKILLS", "Vue Developer");
  });
  ```

- REVIEW
  - ![](./images/sec36Rev.png)
  - ![](./images/sec36Rev1.png)
