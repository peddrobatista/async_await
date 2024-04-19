// A palavra-chave async antes de uma função faz com que a função retorne uma promessa:
// async faz uma função retornar uma promessa
// await faz uma função esperar por uma promessa

function myDisplayer(some) {
    console.log(some);
}
async function myFunction() {
    return "Hello World...";
}
// É o mesmo que...
function myFunction2() {
    let result = new Promise((resolve, reject) => {
        resolve("Hello World 2...");
    })
    return result;
}

const myFunction3 = () => {
    return Promise.resolve("I love you!!");
}

async function myDisplayer2() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You too!!");
    });
    console.log(await myPromise);
}

async function myDisplayer3() {
    console.log(await Promise.resolve("Olá gente!!!"));
}

myFunction().then((value) => {
    myDisplayer(value);
})

myFunction2().then((value) => {
    myDisplayer(value);
})

myFunction3().then((value) => {
    myDisplayer(value);
})

myDisplayer2();

myDisplayer3();