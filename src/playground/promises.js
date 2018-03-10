const checkAdd = (a) => {
   return new Promise((resolve, reject) => {
        if(a > 5) {
            resolve('a is greater than 5')
        } else {
            reject('a is less than 5')
        }
    })
}
checkAdd(2).then((test) => {
    console.log(test)
}).catch((err) => {
    console.log(err)
})
