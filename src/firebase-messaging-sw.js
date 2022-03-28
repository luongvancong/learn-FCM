import { onBackgroundMessage, getMessaging } from "firebase/messaging/sw";
import {initializeApp} from "firebase/app";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBw_fTudu7HBrzHhclDDj01B8qkRnAjXbo",
    authDomain: "dota-a9d84.firebaseapp.com",
    projectId: "dota-a9d84",
    storageBucket: "dota-a9d84.appspot.com",
    messagingSenderId: "410389933796",
    appId: "1:410389933796:web:690c386da072a655dcc6f1",
    measurementId: "G-8RPX3HQ57P"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://www.babycentre.co.uk/ims/2013/10/159450328_wide.jpg'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions)
        .then(rs => {
            console.log('rs', rs)
        })
});
