import * as firebase from "firebase";
import { FirebaseConfig } from "./config/keys";
require("firebase/firestore");

firebase.initializeApp(FirebaseConfig);

// Initialize Cloud Firestore through Firebase
var database = firebase.firestore();

// Disable deprecated features
database.settings({
    timestampsInSnapshots: true
});

export const db = database