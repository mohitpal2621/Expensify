// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_API_AUTHDOMAIN,
  projectId: (process.env.NODE_ENV === 'test') ? "expensify-test-9978b" : process.env.FIREBASE_API_PROJECTID,
  storageBucket: process.env.FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_API_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_API_APPID,
  measurementId: process.env.FIREBASE_API_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db  = firebase.getDatabase();


export { db as default, firebase };




// onChildAdded(ref(db, 'expenses'), (data) => {
//     console.log(data.key);
//     console.log("This was added: ", data.val());
// });

// onChildChanged(ref(db, 'expenses'), (data) => {
//     console.log(data.key);
//     console.log("This was changed: ", data.val());
// });

// onChildRemoved(ref(db, 'expenses'), (data) => {
//     console.log(data.key);
//     console.log("This was removed: ", data.val());
// });

// onValue(ref(db, 'expenses'), (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//         console.log("This changed: ", childSnapshot.val());
//     });
// }, {
//     onlyOnce: true
// });

// push(ref(db, 'expenses'), {
//     description: "College Fees",
//     note: "",
//     amount: 139000,
//     createdAt: new Date().getTime()
// });

// onValue(ref(db, 'expenses'), (snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })

//     console.log("expenses: ", expenses);
// }, {
//     onlyOnce: true
// });

// const notes = [{
//     id: '123asd',
//     title: 'First',
//     body: 'Added this note'
// },{
//     id: '3242asd',
//     title: 'Second',
//     body: 'Added this note'
// }]

// set(ref(db), notes).then(() => {
//     console.log(notes);
// })

// set(ref(db), {
//     name: "Mohit",
//     email: "mohitpal2621@gmail.com",
//     age: 23,
//     branch: {
//         name: "CSE",
//         rollNo: "00514807221",
//     },
//     location: {
//         country: "India",
//         state: "Haryana"
//     }
// }).then(() => {
//     console.log("Initial data is saved!");
// }).catch((e) => {
//     console.log("This failed: ", e);
// });

// remove(ref(db, 'isSingle')).then(() => {
//     console.log("Data is removed!");
// }).catch((e) => {
//     console.log("There is some error: ", e);
// });

// update(ref(db), {
//     percentage: "90",
//     'branch/name' : "IT",
//     'location/state': "Delhi"
// }).then(() => {
//     console.log("Update is done");
// });

// const rootListener = onValue(ref(db), (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is pursuing ${data.branch.name} and is ${data.age} years old`);
// }, (error) => {
//     console.error("Error:", error);
// });

// setTimeout(() => {
//     console.log("Waiting for 5 secs");
//     set(ref(db, 'branch/name'), "IT");
// }, 3000);



// get(ref(db)).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log("DATA AVAIL: ", snapshot.val());
//     } else {
//       console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });

  