let obj = {
    name: 'naveen',
    age: 19,
    hobby: 'Coding',
    sport: 'football'
}
let {name:Name, ...rest} = obj
console.log(Name);
console.log(rest);