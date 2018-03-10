import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STOREAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
firebase.initializeApp(config);

const db = firebase.database();

export{firebase, db as default}
// db.ref('expenses').once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })
// db.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// db.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// db.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//         expenses.push({
//             id: expense.key,
//             ...expense.val()
//         })
//     })
//     console.log(expenses)
// })
// db.ref('notes').push({
//     title: 'Bring vegs',
//     body: 'this is body'
// })
// db.ref('notes').push({
//     title: 'Watch brad videos',
//     body: 'this is body'
// })
// db.ref('notes/-L78XY1MGj5xEpAJJIWR').remove()
// console.log('hi')
// db.ref('expenses').push({
//     description: 'rent',
//     amount: 20,
//     note: '',
//     createdAt: 212111
// })

// db.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is ${data.job.title} at ${data.job.company}`)
// })
// setTimeout(() => {
//     db.ref('name').set('Mike')
// }, 5000);
// db.ref('location/city').once('value')
//   .then((snapshot) => {
//     const data = snapshot.val();
//     console.log(data)
//   }).catch((err) => {
//     console.log(err)
//   })


// firebase.database().ref().set({
//     name: 'naveen',
//     age: 19,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Bangalore',
//         country: 'india' 
//     }
// }).then(() => {
//     console.log('date is saved');
// }).catch((err) => {
//     console.log('error', err);
// })
// db.ref().update({
//     attributes: {
//         height: '5.5inchs',
//         weight: '70kg'
//     }
// })
// db.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Hyderabad'
// })
// db.ref('isSingle').remove().then(() => {
    
// }).catch((err) => {

// })



// db.ref('isSingle').set(null)
// db.ref().remove().then(() => {
//     console.log('isSingle removed');
// }).catch((err) => {
//     console.log(err)
// })
// console.log('print print')