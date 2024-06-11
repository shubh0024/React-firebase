import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyD91wUZFLO9Desao7sFU86Yx4Ra_6vgFro",
    authDomain: "yotube-app-78bb7.firebaseapp.com",
    projectId: "yotube-app-78bb7",
    storageBucket: "yotube-app-78bb7.appspot.com",
    messagingSenderId: "929612899861",
    appId: "1:929612899861:web:e1ace28e1e0bc5aab0101c",
    measurementId: "G-7B8HS00MC9",
    datbaseUrL:'https://console.firebase.google.com/project/yotube-app-78bb7/database/yotube-app-78bb7-default-rtdb/data/~2F'

  };

  export const app= initializeApp(firebaseConfig)