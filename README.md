# Welcome to TRADE APP

Hello, I'm Ryan Zierman, the creator behind TRADE APP (Trade Record Adaptation Data Engine), a cornerstone project in my Front-End development portfolio. This initiative was born out of a personal need and a gap in the market. While MetaTrader is a widely used platform for trading, I found it perplexing that there was only one software available for importing MetaTrader history statements. That software was not only expensive but also limited in functionality and riddled with bugs. This realization sparked the development of TRADE APP, aiming to offer a robust, user-friendly alternative for traders and enthusiasts alike.

## Project Overview

TRADE APP kicks off its functionality by tackling one of the most challenging aspects of trading data management: parsing and uploading MetaTrader statements into a database. Given that MetaTrader terminals export statements in HTML rather than more manageable file formats, the app employs a sophisticated parser to identify and process different text elements within these statements.

Once parsed, the data is transformed into JSON format and sent to a server. From there, it's seamlessly updated in the Redux state, ready to be displayed in a user-friendly table with the help of the ‘json to table’ library. The app doesn't stop at functionality; it also boasts a carefully designed UI. With a layout built on flexbox and a dark mode option that leverages CSS variables, the interface ensures an engaging user experience. While I consider my UI design to be basic, it's built for easy customization and color scheme changes.

## Data Management and Future Directions

In the data manager section, users have the capability to upload files and view their data in a structured manner. My focus has predominantly been on the front-end development of TRADE APP, with an eye towards enhancing my back-end skills to further expand the app's capabilities. Although some features are currently under development, I'm actively exploring new components for trading views and charting methods to enrich the app's functionality.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Contributions

I'm always open to feedback. If you have any ideas for improving TRADE APP or have encountered any issues, please don't hesitate to reach out wiht the understanding that this project is currently "on the back burner" and I'm not actively working on it.

# License

All Rights Reserved. The TRADE APP and its source code are the exclusive property of theJOATZ and may not be used, copied, modified, or distributed without explicit permission from the owner. Unauthorized use, duplication, or distribution of this software and its documentation is strictly prohibited.
