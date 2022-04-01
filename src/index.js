// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getToken, onMessage, getMessaging } from "firebase/messaging";
import {onBackgroundMessage} from "firebase/messaging/sw";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBw_fTudu7HBrzHhclDDj01B8qkRnAjXbo",
    authDomain: "dota-a9d84.firebaseapp.com",
    projectId: "dota-a9d84",
    storageBucket: "dota-a9d84.appspot.com",
    messagingSenderId: "410389933796",
    appId: "1:410389933796:web:690c386da072a655dcc6f1",
    measurementId: "G-8RPX3HQ57P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const messaging = getMessaging(app);

const YOUR_PUBLIC_VAPID_KEY_HERE = 'BPEPPwE_XzKgxs6WFTb--1zvpxSe9BX7db7A1KJO49pBjYykYMpuFRVG-ZYsYT2TNUzw-b5DZMSCCUqRAu8wEc8'

getToken(messaging, { vapidKey: YOUR_PUBLIC_VAPID_KEY_HERE }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log('CurrentToken', currentToken)

        localStorage.setItem('FCM_TOKEN', currentToken)
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});

onMessage(messaging, (payload) => {
    console.log('Message received. fuck', payload);

});

export {
    app,
    messaging
}
