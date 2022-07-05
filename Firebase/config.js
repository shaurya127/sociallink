// import {firebase} from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';



// const firebaseConfig = {
//     apiKey: "AIzaSyBW-ELtx-DxTMQmDsY2UNtq8wwFHN117DE",
//     authDomain: "mindful-audio-337108.firebaseapp.com",
//     projectId: "mindful-audio-337108",
//     storageBucket: "mindful-audio-337108.appspot.com",
//     messagingSenderId: "390828417450",
//     appId: "1:390828417450:web:141c61e9866b44ae8b8bd3",
//     measurementId: "G-D1TRH3Q3VW"
//   };
    

//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

//   export {firebase};






  import { initializeApp } from 'firebase/app';
  import { getDatabase } from 'firebase/database';
  
  const firebaseConfig = {
    apiKey: "AIzaSyBW-ELtx-DxTMQmDsY2UNtq8wwFHN117DE",
    authDomain: "mindful-audio-337108.firebaseapp.com",
    projectId: "mindful-audio-337108",
    storageBucket: "mindful-audio-337108.appspot.com",
    messagingSenderId: "390828417450",
    appId: "1:390828417450:web:141c61e9866b44ae8b8bd3",
    measurementId: "G-D1TRH3Q3VW"
    // Add your configuration
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  export { db };

