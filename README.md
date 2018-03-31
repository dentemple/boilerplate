# Den's React Boilerplate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> A React/Redux boilerplate utilizing Create React App

This project consists of the packages and boilerplate files I've found myself adding to nearly every `Create React App` project I've created.

Feel free to fork, clone, or copy this repo if you're at all curious about how these technologies can fit together!

## Features

### Configured packages

The following packages are in addition to what's already provided by Create React App.

* **Base**: `react-scripts` ([See the _CRA User Guide_ for more information on what's included.](<(https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)>))
* **Dev**: `prettier`, `lint-staged`, `redux-devtools-extension`
* **Design**: `storybook`, `react-icons`
* **CSS**: `styled-components`
* **Types**: `prop-types`
* **State**: `redux`, `redux-thunk`
* **Routing**: `react-router-dom (v4)`, `react-router-redux`, `history`
* **Testing**: `jest`, `enzyme`
* **Polyfills**: `whatwg-fetch`, `babel-polyfill`

### Additional features

* [Code Splitting](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
* [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
* [Auto-format on commit](https://prettier.io/docs/en/precommit.html)
* `.env` configured to allow absolute file paths from `src` instead of relative file paths
* The `Redux` store keeping track of the current route

## Folder Hierarchy

### Components: **Atomic Web Design** (AWD)

The UI is broken up into small, discrete, and composable components.

The `common` and `pages` folders are equivalent to AWD's `atoms` and `pages` respectively. It's recommended to continue using the AWD pattern as the UI gets built out.

[More about Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)

### Redux Tree: **Rails-style**

Redux and its subsequent libraries are placed separately in its own `state` directory. Separate sub-directories are given to `actions`, `reducers`, `store`, and `types`.

Redux exists to sit outside of React's regular component tree, injecting props and receiving dispatches as needed. They each represent separate concerns that can be kept apart.

(Plus, it makes it easier for devs not familiar with Redux to contribute to your project!)

---

## Code of Conduct

Link to [Code of Conduct](docs/code-of-conduct.md)

## License

[MIT License](docs/LICENSE.txt)
