const myLoader = () => {

    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {

            resolve(0.3);
        }

        else {
            reject(0.8);
        }

    })



}

const getPromise = myLoader();
console.log(getPromise);




const myLoader2 = () => {

    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= .5) {

            resolve(success);
        }

        else {
            reject(success);
        }

    })



}
// const getPromise2 = myLoader2();
// console.log(getPromise2);

myLoader2()
.then (data => console.log("resolved data", data))
.catch (err => console.log("rejected with value", err));
