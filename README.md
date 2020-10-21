# ESL Cards

This web app uses React to display cards from the game The Elder Scroll: Legends using [The Elder Scrolls: Legends API](https://elderscrollslegends.io/). The cards displayed can be filtered by searching by card name. See below for [scope decisions](#scope-decisions).

## To run the project:

1. Use `git clone` to clone the project.
2. Install `node` & `npm` (if not already installed).
3. `cd` into the `esl-cards` directory.
4. Run `npm install` to install dependencies.
5. Run `npm start` to start the app in development mode.
   - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   - The page will reload if you make edits.
   - You will also see any lint errors in the console.
6. In another console window, run `npm test` to launch and run the test suite in interactive watch mode.

## To create a production build:

Run `npm run build` to build the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. The app is ready to be deployed!

## Scope decisions

- Since the project requirements state that the app should only return 20 card results per call, and the API itself limits calls to 100 card results, meaning we'd need at best 12 additional calls to pull all card results to search through (1212 per the API data), I decided to limit the search feature to filtering only the cards/data we've already pulled from the API.<br /><br />As currently designed, a user of this web app may likely assume that the search function will search through _all_ possible cards in the game, so we'd want to address that functionality gap either with some messaging or by adjusting the project requirements.

- I did not include as much test coverage for the `App` component as I would have liked to. I ran into some issues trying to mock the API call made in that component and was not able to successfully debug the problems due to time constraints.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
