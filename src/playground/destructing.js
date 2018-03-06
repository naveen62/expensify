// object destructing
// // let person = {
// //     name: 'naveen',
// //     age: 21,
// //     location: {
// //         city: 'Bangalore',
// //         temp: 100
// //     }
// // }
// // const {name: firstName = 'Anomyous', age} = person;
// // const {city, temp: tempture} = person.location;

// // console.log(`${firstName} is ${age} years old`)
// // console.log(`Its ${tempture} in ${city}`)
// const book = {
//     name: 'Ego is enemy',
//     author: 'Ryan',
//     publisher: {
//         // name: 'Penguin'
//     }
// }
// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

// Array destructing
// const address = ['1299 S Juniper Street'];

// const [, , state="New York"] = address;

// console.log(`you are in  ${state}`);

const item = ['Coffee iced', '$2.00', '$2.50', '$2.75'];

const [coffee, ,medium] = item;

console.log(`A medium ${coffee} costs ${medium}`)