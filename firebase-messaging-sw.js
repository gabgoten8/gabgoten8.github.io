importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDohY99NlL3iTKm_M_ICkW1jFlK-kxBqHU",
  authDomain: "aplicativo-final-6112a.firebaseapp.com",
  databaseURL: "https://aplicativo-final-6112a-default-rtdb.firebaseio.com",
  projectId: "aplicativo-final-6112a",
  storageBucket: "aplicativo-final-6112a.appspot.com",
  messagingSenderId: "426079397799",
  appId: "1:426079397799:web:f59643e2db2c117d6bf882",
  measurementId: "G-245TBT40S2",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});