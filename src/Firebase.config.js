import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBhYT6HJ3l1j-KWpzcsfhCqVMa4UZOKdtU",
    authDomain: "todolist-96152.firebaseapp.com",
    projectId: "todolist-96152",
    storageBucket: "todolist-96152.appspot.com",
    messagingSenderId: "381768087431",
    appId: "1:381768087431:web:a2f924e2c914ca6af5c522",
    measurementId: "G-3HYBRX7VNJ"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);