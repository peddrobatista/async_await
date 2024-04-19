async function myDisplayer() {
   let myPromise = new Promise((resolve) => {
    setTimeout(resolve("I love you!!"), 3000)
   });
   console.log(await myPromise);
}

const myDisplayer2 = async () => {
    const resultado = await new Promise((resolve) => {
        setTimeout(resolve("I love you too!!"), 3000)
    });
    console.log(resultado);
}
const myDisplay3 = async () => {
    const resultado = await Promise.resolve("Hello...");
    console.log(resultado);
}
  
myDisplayer();
myDisplayer2();
myDisplay3();