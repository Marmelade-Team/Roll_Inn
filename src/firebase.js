import * as firebase from "firebase";
import { FirebaseConfig } from "./config/keys";
require("firebase/firestore");

firebase.initializeApp(FirebaseConfig);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

export const db = db