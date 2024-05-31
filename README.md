# Welcome to the Demo React Native project!

This project is aimed at building a demo mobile application

## Getting Started

To get started with the project, follow these steps:

- Clone the repository from Github using the command `git clone https://github.com/abeltran0912/react-native-demo.git`.
- Set up the development environment by following this [link](https://reactnative.dev/docs/environment-setup)
- Navigate to the project root directory and run `yarn` (make sure you have installed `yarn`) to install all the dependencies. For iOS navigate to sub directory /ios and run `pod install` to install all the iOS dependencies.
- Run the app on a simulator or physical device using the command `yarn react-native run-ios` for iOS or `yarn react-native run-android` for Android.

## Directory Structure

The project follows a standard React Native directory structure. Here's a brief overview of the main directories:

- `test`: Contains all of the test files.
- `android`: Contains the Android specific configuration files.
- `ios`: Contains the iOS specific configuration files.
- `assets`: Asset folder to store all images, vectors, etc.
- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `configs`: Folder that contains some configs like `axios`
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles.
      - `Screen.tsx`
      - `style.ts`
  - `store`: Folder to put all redux middlewares and the store as well as all of the reducers and actions based on feature like `users`, `login`, etc..
  - `styles`: Folder to store all the styling concerns related to the application theme.
  - `types`: Folder to store all of the generic types
- `App.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

### Run

Frequently used commands are short-listed into `package.json` for easily using `yarn`. However, the original commands are listed here:

```bash
yarn android 
``` 
to run app to an Android device
```bash
yarn ios 
``` 
to run app to an IOS device