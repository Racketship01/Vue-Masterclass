## Bonus: Intro to Vue3

- Vue 3

  - ![](./images/Vue3.png)
  - ![](./images/initVue3.png)

- Vitest
  - ![](./images/Vitest.png)
  - upon creating vue app in CLI terminal, config the configure the vitest to yes.
    - NOTE: the vue testing library is the integration link that actually going to allow us to connect Vitest with our component as the Vue testing library is going to render or mount vue components
      - Vue Test Utils --vue test to mount component outside of the browser. Integrates called jestDOM that renders a virtual DOM that will simulates a browser
      - DOM Testing Library --The DOM Testing Library is a very light-weight solution for testing DOM nodes (whether simulated with JSDOM as provided by default with Jest or in the browser). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page.
- Basic Syntax of Vitest Syntax
  - similarly with jest syntax
  - ![](./images/BasicVitestSyntax.png)
- Setup Vitest Globally
  - ![](./images/SetVitestGlobally.png)
  - ![](./images/SetVitestGlobally1.png)
- Setup Vue Testing Library
  - installing vue testing library, jest-dom and user-event
    - ![](./images/setupVitest.png)
    - ![](./images/setupVitest1.png)
    - ![](./images/setupVitest2.png)
  - instead using vue test utils that renders a component, in vitest we will be using vue testing library that serves the exact purpose of vue test utils. Basically, Vue Testing Library has test utils within it and it then it just adds certain functionality on top of it and strips other functionality from vue test utils that it doesnt like
  - NOTE: cleanup() --clean test after every single test that run --tear down the complete DOM including any rendered components so that when the next test begins we have a clean slate
- The render Function and screen Object
  - ![](./images/render&screen.png)
  - ![](./images/render&screen1.png)
  - ![](./images/render&screen2.png)
  - render() --pass the component that we want vue testing library to render to the virtual DOM
  - screen{} --representation of current HTML mark up --object that were going to use to query the DOM --able to use to look within the HTML markup or element to identify certain pieces --basically a bunch of methods for searching the resulting HTML for specific elements or things that we're looking for.
    - debug() --it will output the current HTML as it stands within the component --as we interact with the component, use screen.debug() to observe how the component changes as we interact
