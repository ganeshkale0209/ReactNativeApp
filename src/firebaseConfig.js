import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCYuWoOgwJOa0Gm1LLohYMNgXrnmxEuyTA",
    authDomain: "reactnativeapp-55b9a.firebaseapp.com",
    projectId: "reactnativeapp-55b9a",
    storageBucket: "reactnativeapp-55b9a.firebasestorage.app",
    messagingSenderId: "240722560697",
    appId: "1:240722560697:web:8b6d2e491aa6f282b0fd68",
    measurementId: "G-EDPW5Y7QQZ"
  };

  const app = initializeApp(firebaseConfig);

  export default app;