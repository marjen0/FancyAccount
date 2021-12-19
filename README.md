# Overview

## Tools used

- [husky](https://typicode.github.io/husky/#/) for pre-commit hooks
  - run linter
  - run prettier
- [commitlint](https://github.com/conventional-changelog/commitlint) to lint commit messages and enforce conventional commits
- [eslint](https://eslint.org/) for static code analysis
- [prettier](https://prettier.io/) for easy code formatting
- [typesript](https://www.typescriptlang.org/)
- [yarn](https://yarnpkg.com/)

## Libraries used

- [react-navigation](https://reactnavigation.org/) for native-like navigation between screen
- [async-storage](https://github.com/react-native-async-storage/async-storage#readme) to persist user authentication data
- [axios](https://github.com/axios/axios) to fetch data from API
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) to display splash screen image on Android (iOS uses .storyboard file)
- [redux](https://redux.js.org/) to manage app state
- [redux-thunk](https://github.com/reduxjs/redux-thunk) to enable async code in redux actions

## Extra Features

- dark and light themes
- splash screens
- app icons
- path aliases for cleaner imports

## Todo

- [ ] improve redux actions types
- [x] add sign in form validation
- [ ] unit tests
- [ ] display activity indicators while data is being fetched

# Demo

https://youtu.be/VNQieLrWpOM

# Runing the App

1.  Clone project to your machine
    ```bash
    git clone git@github.com:marjen0/FancyAccount.git
    ```
2.  Install npm dependencies
    ```bash
    yarn
    ```
3.  Run the app on simulator

    1.  start Metro bundler

        ```bash
        yarn start
        ```

    2.  then run on Android simulator

        ```bash
          yarn android
        ```

        or iOS simulator

        ```bash
        yarn ios
        ```
