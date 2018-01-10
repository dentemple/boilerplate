# dentemple/boilerplate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> A React/Redux boilerplate based on Create React App

Feel free to fork, clone, or copy this repo!

Even though this boilerplate is primarily for myself, it may provide useful insight into how certain technologies fit together.

## Features

### Configured packages

The following packages are in addition to what's already provided by Create React App.

* **Base**: `react-scripts` ([See the _CRA User Guide_ for more information on what's included.](<(https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)>))
* **Dev**: `prettier`, `lint-staged`, `redux-devtools-extension`
* **Types**: `prop-types`
* **Styling**: `styled-components`, `react-icons`
* **State**: `redux`, `redux-thunk`
* **Routing**: `react-router-dom (v4)`, `react-router-redux`, `history`
* **Testing**: `enzyme`

### Additional features

* [Code Splitting](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
* [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
* [Auto-format on commit](https://prettier.io/docs/en/precommit.html)

## Folder Hierarchy

### Components: **Atomic Design**

Components follow the [Atomic Design](http://atomicdesign.bradfrost.com/) philosophy; however, React-friendly terms are used in place of the standard Chemistry metaphor.

* Atoms => `common/`
* Molecules => `composition/`
* Organisms => `features/`
* Pages remain as `pages/`

### Redux Tree: **Rails-style**

---

## Code of Conduct

Link to [Code of Conduct](docs/code-of-conduct.md)

## License

[MIT License](docs/LICENSE.txt)
