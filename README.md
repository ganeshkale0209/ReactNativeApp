# ReactNativeApp

## Overview
MyApp is a React Native-based mobile application featuring authentication, infinite scrolling post listings, and multi-language support. Users can register and log in using Firebase Authentication, browse posts with images fetched from JSONPlaceholder, and access detailed views with language selection.

## Features
- Firebase Authentication (Login & Registration)
- Infinite scrolling for posts
- Image integration with posts
- Detailed post view with multi-language support
- Smooth and modern UI

## Setup Instructions

### Prerequisites
- Node.js (latest LTS version recommended)
- Expo CLI (`npm install -g expo-cli`)
- Firebase account and project setup
- Android/iOS emulator or physical device

### Installation
1. Clone the repository:
   
   git clone https://github.com/ganeshkale0209/ReactNativeApp.git
   cd ReactNativeApp
   
2. Install dependencies:
   
   npm install

3. Install Firebase dependencies:

   npm install @react-native-firebase/app @react-native-firebase/auth
   
4. Install Async Storage for persistent authentication:

   npm install @react-native-async-storage/async-storage
   

## Firebase Configuration
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Email/Password Authentication** under **Authentication**.
3. Download the `google-services.json` file (for Android) or `GoogleService-Info.plist` (for iOS) and place them inside the respective folders:
   - `android/app/google-services.json`
   - `ios/GoogleService-Info.plist`
4. Initialize Firebase in your project:
   
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import AsyncStorage from '@react-native-async-storage/async-storage';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   export { auth };
   ```

## Running the App
1. Start the Expo development server:
   
   npm start
  
2. Press `a` to run on Android or `i` to run on iOS.
3. Scan the QR code using Expo Go on your mobile device.

## App Structure
```
├── src
│   ├── screens
│   │   ├── Onboarding.js   # Welcome screen with login/register options
│   │   ├── LoginScreen.js  # Firebase login
│   │   ├── RegisterScreen.js # Firebase registration
│   │   ├── ListingPage.js  # Infinite scrolling posts
│   │   ├── DetailsPage.js  # Post details with language settings
│   ├── firebaseConfig.js # Firebase setup
│  
├── App.js               # Root of the application
├── package.json         # Dependencies
├── README.md            # Project documentation
```

## Standout Features
- **Infinite Scrolling:** Efficient fetching of posts as users scroll.
- **Firebase Authentication:** Secure and persistent login.
- **Multi-language Support:** Users can change the app language dynamically.
- **Modern UI Design:** Clean and user-friendly layout.

## Troubleshooting
- If Firebase Auth is not persisting sessions, ensure AsyncStorage is correctly installed.
- If images are not loading, check the API response format.




